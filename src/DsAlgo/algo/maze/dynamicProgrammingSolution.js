// https://www.geeksforgeeks.org/count-number-ways-reach-destination-maze/

const { printMatrix } = require("DsAlgo/helper");

/*
  Count number of ways to reach the destination in a maze

*/
function noOfWaysToSolveMaze(maze = []) {
  const totalRows = maze.length,
    totalColumns = maze[0].length;
  // return 0 if start position is blocked
  // initialize a solution matrix
  const solution = new Array(totalRows)
    .fill(0)
    .map(() => new Array(totalColumns).fill(0));
  // first row values should be one unless blocked
  for (let col = 1; col < totalColumns; col++) {
    if (maze[0][col] === 0) break;
    solution[0][col] = 1;
  }
  // first col values should be one unless blocked
  for (let row = 1; row < totalRows; row++) {
    if (maze[row][0] === 0) break;
    solution[row][0] = 1;
  }
  // for other columns, values should be 1 + the left or the top
  for (let row = 1; row < totalRows; row++) {
    for (let col = 1; col < totalColumns; col++) {
      if (maze[row - 1][col] === 1)
        solution[row][col] = solution[row - 1][col] + solution[row][col];
      if (maze[row][col - 1] === 1)
        solution[row][col] = solution[row][col - 1] + solution[row][col];
    }
  }
  printMatrix(solution);
  return solution[totalRows - 1][totalColumns - 1];
}

const noOfWays = noOfWaysToSolveMaze([
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
]);

console.log("number of ways ===", noOfWays);

const noOfWays1 = noOfWaysToSolveMaze([
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
]);

console.log("number of ways 1 ===", noOfWays1);
