function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function validateBST(
  root,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY
) {
  if (!root) return true;
  if (root.value > max || root.value <= min) return false;
  return (
    validateBST(root.left, min, root.value) &&
    validateBST(root.right, root.value, max)
  );
}

(function testCase1() {
  const root = new Node(20);
  root.left = new Node(20);
  root.right = new Node(20);
  console.log("Is it a valid binary search tree", validateBST(root));
})();

(function testCase2() {
  const root = new Node(20);
  root.left = new Node(20);
  root.right = new Node(30);
  console.log("Is it a valid binary search tree", validateBST(root));
})();

(function testCase3() {
  const root = new Node(20);
  root.left = new Node(10);
  root.right = new Node(30);
  console.log("Is it a valid binary search tree", validateBST(root));
})();
