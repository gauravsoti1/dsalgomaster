/*
  Time Complexity: O(n)
  Space Complexity: O(1)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function length(head) {
  let current = head;
  let length = 0;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

function advanceListByLength(length, head) {
  let current = head;
  let i = 0;
  while (i < length) {
    current = current.next;
    i++;
  }
  return current;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const lengthA = length(headA),
    lengthB = length(headB);
  if (lengthA > lengthB) headA = advanceListByLength(lengthA - lengthB, headA);
  else if (lengthB > lengthA)
    headB = advanceListByLength(lengthB - lengthA, headB);
  while (headA !== headB && headA !== null && headB !== null) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;
};
