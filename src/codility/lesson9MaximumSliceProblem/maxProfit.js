function solution(A) {
  let maxProfit = 0; // 0 will be when the share is bought and sold on the same day
  const length = A.length;
  if (length === 0) return maxProfit;
  let i = 0,
    j = i + 1;
  while (i < length && j < length) {
    // the value of shares on the previous day was less than the  current day
    // so let's update the maxValue
    if (A[i] <= A[j]) maxProfit = Math.max(maxProfit, A[j] - A[i]);
    // the current smallest value that we were considering, the current value is smaller
    // than that, so we need to make sure that in the next value we consider this as our
    // smallest value
    else i = j;
    j++;
  }
  return maxProfit;
}

/*
  We can also make a max array from i to the end of the array
  Then for every index we can subtract max to the right of the current value - current value
  and see if it is greater than the max value 
*/