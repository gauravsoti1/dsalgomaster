/*
  All the game is to reduce the complexity of 
  sumRange because the array can be huge
  and there will be a lot of duplication.

  My solution is O(n) only but avoids some duplication
  The complexity is not better

*/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.length = this.nums.length;
  this.updateTotalSum();
};

NumArray.prototype.updateTotalSum = function(index, val) {
  this.totalSum = this.nums.reduce((totalSum, currentValue) => {
    return (totalSum += currentValue);
  }, 0);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  const oldValue = this.nums[index];
  this.nums[index] = val;
  this.totalSum = this.totalSum - oldValue + val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let sum = 0;
  if (right - left + 1 > Math.floor(this.length / 2)) {
    sum = this.totalSum;
    for (let i = 0; i < left; i++) {
      sum -= this.nums[i];
    }
    for (let i = right + 1; i < this.length; i++) {
      sum -= this.nums[i];
    }
  } else {
    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }
  }
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
