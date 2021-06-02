/*
   0 1 2 3 4 5 6 7
  [1,1,4,4,5,5,5,5]
  Since the array can have duplicates, when a value for example  at index 3 is greater than index (4 > 3)
  If there were no duplicates we could have easily ignored the right hand side since every value on right
  hand side would have increased by 1 and there was no chance that a value equal to index would have been
  present on the right hand side. But there could be duplicates, so we can ignore all the indices upto
  array[4] which is the value at index 3 and the consider all the cases greater than that.
  
  When array[index] < index:
  let's take index 7, now array[7] = 5 is less than index = 7.
  Ideally when there were no duplicates all the left hand side was invalid but in case of duplicates
  We have to consider left to right = array[mid] =  7 

*/

/*
  In this solution of mine I could be doing 1-2 extra comparisons
*/

function withDuplicates(array) {
  const n = array.length;
  function binarySearch(left, right) {
    // // console.log("left = ", left, "right = ", right);
    if (left > right) return -1;
    const mid = left + Math.floor((right - left) / 2);
    // // console.log("---------- mid -----------", mid);
    if (mid === array[mid]) return mid;
    else if (array[mid] > mid) {
      const rightSide = binarySearch(array[mid], right);
      const leftSide = binarySearch(left, mid - 1);
      if (rightSide !== -1) return rightSide;
      if (leftSide !== -1) return leftSide;
    } else {
      const leftSide = binarySearch(left, array[mid]);
      const rightSide = binarySearch(mid + 1, right);
      if (leftSide !== -1) return leftSide;
      if (rightSide !== -1) return rightSide;
    }
    return -1;
  }
  return binarySearch(0, n - 1);
}

const result = withDuplicates([-1, 1, 1, 6, 7, 8, 12, 14]);
console.log("result = ", result);
