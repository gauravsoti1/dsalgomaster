function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// this solution is not complete

var mergeKLists = function(lists) {
  let i = 1;
  let head = lists[0];
  while (head && i < lists.length) {
    head = mergeTwoLists(head, lists[i]);
    i++;
  }
  return head;
};

function mergeTwoLists(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list2) return list1;
  if (!list1) return list2;
  let head;
  let head1 = list1,
    head2 = list2;
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      if (!head) head = head1;
      else head.next = head1;
      head1 = head1.next;
    } else {
      if (!head) head = head2;
      else head.next = head2;
      head2 = head2.next;
    }
  }
  if (head1) head.next = head1;
  if (head2) head.next = head2;
  return head;
}
