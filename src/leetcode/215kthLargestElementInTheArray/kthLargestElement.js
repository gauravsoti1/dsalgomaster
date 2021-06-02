function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/*
  Since we expect to reduce the number of elements to process by roughly half, the
  average time complexity T(n) satisfies T(n) = 0(n)+ T(n/ 2). This solves to T(n) = 0(n).
  The space complexity is (9(1). The worst-case time complexity is 0(n2), which occurs
  when the randomly selected pivot is the smallest or largest element in the current
  subarray. The probability of the worst-case reduces exponentially with the length
  of the input array, and the worst-case is a nonissue in practice. For this reason, the
  randomize selection algorithm is sometimes said to have almost certain 0(n) time
  complexity.
*/
var findKthLargest = function(nums, k) {
  let left = 0,
    right = nums.length - 1;
  if (k - 1 > right) return -1;
  while (left <= right) {
    const pivotIndex = getRandomIntInclusive(left, right);
    const newPivotIndex = reOrderAccordingToPivot(
      nums,
      pivotIndex,
      left,
      right
    );
    // we found the greatest element
    if (newPivotIndex === k - 1) {
      return nums[newPivotIndex];
    }
    // our pivotIndex is greater than what is required hence we need to shorten the array from
    // right and find all the numbers in the elements which were greater than the pivot
    else if (newPivotIndex > k - 1) {
      right = newPivotIndex - 1;
    } else {
      left = newPivotIndex + 1;
    }
  }
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
// all the elements greater than pivot will come to left
// and smaller than pivot will come to right
function reOrderAccordingToPivot(nums, pivotIndex, left, right) {
  let nPi = left;
  const pivot = nums[pivotIndex];
  swap(nums, pivotIndex, right);
  // // console.log("pivot = ", pivot, "left = ", left, "right = ", right);
  for (let i = left; i <= right; i++) {
    if (nums[i] > pivot) {
      swap(nums, i, nPi);
      nPi++;
    }
  }
  swap(nums, nPi, right);
  // // console.log("after = ", nums, "nPi = ", nPi);
  return nPi;
}
