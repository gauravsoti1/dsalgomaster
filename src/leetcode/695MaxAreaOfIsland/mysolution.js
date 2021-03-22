/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  // first find all the islands using dfs
  // calculate area of those islands
  // return max area
  const islands = [0];
  const points = [];
  // loop through all the elements of the grid
  // if it is 1, then run dfs
  // after visiting island, change its value to 0 or 2 so that we don't go to it again
  const rows = grid.length;
  const cols = grid[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        const area = bfsArea(grid, r, c);
        islands.push(area);
        points.push([r, c]);
      }
    }
  }
  console.log(islands);
  console.log(points);
  return Math.max(...islands);
};

function isValidPoint(grid, x, y) {
  const rows = grid.length,
    cols = grid[0].length;
  return x >= 0 && x < rows && y >= 0 && y < cols;
}

function bfsArea(grid, r, c, area = 0) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const queue = [[r, c]];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (grid[x][y] !== 1) continue;
    grid[x][y] = 0;
    area++;
    directions.forEach(([x1, y1]) => {
      if (isValidPoint(grid, x + x1, y + y1) && grid[x + x1][y + y1] === 1)
        queue.push([x + x1, y + y1]);
    });
  }
  return area;
}
