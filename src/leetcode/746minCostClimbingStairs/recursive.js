var minCostClimbingStairs = function(cost) {
  // since we can start from the 0th or the 1st step
  const memo = [cost[0], cost[1]];
  // since it is free to jump to the finish spot
  // the cost is min among the n-1 and n-2 steps
  const result = Math.min(minCostRecursive(cost, cost.length-1, memo), minCostRecursive(cost, cost.length-2, memo));
  return result;
};

/*
  When we talk of the 1st or 2nd or 3rd step after breaking down from n steps
  We mean that the total steps are 1 or 2 or 3 and we have to reach the finish
  after jumping from this step.
  Therefore for input like: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
  min cost of 1th step is 100
  min cost of 2th step is 2
  min cost of 3th step is 3
  min cost of 4th step is 3
  min cost of 5th step is 103
  min cost of 6th step is 4
  min cost of 7th step is 5
  min cost of 8th step is 104
  min cost of 9th step is 6
*/
function minCostRecursive(cost,n, memo){
  if (n < 0)
    return 0;
  if (memo[n] !== undefined)
    return memo[n]
  const minCost = cost[n] + Math.min(minCostRecursive(cost, n-1, memo), minCostRecursive(cost, n-2, memo))
  memo[n] = minCost;
  return minCost;
}