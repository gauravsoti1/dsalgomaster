/*
 https://www.hackerrank.com/challenges/magic-square-forming/problem
 Wikipedia link about magic matrices: https://en.wikipedia.org/wiki/Magic_square

*/
const possibleMatrices = [
  [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
  [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
  [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
  [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
  [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
  [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
  [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
  [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
];

// Just comparing the inputMatrix with the
// pre set matrices
function formingMagicSquare(inputMatrix) {
  // const minDiff = min - 1;
  // const magicSquare = possibleMatrix[key];
  let allPossibleCosts = [];
  possibleMatrices.forEach((matrix, index) => {
    inputMatrix.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        allPossibleCosts[index] = allPossibleCosts[index] || 0;
        allPossibleCosts[index] += Math.abs(
          matrix[rowIndex][colIndex] - inputMatrix[rowIndex][colIndex]
        );
      });
    });
  });
  // console.log(allPossibleCosts);
  return Math.min(...allPossibleCosts);
}
