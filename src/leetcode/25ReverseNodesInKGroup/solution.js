/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// group is valid when it has at least k nodes
function isGroupValid(groupHead, k) {
  let current = groupHead;
  let count = 0;
  while (current && count !== k) {
    count++;
    current = current.next;
  }
  return count === k;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/*
  O(1) space complexity
  I needed to look at linked list reverse mechanism for a short while
  but solved this question on my own\
*/
var reverseKGroup = function(head, k) {
  let current = head;
  let prev = null;
  let prevGroupEnd = null;
  let isFirstGroup = true;
  while (current) {
    if (isGroupValid(current, k)) {
      // // console.log("group is valid for ", current.val);
      let currentGroupCount = 0;
      let groupEnd = current;
      // Reversing sub group
      while (currentGroupCount < k) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        currentGroupCount++;
      }
      // just making the names readable for correcting the connections
      const groupStart = prev;
      const nextGroupStart = current;
      // making sure we have the right connections
      if (prevGroupEnd) prevGroupEnd.next = groupStart;
      groupEnd.next = nextGroupStart;
      // // console.log("group end = ", groupEnd.val, "groupStart = ", groupStart.val);
      prevGroupEnd = groupEnd;
      if (isFirstGroup) {
        head = groupStart;
        isFirstGroup = false;
      }
    } else break;
  }
  return head;
};
