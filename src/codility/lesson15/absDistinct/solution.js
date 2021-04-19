/*
  Got 100% in this. 
  Could have done this using two pointer approach:
  1. Storing all the abs values in the array
  2. Sorting the array
  3. Then using 2 pointer technique to find duplicates, because all of them will be together
  This solution would have been O(nlogn) which is worse than O(n), hence didn't do it

  I feel there is definitely a better solution which involves 2 pointers. 
  The python solution is the better one.
*/
function solution(A) {
  const map = new Map();
  let count = 0;
  A.forEach((value) => {
    let abs = Math.abs(value);
    if (!map.has(abs)) {
      count++;
      map.set(abs, true);
    }
  });
  return count;
}
