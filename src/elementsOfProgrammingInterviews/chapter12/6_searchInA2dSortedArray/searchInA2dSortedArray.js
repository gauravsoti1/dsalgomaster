function findElem(matrix, elem) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  function findElemRecursiveInRow(row, fromCol, toCol) {
    let midCol = Math.floor((toCol - fromCol + 1) / 2);
    if (matrix[row][midCol] === elem) return true;
    if (matrix[row][midCol] > elem) {
      return (
        findElemRecursiveInRow(row, fromCol, midCol - 1) ||
        findElemRecursiveInCol(midCol, 0, row - 1)
      );
    } else {
      return (
        findElemRecursiveInRow(row, midCol + 1, toCol) ||
        findElemRecursiveInCol(midCol, row + 1, rows - 1)
      );
    }
  }
  function findElemRecursiveInCol(col, fromRow, toRow) {
    let midRow = Math.floor((toRow - fromRow + 1) / 2);
    if (matrix[midRow][col] === elem) return true;
    if(fromRow === toRow)
    return false
    if (matrix[midRow][col] > elem) {
      return (
        findElemRecursiveInRow(midRow, 0, col - 1) ||
        findElemRecursiveInCol(col, 0, midRow - 1)
      );
    } else {
      return (
        findElemRecursiveInRow(midRow, col + 1, cols - 1) ||
        findElemRecursiveInCol(col, midRow + 1, toRow)
      );
    }
  }
  return (
    findElemRecursiveInRow(0, 0, 0, cols - 1) ||
    findElemRecursiveInCol(0, 0, 0, rows - 1)
  );
}

const matrix = [
  [-1, 2, 4, 4, 6],
  [1, 5, 5, 9, 21],
  // [],
  // [],
  // []
];

console.log(findElem(matrix), 21);
