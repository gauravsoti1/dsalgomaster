/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */



/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let current = head;
  while(current){
    if (current.val === Number.POSITIVE_INFINITY)
      return true;
    current.val = Number.POSITIVE_INFINITY;
    current = current.next;
  }
  return false;
};