const { printBST } = require("./helper");

/*
  Solution after studying ds-algo masterclass and also doing the solution myself on freecodecamp
*/
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = (value) => {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        // value already exists, hence returning null;
        if (value === current.value) return null;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  };
}

BinarySearchTree.prototype.print = printBST;

export default BinarySearchTree;
