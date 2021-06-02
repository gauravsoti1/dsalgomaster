function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function minimalTree(array = []) {
  return buildBST(0, array.length - 1, array);
}

function buildBST(left, right, array) {
  if (left > right) return null;
  const mid = Math.floor((left + right) / 2);
  const root = new Node(array[mid]);
  root.left = buildBST(left, mid - 1, array);
  root.right = buildBST(mid + 1, right, array);
  return root;
}

function inOrder(root, traversal = []) {
  if (!root) return null;
  inOrder(root.left, traversal);
  traversal.push(root.value);
  inOrder(root.right, traversal);
}

(function testCase1() {
  const root = minimalTree([1, 2, 3, 4, 5]);
  const traversalResult = [];
  inOrder(root, traversalResult);
  console.log("inorder traversal result = ", traversalResult.join(","));
})();
