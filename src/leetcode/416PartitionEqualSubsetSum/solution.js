/**
 * @param {number[]} nums
 * @return {boolean}
 */

function sumFun(sum, a) {
  return sum + a;
}

// This is the optimum solution according to the solutions given by leetcode
// But we can reduce space complexity by further optimizing this by only using 1d array
var canPartition = function(nums) {
  const totalElements = nums.length;
  if (totalElements === 1) return false;
  if (totalElements === 2) return nums[0] === nums[1];

  const totalSum = nums.reduce(sumFun, 0);
  // the sum is odd, so there can't be 2 subsets with equal sum
  if (totalSum % 2 === 1) return false;
  // so we need to find a subset with subset equal to the half of the sum
  const half = totalSum / 2;
  nums.sort((a, b) => a - b);
  return isSubsetWithSumPresent(nums, half);
};

function isSubsetWithSumPresent(nums, sum) {
  let i = 0,
    n = nums.length;
  const subset = new Array(sum + 1).fill(0).map((a) => new Array(n + 1));

  // If sum is 0, then answer is true
  for (let i = 0; i <= n; i++) subset[0][i] = true;

  // If sum is not 0 and set is empty,
  // then answer is false
  for (let i = 1; i <= sum; i++) subset[i][0] = false;

  // Fill the subset table in botton
  // up manner
  for (let i = 1; i <= sum; i++) {
    for (let j = 1; j <= n; j++) {
      subset[i][j] = subset[i][j - 1];
      if (i >= nums[j - 1])
        subset[i][j] = subset[i][j] || subset[i - nums[j - 1]][j - 1];
    }
  }

  /* // uncomment this code to print table
        for (int i = 0; i <= sum; i++)
        {
        for (int j = 0; j <= n; j++)
            System.out.println (subset[i][j]);
        } */

  return subset[sum][n];
}
