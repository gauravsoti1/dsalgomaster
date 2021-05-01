// For large values, I was getting out of memory error
// because I can't have an array of size 10^9
var maxValue = function(totalElem, maxSumIndex, maxSum) {
  const array = new Array(totalElem).fill(1);
  let sum = totalElem;
  let currentSum = sum;
  // let answer = array[maxSumIndex];
  while (currentSum <= maxSum) {
    // sum = Math.max(sum,currentSum);
    array[maxSumIndex] += 1;
    const newValue = array[maxSumIndex];
    currentSum += 1;
    if (currentSum > maxSum) return array[maxSumIndex] - 1;
    if (array[maxSumIndex] > 2) {
      let leftIndex = maxSumIndex - 1;
      let numIterationsLeft = newValue - 2;
      while (numIterationsLeft > 0 && leftIndex >= 0) {
        array[leftIndex] += 1;
        numIterationsLeft--;
        leftIndex--;
        currentSum++;
      }
      if ((leftIndex < 0 && numIterationsLeft > 0) || currentSum > maxSum)
        return array[maxSumIndex] - 1;

      let rightIndex = maxSumIndex + 1;
      let numIterationsRight = newValue - 2;

      while (numIterationsRight > 0 && rightIndex < totalElem) {
        array[leftIndex] += 1;
        numIterationsRight--;
        rightIndex++;
        currentSum++;
      }
      if (
        (rightIndex >= totalElem && numIterationsRight > 0) ||
        currentSum > maxSum
      )
        return array[maxSumIndex] - 1;
    }
  }
  return array[maxSumIndex];
};

const answer = maxValue(888888999, 100000, 999999999);
console.log("answer = ", answer);
