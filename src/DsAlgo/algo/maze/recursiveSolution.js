/* 

  https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/

  A Maze is given as N*N binary matrix of blocks where source block is the upper left most block i.e., maze[0][0] and destination block is lower rightmost block i.e., maze[N-1][N-1]. A rat starts from source and has to reach the destination. The rat can move only in two directions: forward and down.
  In the maze matrix, 0 means the block is a dead end and 1 means the block can be used in the path from source to destination. Note that this is a simple version of the typical Maze problem. For example, a more complex version can be that the rat can move in 4 directions and a more complex version can be with a limited number of moves.

*/

const { printMatrix, printMatrixWithXyLabel } = require("DsAlgo/helper");

/*

  This will print the solution matrix, with the possible direction columns' value as 1

*/
function solveMaze(maze = []) {
  const m = maze.length;
  const n = maze[0].length;
  // debugger;
  const solution = new Array(m).fill(0).map((a) => new Array(n).fill(0));
  const utilForCurrentMaze = solveMazeUtil(maze, m, n);
  const result = utilForCurrentMaze(0, 0, solution);
  // printSolution(solution);
  if (!result) console.log("Solution doesn't exist");
  else {
    console.log("maze ==== ");
    printMatrix(maze);
    console.log("solution ==== ");
    printMatrixWithXyLabel(solution,"Rows", "Columns");
    // printSolution(solution);
  }
}

function hasReachedEnd(maze, x, y, m, n) {
  return x === n - 1 && y === m - 1 && maze[x][y] === 1;
}

function solveMazeUtil(maze, m, n) {
  return function currentMazeUtil(x, y, sol) {
    if (hasReachedEnd(maze, x, y, m, n)) {
      sol[x][y] = 1;
      return true;
    }
    if (isSafe(maze, x, y, m, n)) {
      sol[x][y] = 1;
      if (currentMazeUtil(x, y + 1, sol)) return true;
      if (currentMazeUtil(x + 1, y, sol)) return true;
      sol[x][y] = 0;
      return false;
    }
    return false;
  };
}

function isSafe(maze, x, y, m, n) {
  return x >= 0 && y >= 0 && x < m && y < n && maze[x][y] === 1;
}

// solveMaze([[1, 0, 0, 0], [1, 1, 0, 1], [0, 1, 0, 0], [1, 1, 1, 1]]);

solveMaze([[1, 1, 1, 1], [1, 0, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1]]);
