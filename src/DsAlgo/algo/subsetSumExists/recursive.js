function subSetSumExists(array, sum, idx = 0, map={}) {
  if (map[sum] !== undefined) return map[sum];
  if (sum === 0) return true;
  if (idx >= array.length) return false;

  map[sum] =
    subSetSumExists(array, sum - array[idx], idx + 1, map) ||
    subSetSumExists(array, sum, idx + 1, map);
  return map[sum];
}

console.log(subSetSumExists([1, 4, 2, 1], 10));
