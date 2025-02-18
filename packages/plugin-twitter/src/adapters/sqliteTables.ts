export const sqliteTables = `
BEGIN TRANSACTION;

-- Table: desmos_games
CREATE TABLE IF NOT EXISTS "desmos_games" (
    "promptId" INT PRIMARY KEY,
    "userAddress" TEXT NOT NULL,
    "amount" DECIMAL(18,4) NOT NULL,
    "guessedNumber" INT NOT NULL,
    "correctNumber" INT NOT NULL,
    "persuasion" TEXT NOT NULL,
    "won" BOOLEAN,
    "canceled" BOOLEAN
);

COMMIT;`;
