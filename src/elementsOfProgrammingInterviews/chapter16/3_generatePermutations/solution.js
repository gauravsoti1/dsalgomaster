function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/*
  Time Complexity: O(n * n!)
*/
function generatePermutations(array) {
  const result = [];
  const totalDigits = array.length;
  function permutationsHelper(i, input) {
    // console.log("i = ", i, " input = ", input);
    if (i === totalDigits - 1) result.push([...input]);
    else {
      // We want to compute every computation with the char at first position
      // of the length we are considering now
      for (let j = i; j < totalDigits; j++) {
        swap(input, i, j);
        permutationsHelper(i + 1, input);
        swap(input, i, j);
      }
    }
  }
  permutationsHelper(0, array);
  return result;
}

// Don't know how to make sure that there are duplicate permutations
const result = generatePermutations([2, 3, 4]);
console.log("result = ", result);
