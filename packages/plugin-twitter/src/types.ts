import {z} from "zod";

export interface TweetContent {
    text: string;
}

export const TweetSchema = z.object({
    text: z.string().describe("The text of the tweet"),
});

export const isTweetContent = (obj: unknown): obj is TweetContent => {
    return TweetSchema.safeParse(obj).success;
};

export abstract class GameDAO<DB = any> {
    db: DB;

    abstract initialize(): Promise<void>;

    abstract addGame(game: Game): Promise<boolean>;

    /*abstract getPagedGames(
        query: GameQuery,
        page: number,
        pageSize: number
    ): Promise<PageQuery<Game[]>>;
*/
    abstract getGameResults(): Promise<GameResults>;

    abstract getGame(agentId: string): Promise<Game>;

    abstract getAllGames(): Promise<Game[]>;
}

export interface GameQuery {
    userAddress?: string;
    won?: boolean;
}

export interface PageQuery<Result = any> {
    page: number;
    pageSize: number;
    total?: number;
    data?: Result;
}

export interface GameResults {
    gamesPlayed: number;
    totalProfit: string;
    gamesWon: number;
    gamesLost: number;
    highestBet: string;
    biggestWin: string;
    mostWinsUser: string | null;
    mostLossesUser: string | null;
    mostCommonGuess: number | null;
    leastCommonGuess: number | null;
    lastGameUser: string | null;
    lastGuess: number | null;
    lastCorrectNumber: number | null;
    lastGameWon: boolean | null;
}

export interface Game {
    userAddress: string,
    promptId: number;
    amount: number;
    guessedNumber: number;
    correctNumber: number;
    persuasion: string;
    won: number;
    canceled: number;
}
