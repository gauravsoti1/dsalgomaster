// this is a variant of 2_incrementDigit
function addArrayOfDigits(digits1, digits2) {
  let biggerDigits;
  let smallerDigits;
  if (digits1.length > digits2.length) {
    biggerDigits = digits1;
    smallerDigits = digits2;
  } else {
    biggerDigits = digits2;
    smallerDigits = digits1;
  }
  const maxLength = biggerDigits.length;
  const lengthDifference = maxLength - smallerDigits.length;
  const result = new Array(maxLength + 1).fill(0);
  let carry = 0;
  let i = maxLength - 1;
  while (i >= 0) {
    const sum =
      biggerDigits[i] + (smallerDigits[i - lengthDifference] || 0) + carry;
    const value = sum % 10;
    result[i + 1] = value;
    carry = Math.floor(sum / 10);
    // console.log("carry = ", carry, " value = ", value);
    i--;
  }
  if (carry > 0) result[0] = carry;
  return result;
}

(function testCase1() {
  const result = addArrayOfDigits([9, 9], [9]);
  const decimalResult = Number(result.join(""));
  const expectedAnswer = 108;
  console.log(decimalResult);
  console.log(
    `Is decimal result === ${expectedAnswer}?`,
    decimalResult === expectedAnswer
  );
})();

(function testCase2() {
  const result = addArrayOfDigits([5, 0], [5, 0]);
  const decimalResult = Number(result.join(""));
  const expectedAnswer = 100;
  console.log(decimalResult);
  console.log(
    `Is decimal result === ${expectedAnswer}?`,
    decimalResult === expectedAnswer
  );
})();

(function testCase3() {
  const result = addArrayOfDigits([1, 0, 0], [5, 0]);
  const decimalResult = Number(result.join(""));
  const expectedAnswer = 150;
  console.log(decimalResult);
  console.log(
    `Is decimal result === ${expectedAnswer}?`,
    decimalResult === expectedAnswer
  );
})();
