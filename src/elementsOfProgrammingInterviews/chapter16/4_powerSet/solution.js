/*
  This way to compute powerSet is better than other way which computes all subsets of unnecessary lengths
*/
function powerSet(array) {
  // We have to loop from 0 to 2^n - 1 and for every integer, we have to calculate its binary
  // and whenever there is 1 in the binary form we use that value of the array
  const subSets = [];
  const totalNumbers = array.length;
  let currentInt = 0;
  let maxInt = Math.pow(2, totalNumbers);
  for (currentInt = 0; currentInt < maxInt; currentInt++) {
    subSets.push(convertIntIntoToSubset(array, currentInt));
  }
  return subSets;
}

function convertIntIntoToSubset(array, intValue) {
  const subSet = [];
  let i = 0;
  for (let value = intValue; value > 0; value = value >> 1) {
    if ((value & 1) === 1) subSet.push(array[i]);
    i++;
  }
  return subSet;
}

const result = powerSet([0, 1, 2]);
console.log("result = ", result);
