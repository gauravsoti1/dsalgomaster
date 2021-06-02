function getExcelColumnName(columnNumber) {
  let dividend = columnNumber;
  let columnName = [];
  let modulo;

  while (dividend > 0) {
    // Subtracting -1 to handle boundary cases because index 0 corresponds to A and 25 corresponds to Z
    modulo = (dividend - 1) % 26;
    // console.log("dividend = ", dividend, " modulo = ", modulo);
    columnName.push(String.fromCharCode(65 + modulo));
    dividend = Math.floor((dividend - 1) / 26);
  }

  return columnName.reverse().join("");
}

const expectedInputOutput = [
  [702, "ZZ", true],
  [1, "A", true],
  [0, "", true],
  [27, "AA", true],
  [52, "AZ", true],
  [54, "BB", true],
  [679, "ZC", true],
  [102, "CX", true],
];
(function testCases() {
  expectedInputOutput.forEach(([input, expectedOutput, enabled], index) => {
    if (!enabled) return;
    console.log(`---------- test case ${index + 1} ----------`);
    const result = getExcelColumnName(input);
    console.log(
      `expected output for ${input} should be ${expectedOutput} and the result = ${result}`
    );
  });
})();
