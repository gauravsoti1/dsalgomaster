// this is same as the knapsack problem

function subsetSumExists(array, sum) {
  const dp = new Array(sum + 1).fill(false);
  dp[0] = true;
  array.forEach((currentValue) => {
    for (let j = sum; j >= currentValue; j--) {
      dp[j] = dp[j] || dp[j - currentValue];
    }
    console.log(`after ${currentValue}, dp = `, dp);
  });
  return dp[sum];
}

console.log(
  "Does sum 10 exist for ",
  [1, 5, 4, 3, 2, 1],
  " ?",
  subsetSumExists([1, 5, 4, 3, 2, 1], 10)
);
