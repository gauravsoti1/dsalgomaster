/*
  solution([1,-2,-3,3,-4,4,5])
  for -2, maxEnding = -1 and maxSlice = 1 
  for -3, maxEnding = -3 and maxSlice = 1 
  for 3, maxEnding = 3 and maxSlice = 3 
  for -4, maxEnding = -1 and maxSlice = 3 
  for 4, maxEnding = 4 and maxSlice = 4 
  for 5, maxEnding = 9 and maxSlice = 9 
*/
function solution(A) {
  let maxEnding = A[0],
    maxSlice = A[0];
  A.forEach((elem, index) => {
    if (index !== 0) {
      // suppose last maxEnding was -1 and the current element is 4, then maxEnding will be 4, it is like resetting from
      // 0
      maxEnding = Math.max(elem, elem + maxEnding);
      maxSlice = Math.max(maxSlice, maxEnding);
      console.log(`for ${elem}, maxEnding = ${maxEnding} and maxSlice = ${maxSlice} `)
    }
  });
  return maxSlice;
}
