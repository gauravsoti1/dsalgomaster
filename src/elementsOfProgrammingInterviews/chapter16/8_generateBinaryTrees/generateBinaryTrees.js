const {
  printTree,
  printByLevel,
} = require("../../../DsAlgo/printBinaryTree2D");

function BinaryTreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
  this.val = value;
}

function generateBinaryTrees(numNodes) {
  const result = [];
  if (numNodes === 0) result.push(null);
  
  // < numNodes and not <= numNodes because we have to consider root as well
  for (
    let numLeftTreeNodes = 0;
    numLeftTreeNodes < numNodes;
    numLeftTreeNodes++
  ) {
    // < numNodes and not <= numNodes because we have to consider root as well
    let numRightTreeNodes = numNodes - 1 - numLeftTreeNodes;
    // this will return array of all possible binary trees
    const leftSubTrees = generateBinaryTrees(numLeftTreeNodes);
    const rightSubTrees = generateBinaryTrees(numRightTreeNodes);

    // // console.log("num nodes = ", numNodes);
    // // console.log("leftSubTrees = ");
    // // leftSubTrees.forEach((node) => node && printByLevel(printTree(node)));
    // // console.log("");
    // // console.log("rightSubTrees = ");
    // // rightSubTrees.forEach((node) => node && printByLevel(printTree(node)));

    // generate all combinations of leftSubtrees and rightSubtrees
    for (let left of leftSubTrees) {
      for (let right of rightSubTrees) {
        result.push(new BinaryTreeNode(0, left, right));
      }
    }
  }
  return result;
}

const result = generateBinaryTrees(3);
console.log("--------result----------");
result.forEach((root, index) => {
  console.log(`Tree ${index + 1} = `);
  printByLevel(printTree(root));
});

// so in above there were duplicate calculations, so we are memoizing our solution
function generateBinaryTreesDPWay(numNodes, map = {}, type) {
  const result = [];
  if (numNodes === 0) result.push(null);
  const key = `${type}+${numNodes}`;
  if (map[key]) return { ...map[key] }; // This is not a deep copy, correct this, this should be a deep copy
  // < numNodes and not <= numNodes because we have to consider root as well
  for (
    let numLeftTreeNodes = 0;
    numLeftTreeNodes < numNodes;
    numLeftTreeNodes++
  ) {
    // -1 for the root
    let numRightTreeNodes = numNodes - 1 - numLeftTreeNodes;
    // this will return array of all possible binary trees on left side
    const leftSubTrees = generateBinaryTrees(numLeftTreeNodes, map, "left");
    const rightSubTrees = generateBinaryTrees(numRightTreeNodes, map, "right");

    // // console.log("num nodes = ", numNodes);
    // // console.log("leftSubTrees = ");
    // // leftSubTrees.forEach((node) => node && printByLevel(printTree(node)));
    // // console.log("");
    // // console.log("rightSubTrees = ");
    // // rightSubTrees.forEach((node) => node && printByLevel(printTree(node)));

    // generate all combinations of leftSubtrees and rightSubtrees
    for (let left of leftSubTrees) {
      for (let right of rightSubTrees) {
        result.push(new BinaryTreeNode(0, left, right));
      }
    }
  }
  map[key] = result;
  return result;
}
