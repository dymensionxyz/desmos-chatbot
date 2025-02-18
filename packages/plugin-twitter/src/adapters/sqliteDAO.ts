import type {Database} from "better-sqlite3";
import {type Game, GameDAO, type GameResults} from "../types";
import {sqliteTables} from "./sqliteTables";

export class SqliteGameDAO extends GameDAO {
    constructor(db: Database) {
        super();
        this.db = db;
    }

    async initialize(): Promise<void> {
        this.db.exec(sqliteTables);
    }

    async addGame(game: Game): Promise<boolean> {
        const stmt = this.db.prepare(
            "INSERT INTO desmos_games (userAddress, promptId, amount, guessedNumber, correctNumber, persuasion, won, canceled) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        );
        try {
            stmt.run(game.userAddress, game.promptId, game.amount, game.guessedNumber, game.correctNumber, game.persuasion, game.won, game.canceled);
            return true;
        } catch (error) {
            console.error("Error adding game to database", error);
            return false;
        }
    }

/*    async getPagedGames(query: GameQuery, page: number, pageSize: number): Promise<PageQuery<Game[]>> {
        const stmt = this.db.prepare("SELECT * FROM desmos_games WHERE userAddress = ? ORDER BY createdAt DESC LIMIT ? OFFSET ?");
        try {
            return stmt.all(query.userAddress, pageSize, (page - 1) * pageSize);
        } catch (error) {
            console.error("Error getting paged games from database", error);
            throw error;
        }
    }*/

    async getGameResults(): Promise<GameResults> {
        try {
            const db = this.db;

            const gameStatsStmt = db.prepare(`
            SELECT 
                COUNT(1) as gamesPlayed,
                COALESCE(SUM(amount), 0) as totalProfit,
                SUM(CASE WHEN won = 1 THEN 1 ELSE 0 END) as gamesWon,
                SUM(CASE WHEN won = 0 THEN 1 ELSE 0 END) as gamesLost,
                COALESCE(MAX(amount), 0) as highestBet,
                COALESCE(MAX(amount) FILTER (WHERE won = 1), 0) as biggestWin
            FROM desmos_games
        `);

            const mostWinsStmt = db.prepare(`
            SELECT userAddress 
            FROM desmos_games 
            WHERE won = 0 
            GROUP BY userAddress 
            ORDER BY COUNT(1) DESC 
            LIMIT 1
        `);

            const mostLossesStmt = db.prepare(`
            SELECT userAddress 
            FROM desmos_games 
            WHERE won = 1 
            GROUP BY userAddress 
            ORDER BY COUNT(1) DESC 
            LIMIT 1
        `);

            const mostCommonGuessStmt = db.prepare(`
            SELECT guessedNumber 
            FROM desmos_games 
            GROUP BY guessedNumber 
            ORDER BY COUNT(1) DESC 
            LIMIT 1
        `);

            const leastCommonGuessStmt = db.prepare(`
            SELECT guessedNumber 
            FROM desmos_games 
            GROUP BY guessedNumber 
            ORDER BY COUNT(1) ASC 
            LIMIT 1
        `);

            const lastGameStmt = db.prepare(`
            SELECT userAddress, guessedNumber, correctNumber, won 
            FROM desmos_games 
            ORDER BY promptId DESC 
            LIMIT 1
        `);

            const [
                gameStats,
                mostWinsUser,
                mostLossesUser,
                mostCommonGuess,
                leastCommonGuess,
                lastGame
            ] = await Promise.all([
                gameStatsStmt.get(),
                mostWinsStmt.get(),
                mostLossesStmt.get(),
                mostCommonGuessStmt.get(),
                leastCommonGuessStmt.get(),
                lastGameStmt.get()
            ]);

            return {
                gamesPlayed: gameStats.gamesPlayed || 0,
                totalProfit: gameStats.totalProfit || "0",
                gamesWon: gameStats.gamesWon || 0,
                gamesLost: gameStats.gamesLost || 0,
                highestBet: gameStats.highestBet || "0",
                biggestWin: gameStats.biggestWin || "0",
                mostWinsUser: mostWinsUser?.userAddress || null,
                mostLossesUser: mostLossesUser?.userAddress || null,
                mostCommonGuess: mostCommonGuess?.guessedNumber || null,
                leastCommonGuess: leastCommonGuess?.guessedNumber || null,
                lastGameUser: lastGame?.userAddress || null,
                lastGuess: lastGame?.guessedNumber || null,
                lastCorrectNumber: lastGame?.correctNumber || null,
                lastGameWon: lastGame?.won ?? null,
            };
        } catch (error) {
            console.error("Error getting game results from database", error);
            throw error;
        }
    }

    // TODO: is promptId unique?
    async getGame(promptId: string): Promise<Game | null> {
        const stmt = this.db.prepare("SELECT * FROM desmos_games WHERE promptId = ? LIMIT 1");
        try {
            return stmt.get(promptId);
        } catch (error) {
            console.error("Error getting game from database", error);
            throw error;
        }
    }

    async getAllGames(): Promise<Game[]> {
        const stmt = this.db.prepare("SELECT * FROM desmos_games");
        try {
            return stmt.all();
        } catch (error) {
            console.error("Error getting all games from database", error);
            throw error;
        }
    }
}
