function findAllSubsets(array) {
  const totalElements = array.length;
  const noOfSubsets = Math.pow(2, totalElements);
  const subsets = [];
  for (let value = 0; value < noOfSubsets; value++) {
    subsets.push(convertValueIntoSubset(value, array));
  }
  return subsets;
}

function convertValueIntoSubset(value, array) {
  // for getting the position from which to add the value
  let index = 0;
  const subset = [];
  for (let k = value; k > 0; k = k >> 1) {
    // // console.log(`for value = ${value}, k = ${k}`);
    if ((k & 1) === 1) subset.push(array[index]);
    index++;
  }
  return subset;
}

// this method generates duplicate subsets
console.log(findAllSubsets([2, 2]));
console.log(findAllSubsets([1, 2, 3]));
