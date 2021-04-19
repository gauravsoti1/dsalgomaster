/*
  I got 53% in this
*/

function calculateSumOfSlice(array, x, y, z) {
  let sum = 0;
  for (let i = x + 1; i <= y - 1; i++) {
    sum += array[i];
  }
  for (let i = y + 1; i <= z - 1; i++) {
    sum += array[i];
  }
  return sum;
}

function solution(A) {
  let maxSum = Number.NEGATIVE_INFINITY;
  const length = A.length;
  let lastValue = 0;
  for (let x = 0; x < length - 2; x++) {
    for (let y = x + 1; y < length - 1; y++) {
      for (let z = y + 1; z < length; z++) {
        if (z === y + 1) {
          lastValue = calculateSumOfSlice(A, x, y, z);
          maxSum = Math.max(maxSum, lastValue);
        } else {
          lastValue = lastValue + A[z - 1];
          maxSum = Math.max(maxSum, lastValue);
        }
      }
    }
  }
  return maxSum;
}
