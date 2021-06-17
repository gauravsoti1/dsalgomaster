// this is a variant of 2_incrementDigit
// this is a bad solution
/*
  This will fail if one number is negative and we end up dividing

*/
export function addArrayOfDigits(num1, num2) {
  const length1 = num1.length,
    length2 = num2.length;

  const [bigLen, smallLen] = [length1, length2].sort((a, b) => b - a);
  let result = new Array(bigLen + 1).fill(0);
  for (
    let i = length1 - 1, j = length2 - 1, k = bigLen;
    i >= 0 || j >= 0;
    i--, j--, k--
  ) {
    result[k] = result[k] + (num1[i] || 0) + (num2[j] || 0);
    // this is like carry
    result[k - 1] = result[k - 1] + Math.floor(result[k] / 10);
    result[k] = result[k] % 10;
  }
  // removing extra zeroes at the start of the result
  let firstNonZeroIdx = 0;
  while (result[firstNonZeroIdx] === 0) {
    firstNonZeroIdx++;
  }
  // // console.log("result with zero = ", result);
  result = result.slice(firstNonZeroIdx);
  if (result.length === 0) return [0];
  return result;
}
