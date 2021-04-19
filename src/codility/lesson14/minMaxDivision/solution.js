// We check here if we consider the maxSum, then
// how many blocks will be there with sum less than maxSum
function getNoOfBlocksForSum(array, maxSum) {
  let numBlocks = 1,
    currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
    /* current sum is greater than maxSum
       reset the value of sum to the current array element
       increase number of blocks
    */
    if (currentSum > maxSum) {
      numBlocks++;
      currentSum = array[i];
    }
  }
  return numBlocks;
}

/*
  Got 100% in this
*/
function solution(numBlocks, M, array) {
  if (M === 0) return 0;
  let maxSum = array.reduce((sum, a) => sum + a, 0);
  // We are only allowed one block, hence the minimum value
  // of large sum will be the total sum of the array
  if (numBlocks === 1) return maxSum;
  let minSum = Math.max(...array);
  // At the start considering that the result is the total sum of the array
  let result = maxSum;
  while (minSum <= maxSum) {
    const mid = Math.floor((minSum + maxSum) / 2);
    const possibleNumBlocks = getNoOfBlocksForSum(array, mid);
    if (possibleNumBlocks <= numBlocks) {
      /* 
        for the mid value, we could properly divide the array
        now we will set our result to mid and then again consider
        even smaller value
      */
      result = mid;
      maxSum = mid - 1;
    } else {
      minSum = mid + 1;
    }
  }
  return result;
}
