/*
  Got 100% in all categories in this, even performance.
  Complexity is O(n)
*/
function solution(A) {
  const map = new Map();
  A.forEach((num) => {
    const value = map.get(num) || 0;
    const newValue = value + 1;
    map.set(num, newValue);
  });
  let result = null;
  map.forEach((value, key) => {
    if (value % 2 !== 0) result = key;
  });
  return result;
}
