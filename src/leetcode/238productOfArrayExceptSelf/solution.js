/*
  This is my non-elegant solution
  Time Complexity: O(n)
  Space Complexity: O(1)
  But I am using divide in this
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  let zeroes = 0;
  let totalProductWithoutOneZero = nums.reduce((sum,num) => {
    if (num === 0){
      zeroes++;
      return sum;
    }
    return  sum * num
  }, 1);
  totalProductWithoutOneZero = zeroes > 1 ? 0 : totalProductWithoutOneZero;
  const totalProductWithZero = totalProductWithoutOneZero * (zeroes > 0 ? 0 : 1);
  const result = [];
  nums.forEach((num, index) => {
    if (zeroes === 1 && num === 0)
      result[index] = totalProductWithoutOneZero
    else
      result[index] = num === 0 ? 0 : totalProductWithZero / num;
  })
  return result;
};