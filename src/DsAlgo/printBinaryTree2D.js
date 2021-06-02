/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
const printTree = (root) => {
  const height = getHeight(root, 0);
  const rows = height + 1;
  const columns = Math.pow(2, height + 1) - 1;
  const result = new Array(rows)
    .fill(null)
    .map(() => new Array(columns).fill(""));

  const rootPosY = 0;
  const rootPosX = (columns - 1) / 2;

  let bfsQueue = [{ node: root, posY: rootPosY, posX: rootPosX }];

  while (bfsQueue.length) {
    const nextBfsQueue = [];

    for (const nodeWrapper of bfsQueue) {
      result[nodeWrapper.posY][
        nodeWrapper.posX
      ] = nodeWrapper.node.val.toString();

      if (nodeWrapper.node.left) {
        nextBfsQueue.push({
          node: nodeWrapper.node.left,
          posY: nodeWrapper.posY + 1,
          posX: nodeWrapper.posX - Math.pow(2, height - nodeWrapper.posY - 1),
        });
      }

      if (nodeWrapper.node.right) {
        nextBfsQueue.push({
          node: nodeWrapper.node.right,
          posY: nodeWrapper.posY + 1,
          posX: nodeWrapper.posX + Math.pow(2, height - nodeWrapper.posY - 1),
        });
      }
    }

    bfsQueue = nextBfsQueue;
  }

  return result;
};

function printByLevel(result) {
  result.forEach((level) => console.log(JSON.stringify(level)));
}

/**
 *
 * @param {TreeNode} currentNode
 * @param {Number} height
 * @returns {Number}
 */
const getHeight = (currentNode, height) => {
  if (!currentNode) {
    return height - 1;
  }

  return Math.max(
    getHeight(currentNode.left, height + 1),
    getHeight(currentNode.right, height + 1)
  );
};

module.exports = { printTree, printByLevel };
