// leetcode problem: https://leetcode.com/problems/kth-largest-element-in-an-array/

function getPivotIndex(arr = []) {
  return Math.floor(Math.random() * arr.length);
}

function partition(arr = [], pivotIndex) {
  const left = [],
    right = [];
  const pivot = arr[pivotIndex];
  arr.forEach((elem, index) => {
    if (index === pivotIndex) return;
    if (elem < pivot) left.push(elem);
    else right.push(elem);
  });
  return { left, pivot, right };
}

function quickSort(arr = []) {
  if (arr.length < 2) return arr;
  const pivotIndex = getPivotIndex(arr);
  const { left, pivot, right } = partition(arr, pivotIndex);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const sortedArray = quickSort(nums);
  return sortedArray[sortedArray.length - k];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output should be 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output should be 4
