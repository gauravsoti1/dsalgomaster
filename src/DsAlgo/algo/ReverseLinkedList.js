const { default: LinkedList } = require("DsAlgo/ds/LinkedList");

// 1 -> 2 -> 3 -> 4 -> 5
// 1 <- 2 <- 3 <- 4 <- 5
function reverse(list) {
  const head = list.head;
  let current = head,
    previous = null;
  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  list.head = previous;
  list.print();
}

function reverseSubList(list, start, end) {
  if (start < 1 || end > list.size)
    throw new Error(`No sublist exists from index ${start} and ${end}`);
  console.log(
    "%c Reversing list from " + start + " to " + end + " position",
    "color: orange; font-size: 1.2rem;"
  );
  if (start >= end) return;

  list.print();

  let current = list.head,
    previous = null;
  let index = 1;
  let firstBeforeStart, firstAfterEnd, subListStartNode, subListEndNode;
  while (current) {
    if (index < start || index > end) {
      if (index === start - 1) firstBeforeStart = current;
      if (index === end + 1) firstAfterEnd = current;
      current = current.next;
    } else {
      if (index === start) subListStartNode = current;
      else if (index === end) subListEndNode = current;
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    index++;
  }
  if (firstBeforeStart) firstBeforeStart.next = subListEndNode;
  else list.head = subListEndNode;
  if (subListStartNode) subListStartNode.next = firstAfterEnd;

  list.print();
  // list's head should already be in a sorted position
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

// list.print();
// reverse(list);
// reverseK(list);
// reverseSubList(list, 2, 4);
reverseSubList(list, 1, 3);
reverseSubList(list, 3, 5);
reverseSubList(list, 5, 5);
