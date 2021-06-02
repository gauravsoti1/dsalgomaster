function subsetsOfSizeK(array, k) {
  const result = [];
  const n = array.length;
  function subsetHelper(subset, i) {
    if (subset.length === k) {
      result.push(subset);
      console.log("Adding ", subset);
      return;
    }
    if (i >= n) return;
    for (let j = i; j < n; j++) {
      subsetHelper([...subset, array[j]], j + 1);
    }
  }
  subsetHelper([], 0);
  return result;
}

const result = subsetsOfSizeK([1, 2, 3, 4, 5], 3);
console.log("result = ", result);
