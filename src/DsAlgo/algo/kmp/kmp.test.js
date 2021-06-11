const { default: knuthMorrisPratt } = require("./kmp");

function TestCase(text, word, expectedOutput) {
  return { text, word, expectedOutput };
}

const testCases = [
  new TestCase("hello how are you, are you doing okay?", "are", 10),
  new TestCase("hello how are you, are you doing okay?", "hello", 0),
  new TestCase("qabcgabcabcd", "abcd", 8),
  new TestCase("onionionspl", "onions", 3),
  new TestCase("", "", 0),
  new TestCase("sfsaf sdfaasdf sdf", "saf s", 2),
  new TestCase("sfsaf sdfaasdf sdf", "saf sdfaasdf sdfa", -1),
  new TestCase("aabbbaaabbbccaaaaaddd", "aaaaa", 13),
];

testCases.forEach(({ text, word, expectedOutput }) => {
  test(`text = ${text} | word = ${word}`, () => {
    expect(knuthMorrisPratt(text, word)).toBe(expectedOutput);
  });
});
