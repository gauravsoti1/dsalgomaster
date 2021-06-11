const printListUsingHead = require("../../../DsAlgo/ds/LinkedList/printListUsingHead")
  .default;
const { ListNode } = require("../../../DsAlgo/ds/LinkedList/LinkedList");

const convertArrayToList = require("../../../DsAlgo/ds/LinkedList/convertArrayToList")
  .default;

/*
  Algo:
  1. Use 2 pointers
  2. Iterate the first pointer k times
  3. Make sure that the second pointer starts before the first node
  4. Then iterate both the pointers until the first pointer is not null
  5. Now the second pointer will be at the node just before the node to be deleted
*/
function removeKthLastElement(head, k) {
  // We are assuming that head is present and the list contains at least k elements
  let dummyHead = new ListNode(0, head);
  let first = dummyHead.next;
  while (k > 0) {
    first = first.next;
    k--;
  }
  // here second is starting before the first element, this is important
  let second = dummyHead;
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummyHead.next;
}

(function testcase1() {
  console.log("test case 1");
  const list = convertArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const head = removeKthLastElement(list.head, 2);
  printListUsingHead(head);
  console.log();
})();

(function testcase2() {
  console.log("test case 2");
  const list = convertArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const head = removeKthLastElement(list.head, 1);
  printListUsingHead(head);
  console.log();
})();

(function testcase3() {
  console.log("test case 3");
  const list = convertArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const head = removeKthLastElement(list.head, 7);
  printListUsingHead(head);
  console.log();
})();
