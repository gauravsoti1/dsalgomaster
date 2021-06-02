function replaceAndRemove(array, noOfChars) {
  let totalChars = 0;
  let i = 0;
  // removing all the b first
  for (i = 0; i < noOfChars; i++) {
    if (array[i] !== "b") {
      array[totalChars] = array[i];
      totalChars++;
    }
  }
  let j = totalChars - 1;
  i = array.length - 1;
  while (i >= 0) {
    const elem = array[j];
    if (elem === "a") {
      for (let k = i; k > i - 2; k--) {
        array[k] = "d";
      }
      i--;
    } else {
      array[i] = array[j];
    }
    j--;
    i--;
  }
  return array;
}

function testCase({ input, expectedOutput, enabled = true }) {
  return { input, expectedOutput, enabled };
}
const testCase1 = testCase({
  input: [["a", "c", "d", "b", "b", "c", "a"], 7],
  expectedOutput: ["d", "d", "c", "d", "c", "d", "d"],
});

const testCase2 = testCase({
  input: [["a", "b", "a", "c", ""], 4],
  expectedOutput: ["d", "d", "d", "d", "c"],
});

const testCase3 = testCase({
  input: [["a", ""], 1],
  expectedOutput: ["d", "d"],
});

const testCase4 = testCase({
  input: [["d", "d"], 2],
  expectedOutput: ["d", "d"],
});

const testCase5 = testCase({
  input: [["b"], 1],
  expectedOutput: [""],
});

const testCase6 = testCase({
  input: [["b", "b", "b", "b"], 4],
  expectedOutput: ["", "", "", ""],
});
// In my answer, I am getting space in the start, that's okay according to the question desc I believe, as ordering
// doesn't matter
const testCase7 = testCase({
  input: [["b", "b", "b", "b", "c"], 5],
  expectedOutput: ["c", "", "", ""],
});

const testCasesValues = [
  testCase1,
  testCase2,
  testCase3,
  testCase4,
  testCase5,
  testCase6,
  testCase7,
];
(function testCases() {
  testCasesValues.forEach((testCase, index) => {
    if (!testCase.enabled) return;
    console.log(`-----------TestCase ${index + 1}-------------`);
    const result = replaceAndRemove(...testCase.input);
    console.log(
      "result = ",
      result,
      " expected output = ",
      testCase.expectedOutput
    );
  });
})();
