/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(array) {
  const subSets = [];
  const totalNumbers = array.length;
  let currentInt = 0;
  let maxInt = Math.pow(2, totalNumbers);
  const set = new Set();
  array.sort((a,b)=> a-b)
  
  for (currentInt = 0; currentInt < maxInt; currentInt++) {
    const current = convertIntIntoToSubset(array, currentInt);
    const key = JSON.stringify(current);
    // console.log("key = ", key)
    if (!set.has(key)){
      set.add(key);
      subSets.push(current);
    }
  }
  return subSets;
};

function convertIntIntoToSubset(array, intValue) {
  const subSet = [];
  let i = 0;
  for (let value = intValue; value > 0; value = value >> 1) {
    if ((value & 1) === 1) subSet.push(array[i]);
    i++;
  }
  return subSet;
}