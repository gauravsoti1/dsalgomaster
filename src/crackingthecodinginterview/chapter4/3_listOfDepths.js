function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function listOfDepths(root) {
  const list = [];
  if (!root) return list;
  const queue = [root];
  while (queue.length > 0) {
    const remainingCurrentLevelNodes = queue.length;
    let current = null,
      linkedListRoot = null;
    for (let i = 0; i < remainingCurrentLevelNodes; i++) {
      const treeNode = queue.shift();
      const listNode = new LinkedListNode(treeNode.value);
      if (i === 0) {
        linkedListRoot = listNode;
        current = linkedListRoot;
      } else {
        current.next = listNode;
        current = current.next;
      }
      if (treeNode.left) queue.push(treeNode.left);
      if (treeNode.right) queue.push(treeNode.right);
    }
    list.push(linkedListRoot);
  }
  return list;
}

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function printResult(list) {
  list.forEach((item) => {
    let current = item;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  });
}

(function testCase1() {
  console.log("----------test case 1---------");
  const root = new BinaryTreeNode(1);
  root.left = new BinaryTreeNode(2);
  root.right = new BinaryTreeNode(3);
  const result = listOfDepths(root);
  console.log("result = ");
  printResult(result);
})();
