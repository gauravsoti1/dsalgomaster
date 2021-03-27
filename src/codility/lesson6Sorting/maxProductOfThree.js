function solution(A) {
  // sorting, now all the max elements will be at the end
  A.sort((a,b) => a-b);
  const length = A.length;
  // Getting the max positive product
  const maxPositive = A[length-1] * A[length-2] * A[length-3];
  let maxNegPositive = Number.NEGATIVE_INFINITY;
  // There will be a scenario when there are 2 or more negative
  // numbers in the array. Example: [-5,-2,1,2,3]
  // as we can see -5 * -2 * 3 = 30 is greater than 1 * 2 * 3 = 6
  if (A[0] < 0 && A[1] < 0 && A[length-1] > 0) 
       maxNegPositive = A[0] * A[1] * A[length-1];
  return Math.max(maxPositive, maxNegPositive);
}