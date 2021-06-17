export function multiplyArbitraryPrecisionNums(num1, num2) {
  const sign = (num1[0] < 0) ^ (num2[0] < 0) ? -1 : 1;
  num1[0] = Math.abs(num1[0]);
  num2[0] = Math.abs(num2[0]);
  const length1 = num1.length;
  const length2 = num2.length;
  let result = new Array(length1 + length2).fill(0);

  for (let i = length1 - 1; i >= 0; i--) {
    for (let j = length2 - 1; j >= 0; j--) {
      let currIndex = i + j + 1;
      let nextIndex = i + j;
      result[currIndex] = result[currIndex] + num1[i] * num2[j];
      // we are storing the carry in one place before to avoid unnecessary need of maintaining carry var
      result[nextIndex] =
        result[nextIndex] + Math.floor(result[currIndex] / 10);
      // making sure there is no overflow in the value
      result[currIndex] = result[currIndex] % 10;
    }
  }
  let firstNotZero = 0;
  while (firstNotZero < result.length && result[firstNotZero] === 0) {
    firstNotZero++;
  }
  result = result.slice(firstNotZero);
  if (result.length === 0) result = [0];
  result[0] = result[0] * sign;
  // // console.log("result", result);
  return result;
}

