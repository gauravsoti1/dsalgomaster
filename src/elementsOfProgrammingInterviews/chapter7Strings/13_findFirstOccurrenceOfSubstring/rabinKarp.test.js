const { rabinKarp } = require("./rabinKarp");

const testcases = [
  ["GACGCCA", "CGC", 2],
  ["GACGCCA", "", -1],
  ["GACGCCA", "GCA", -1],
  ["GACGCCA", "GAC", 0],
  ["GACGCCA", "GACGCCA", 0],
  ["GACGCCA", "CCA", 4],
];

testcases.forEach((testcase) => {
  const [text, pattern, answer] = testcase;
  test(`text = ${text}, pattern = ${pattern}, answer should be ${answer}`, () => {
    expect(rabinKarp(text, pattern)).toBe(answer);
  });
});
