/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    // current value is not equal to the next value
    if (nums[i] !== nums[i + 1]) return nums[i];
    else i += 1; // they are equal, jump 2 spaces
  }
};

var singleNumber2 = function(nums) {
  const countMap = new Map();
  nums.forEach((num) => {
    const currentValue = countMap.get(num) || 0;
    countMap.set(num, currentValue + 1);
  });
  for (let [key, value] of countMap) {
    if (value === 1) return key;
  }
};

var singleNumber3 = function(nums) {
  const countMap = new Map();
  nums.forEach((num) => {
    const currentValue = countMap.get(num);
    if (currentValue) countMap.delete(num);
    else countMap.set(num, 1);
  });
  return Array.from(countMap.keys())[0];
};

/* 
  Leetcode best solution: 
  Time Complexity: O(n)
  Space Complexity: O(1)
  
*/

/*

  Approach 4: Bit Manipulation

  Concept

    If we take XOR of zero and some bit, it will return that bit
        a⊕0=aa \oplus 0 = aa⊕0=a
    If we take XOR of two same bits, it will return 0
        a⊕a=0a \oplus a = 0a⊕a=0
    a⊕b⊕a=(a⊕a)⊕b=0⊕b=ba \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b

  So we can XOR all bits together to find the unique number.

*/

var singleNumber = function(nums) {
  let number = 0;
  nums.forEach((n) => (number = number ^ n));
  return number;
};
