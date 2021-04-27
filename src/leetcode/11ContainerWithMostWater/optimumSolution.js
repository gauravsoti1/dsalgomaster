/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0,
    right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const leftValue = height[left];
    const rightValue = height[right];
    const area = (right - left) * Math.min(leftValue, rightValue);
    maxArea = Math.max(maxArea, area);
    // area will only increase if we go inside and we get a larger value than our current smaller one
    if (leftValue < rightValue) left++;
    else right--;
  }
  return maxArea;
};

/*
  Time Complexity: O(n)
*/