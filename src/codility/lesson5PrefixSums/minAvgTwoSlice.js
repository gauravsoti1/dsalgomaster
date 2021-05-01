/*
  Got 100% in this
  I am here assuming that the slice will be either of length 2 or 3 -> Need to properly understand why this is
*/
function solution(A) {
  const totalNums = A.length;
  const sums = new Array(totalNums + 1);
  sums[0] = 0;
  for (let i = 1; i <= totalNums; i++) {
    sums[i] = sums[i - 1] + A[i - 1];
  }
  let minAverage = Number.POSITIVE_INFINITY;
  let minIndex = 0;

  for (let sliceLength = 1; sliceLength <= 2; sliceLength++) {
    for (let from = 0; from < totalNums - sliceLength; from++) {
      const to = from + sliceLength;
      const sliceSum = sums[to + 1] - sums[from];
      const average = sliceSum / (to - from + 1);
      // // console.log(`Average for ${A[from]} and ${A[to]}, range ${from} to ${to} = `, average);
      if (average < minAverage) {
        minAverage = average;
        minIndex = from;
      }
    }
  }
  return minIndex;
}
