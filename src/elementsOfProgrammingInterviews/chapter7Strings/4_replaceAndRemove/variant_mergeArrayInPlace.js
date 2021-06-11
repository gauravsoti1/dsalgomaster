function mergeArrayInPlace(array1, array2) {
  const length1 = array1.length;
  const length2 = array2.length;
  // if array1 had spaces and we were given how many integers there are, we wouldn't need to do this step
  const mergedArrayLength = length1 + length2;
  let k = mergedArrayLength - 1;
  let i = length1 - 1;
  let j = length2 - 1;
  while (i >= 0 && j >= 0) {
    // console.log("i = ", i, "j = ", j, "k = ", k, array1);
    if (array2[j] >= array1[i]) {
      array1[k] = array2[j];
      j--;
    } else {
      array1[k] = array1[i];
      i--;
    }
    k--;
  }
  while (j >= 0) {
    array1[k] = array2[j];
    k--;
    j--;
    // console.log("2nd loop, i = ", i, "j = ", j, "k = ", k, array1);
  }
  // while (i >= 0) {
  //   // console.log("3rd loop, i = ", i, "j = ", j, "k = ", k, array1);
  //   array1[k] = array1[i];
  //   i--;
  //   k--;
  // }
  return array1;
}

console.log(mergeArrayInPlace([2, 5], [1, 3, 7, 9]));
console.log(mergeArrayInPlace([1, 2, 5], [3, 6]));
console.log(mergeArrayInPlace([1], [3]));
console.log(mergeArrayInPlace([3], [1]));
console.log(mergeArrayInPlace([1], [1]));
console.log(mergeArrayInPlace([1, 2, 3, 5], [1, 2, 3, 5]));
console.log(mergeArrayInPlace([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]));
