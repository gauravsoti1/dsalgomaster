const { default: BinarySearchTree } = require("./bst");

function invert() {
  function invertRecursive(node) {
    if (!node) return null;
    let left = invertRecursive(node.left);
    let right = invertRecursive(node.right);
    node.left = right;
    node.right = left;
    return node;
  }
  invertRecursive(this.root);
}

BinarySearchTree.prototype.invert = invert;
const bst = new BinarySearchTree();
bst
  .add(4)
  .add(2)
  .add(7)
  .add(1)
  .add(3)
  .add(6)
  .add(9)
  .add(5)
  ;

bst.print();
console.log("Inverting a binary search tree");
bst.invert();
bst.print();
