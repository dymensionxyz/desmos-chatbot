import {type IAgentRuntime, Service, ServiceType} from "@elizaos/core";
import {WebSocket} from 'ws';
import {SqliteGameDAO} from "../adapters/sqliteDAO";
import {Game, GameDAO, GameResults} from "../types";
import {AIGamblingV1} from "./contracts/AIGamblingV1";
import AIGamblingV1ABI from "./contracts/AIGamblingV1.json" with {type: "json"};
import {ethers} from 'ethers';
import {LogDescription} from 'ethers/lib/utils';
import * as evmtypes from './contracts/AIGamblingV1.ts';
import Database from "better-sqlite3";
import path from "path";

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const contract = new ethers.Contract("0xEAcA423bF35A0C41d80d37Dc89C87C47baceE4FF", AIGamblingV1ABI.abi, provider) as AIGamblingV1;

const contractInterface = new ethers.utils.Interface(AIGamblingV1ABI.abi);

// Declare the DESMOS service type
declare module "@elizaos/core" {
    interface ServiceTypeMap {
        desmos: Service & DesmosService;
    }

    export enum ServiceType {
        DESMOS = "desmos"
    }
}

export class DesmosService extends Service {
    private dbPath: string;
    private initialized = false;
    private gameDAO: GameDAO;
    private wsConnection: WebSocket | null = null;
    private runtime!: IAgentRuntime;

    getInstance(): DesmosService {
        return this;
    }

    static get serviceType(): ServiceType {
        return ServiceType.DESMOS;
    }

    async initialize(runtime: IAgentRuntime): Promise<void> {
        if (this.initialized) {
            return;
        }

        this.runtime = runtime;

        let wsUrl = runtime.getSetting("DESMOS_TM_WS_URL")

        const dbPathSetting = runtime.getSetting("DESMOS_DB_PATH");
        this.dbPath = dbPathSetting || path.resolve("data/desmos.sqlite");

        const db = new Database(this.dbPath);
        this.gameDAO = new SqliteGameDAO(db);
        await this.gameDAO.initialize();

        // Setup WebSocket connection
        console.log('Setting up WebSocket connection to:', wsUrl);
        this.wsConnection = new WebSocket(wsUrl);
        this.setupWebSocketHandlers();

        this.initialized = true;

        // TODO: maybe read all the history from the smart contract and seed the database with it
    }

    async getGameResults(): Promise<GameResults> {
        return this.gameDAO.getGameResults();
    }

    private setupWebSocketHandlers(): void {
        if (!this.wsConnection) return;

        this.wsConnection.on('open', () => {
            console.log('WebSocket connection established');

            // Send a periodic ping every 30 seconds
            setInterval(() => {
                if (this.wsConnection?.readyState === WebSocket.OPEN) {
                    this.wsConnection.send(JSON.stringify({ method: "ping" }));
                }
            }, 30000); // Every 30 seconds

            // Subscribe to new transactions
            this.wsConnection.send(JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method: 'subscribe',
                params: ["tm.event='Tx' AND message.module='evm'"]
            }));
        });

        this.wsConnection.on('message', async (data: string) => {
            try {
                if (!data || data.length === 0) {
                    return;
                }

                const message = JSON.parse(data);
                if (!message.result?.events) return;

                const rawLogs = message.result.events["tx_log.txLog"];

                if (!rawLogs) return;

                const logs = parseEvmLogs(rawLogs);

                if (!logs || logs.length === 0) return;

                for (const log of logs) {
                    await this.handleEventLog(log);
                }
            } catch (error) {
                console.error('Error processing WebSocket message:', error);
            }
        });

        this.wsConnection.on('error', (error) => {
            console.error('WebSocket error:', error);
        });

        this.wsConnection.on('close', () => {
            console.log('WebSocket connection closed');
            setTimeout(() => this.initialize(this.runtime), 5000);
        });
    }

    private async handleEventLog(log: LogDescription) {
        if (log.name === 'BetResolved') {
            const event = log.args as unknown as evmtypes.BetResolvedEvent;
            const user = event[0];  // first value is user address
            const bet = event[1];   // second value is the bet object (array)

            const game: Game = {
                userAddress: user,
                promptId: bet[0].toNumber(),
                amount: Number(parseFloat(ethers.utils.formatUnits(bet[1], 18)).toFixed(4)),
                guessedNumber: bet[3].toNumber(),
                correctNumber: bet[4].toNumber(),
                persuasion: bet[5],
                won: bet[6] ? 1 : 0,
                canceled: bet[7] ? 1 : 0,
            };

            // save game result to database
            const success = await this.gameDAO.addGame(game);
            if (success) {
                console.log('Successfully stored game result:', game);
            } else {
                console.error('Failed to store game result:', game);
            }
        } else if (log.name === 'BetPlaced') {
            console.log('BetPlaced event received');
        } else {
            console.warn('Unknown event:', log);
        }
    }
}

function parseEvmLogs(rawLogs: any[]): LogDescription[] {
    try {
        return rawLogs
            .map((log) => {
                try {
                    // ensure `log` is a JSON object
                    if (typeof log === "string") {
                        log = JSON.parse(log);
                    }

                    if (!log.topics || !log.data || log.topics.length < 2) {
                        return null;
                    }

                    // ensure data is correctly formatted before parsing
                    let decodedData;
                    try {
                        decodedData = Buffer.from(log.data, "base64").toString("hex"); // Convert to Hex
                    } catch (err) {
                        console.warn("Failed to decode Base64 data, using raw:", err);
                        decodedData = log.data;
                    }

                    // ensure the data is in Hex format (ethers.js expects Hex)
                    if (!decodedData.startsWith("0x")) {
                        decodedData = "0x" + decodedData;
                    }

                    log.data = decodedData;

                    // pass correctly formatted data to `ethers.js`
                    const parsedLog = contractInterface.parseLog({
                        topics: log.topics,
                        data: log.data,
                    });

                    return parsedLog;
                } catch (e) {
                    console.error('Error parsing log:', e);
                    return null;
                }
            })
            .filter((log): log is LogDescription => log !== null);
    } catch (error) {
        console.error('Error parsing logs:', error);
        return [];
    }
}
