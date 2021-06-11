const { ListNode } = require("../../../DsAlgo/ds/LinkedList/LinkedList");
const convertArrayToList = require("../../../DsAlgo/ds/LinkedList/convertArrayToList")
  .default;
const printListUsingHead = require("../../../DsAlgo/ds/LinkedList/printListUsingHead")
  .default;

function reverseSinglyList(head) {
  const dummyHead = new ListNode(0, head);
  let subListHead = dummyHead;
  let current = subListHead.next;
  printListUsingHead(dummyHead.next);
  while (current && current.next) {
    const next = current.next;
    current.next = next.next;
    next.next = subListHead.next;
    subListHead.next = next;
  }
  return dummyHead.next;
}

(function testcase1() {
  console.log("-------- testcase 1 -------");
  const list = convertArrayToList([1, 2, 3, 4, 5]);
  const head = reverseSinglyList(list.head);
  console.log("input = ", [1, 2, 3, 4, 5].join(" -> "));
  console.log("------------ result ------------ ");
  printListUsingHead(head);
})();

(function testcase2() {
  console.log("-------- testcase 2 -------");
  const head = reverseSinglyList(null);
  console.log("input = ", null);
  console.log("------------ result ------------ ");
  console.log(head);
})();

(function testcase3() {
  console.log("-------- testcase 3 -------");
  const list = convertArrayToList([5]);
  const result = reverseSinglyList(list.head);
  console.log("input = ");
  printListUsingHead(list.head);
  console.log("------------ result ------------ ");
  printListUsingHead(result);
})();

module.exports = {
  default: reverseSinglyList,
};
