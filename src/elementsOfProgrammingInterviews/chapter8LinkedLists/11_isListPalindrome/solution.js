const printListUsingHead = require("../../../DsAlgo/ds/LinkedList/printListUsingHead")
  .default;
const { ListNode } = require("../../../DsAlgo/ds/LinkedList/LinkedList");

const convertArrayToList = require("../../../DsAlgo/ds/LinkedList/convertArrayToList")
  .default;

const reverseSinglyList = require("../2_reverseASingleSublist/v_reverseSinglyLinkedList")
  .default;

function isListPalindrome(head) {
  let fast = head;
  let slow = head;
  // By this approach, slow pointer reaches the second half of the list
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let secondHalf = slow;
  let firstHalf = head;
  // // console.log("secondHalf = ", secondHalf.toString());
  secondHalf = reverseSinglyList(secondHalf);
  // when the no of elements in the list are odd, secondHalf has one more elem, which is the middle elem
  // but while comparsion it doesn't get compared as before reaching there firstHalf becomes null
  // which is what we want
  while (firstHalf !== null && secondHalf !== null) {
    if (firstHalf.value !== secondHalf.value) return false;
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
}

(function testcase1() {
  console.log("------ testcase 1 -----");
  const input = [1, 2, 3, 3, 2, 1];
  console.log("input = ", input);
  const list = convertArrayToList(input);
  const isPalindrome = isListPalindrome(list.head);
  console.log(input, " is palindrome? ", isPalindrome);
})();

(function testcase2() {
  console.log("------ testcase 2 -----");
  const input = [1, 2, 3, 4, 3, 2, 1];
  console.log("input = ", input);
  const list = convertArrayToList(input);
  const isPalindrome = isListPalindrome(list.head);
  console.log(input, " is palindrome? ", isPalindrome);
})();
