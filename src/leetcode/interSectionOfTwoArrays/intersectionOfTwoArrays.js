function ascendingSort(a, b) {
  return a - b;
}

function areArraysNotOutOfBonds(i, j, length1, length2) {
  return i < length1 && j < length2;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const length1 = nums1.length,
    length2 = nums2.length;
  nums1.sort(ascendingSort);
  nums2.sort(ascendingSort);
  let i = 0,
    j = 0;
  const result = [];
  while (areArraysNotOutOfBonds(i, j, length1, length2)) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else j++;
  }
  return result;
};
