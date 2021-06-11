const convertColIdToInteger = require("../convertColIdToInteger");

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

expectedInputOutput.forEach(([expectedOutput, input, enabled], index) => {
  if (!enabled) return;
  test(`${input} should be ${expectedOutput}`, () => {
    expect(convertColIdToInteger(input)).toBe(expectedOutput);
  });
});
