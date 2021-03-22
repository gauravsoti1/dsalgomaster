const north = "NORTH";
const south = "SOUTH";
const west = "WEST";
const east = "EAST";

const movement = {
  [north]: [0, 1],
  [west]: [-1, 0],
  [south]: [0, -1],
  [east]: [1, 0],
};

const turnLeft = {
  [north]: west,
  [south]: east,
  [west]: south,
  [east]: north,
};

const turnRight = {
  [north]: east,
  [south]: west,
  [west]: north,
  [east]: south,
};

const turn = {
  L: turnLeft,
  R: turnRight,
};

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let currentDirection = north;
  // if any direction is not present then only it won't be in a circle
  let x = 0,
    y = 0;
  instructions.split("").forEach((instruction) => {
    // console.log(`currentDirection ${currentDirection}, x=${x}, y=${y}, instruction=${instruction} `)
    if (["L", "R"].includes(instruction)) {
      currentDirection = turn[instruction][currentDirection];
    } else {
      const [x1, y1] = movement[currentDirection];
      x += x1;
      y += y1;
    }
  });
  // console.log(currentDirection);
  return (x === 0 && y === 0) || currentDirection !== north;
};
