const { addArrayOfDigits } = require("./v_addArrayOfDigits");

function testCaseConstructor(num1, num2, expectedOutput) {
  return { num1, num2, expectedOutput };
}
const testCase1 = testCaseConstructor([9, 9], [9], [1, 0, 8]);
const testCase2 = testCaseConstructor([5, 0], [5, 0], [1, 0, 0]);
const testCase3 = testCaseConstructor([1, 0, 0], [5, 0], [1, 5, 0]);
const testCase4 = testCaseConstructor([0], [5, 0], [5, 0]);
const testCase5 = testCaseConstructor(
  [1],
  [9, 9, 9, 9, 9, 9],
  [1, 0, 0, 0, 0, 0, 0]
);

const testCases = [testCase1, testCase2, testCase3, testCase4, testCase5];

testCases.forEach(({ num1, num2, expectedOutput }) => {
  test(`${num1.join("")} + ${num2.join("")} should equal ${expectedOutput.join(
    ""
  )}`, () => {
    expect(addArrayOfDigits(num1, num2)).toEqual(expectedOutput);
  });
});
