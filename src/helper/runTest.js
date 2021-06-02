// A helper function to bring some structure into the way I was running test
function runTest({
  fn,
  testInputs = [],
  expectedOutputs = [],
  name = "result",
}) {
  testInputs.forEach((input, index) => {
    console.log(`---------- Tescase ${index} -----------`);
    const result = fn(...input);
    console.log(
      input,
      " = ",
      name,
      " = ",
      result,
      " expected = ",
      expectedOutputs[index]
    );
  });
}

module.exports = {
  runTest,
};
