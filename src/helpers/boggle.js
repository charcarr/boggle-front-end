import { fetchBoggleSolutions } from "./apiService";

/**
 * @return Array of arrays representing values on a square board. BOARD_DIMENSION dictates the size.
 */
 const createRandomBoard = (BOARD_DIMENSION, ALPHABET) => {
  let boardValues = [];
  for (let i = 0; i < BOARD_DIMENSION; i++) {
    boardValues[i] = [];
    for (let j = 0; j < BOARD_DIMENSION; j++) {
      boardValues[i][j] = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    }
  }
  return boardValues;
};

/**
 * @return Array representing all valid word solutions to the boardValues parameter.
 */
const solve = async (boardValues) => {
  // console.table(boardValues);
  const boardString =  boardValues
    .map(row => row.join(''))
    .join(' ');

  const solutions = await fetchBoggleSolutions(boardString)
  return solutions;
}

const boogle = { createRandomBoard, solve };
export default boogle;