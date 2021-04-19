/*
  We can use Kadane’s algorithm from two directions. First, we can safely ignore A[0] and A[N-1] since by definition they can’t be a part of any double-slice sum.
  Now, define K1[i] as the maximum sum contiguous subsequence ending at index i, and similarly, define K2[i] as the maximum sum contiguous subsequence starting with index i.
  Then, iterate over i, and find the maximum sum of K1[i-1]+K2[i+1]. This is the max double slice sum.
*/
/*
  This is the optimal O(N) solution, got 100% in this
*/
function solution(A) {
  let N = A.length;
  let K1 = new Array(N).fill(0);
  let K2 = new Array(N).fill(0);
  // store max contagious sum at each position from left
  // starting from 1 because 0 can't be in the slice according to
  // the question
  for (let i = 1; i < N - 1; i++) {
    K1[i] = Math.max(K1[i - 1] + A[i], 0);
  }
  // store max contagious sum at each position from right
  for (let i = N - 2; i > 0; i--) {
    K2[i] = Math.max(K2[i + 1] + A[i], 0);
  }
  //   console.log(K1, K2);

  let max = 0;
  // now the max sum of double slice will be the sum of
  // maxcontagious sum before i and after i
  for (let i = 1; i < N - 1; i++) {
    max = Math.max(max, K1[i - 1] + K2[i + 1]);
  }

  return max;
}
