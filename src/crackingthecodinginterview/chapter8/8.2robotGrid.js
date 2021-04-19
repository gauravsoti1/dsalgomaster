function robotInAGrid(grid = [[]]) {
  const path = [];
  const pathExists = new Array(grid.length)
    .fill(false)
    .map((a) => new Array(grid[0].length).fill(undefined));
  findPath(grid, pathExists, path, 0, 0);
  return path.reverse();
}

function isOutOfBounds(grid, r, c) {
  return r >= grid.length || c >= grid[0].length || r < 0 || c < 0;
}

function isDestination(grid, r, c) {
  return r === grid.length - 1 && c === grid[0].length - 1;
}

function findPath(grid, pathExists, path, r, c) {
  if (isOutOfBounds(grid, r, c) || grid[r][c] === false) return false;
  // We have previously visited this point, so just returning its answer
  if (pathExists[r][c] !== undefined) return pathExists[r][c];
  let success = false;
  // We have reached the destination or there exists a path from the current point to the
  // destination, then we add current point to the path solution
  if (
    isDestination(grid, r, c) ||
    findPath(grid, pathExists, path, r + 1, c) ||
    findPath(grid, pathExists, path, r, c + 1)
  ) {
    success = true;
    path.push([r, c]);
  }
  pathExists[r][c] = success;
  return success;
}

(function test1() {
  const grid = [[true, true], [false, true]];
  console.log("---------- test 1 -----------");
  console.log("testing for 2 * 2 grid");
  console.log("grid = ", grid);
  console.log("path = ", robotInAGrid(grid));
})();

(function test2() {
  const grid = [[true, true, false], [false, true, false], [false, true, true]];
  console.log("---------- test 2 -----------");
  console.log("testing for 3 * 3 grid");
  console.log("grid = ", grid);
  console.log("path = ", robotInAGrid(grid));
})();
