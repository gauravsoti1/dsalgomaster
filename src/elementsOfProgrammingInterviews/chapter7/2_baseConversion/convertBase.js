const valueToDigit = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

const digitToValue = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function convertBase(numAsString, base1, base2) {
  const decimal = convertToDecimal(numAsString, base1);
  const result = convertFromDecimalToBase(decimal, base2);
  return result.join("");
}

function convertToDecimal(numAsString, base1) {
  if (base1 === 10) return numAsString;
  const totalDigits = numAsString.length;
  let result = 0;
  for (let i = totalDigits - 1; i >= 0; i--) {
    const multipleBase = Math.pow(base1, totalDigits - i - 1);
    const digit = valueToDigit[numAsString[i]];
    result += digit * multipleBase;
  }
  return result;
}

function convertFromDecimalToBase(decimal, base, result = []) {
  if (decimal === 0) return result.reverse();
  result.push(digitToValue[decimal % base]);
  return convertFromDecimalToBase(Math.floor(decimal / base), base, result);
}

// ----------------- Testing -----------------------

function testCase({ inputs = [], expectedOutput, enabled = true }) {
  return { inputs, expectedOutput, enabled };
}

const testCase1 = testCase({ inputs: ["615", 7, 13], expectedOutput: "1A7" });
const testCase2 = testCase({ inputs: ["F1", 16, 10], expectedOutput: "241" });
const testCasesValues = [testCase1, testCase2];

(function testCases() {
  testCasesValues.forEach(({ inputs, expectedOutput, enabled }, index) => {
    console.log(`----------- test case = ${index + 1} -----------`);
    const result = convertBase(...inputs);
    console.log("result = ", result);
  });
})();
