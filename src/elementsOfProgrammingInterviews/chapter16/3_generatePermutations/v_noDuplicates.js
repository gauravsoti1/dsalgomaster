function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function generatePermutations(array) {
  const result = [];
  const totalDigits = array.length;
  function permutationsHelper(i, input) {
    // console.log("i = ", i, " input = ", input);
    if (i === totalDigits - 1) result.push([...input]);
    else {
      for (let j = i; j < totalDigits; j++) {
        if (j > i && input[j] === input[i]) {
          continue;
        }
        swap(input, i, j);
        permutationsHelper(i + 1, input);
        swap(input, i, j);
      }
    }
  }
  array.sort((a, b) => a - b);
  permutationsHelper(0, array);
  return result;
}

// Don't know how to make sure that there are duplicate permutations
const result = generatePermutations([2, 3, 2, 4]);
console.log("result = ", result);
// const expectedResult = [[2, 3, 5], [3, 2, 5], []];
