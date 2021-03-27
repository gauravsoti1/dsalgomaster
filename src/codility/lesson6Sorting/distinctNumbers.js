
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = new Map(), length = A.length;
  for (let i = 0; i < length; i++){
      const currentValue = map.get(A[i]);
      map.set(A[i], currentValue ? currentValue + 1 :  1);
  }
  return map.size;
}
