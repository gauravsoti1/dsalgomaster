/*
  https://leetcode.com/problems/search-a-2d-matrix-ii/submissions/
  240. Search a 2D Matrix II
  Medium

  Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

      Integers in each row are sorted in ascending from left to right.
      Integers in each column are sorted in ascending from top to bottom.

  Example:

  Consider the following matrix:

  [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]

  Given target = 5, return true.

  Given target = 20, return false.

*/

// row can only contain target if the target is greater than or equal to the first value
// or less than or equal to the last value
function canRowContainTarget(row = [], target) {
  if (row.length === 0) return false;
  return row[0] <= target && target <= row[row.length - 1];
}

function binarySearch(arr, target) {
  let start = 0,
    end = arr.length;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) return true;
    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let result = false;
  // go throw every row, if that row can contain the target, use binary search on it
  // therefore the time complexity of this algorithm will be O(n * logn(n))
  matrix.forEach((row) => {
    if (canRowContainTarget(row, target)) {
      if (binarySearch(row, target)) result = true;
    }
  });
  return result;
};

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 1;

searchMatrix(matrix, target);

// practiced coding it again
function binarySearch1(arr, target) {
  const length = arr.length;
  let start = 0,
    end = length,
    mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (target > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
