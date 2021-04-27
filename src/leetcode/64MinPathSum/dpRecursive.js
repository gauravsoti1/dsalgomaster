function minPathSum(grid) {
  const memo = {};
  const rows = grid.length;
  const cols = grid[0].length;
  minPathRecursive(grid, memo, rows - 1, cols - 1, 0);
  // // console.log("memo = ", memo);
  return memo[`${rows - 1}_${cols - 1}`];
}

function minPathRecursive(grid, memo = {}, i = 0, j = 0) {
  // // console.log(`checking for ${i}, ${j}`);
  if (i < 0 || j < 0) return Number.POSITIVE_INFINITY;
  const key = `${i}_${j}`;
  // We have reached our destination, add the value of 0,0 to memo and return it
  if (i === 0 && j === 0) {
    memo[key] = grid[i][j];
    return memo[key];
  }
  if (memo[key] !== undefined) return memo[key];
  // get the minimum sum from previous points
  const minSum = Math.min(
    minPathRecursive(grid, memo, i - 1, j),
    minPathRecursive(grid, memo, i, j - 1)
  );
  // // console.log(`minSum for ${i},${j} = `, minSum)
  // add the value of current grid entry for the total sum till here
  memo[key] = minSum + grid[i][j];
  return memo[key];
}
