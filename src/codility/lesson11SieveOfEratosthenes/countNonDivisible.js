// Got 100% in this
// Time Complexity: O(N * sqrt(max value in A))
function calculateNoOfNonDivisors(N, map, maxDivisors) {
  let index = 1,
    numberOfDivisors = maxDivisors;
  // // console.log("calculating for ", N, " maxDivisors = ", numberOfDivisors);
  while (index * index < N) {
    if (N % index === 0) {
      // if current diviser is present in map, then subtract from total divisers from total divisers no of times it came
      if (map[index]) {
        // // console.log(`${index} is present in map`)
        numberOfDivisors = numberOfDivisors - map[index];
      }
      // if symmetric diviser is present in map, then subtract from total divisers no of times it came
      if (map[N / index]) {
        // // console.log(`${N/index} is present in map`)
        numberOfDivisors = numberOfDivisors - map[N / index];
      }
    }
    index++;
  }
  // do the same if it has a perfect square as well
  if (index * index === N && map[index]) {
    // // console.log(`${index} is present in map`)
    numberOfDivisors = numberOfDivisors - map[index];
  }
  return numberOfDivisors;
}

function solution(A) {
  const map = {};
  A.forEach((n) => (map[n] = map[n] === undefined ? 1 : map[n] + 1));
  // // console.log(map);
  const maxDivisors = A.length;
  const result = A.map((n) => calculateNoOfNonDivisors(n, map, maxDivisors));
  return result;
}
