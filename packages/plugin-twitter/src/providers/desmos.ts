import {IAgentRuntime, Memory, Provider, State} from "@elizaos/core";
import {DesmosService} from "../services/desmos";
import {GameResults} from "../types";

export const desmosProvider: Provider = {
    get: async (runtime: IAgentRuntime, message: Memory, state?: State): Promise<string> => {
         const service = runtime.getService(DesmosService.serviceType) as DesmosService;

         const gameResults: GameResults = await service.getGameResults();

                if (!gameResults || gameResults.gamesPlayed === 0) {
                    return "No game results are available at this time.";
                }

               let s = `
      Game Summary:
      Games Played: ${gameResults.gamesPlayed}
      Total Profit by Desmos: ${gameResults.totalProfit} DESMOS
      Games Won by Desmos: ${gameResults.gamesWon}
      Games Lost by Desmos: ${gameResults.gamesLost}

      Top Stats:
      Biggest Bet by a user: ${gameResults.highestBet} DESMOS
      Largest Win by a user: ${gameResults.biggestWin} DESMOS
      Top Winner user: ${gameResults.mostWinsUser || "N/A"}
      Most Losses by user: ${gameResults.mostLossesUser || "N/A"}

      Guess Trends:
      Most Common Guess: ${gameResults.mostCommonGuess || "N/A"}
      Least Common Guess: ${gameResults.leastCommonGuess || "N/A"}

      Last Game Details:
      Player: ${gameResults.lastGameUser || "N/A"}
      Guessed Number: ${gameResults.lastGuess || "N/A"}
      Correct Number: ${gameResults.lastCorrectNumber || "N/A"}
      Outcome: ${gameResults.lastGameWon ? "Desmos Won" : "Desmos Lost"}
      `;
              console.log(s);
              return s
    }
};
