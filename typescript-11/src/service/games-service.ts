import gamesRepository from "../repositories/games-repository";
import { Game } from "./../protocols/game-protocol";

async function getGames() {
  return gamesRepository.getGames();
}

async function createGame(game: Game) {
  if (gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  gamesRepository.createGame(game);
}

function gameAlreadyExists(game: Game): boolean {
  const result = gamesRepository.getGameByTitleAndPlatform(game.title, game.platform);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;