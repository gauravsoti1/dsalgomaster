/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let rows = obstacleGrid.length,
    cols = obstacleGrid[0].length;
  const matrix = new Array(rows).fill(0).map((a) => new Array(cols).fill(0));
  matrix[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;
  for (let i = 1; i < rows; i++) {
    matrix[i][0] = obstacleGrid[i][0] === 1 || matrix[i - 1][0] === 0 ? 0 : 1;
  }
  for (let j = 1; j < cols; j++) {
    matrix[0][j] = obstacleGrid[0][j] === 1 || matrix[0][j - 1] === 0 ? 0 : 1;
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (obstacleGrid[i][j] === 1) matrix[i][j] = 0;
      else {
        if (matrix[i - 1][j] !== 0) matrix[i][j] += matrix[i - 1][j];
        if (matrix[i][j - 1] !== 0) matrix[i][j] += matrix[i][j - 1];
      }
    }
  }
  console.log("obstacle grid ===", JSON.stringify(obstacleGrid));
  console.log("matrix ===", JSON.stringify(matrix));
  return matrix[rows - 1][cols - 1];
};
