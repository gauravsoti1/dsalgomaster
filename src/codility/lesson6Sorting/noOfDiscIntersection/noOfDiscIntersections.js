/*
  This is not my solution but I tried to properly understand this
  and make the code readable
  Got 100% in this
*/
function solution(A) {
  // main idea:
  // 1. store all the "lower points" and "upper points" of the discs
  // 2. count the intersections (because of active discs)
  // active discs are the discs which started in the lower array but have not ended yet in the upper array
  // they will end as soon as the value in lower array becomes more than the one of the values in upper array

  // note: use "long" for big numbers (be careful)
  const lower = new Array(A.length);
  const upper = new Array(A.length);

  for (let i = 0; i < A.length; i++) {
    lower[i] = i - A[i]; // note: lower = center - A[i]
    upper[i] = i + A[i]; // note: upper = center + A[i]
  }

  // "sort" the "lower points" and "upper points"
  lower.sort((a, b) => a - b);
  upper.sort((a, b) => a - b);

  let intersection = 0; // number of intersections
  let j = 0; // for the lower points

  // scan the upper points
  upper.forEach((upperPoint, i) => {
    while (j < A.length && upper[i] >= lower[j]) {
      const activeDiscs = j - i; // that is the discs that have not yet ended
      intersection += activeDiscs; // add j intersections
      j++;
    }
  });

  // for the overflow cases
  if (intersection > 10000000) return -1;

  return intersection; // number of intersections
}
