/*
  Time Complexity: O(N)
  https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

  An array is a permutation if each number from 1 to N exists

  Scored 100% in this solution
*/
function solution(A) {
  const length = A.length;
  const count = new Array(length).fill(0);
  // We count occurence of every element
  A.forEach((a,i) => {
      count[a-1] = count[a-1]+1;
  })
  for (let i = 0; i < length; i++){
      // if any element is zero, then that means that the
      // array is not a permutation
      if (count[i] === 0)
          return 0;
  }
  // no element was zero, that means every element existed
  // at least once, hence returning 1
  return 1;
}