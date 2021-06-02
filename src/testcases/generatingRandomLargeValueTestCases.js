const { getRandomIntInclusive } = require("../helper/randomNumberInclusive");

// this won't generate duplicates
function generateRandomLargeValueTestCases(
  noOfValues = 10000,
  minValue = -10000,
  maxValue = 10000
) {
  const set = new Set();

  while (set.size < noOfValues) {
    let added = false;
    while (!added) {
      const randomValue = getRandomIntInclusive(minValue, maxValue);
      if (!set.has(randomValue)) {
        added = true;
        set.add(randomValue);
      }
    }
  }
  return Array.from(set);
}

function generateRandomLargeValueTestCasesWithDuplicates(
  noOfValues = 10000,
  minValue = -10000,
  maxValue = 10000
) {
  const array = [];
  while (array.length < noOfValues) {
    const randomValue = getRandomIntInclusive(minValue, maxValue);
    array.push(randomValue);
  }
  return array;
}

// const result = JSON.stringify(generateRandomLargeValueTestCases());
// console.log(result);
// Then we have to copy the result and it works great in leetcode

const result = JSON.stringify(
  generateRandomLargeValueTestCasesWithDuplicates(10, 0, 10)
);
console.log(result);
