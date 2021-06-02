/*
  All the input values are distinct

*/
function searchMinValueCyclicSortedArray(array) {
  const n = array.length;
  let left = 0,
    right = n - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = array[mid];
    const rightValue = array[right];
    if (midValue > rightValue) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return array[left];
}

const testInputs = [
  [3, 4, 1, 2],
  [1, 20, 32, 49],
  [3, 4, 2],
  [6999, 77777, 999321, 2222, 3232],
];

const expectedResults = [1, 1, 2, 2222];

(function test() {
  testInputs.forEach((input, index) => {
    console.log(`---------- Tescase ${index} -----------`);
    const result = searchMinValueCyclicSortedArray(input);
    console.log(
      "min value for ",
      input,
      " = ",
      result,
      " expected min value = ",
      expectedResults[index]
    );
  });
})();
