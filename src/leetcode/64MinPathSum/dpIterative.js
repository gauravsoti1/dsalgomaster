/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  dp[0][0] = grid[0][0];
  for (let row = 1; row < rows; row++) {
    dp[row][0] = dp[row - 1][0] + grid[row][0];
  }
  for (let col = 1; col < cols; col++) {
    dp[0][col] = dp[0][col - 1] + grid[0][col];
  }
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      dp[row][col] =
        Math.min(dp[row - 1][col], dp[row][col - 1]) + grid[row][col];
    }
  }
  return dp[rows - 1][cols - 1];
  // console.log(dp)
};
