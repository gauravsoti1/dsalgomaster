const { default: BinarySearchTree } = require("./bst");

function dfsInOrder() {
  if (!this.root) return;
  const result = [];

  function dfsRecursive(current) {
    if (!current) return;
    if (current.left) dfsRecursive(current.left);
    result.push(current.value);
    if (current.right) dfsRecursive(current.right);
  }
  dfsRecursive(this.root);
  return result;
}

function dfsIterative() {
  const result = [];
  const stack = [];
  stack.push(this.root);
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
}

function dfsPreOrder() {
  if (!this.root) return;
  const result = [];

  function dfsRecursive(current) {
    if (!current) return;
    result.push(current.value);
    if (current.left) dfsRecursive(current.left);
    if (current.right) dfsRecursive(current.right);
  }
  dfsRecursive(this.root);
  return result;
}

function dfsPostOrder() {
  if (!this.root) return;
  // const stack = [this.root];
  const result = [];

  function dfsRecursive(current) {
    if (!current) return;
    if (current.left) dfsRecursive(current.left);
    if (current.right) dfsRecursive(current.right);
    result.push(current.value);
  }
  dfsRecursive(this.root);
  return result;
}

BinarySearchTree.prototype.dfsInOrder = dfsInOrder;
BinarySearchTree.prototype.dfsPreOrder = dfsPreOrder;
BinarySearchTree.prototype.dfsPostOrder = dfsPostOrder;
BinarySearchTree.prototype.dfsIterative = dfsIterative;

const bst = new BinarySearchTree();
bst
  .add(4)
  .add(2)
  .add(7)
  .add(1)
  .add(3)
  .add(6)
  .add(9);

bst.print();

console.log("printing dfsInOrder =====");
console.log(bst.dfsInOrder());

console.log("printing dfsPreOrder =====");
console.log(bst.dfsPreOrder());

console.log("printing dfsPostOrder =====");
console.log(bst.dfsPostOrder());

console.log("printing dfsIterative =====");
console.log(bst.dfsIterative());
