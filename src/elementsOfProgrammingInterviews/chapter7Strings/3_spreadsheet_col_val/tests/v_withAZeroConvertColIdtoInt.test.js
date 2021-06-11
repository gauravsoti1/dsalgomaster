const withAZeroConvertColIdToInteger = require("../v_withAZeroConvertColIdToInteger");

const expectedInputOutput = [
  // [702, "ZZ", true],
  [0, "A", true],
  [25, "Z", true],
  [26, "AA", true],
  // [52, "AZ", true],
  // [54, "BB", true],
  // [679, "ZC", true],
  // [102, "CX", true],
];

expectedInputOutput.forEach(([expectedOutput, input, enabled], index) => {
  if (!enabled) return;
  test(`${input} should be ${expectedOutput}`, () => {
    expect(withAZeroConvertColIdToInteger(input)).toBe(expectedOutput);
  });
});
