/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
  This is the same as elements of programming 8.2 question
*/
var reverseBetween = function(head, left, right) {
  const dummyHead = new ListNode(0, head);
  let subListHead = dummyHead;
  let k = 1;
  while (k < left) {
    subListHead = subListHead.next;
    k++;
  }
  let current = subListHead.next;
  while (left < right) {
    const next = current.next;
    current.next = next.next;
    next.next = subListHead.next;
    subListHead.next = next;
    left++;
  }
  return dummyHead.next;
};
