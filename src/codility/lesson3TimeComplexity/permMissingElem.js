/*
  Time Complexity: O(N)
  Got 100% in this
*/
function solution(array) {
  const totalElem = array.length;
  const sum = array.reduce((currentSum, elem) => currentSum + elem, 0);
  const expectedSum = ((totalElem + 1) * (totalElem + 2)) / 2;
  return expectedSum - sum;
}
