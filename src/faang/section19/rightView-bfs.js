export function Node({ val, left, right }) {
  return { val, left, right };
}

/*
  We could have made it simple as well
  We could have only chosen the last node
  That would have saved memory

  I did it this way because I wanted to relate 
  it to the level order
*/
export function rightView(root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length > 0) {
    const totalLevelNodes = queue.length;
    let nodesVisited = 0;
    const currentLevelNodes = [];
    while (nodesVisited < totalLevelNodes) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      nodesVisited++;
      currentLevelNodes.push(currentNode.val);
    }
    result.push(currentLevelNodes.pop());
  }
  return result;
}
