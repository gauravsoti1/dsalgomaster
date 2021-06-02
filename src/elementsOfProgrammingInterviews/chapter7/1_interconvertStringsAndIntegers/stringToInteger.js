function stringToInteger(stringNumber) {
  let result = 0;
  let isNegative = stringNumber[0] === "-";
  let myStringNumber = stringNumber;
  if (isNegative) myStringNumber = myStringNumber.slice(1);
  let totalDigits = myStringNumber.length;
  for (let i = totalDigits - 1; i >= 0; i--) {
    let multiplyBy10 = Math.pow(10, totalDigits - i - 1);
    result += multiplyBy10 * (myStringNumber[i] - "0");
  }
  return isNegative ? -result : result;
}

(function testCase1() {
  console.log("------- testCase 1 -------");
  const input = "43";
  const result = stringToInteger(input);
  // console.log("result = ", result);
  console.log(`Is answer for ${input} correct?`, result === 43);
})();

(function testCase2() {
  console.log("------- testCase 2 -------");
  const input = "-125";
  const result = stringToInteger(input);
  // console.log("result = ", result);
  console.log(`Is answer for ${input} correct?`, result === -125);
})();

(function testCase3() {
  console.log("------- testCase 3 -------");
  const input = "0";
  const result = stringToInteger(input);
  // console.log("result = ", result);
  console.log(`Is answer for ${input} correct?`, result === 0);
})();
