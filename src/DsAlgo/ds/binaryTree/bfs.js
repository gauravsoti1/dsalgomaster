const { default: BinarySearchTree } = require("./bst");

// This same can be applied for any kind of tree,
// doesn't have to be binary tree,
// instead of left and right, we can just use children
/*
  This is also called level order traversal because it prints all the nodes of a particular level first
  https://www.geeksforgeeks.org/level-order-tree-traversal/
*/
function bfs() {
  if (!this.root) return;
  const queue = [this.root];
  const result = [];

  while (queue.length !== 0) {
    const current = queue.shift();
    result.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
}

BinarySearchTree.prototype.bfs = bfs;

const bst = new BinarySearchTree();
bst
  .add(10)
  .add(5)
  .add(7)
  .add(8)
  .add(2)
  .add(9);

bst.print();
/*
           10
     5
  2    7
        8 
         9

*/

console.log(bst.bfs());
// Output: [ 10, 5, 2, 7, 8, 9 ]

const bst1 = new BinarySearchTree();
bst1
  .add(5)
  .add(7)
  .add(2)
  .add(9)
  .add(10)
  .add(8);
/*
                5
            2       7
                        9
                     8     10
*/
console.log(bst1.bfs());
// Output: [ 5, 2, 7, 9, 8, 10 ]
