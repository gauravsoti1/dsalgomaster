const { ListNode } = require("../../../DsAlgo/ds/LinkedList/LinkedList");
const convertArrayToList = require("../../../DsAlgo/ds/LinkedList/convertArrayToList")
  .default;
const printListUsingHead = require("../../../DsAlgo/ds/LinkedList/printListUsingHead")
  .default;

function reverseSubList(head, start, finish) {
  if (start === finish) return head;
  const dummyHead = new ListNode(0, head);
  let subListHead = dummyHead;
  let k = 1;
  while (k < start) {
    subListHead = subListHead.next;
    k++;
  }
  let current = subListHead.next;
  // // console.log(subListHead.toString());
  printListUsingHead(dummyHead.next);
  while (start < finish) {
    const next = current.next;
    // // console.log(
    // //   "sublistHead = ",
    // //   subListHead?.value,
    // //   "current = ",
    // //   current?.value,
    //  //  "next = ",
    // //   next?.value
    // // );
    current.next = next.next;
    next.next = subListHead.next;
    subListHead.next = next;
    start++;
    // // printListUsingHead(dummyHead.next);
  }
  return dummyHead.next;
}

const list = convertArrayToList([1, 2, 3, 4, 5]);
const head = reverseSubList(list.head, 2, 4);
console.log("input = ", [1, 2, 3, 4, 5].join(" -> "), 2, 4);
console.log("------------ result ------------ ");
printListUsingHead(head);

module.exports = {
  default: reverseSubList,
};
