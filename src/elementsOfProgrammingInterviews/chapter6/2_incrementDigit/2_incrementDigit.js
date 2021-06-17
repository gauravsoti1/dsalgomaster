export function increment(digits) {
  const totalDigits = digits.length;
  let i = totalDigits - 1;
  let carry = 1;
  while (i >= 0 && carry !== 0) {
    const sum = digits[i] + carry;
    // console.log("sum = ", sum);
    carry = Math.floor(sum / 10);
    // console.log("carry = ", carry);
    digits[i] = carry === 1 ? 0 : sum;
    i--;
  }
  if (carry === 1) return [1, ...digits];
  return digits;
}

// this is how it is done in the book
export function increment1(digits) {
  const len = digits.length;
  digits[len - 1] = digits[len - 1] + 1; // Adding 1 at the end
  // now if 10 is present at the end then we will process this loop
  for (let i = len - 1; i > 0 && digits[i] === 10; i--) {
    digits[i] = 0;
    digits[i - 1] = digits[i - 1] + 1;
  }
  if (digits[0] === 10) {
    digits[0] = 0;
    digits.unshift(1);
  }
  return digits;
}

// (function testCase1() {
//   const result = increment([1, 2, 9]);
//   const decimalResult = Number(result.join(""));
//   // console.log(decimalResult);
//   console.log("Is decimal result === 130?", decimalResult === 130);
// })();

// (function testCase2() {
//   const result = increment([1]);
//   const decimalResult = Number(result.join(""));
//   // console.log(decimalResult);
//   console.log("Is decimal result === 2?", decimalResult === 2);
// })();

// (function testCase3() {
//   const result = increment([0]);
//   const decimalResult = Number(result.join(""));
//   const expectedAnswer = 1;
//   // console.log(decimalResult);
//   console.log(
//     `Is decimal result === ${expectedAnswer}?`,
//     decimalResult === expectedAnswer
//   );
// })();

// (function testCase4() {
//   const result = increment([9, 9, 9]);
//   const decimalResult = Number(result.join(""));
//   const expectedAnswer = 1000;
//   console.log(decimalResult);
//   console.log(
//     `Is decimal result === ${expectedAnswer}?`,
//     decimalResult === expectedAnswer
//   );
// })();
