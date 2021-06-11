const {
  default: LinkedList,
  ListNode,
} = require("../../../DsAlgo/ds/LinkedList/LinkedList");
const convertArrayToList = require("../../../DsAlgo/ds/LinkedList/convertArrayToList")
  .default;

function mergeTwoSortedLists(head1, head2) {
  // let dummyHead = new ListNode
  const dummyHead = new ListNode();
  let current = dummyHead;
  let p1 = head1,
    p2 = head2;
  while (p1 && p2) {
    if (p1.value < p2.value) {
      current.next = p1;
      p1 = p1.next;
    } else {
      current.next = p2;
      p2 = p2.next;
    }
    current = current.next;
  }
  current.next = p1 !== null ? p1 : p2;
  return dummyHead.next;
}

const list1 = convertArrayToList([1, 3, 5, 7, 8]);
const list2 = convertArrayToList([0, 2, 4, 8, 11, 22]);
const mergedList = new LinkedList(mergeTwoSortedLists(list1.head, list2.head));
mergedList.print();
