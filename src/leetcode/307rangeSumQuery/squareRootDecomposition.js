/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.length = this.nums.length;
  const sqrtLength = Math.sqrt(this.length);
  this.cacheLength = Math.ceil(this.length / sqrtLength);
  this.rangeCache = new Array(this.cacheLength).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const index = Math.floor(i / this.cacheLength);
    this.rangeCache[index] += this.nums[i];
  }
  console.log("nums = ", this.nums, "cache = ", this.rangeCache);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  let cacheIndex = Math.floor(index / this.cacheLength);
  this.rangeCache[cacheIndex] =
    this.rangeCache[cacheIndex] - this.nums[index] + val;
  this.nums[index] = val;
  console.log("nums = ", this.nums, "cache = ", this.rangeCache);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let sum = 0;
  let startBlock = Math.floor(left / this.cacheLength);
  let endBlock = Math.floor(right / this.cacheLength);
  if (startBlock === endBlock) {
    // Cache is not being used in this scenario because it is simpler
    for (let k = left; k <= right; k++) sum += this.nums[k];
  } else {
    const maxIndex = (startBlock + 1) * this.cacheLength - 1;
    console.log(
      "left = ",
      left,
      "right = ",
      right,
      "startBlock = ",
      startBlock,
      "endBlock = ",
      endBlock,
      " max = ",
      maxIndex
    );
    for (let k = left; k <= maxIndex; k++) sum += this.nums[k];
    console.log("sum after first loop", sum);
    for (let k = startBlock + 1; k <= endBlock - 1; k++)
      sum += this.rangeCache[k];
    console.log("sum after second loop", sum);

    for (let k = endBlock * this.cacheLength; k <= right; k++)
      sum += this.nums[k];
    console.log("sum after third loop", sum);
  }
  console.log("");
  console.log("");
  return sum;
};

var obj = new NumArray([1, 3, 5, 6, 8, 10, 12, 15, 18, 20, 24, 27, 30]);
console.log(obj.sumRange(0, 12));
console.log(obj.update(1, 2));
console.log(obj.sumRange(1, 3));
