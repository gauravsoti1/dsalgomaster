const convertArrayToList = require("../../../DsAlgo/ds/LinkedList/convertArrayToList")
  .default;
const printListUsingHead = require("../../../DsAlgo/ds/LinkedList/printListUsingHead")
  .default;

/*
  indexing starts at 1
*/
function reverseSublist(head, fromI, toI) {
  let index = 1;
  let prev = null;
  let current = head;
  let next = null;
  let first = null;
  let last = null;
  let before = null;
  while (current && index <= toI) {
    if (index === fromI) {
      first = current;
      before = prev;
    } else if (index === toI) last = current;
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    index++;
  }
  if (before) before.next = last;
  first.next = current;
  return fromI === 1 ? last : head;
}

(function testcase1() {
  const list = convertArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const head = reverseSublist(list.head, 2, 5);
  printListUsingHead(head);
})();

(function testcase2() {
  const list = convertArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const head = reverseSublist(list.head, 1, 4);
  printListUsingHead(head);
})();

(function testcase3() {
  const list = convertArrayToList([1, 2, 3, 4, 5, 6, 7]);
  const head = reverseSublist(list.head, 1, 7);
  printListUsingHead(head);
})();
