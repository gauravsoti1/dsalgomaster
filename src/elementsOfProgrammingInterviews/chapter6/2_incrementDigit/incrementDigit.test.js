const { increment1 } = require("./2_incrementDigit");

function testCaseConstructor(input, expOutput) {
  return { input, expOutput };
}

const testCase1 = testCaseConstructor([1, 5], [1, 6]);
const testCase2 = testCaseConstructor([1, 9], [2, 0]);
const testCase3 = testCaseConstructor([9, 9], [1, 0, 0]);
const testCase4 = testCaseConstructor([0], [1]);
const testCase5 = testCaseConstructor([9, 9, 9], [1, 0, 0, 0]);

const testCases = [testCase1, testCase2, testCase3, testCase4, testCase5];

testCases.forEach(({ input, expOutput }) => {
  test(`${input.join()} + 1 should equal ${expOutput.join()}`, () => {
    expect(increment1(input)).toEqual(expOutput);
  });
});
