const convertFromBase1toBase2 = require("./convertBase");

// ----------------- Testing -----------------------

function testCase({ inputs = [], expectedOutput, enabled = true }) {
  return { inputs, expectedOutput, enabled };
}

const testCase1 = testCase({ inputs: ["615", 7, 13], expectedOutput: "1A7" });
const testCase2 = testCase({ inputs: ["F1", 16, 10], expectedOutput: "241" });
const testCase3 = testCase({ inputs: ["-615", 7, 13], expectedOutput: "-1A7" });
const testCase4 = testCase({ inputs: ["0", 7, 10], expectedOutput: "0" });
const testCasesValues = [testCase1, testCase2, testCase3, testCase4];

testCasesValues.forEach(({ inputs, expectedOutput, enabled }, index) => {
  test(`Converting ${inputs[0]} from base ${inputs[1]} to ${inputs[2]}`, () => {
    expect(convertFromBase1toBase2(...inputs)).toBe(expectedOutput);
  });
});
