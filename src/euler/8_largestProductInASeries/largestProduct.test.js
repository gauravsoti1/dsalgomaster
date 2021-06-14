const { default: largestProductinaSeries } = require("./solution");

test("for n = 13, answer should be 23514624000", () => {
  expect(largestProductinaSeries(13)).toBe(23514624000);
});
