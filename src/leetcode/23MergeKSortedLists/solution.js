/* 
    Definition for singly-linked list.
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/*
  This is my brute force solution

  Time complexity : O(NlogN) where N is the total number of nodes.

      Collecting all the values costs O(N) time.
      A stable sorting algorithm costs O(Nlog⁡N)O(N\log N)O(NlogN) time.
      Iterating for creating the linked list costs O(N) time.

  Space complexity : O(N).

      Sorting cost O(N) space (depends on the algorithm you choose).
      Creating a new linked list costs O(N) space.  
*/
var mergeKLists = function(lists) {
  const combinedArray = convertListsIntoArray(lists);
  combinedArray.sort((a, b) => a - b);
  const head = convertArrayIntoLinkedList(combinedArray);
  return head;
};

function convertArrayIntoLinkedList(array) {
  let head = null;
  let current = null;
  array.forEach((value, index) => {
    const node = new ListNode(value);
    if (index === 0) {
      head = node;
      current = head;
    } else {
      current.next = node;
      current = node;
    }
  });
  return head;
}

function convertListsIntoArray(lists) {
  const combinedArray = [];
  lists.forEach((list, index) => {
    let current = list;
    while (current) {
      combinedArray.push(current.val);
      current = current.next;
    }
  });
  return combinedArray;
}
