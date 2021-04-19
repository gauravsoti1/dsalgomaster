/*
  Time Complexity: O(N * log(N))
  Got 100% in this
*/
function solution(array) {
  const N = array.length;
  array.sort((a, b) => a - b);
  // console.log("sorted array = ", A);
  let tail = 0;
  let head = N - 1;
  let minAbsSum = Math.abs(array[tail] + array[head]);
  while (tail <= head) {
    let currentSum = array[tail] + array[head];
    // // console.log(`left = ${A[tail]}, right = ${A[head]}, currentSum = ${currentSum}, minabsSum = ${minAbsSum}`)
    minAbsSum = Math.min(minAbsSum, Math.abs(currentSum));
    // If the sum has become
    // positive, we should know that the head can be moved left
    // because then only there is the possibility that the abs sum will decrease
    // example for array [-5,-3,-2,1,4,5], we are considering -3 and 4 (abs sum for them is 1, and normal sum is also 1)
    // if we next consider -2 and 4, current sum actually increases to 2 but if we consider
    // -3 and 1, current sum is -2, as we can see moving left pointer towards right decreased the sum
    if (currentSum <= 0) {
      // // console.log("moving towards right")
      tail++;
    } else {
      head--;
      // //console.log("moving towards left")
    }
  }
  return minAbsSum;
}
