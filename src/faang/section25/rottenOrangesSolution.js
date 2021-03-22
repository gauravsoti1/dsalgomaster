// track passing minute
// once we get a new rotten orange, add it somewhere for next minute
// return -1 if it's not possible for all oranges to rot
// keep track of all the rotten oranges somewhere
// so that we can calculate if all the oranges have rotten or not

/*
  Time Complexity: O(m*n) because we will visit all the elements
  to figure out which one is rotten
  Space Complexity: O(m*n) in the scenario of all our oranges are 
  rotten, we will store all of them in the array.
*/

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

function getMinutes(grid) {
  if (grid.length === 0) return 0;

  let currentMinute = 0;
  let totalFreshOranges = 0;
  let newRottenOranges = [];
  grid.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === ROTTEN) newRottenOranges.push([i, j]);
      if (val === FRESH) totalFreshOranges++;
    });
  });
  const bfs = bfsForGrid(grid);
  // 2
  while (totalFreshOranges > 0 && newRottenOranges.length > 0) {
    let currentMinuteRottenOranges = newRottenOranges.length;
    // until we haven't considered all the rotten oranges for the current minute, run the loop
    while (currentMinuteRottenOranges > 0) {
      const pos = newRottenOranges.shift();
      bfs(pos[0], pos[1], newRottenOranges);
      currentMinuteRottenOranges--;
    }
    // we need to subtract all the new rotten oranges at this step from fresh oranges
    totalFreshOranges = totalFreshOranges - newRottenOranges.length;
    currentMinute++;
  }
  // if there are still some fresh oranges then all oranges didn't rot and we need to return -1
  return totalFreshOranges === 0 ? currentMinute : -1;
}

const isValidPositionForGrid = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  return (xPos, yPos) => {
    return xPos >= 0 && xPos < rows && yPos >= 0 && yPos < cols;
  };
};

function bfsForGrid(grid) {
  return function(i, j, newRottenOranges) {
    const directions = [
      [1, 0], // up
      [-1, 0], // down
      [0, 1], //right
      [0, -1], // left
    ];
    const isValidPosition = isValidPositionForGrid(grid);
    directions.forEach(([x, y]) => {
      const xPos = i + x;
      const yPos = j + y;
      if (isValidPosition(xPos, yPos) && grid[xPos][yPos] === FRESH) {
        grid[xPos][yPos] = ROTTEN;
        newRottenOranges.push([xPos, yPos]);
      }
    });
  };
}

const grid = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
];

const grid2 = [
  [1, 1, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2],
  [0, 1, 0, 0, 1],
];

console.log(getMinutes(grid));
console.log(getMinutes(grid2));
