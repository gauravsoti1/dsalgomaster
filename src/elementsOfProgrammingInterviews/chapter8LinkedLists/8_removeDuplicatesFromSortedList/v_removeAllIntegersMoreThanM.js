const printListUsingHead = require("../../../DsAlgo/ds/LinkedList/printListUsingHead")
  .default;
const { ListNode } = require("../../../DsAlgo/ds/LinkedList/LinkedList");

const convertArrayToList = require("../../../DsAlgo/ds/LinkedList/convertArrayToList")
  .default;

/*
  Remove all the integers which occur more than m times
*/

function removeAllWhichOccurMoreThanM(head, m) {
  if (!head) return head;
  const dummyHead = new ListNode(-1, head);
  const counts = new Map();
  const toRemove = new Set();
  let current = dummyHead.next;
  // --- Make toRemove set ---------
  while (current) {
    const count = counts.get(current.value) || 0;
    const newCount = count + 1;
    counts.set(current.value, newCount);
    if (newCount > m) toRemove.add(current.value);
    current = current.next;
  }
  // ------------------
  current = dummyHead.next;
  let prev = dummyHead;
  while (current) {
    if (toRemove.has(current.value)) {
      prev.next = current.next;
      current = prev.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummyHead.next;
}

(function testcase1() {
  console.log("-------- testcase 1 --------");
  const input = [2, 2, 2, 2, 2, 4, 4, 4, 4, 6, 6, 8, 10, 10];
  console.log("input = ", [input, 0]);
  const list = convertArrayToList(input);
  const head = removeAllWhichOccurMoreThanM(list.head, 0);
  console.log("result = ");
  printListUsingHead(head);
})();

(function testcase2() {
  console.log("-------- testcase 2 --------");
  const input = [1];
  console.log("input = ", [input, 3]);
  const list = convertArrayToList(input);
  const head = removeAllWhichOccurMoreThanM(list.head, 3);
  console.log("result = ");
  printListUsingHead(head);
})();

(function testcase3() {
  console.log("-------- testcase 3 --------");
  const input = [2, 8, 4, 2, 6, 4, 2, 2, 2, 3, 2, 2, 2, 2, 2];
  console.log("input = ", [input, 1]);
  const list = convertArrayToList(input);
  const head = removeAllWhichOccurMoreThanM(list.head, 1);
  console.log("result = ");
  printListUsingHead(head);
})();

(function testcase4() {
  console.log("-------- testcase 4 --------");
  const input = null;
  console.log("input = ", input);
  const head = removeAllWhichOccurMoreThanM(input, 1);
  console.log("result = ");
  printListUsingHead(head);
})();
