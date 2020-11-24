/*
  https://leetcode.com/problems/sort-the-matrix-diagonally/
  Difficulty: Medium
*/
function diagonalSort(matrix = []) {
  const d = {};
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (d[i - j]) d[i - j].push(matrix[i][j]);
      else d[i - j] = [matrix[i][j]];
    }
  }
  Object.entries(d).forEach(([key, array]) => array.sort());
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i][j] = d[i - j].shift();
    }
  }
  return result;
  // console.log(JSON.stringify(result));
}

// Test case
const result = diagonalSort([[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]);
const expectedOutput = [[1, 1, 1, 1], [1, 2, 2, 2], [1, 2, 3, 3]];

console.log("Is correct output?");
console.log(JSON.stringify(result) === JSON.stringify(expectedOutput));
