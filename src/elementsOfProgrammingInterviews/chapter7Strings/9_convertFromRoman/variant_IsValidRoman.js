const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function isValidRoman(roman) {
  const length = roman.length;
  let exceptions = 0;
  let min = map[roman[0]];
  for (let i = 1; i < length; i++) {
    const value = map[roman[i]];
    if (value > min) {
      const isExceptionValid = checkIsExceptionValid(value, min);
      if (!isExceptionValid) return false;
      else {
        exceptions++;
        if (exceptions === 2) return false;
      }
    }
  }
  return true;
}
function checkIsExceptionValid(value, min) {
  if (min === 1) return [5, 10].includes(value);
  else if (min === 10) return [50, 100].includes(value);
  else if (min === 100) return [500, 1000].includes(value);
  return false;
}

const testCases = [
  "IXC",
  "CDM",
  "IXV",
  "I",
  "X",
  "L",
  "MMDCL",
  "IL",
  "XM",
  "VX",
  "MCMLXXXVII",
];
const expected = [
  false,
  false,
  false,
  true,
  true,
  true,
  true,
  false,
  false,
  false,
  true,
];

testCases.forEach((testcase, index) => {
  console.log(
    "result for testcase = ",
    testcase,
    " = ",
    isValidRoman(testcase),
    ",expected = ",
    expected[index]
  );
});
