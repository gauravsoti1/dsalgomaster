/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

// I might have to move around a lot to make sure to reach first col, which seems like a waste
function goToFirstCol(robot) {}

function goToTopOfCurrentColumn(robot) {
  while (robot.move()) {}
}

function cleanCurrentColFromTopToBottom(robot) {
  robot.turnRight();
  robot.turnRight();
  robot.clean();
  while (robot.move()) {
    robot.clean();
  }
}

function turnBack(robot) {
  robot.turnRight();
  robot.turnRight();
}

function node({ value, left = null, right = null, top = null, bottom = null }) {
  return { value, right, left, top, bottom };
}

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
  // let isRobotAbleToMove = true;
  // goToTopOfCurrentColumn(robot);
  // cleanCurrentColFromTopToBottom(robot);
  const start = node({ value: 1 });
  let current = start;
  // console.log(start)
  const visitedNodes = new Map();
  visitedNodes.set(current, true);
  traceRecursive(start, robot, visitedNodes);
  // console.log(start);
};

function traceRecursive(current, robot, visitedNodes) {
  if (!current) return null;  
  if (current.value === 0){
    console.log("value is 0");
    return null;
  }
  robot.clean();
  trace(current, robot);
  // console.log("visitednodes size", visitedNodes.size)
  // const possibleNodes = ["left", "right", "top", "bottom"];
  const possibleNodes = ["left"];
  possibleNodes.forEach((possibleNodeName) => {
    const possibleNode = current[possibleNodeName];
    console.log("possibleNode is ", possibleNode);
    const doesVisitedHavePossibleNode = visitedNodes.has(possibleNode);
    console.log("doesVisitedHavePossibleNode", doesVisitedHavePossibleNode);
    if (
      possibleNode &&
      !doesVisitedHavePossibleNode
    ){
      visitedNodes.set(possibleNode, true);
      traceRecursive(possibleNode, robot, visitedNodes);
    }
  });
}

function trace(start, robot) {
  // console.log("trace called");
  if (!start.top) {
    const topValue = robot.move();
    start.top = node({ value: topValue ? 1 : 0, bottom: start });
    if (topValue) {
      turnBack(robot);
      robot.move();
      turnBack(robot);
    }
  }
  if (!start.bottom) {
    turnBack(robot);
    let bottomValue = robot.move();
    start.bottom = node({ value: bottomValue ? 1 : 0, top: start });
    turnBack(robot);
    // console.log("bottomValue", bottomValue);
    if (bottomValue) robot.move();
  }
  if (!start.right) {
    robot.turnRight();
    const rightValue = robot.move();
    start.right = node({ value: rightValue ? 1 : 0, left: start });
    if (rightValue) {
      turnBack(robot);
      robot.move();
      robot.turnRight();
    } else robot.turnLeft();
  }
  if (!start.left) {
    robot.turnLeft();
    const leftValue = robot.move();
    start.left = node({ value: leftValue ? 1 : 0, right: start });
    if (leftValue) {
      turnBack(robot);
      robot.move();
      robot.turnLeft();
    } else {
      robot.turnRight();
    }
  }
  // console.log(start);
}
