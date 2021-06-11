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

function convertFromBase1toBase2(numAsString, base1, base2) {
  const isNegative = numAsString[0] === "-";
  const decimal = convertToDecimal(
    isNegative ? numAsString.slice(1) : numAsString,
    base1
  );
  const result = decimal === 0 ? "0" : convertFromDecimalToBase(decimal, base2);
  return isNegative ? "-" + result : result;
}

/*
  To keep things simple, this function doesn't accept negative strings
*/
function convertToDecimal(numAsString, base1) {
  if (base1 === 10) return numAsString;
  const totalDigits = numAsString.length;
  let result = 0;
  /*
    Multiplying each digit by its base with power and adding
    615 from base 7 to decimal = 6*7^2 + 1*7^1 + 5*7^0
  */
  for (let i = totalDigits - 1; i >= 0; i--) {
    const multipleBase = Math.pow(base1, totalDigits - i - 1);
    const digit = valueToDigit[numAsString[i]];
    result += digit * multipleBase;
  }
  return result;
}

function convertFromDecimalToBase(decimal, base, result = []) {
  if (decimal === 0) return result.reverse().join("");
  const leastSignificantDigit = digitToValue[decimal % base];
  console.log(
    "🚀 ~ file: convertBase.js ~ line 71 ~ convertFromDecimalToBase ~ leastSignificantDigit",
    leastSignificantDigit
  );
  result.push(leastSignificantDigit);
  const remainingDigit = Math.floor(decimal / base);
  console.log(
    "🚀 ~ file: convertBase.js ~ line 74 ~ convertFromDecimalToBase ~ remainingDigit",
    remainingDigit
  );
  return convertFromDecimalToBase(remainingDigit, base, result);
}

module.exports = convertFromBase1toBase2;
