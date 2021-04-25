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
  const nodes = [start];
  const visitedNodes = new Map();
  visitedNodes.set(0, true);
  let nodeIndex = 0;
  while (nodeIndex < nodes.length) {
    visitedNodes.set(nodeIndex, true);
    traceRecursive(nodes[nodeIndex], robot, visitedNodes, 0, nodes);
    for (let i = nodeIndex + 1; i < nodes.length; i++) {
      if (!visitedNodes.has(i)) {
        nodeIndex = i;
        break;
      }
    }
  }
  console.log(nodes);
  // console.log(start);
};

function moveToRightAndFaceTop(robot) {
  robot.turnRight();
  robot.move();
  robot.turnLeft();
}

function moveToLefttAndFaceTop(robot) {
  robot.turnLeft();
  robot.move();
  robot.turnRight();
}

function moveToBottomAndFaceTop(robot) {
  turnBack(robot);
  robot.move();
  turnBack(robot);
}

function moveToTopAndFaceTop(robot) {
  robot.move();
}

// function traceRecursive(current, robot, visitedNodes, currentIndex, nodes) {
//   if (!current) return null;
//   if (current.value === 0) {
//     console.log("value is 0")
//     return null;
//   }
//   robot.clean();
//   // console.log(nodes)
//   trace(current, robot, currentIndex, nodes, visitedNodes);
//   console.log("visitednodes size", visitedNodes);
//   const possibleNodes = ["bottom", "right", "left", "top"];
//   // const possibleNodes = ["right", "left", "top"];
//   possibleNodes.forEach((possibleNodeName) => {
//     const possibleNodeIndex = current[possibleNodeName];
//     // console.log("possibleNode is ", possibleNodeIndex);
//     const doesVisitedHavePossibleNode = visitedNodes.has(possibleNodeIndex);
//     // console.log("doesVisitedHavePossibleNode", doesVisitedHavePossibleNode);
//     if (possibleNodeIndex !== null && !doesVisitedHavePossibleNode) {
//       visitedNodes.set(possibleNodeIndex, true);
//       const possibleNode = nodes[possibleNodeIndex];
//       if (possibleNode.value !== 0) {
//         switch (possibleNodeName) {
//           case "right": {
//             moveToRightAndFaceTop(robot);
//             break;
//           }
//           case "left": {
//             moveToLefttAndFaceTop(robot);
//             break;
//           }
//           case "bottom": {
//             moveToBottomAndFaceTop(robot);
//             break;
//           }
//           case "top": {
//             moveToTopAndFaceTop(robot);
//             break;
//           }
//         }
//         traceRecursive(
//           possibleNode,
//           robot,
//           visitedNodes,
//           possibleNodeIndex,
//           nodes
//         );
//       }
//     }
//   });
// }

function traceRecursive(current, robot, visitedNodes, currentIndex, nodes) {
  if (!current) return null;
  if (current.value === 0) {
    console.log("value is 0");
    return null;
  }
  robot.clean();
  // console.log(nodes)
  trace(current, robot, currentIndex, nodes, visitedNodes);
  console.log("visitednodes size", visitedNodes);
  const possibleNodes = ["bottom", "right", "left", "top"];
  // const possibleNodes = ["right", "left", "top"];
}

function trace(start, robot, startIndex, nodes, visitedNodes) {
  // console.log("trace called");
  if (start.right === null) {
    robot.turnRight();
    const rightValue = robot.move();
    // console.log(`right value for startIndex = ${startIndex} = ${rightValue}`)
    const newNode = node({ value: rightValue ? 1 : 0, left: startIndex });
    const newNodeIndex = nodes.push(newNode) - 1;
    start.right = newNodeIndex;
    if (rightValue) {
      turnBack(robot);
      robot.move();
      robot.turnRight();
    } else robot.turnLeft();
  }
  if (start.top === null) {
    const topValue = robot.move();
    const newNode = node({ value: topValue ? 1 : 0, bottom: startIndex });
    const newNodeIndex = nodes.push(newNode) - 1;
    start.top = newNodeIndex;
    if (topValue) {
      turnBack(robot);
      robot.move();
      turnBack(robot);
    }
  }
  if (start.bottom === null) {
    turnBack(robot);
    let bottomValue = robot.move();
    const newNode = node({ value: bottomValue ? 1 : 0, top: startIndex });
    const newNodeIndex = nodes.push(newNode) - 1;
    start.bottom = newNodeIndex;
    turnBack(robot);
    if (bottomValue) {
      robot.move();
    }
  }

  if (start.left === null) {
    robot.turnLeft();
    const leftValue = robot.move();
    const newNode = node({ value: leftValue ? 1 : 0, right: startIndex });
    const newNodeIndex = nodes.push(newNode) - 1;
    start.left = newNodeIndex;
    if (leftValue) {
      turnBack(robot);
      robot.move();
      robot.turnLeft();
    } else {
      robot.turnRight();
    }
  }
  // console.log(startIndex, start, nodes);
}
