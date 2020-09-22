const { default: BinarySearchTree } = require("./bst");

// This same can be applied for any kind of tree,
// doesn't have to be binary tree,
// instead of left and right, we can just use children
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

console.log(bst.bfs());
