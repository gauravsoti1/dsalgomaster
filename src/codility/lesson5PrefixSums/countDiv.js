/*
  Got 100% in this
  Time Complexity: logB to the base K or B/K
*/
function solution(A, B, K) {
  if (K === 1) return B - A + 1;
  let answer = 0;
  let multiple = 0;

  while (multiple <= B) {
    if (multiple >= A) answer++;
    multiple = multiple + K;
  }
  return answer;
}

// A = 5, B = 10, k = 2
/*
  0
  2
  4
  6 +1
  8 +1
  10 +1
*/