function Node({ value, left = null, right = null }) {
  return {
    value,
    left,
    right,
  };
}

/* 
  worse case time complexity: O(n)
  when all the nodes are on one side 
  only
*/

/*
  Space complexity is the max stack size
  which can be the height of the tree because 
  at a time stack will have gone to max depth of the tree
  which is O(n)
*/
function maxDepth(root, depth = 0) {
  if (!root) return depth;
  const maxLeftDepth = maxDepth(root.left, depth + 1);
  const maxRightDepth = maxDepth(root.right, depth + 1);
  return Math.max(maxLeftDepth, maxRightDepth);
}

function testSolution() {
  /*
      5
    3   9  
          13

  */
  function buildTree() {
    const node1 = Node({ value: 5 });
    const node2 = Node({ value: 3 });
    const node3 = Node({ value: 9 });
    const node4 = Node({ value: 13 });

    node1.left = node2;
    node1.right = node3;
    node3.right = node4;
    return node1;
  }
  const root = buildTree();
  console.log("max depth = ", maxDepth(root)); // Output = 3
}

testSolution();
