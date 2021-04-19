/*
  Got 100% in this
  Time Complexity: O(N)

  Explanation: 
    for every index, I calculate total number of cars travelling east
    Then I loop through array to find the cars travelling west,
    now the pairs will be the total number of cars here that are 
    travelling east. i.e. this car travelling west will meet all cars
    before it which are travelling east.
*/
function solution(A) {
  const totalCars = A.length;
  const carsTravellingEast = new Array(totalCars + 1).fill(0);
  for (let i = 1; i <= totalCars; i++) {
    carsTravellingEast[i] = carsTravellingEast[i - 1];
    if (A[i - 1] === 0) carsTravellingEast[i] = carsTravellingEast[i] + 1;
  }
  let pairs = 0;
  for (let i = 0; i < totalCars; i++) {
    if (A[i] === 1) pairs += carsTravellingEast[i];
  }
  return pairs > 1000000000 ? -1 : pairs;
}
