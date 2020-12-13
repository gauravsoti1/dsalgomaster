/*

    Write a function 
*   bestSum(targetSum, numbers)
    that takes in a targetSum and an array of numbers as arguments

?   The function should return an array containing the shortest combination 
?   of numbers that add up to exactly the targetSum

    If there is a tie for the shortesst combination, yhou may return any 
    one of the shortest.
 

*/

function bestSum(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;

  for (let number of numbers) {
    // console.log(`targetSum = ${targetSum}, number = ${number}`);
    const newTargetSum = targetSum - number;
    const remainderCombination = bestSum(newTargetSum, numbers);
    // console.log("result ===", result);
    if (remainderCombination !== null) {
      // console.log(`adding ${number} to result = ${result}`);
      const combination = [...remainderCombination, number];
      if (
        shortestCombination === null ||
        remainderCombination.length < shortestCombination.length
      )
        shortestCombination = combination;
    }
  }
  return shortestCombination;
}

function memoizedBestSum(targetSum, numbers, memo = {}) {
  if (memo[targetSum]) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;

  for (let number of numbers) {
    // console.log(`targetSum = ${targetSum}, number = ${number}`);
    const newTargetSum = targetSum - number;
    const remainderCombination = memoizedBestSum(newTargetSum, numbers);
    // console.log("result ===", result);
    if (remainderCombination !== null) {
      // console.log(`adding ${number} to result = ${result}`);
      const combination = [...remainderCombination, number];
      if (
        shortestCombination === null ||
        remainderCombination.length < shortestCombination.length
      )
        shortestCombination = combination;
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
}

// console.log("-----------memoizedBestSum---------");
// console.log(memoizedBestSum(7, [2, 3, 7]));
// console.log(memoizedBestSum(23, [2, 3, 7]));
// console.log(memoizedBestSum(56, [2, 3, 7]));

// ! declaring this outside, so that I can console log the final memo
const memo = {};

// ! This doesn't work properly, I couldn't make all sum work with memoization
// ! maybe my recursive logic is not good in the previous function only
function memoizedAllSum(targetSum, numbers, currentResult = [], results = []) {
  if (memo[targetSum]) return memo[targetSum];
  if (targetSum === 0) {
    results.push(currentResult);
    return results;
  }
  if (targetSum < 0) {
    return results;
  }
  let newResults = [...results];
  for (let number of numbers) {
    const newTargetSum = targetSum - number;
    const newResult = memoizedAllSum(
      newTargetSum,
      numbers,
      [...currentResult, number],
      newResults
    );
    console.log("🚀 newResult", newResult);
  }
  memo[targetSum] = newResults;
  return newResults;
}

// console.log("-------- memoized All Sum -------");
// console.log(memoizedAllSum(7, [2, 3, 7])); // [7]
// console.log("memo ===", memo);

function newAllSum(targetSum, numbers, result = []) {
  if (targetSum === 0) {
    result.push([]);
    return result;
  }
  if (targetSum < 0) return null;
  // for every number, add one value
  let newResult = [...result];
  for (let number of numbers) {
    const newTargetSum = targetSum - number;
    const returned = newAllSum(newTargetSum, numbers, [...result]);
    if (returned !== null) {
      const r = returned.map((r) => [...r, number]);
      newResult = [...newResult, ...r];
    }
    // console.log(
    //   `returned = ${JSON.stringify(
    //     returned
    //   )}, number = ${number}, targetSum = ${targetSum}, newResult = ${JSON.stringify(
    //     newResult
    //   )}`
    // );
  }
  return newResult;
}

// console.log("---- newAllSum -----");
// console.log(newAllSum(2, [1, 2, 4]));
// console.log(newAllSum(4, [1, 2, 4]));

const memo1 = {};

//  * All sum Working properly now
function newAllSumWithMemoization(targetSum, numbers, result = []) {
  if (memo1[targetSum]) {
    return memo1[targetSum];
  }
  if (targetSum === 0) {
    result.push([]);
    return result;
  }
  if (targetSum < 0) return null;
  // for every number, add one value
  let newResult = [...result];
  for (let number of numbers) {
    const newTargetSum = targetSum - number;
    const returned = newAllSumWithMemoization(newTargetSum, numbers, [
      ...result,
    ]);
    if (returned !== null) {
      const r = returned.map((r) => [...r, number]);
      newResult = [...newResult, ...r];
    }
  }
  memo1[targetSum] = newResult;
  return newResult;
}

console.log("---- newAllSum -----");
console.log(newAllSumWithMemoization(2, [1, 2, 4]));
console.log(newAllSumWithMemoization(4, [1, 2, 4]));
console.log("memo1 ===", memo1);
