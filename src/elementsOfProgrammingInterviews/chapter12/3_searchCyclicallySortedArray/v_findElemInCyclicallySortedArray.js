const { runTest } = require("../../../helper/runTest");

/*
  All input values will be distinct
*/
function findElem(array, toFind) {
  const n = array.length;
  let left = 0,
    right = n - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = array[mid];
    const rightValue = array[right];
    const leftValue = array[left];
    if (midValue === toFind) return mid;
    if (midValue < toFind) {
      if (rightValue < toFind) right = mid - 1;
      else if (rightValue > toFind) left = mid + 1;
      else return right;
    } else {
      if (leftValue > toFind) left = mid + 1;
      else if (leftValue < toFind) right = mid - 1;
      else return left;
    }
  }
  return -1;
}

const testInputs = [
  [[3, 4, 1, 2], 2],
  [[1, 20, 32, 49], 1],
  [[3, 4, 2], 4],
  [[6999, 77777, 999321, 2222, 3232], 2222],
];

const expectedResults = [3, 0, 1, 3];

runTest({ fn: findElem, testInputs, expectedOutputs: expectedResults });
