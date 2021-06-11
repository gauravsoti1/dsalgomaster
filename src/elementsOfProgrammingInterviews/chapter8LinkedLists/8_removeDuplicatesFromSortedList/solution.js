const printListUsingHead = require("../../../DsAlgo/ds/LinkedList/printListUsingHead")
  .default;
const { ListNode } = require("../../../DsAlgo/ds/LinkedList/LinkedList");

const convertArrayToList = require("../../../DsAlgo/ds/LinkedList/convertArrayToList")
  .default;

function removeDuplicates(head) {
  if (!head) return head;
  let prev = head;
  let current = head.next;
  while (current) {
    if (current.value === prev.value) {
      prev.next = current.next;
      current = prev.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
}

(function testcase1() {
  console.log("-------- testcase 1 --------");
  const input = [2, 2, 2, 2, 2, 4, 4, 4, 4, 6, 6, 8, 10, 10];
  console.log("input = ", input);
  const list = convertArrayToList(input);
  const head = removeDuplicates(list.head);
  console.log("result = ");
  printListUsingHead(head);
})();

(function testcase2() {
  console.log("-------- testcase 2 --------");
  const input = [1];
  console.log("input = ", input);
  const list = convertArrayToList(input);
  const head = removeDuplicates(list.head);
  console.log("result = ");
  printListUsingHead(head);
})();

(function testcase3() {
  console.log("-------- testcase 3 --------");
  const input = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  console.log("input = ", input);
  const list = convertArrayToList(input);
  const head = removeDuplicates(list.head);
  console.log("result = ");
  printListUsingHead(head);
})();

(function testcase4() {
  console.log("-------- testcase 4 --------");
  const input = null;
  console.log("input = ", input);
  const head = removeDuplicates(input);
  console.log("result = ");
  printListUsingHead(head);
})();
