function Node({ val, left, right }) {
  return { val, left, right };
}

/*
  Even if there are 2 while loops but we are 
  actually visiting our nodes only n times
  * Time complexity is O(n)

  Space complexity:
  Result and queue array are occupying space

  Result takes N space because including all the subarrays
  they can only take space upto maximum number of nodes

  Queue takes N/2 space because the max size of the queue
  can be N/2 which is the number of max nodes there can 
  be in any level (N/2 is for the last level) of binary 
  tree
  Hence total space complexity is O(N + N/2) = 
  * O(N)
*/
function levelOrder(root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length > 0) {
    let totalNodesAtLevel = queue.length;
    const levelNodes = [];
    while (levelNodes.length < totalNodesAtLevel) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      levelNodes.push(node);
    }
    result.push(levelNodes);
  }
  return result;
}

(function test() {
  console.log("testing case 1");
  const node1 = Node({ val: 1 });
  const node2 = Node({ val: 2 });
  const node3 = Node({ val: 3 });
  const node4 = Node({ val: 4 });
  const node5 = Node({ val: 5 });
  const node6 = Node({ val: 6 });
  const node8 = Node({ val: 8 });
  const node9 = Node({ val: 9 });
  node3.left = node6;
  node3.right = node1;
  node6.left = node9;
  node6.right = node2;
  node9.right = node5;
  node5.left = node8;
  node1.right = node4;
  console.log(levelOrder(node3).map((arr) => arr.map((node) => node.val)));
})();

(function testEmpty() {
  console.log("testing when no root is present");
  console.log(levelOrder(null));
})();
