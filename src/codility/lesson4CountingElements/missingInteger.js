/*
  Time Complexity: O(N)
  Space Complexity: O(N)
  Scored 100% in this
*/
function solution(A) {
  const positiveCounters = [];
  // Since we need smallest positive number greater than 0
  // We don't need to check which negative numbers are there
  // ONly updating the occurence of each positive number
  A.forEach((a, index) => {
    if (a > 0)
      positiveCounters[a] = positiveCounters[a] ? positiveCounters[a] + 1 : 1;
  });
  // starting from 1, when we get the smallest number that is not 
  // present, we need to return that number
  for (let i = 1; i < positiveCounters.length; i++) {
    if (positiveCounters[i] === undefined) return i;
  }
  /* 
    we couldn't find the smallest number, that means
    the array was something like this: 1,2,3,4,5,6,7
    Hence now we need to return 8 which is the length of 
    this array
    But when the length is 0 which is possible in the case
    when the array contained negative numbers like
    [−1, −3], the function should return 1 because 1 is the
    smallest missing number greater than 0. In this case
    since we are not counting negative numbers, our
    array would be of length 0, since 0 is falsy in Javascript
    we have || 1
  */
  return positiveCounters.length || 1;
}
