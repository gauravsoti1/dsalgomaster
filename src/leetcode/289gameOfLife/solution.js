function iterateMatrix(board, callback) {
  const totalRows = board.length,
    totalCols = board[0]?.length || 0;
  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < totalCols; j++) {
      callback(i, j, board[i][j]);
    }
  }
}

function copyMatrix(matrix) {
  const matrixCopy = [];
  iterateMatrix(matrix, (i, j, value) => {
    if (!Array.isArray(matrixCopy[i])) matrixCopy[i] = [];
    matrixCopy[i][j] = value;
  });
  return matrixCopy;
}

function getIsIndexOutOfBoundsFunction(board, row, col) {
  const totalRows = board.length,
    totalCols = board[0]?.length || 0;
  return (i, j) => {
    if (i === row && j === col) return true;
    if (i >= totalRows || i < 0) return true;
    if (j >= totalCols || j < 0) return true;
    return false;
  };
}

function getNewStateForACell(board, row, col) {
  const isAlive = board[row][col] === 1;
  let liveCells = 0;
  const isIndexOutOfBounds = getIsIndexOutOfBoundsFunction(board, row, col);
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (isIndexOutOfBounds(i, j)) continue;
      if (board[i][j] === 1) liveCells++;
    }
  }
  if (isAlive && (liveCells < 2 || liveCells > 3)) return 0;
  else if (isAlive && [2, 3].includes(liveCells)) return 1;
  else if (!isAlive && liveCells === 3) return 1;

  return board[row][col];
}


/*
  Time Complexity: O(m*n)
  Space Complexity: O(m*n)
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const boardCopy = copyMatrix(board);
  iterateMatrix(boardCopy, (i, j) => {
    board[i][j] = getNewStateForACell(boardCopy, i, j);
  });
};
