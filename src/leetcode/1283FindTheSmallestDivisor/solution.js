/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  let maxNumber = Math.max(...nums);
  let low = 1;
  let currentDivisor = Math.floor(maxNumber / 2);
  let high = maxNumber;
  let answer = maxNumber;
  while (low <= high) {
    // console.log(`low = ${low}, currentDivisor = ${currentDivisor}, high = ${high}`);
    // const arrayAfterDividing = ;
    const sum = nums
      .map((num) => Math.ceil(num / currentDivisor))
      .reduce((sum, num) => sum + num, 0);
    // console.log(`sum for divisor = ${currentDivisor} = ${sum}`);
    if (sum <= threshold) {
      console.log("it is the answer");
      answer = currentDivisor;
      high = currentDivisor - 1;
      currentDivisor = Math.floor((high + low) / 2);
    } else {
      console.log("it is not the answer");
      low = currentDivisor + 1;
      currentDivisor = Math.floor((high + low) / 2);
    }
  }
  return answer;
};

// was able to succesfully submit, but the solution was only faster than 28% of other solutions
