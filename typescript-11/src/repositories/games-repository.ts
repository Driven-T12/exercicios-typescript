import { CreateGame, Game } from "../protocols/game-protocol";
import { db } from "database/database";

async function getGames(): Promise<Game[]> {
  const result = await db.query<Game>(`SELECT * FROM games;`)
  return result.rows
}

async function createGame(game: CreateGame): Promise<void> {
  await db.query<CreateGame>(
    `INSERT INTO games (title, platform) VALUES ($1, $2);`,
    [game.title, game.platform]
  )
}

async function getGameByTitleAndPlatform(title: string, platform: string) {
  const result = await db.query<Game>(
    `SELECT * FROM games WHERE title=$1 AND platform=$2;`,
    [title, platform]
  );

  return result.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;