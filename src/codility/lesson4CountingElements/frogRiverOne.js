/*
  Time Complexity: O(N)
  I scored 100% in this solution
  https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
*/
function solution(X, A) {
  const pos = new Array(X).fill(Number.POSITIVE_INFINITY);
  // from position 1 to X calculate when do we get the leave
  // the earliest
  A.forEach((a, i) => {
    pos[a - 1] = Math.min(i, pos[a - 1]);
  });
  let maxTime = Number.NEGATIVE_INFINITY;
  // We need to check for every position till X if leaf falls
  // or not
  // if leave doesn't fall then the max time will be POSITIVE_INFINITY
  for (let i = 0; i < X; i++) {
    maxTime = Math.max(maxTime, pos[i]);
  }
  return maxTime === Number.POSITIVE_INFINITY ? -1 : maxTime;
}
