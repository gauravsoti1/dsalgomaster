var minCostClimbingStairs = function(cost) {
  // console.log("n=",n)
  const steps = cost.length;
  let dp1 = cost[0], dp2 = cost[1];
  for (let i = 2; i < steps; i++){
    const current = cost[i] + Math.min(dp1, dp2);
    dp1 = dp2;
    dp2 = current;
  }
  return Math.min(dp1, dp2);
};

