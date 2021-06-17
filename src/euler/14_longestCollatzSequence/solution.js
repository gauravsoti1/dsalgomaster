const cache = {};
/*
  Generating sequence in efficient way using cache, as every number can be considered a new start
*/
function generateSequence(num) {
  if (cache[num]) return cache[num];
  if (num === 1) {
    return 1;
  }
  cache[num] = generateSequence(num % 2 === 0 ? num / 2 : 3 * num + 1) + 1;
  return cache[num];
}

function longestCollatzSequence(limit) {
  let maxLength = 0,
    maxNumber = 1;
  // In the solution posted online, they started from i = Math.floor(limit/2), don't know why that worked
  for (let i = 2; i <= limit; i++) {
    const length = generateSequence(i);
    if (length > maxLength) {
      maxLength = length;
      maxNumber = i;
    }
  }
  // console.log(cache);
  console.log(`maxLength = ${maxLength}, maxNumber = ${maxNumber}`);
  return maxNumber;
}

longestCollatzSequence(1000000);
