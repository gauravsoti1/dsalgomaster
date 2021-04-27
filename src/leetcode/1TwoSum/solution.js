/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const remainingTargetIndexMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const remainingTarget = target - nums[i];
    // current element is equal to the difference required
    if (remainingTargetIndexMap.has(nums[i]))
      return [remainingTargetIndexMap.get(nums[i]), i];
    // storing the difference required in hashmap with the index of current element
    else remainingTargetIndexMap.set(remainingTarget, i);
  }
};
