function Node(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function findFirstCommonAncestor(root, node1, node2) {
  if (!root) return null;

  function findNode(current) {
    if (!current) return false;
    // // console.log("current = ", current.value);
    if (current === node1 || current === node2) {
      const leftRes = findNode(current.left);
      const rightRes = findNode(current.right);
      if (leftRes === true || rightRes === true) return "parent";
      else return true;
    }
    const leftRes = findNode(current.left);
    const rightRes = findNode(current.right);
    if (leftRes === "parent" || rightRes === "parent") return current;
    if (typeof leftRes === "object") return leftRes;
    if (typeof rightRes === "object") return rightRes;
    if (leftRes === true && rightRes === true) return current;
    if (leftRes === true || rightRes === true) return true;
    return false;
  }

  return findNode(root);
}

(function testCase1() {
  console.log("-------------- testcase 1 ---------------");
  const root = new Node(8);
  const left = new Node(1);
  const right = new Node(2);
  root.left = left;
  root.right = right;
  const result = findFirstCommonAncestor(root, left, right);
  console.log("result = ", result?.value); // result should be 8
})();

(function testCase2() {
  console.log("-------------- testcase 2 ---------------");
  const root = new Node(8);
  const left = new Node(1);
  const leftleft = new Node(2);
  const leftleftleft = new Node(3);
  root.left = left;
  left.left = leftleft;
  leftleft.left = leftleftleft;
  const result = findFirstCommonAncestor(root, leftleft, leftleftleft);
  console.log("result = ", result?.value); // result should be 1
})();

(function testCase2() {
  console.log("-------------- testcase 3 ---------------");
  const root = new Node(8);
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const seven = new Node(7);
  const five = new Node(5);
  const six = new Node(6);
  const nine = new Node(9);
  const four = new Node(4);
  root.left = one;
  root.right = two;
  one.left = three;
  one.right = seven;
  three.left = five;
  three.right = six;
  seven.right = nine;
  two.right = four;
  const result = findFirstCommonAncestor(root, five, nine);
  console.log("result = ", result?.value); // result should be 1
})();
