/*
  This solution maybe doesn't work for all edge cases, need to check
  I think we need to just use memo object

*/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // start going in the directions possible
  // if you reach the destination, add 1 to the answer
  const uniquePathRecursive = getUniquePathsRecursiveForGrid(obstacleGrid);
  uniquePathRecursive(0, 0);
};

const directions = [[0, 1], [1, 0]];

function helpersForGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  function isDestination(x, y) {
    return x === rows - 1 && y === cols - 1;
  }
  function isOutOfBounds(x, y) {
    return x < 0 || y < 0 || x >= rows || y >= cols;
  }
  return { isDestination, isOutOfBounds };
}

function getUniquePathsRecursiveForGrid(obstacleGrid) {
  const { isDestination, isOutOfBounds } = helpersForGrid(obstacleGrid);
  function uniquePathsRecursive(x, y) {
    if (isOutOfBounds(x, y)) return 0;
    if (obstacleGrid[x][y] === 1) return 0;
    if (isDestination(x, y)) return 1;

    let uniquePaths = 0;
    directions.forEach(([x1, y1]) => {
      const paths = uniquePathsRecursive(x + x1, y + y1);
      uniquePaths += paths;
    });
    return uniquePaths;
  }
  return uniquePathsRecursive;
}
