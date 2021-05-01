function solution(nums) {
  // loop through the array
  // keep going ahead with current start position, until total slice
  // sum is greater than 0, otherwise no point keeping the negative sum of slice
  let max = nums[0];
  let subArraySum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    subArraySum = Math.max(num, subArraySum + num);
    // console.log(`Max subarray sum at ${i} = `, subArraySum);
    max = Math.max(max, subArraySum);
  }

  return max;
}
