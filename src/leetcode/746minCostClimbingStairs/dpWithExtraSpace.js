/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  // console.log("n=",n)
  const steps = cost.length;
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < steps; i++){
    dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
  }
  return Math.min(dp[steps-1], dp[steps-2]);
};

