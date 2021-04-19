/*
  Time complexity = O(sqrt(N))

*/
function solution(N) {
  let index = 1;
  let noOfDivisers = 0;
  while (index * index < N) {
    /* here we are adding 2 because if the current number divides N,
      there will be a symmetric number equal to N/index which also divides N
      For ex: if 2 divides 10, then 10/2 = 5 also divides 10 which is greater
      than sqrt(10) and won't be considered in the loop
    */
    if (N % index === 0) noOfDivisers += 2;
    index++;
  }
  // ex: say N = 25, then the above loop will stop at index = 4 
  // now 5 * 5 is also 25, hence 5 is also a factor, so we are adding 1
  if (index * index === N) noOfDivisers += 1;
  return noOfDivisers;
}
