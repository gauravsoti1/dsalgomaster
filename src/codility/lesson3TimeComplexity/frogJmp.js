/*
  Time Complexity: O(1)
*/
function solution(X, Y, D) {
  const answer = Math.ceil((Y - X) / D);
  return answer;
}
