/*
  Tip: Ask about how to decide capacity intervals?

*/

const { printMatrix } = require("./helper");

/**
 *
 *
 * @param {*} [items={item: {weight, value}}]
 */
function knapsack(profits, weights, capacity, names) {
  // How to decide capacity intervals?
  // Currently taking the intervals as 1 for capacity
  const noOfItems = profits.length;
  console.log("knapsack -> noOfItems", noOfItems);
  const matrix = new Array(noOfItems + 1)
    .fill(0)
    .map((row) => new Array(capacity + 1).fill(0));
  // Make a matrix of x size > no of items + 1 and y size > total possible weights + 1
  for (let item = 1; item <= noOfItems; item++) {
    for (let cap = 1; cap <= capacity; cap++) {
      // If weight of the current item is less than or equal to the current capacity, store the max value at the current position
      // which is max (previous value, current value + value at capacity-currentWeight)
      // console.log(`Is ${weights[item - 1]} <= ${cap}`);
      const currentWeight = weights[item - 1];
      const currentProfit = profits[item - 1];
      const prevProfit = matrix[item - 1][cap];
      const currentBest = matrix[item][cap - 1];
      // If the new item can be fit into the knapsack
      if (currentWeight <= cap) {
        // What is the max profit among the prev profit for the same weight and (sum of current items profit + profit (at current capacity - weight of the current item)
        const bestProfitAfterSubtractingCurrentItemWeight =
          matrix[item - 1][cap - currentWeight];
        const value = Math.max(
          prevProfit,
          currentProfit + bestProfitAfterSubtractingCurrentItemWeight
        );
        matrix[item][cap] = value;
      } else {
        matrix[item][cap] = prevProfit;
      }
    }
  }
  printMatrix(matrix);
  return matrix[noOfItems][capacity];
}

const items = {
  guitar: { value: 1000, weight: 2 },
  stereo: { value: 2000, weight: 3 },
  laptop: { value: 3000, weight: 1 },
  iphone: { value: 5000, weight: 2 },
};

const profits = Object.entries(items).map((item) => item[1].value);
const weights = Object.entries(items).map((item) => item[1].weight);
const names = Object.keys(items);
console.log("profits ===", profits);
console.log("weights ===", weights);

const result = knapsack(profits, weights, 5, names);

console.log("max profit", result);
