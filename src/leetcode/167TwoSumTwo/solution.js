/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0,
    right = numbers.length;
  while (left < right) {
    const leftValue = numbers[left];
    const rightValue = numbers[right];
    if (leftValue + rightValue === target) return [left + 1, right + 1];
    else if (leftValue + rightValue < target) left++;
    else right--;
  }
};


/*

  Time Complexity: O(n)

*/