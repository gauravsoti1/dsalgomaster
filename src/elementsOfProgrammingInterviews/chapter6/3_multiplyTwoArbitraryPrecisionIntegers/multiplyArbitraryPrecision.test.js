const { multiplyArbitraryPrecisionNums } = require("./solution");

function testCaseContructor(input1, input2, expectedOutput) {
  return { input1, input2, expectedOutput };
}

const testCase1 = new testCaseContructor([3, 4], [1, 2], [4, 0, 8]);
const testCase2 = new testCaseContructor([9, 9], [9, 9, 9], [9, 8, 9, 0, 1]);
const testCase3 = new testCaseContructor([1], [1], [1]);
const testCase4 = new testCaseContructor(
  [0],
  [
    9, 2, 3, 8, 4, 2, 9, 3, 7, 4, 1, 2, 3, 9, 8, 4, 7, 1, 2, 4, 9, 8, 7, 2, 3,
    9,
  ],
  [0]
);
const testCase5 = new testCaseContructor(
  [-1],
  [
    9, 2, 3, 8, 4, 2, 9, 3, 7, 4, 1, 2, 3, 9, 8, 4, 7, 1, 2, 4, 9, 8, 7, 2, 3,
    9,
  ],
  [
    -9, 2, 3, 8, 4, 2, 9, 3, 7, 4, 1, 2, 3, 9, 8, 4, 7, 1, 2, 4, 9, 8, 7, 2, 3,
    9,
  ]
);
const testCase6 = new testCaseContructor(
  [-1],
  [
    -9, 2, 3, 8, 4, 2, 9, 3, 7, 4, 1, 2, 3, 9, 8, 4, 7, 1, 2, 4, 9, 8, 7, 2, 3,
    9,
  ],
  [9, 2, 3, 8, 4, 2, 9, 3, 7, 4, 1, 2, 3, 9, 8, 4, 7, 1, 2, 4, 9, 8, 7, 2, 3, 9]
);

const testCases = [
  testCase1,
  testCase2,
  testCase3,
  testCase4,
  testCase5,
  testCase6,
];

testCases.forEach(({ input1, input2, expectedOutput }) => {
  test(`${input1.join("")} * ${input2.join(
    ""
  )} should equal ${expectedOutput.join("")}`, () => {
    expect(multiplyArbitraryPrecisionNums(input1, input2)).toEqual(
      expectedOutput
    );
  });
});
