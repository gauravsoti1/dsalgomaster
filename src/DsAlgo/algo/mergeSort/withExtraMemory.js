function merge(arrayStart, arrayEnd) {
  let i = 0,
    j = 0;
  let length1 = arrayStart.length,
    length2 = arrayEnd.length;
  const mergedArray = [];
  while (i < length1 && j < length2) {
    if (arrayStart[i] <= arrayEnd[j]) {
      mergedArray.push(arrayStart[i]);
      i++;
    } else {
      mergedArray.push(arrayEnd[j]);
      j++;
    }
  }
  while (i < length1) {
    mergedArray.push(arrayStart[i]);
    i++;
  }
  while (j < length2) {
    mergedArray.push(arrayEnd[j]);
    j++;
  }
  // console.log(
  //   "result of merging ",
  //   arrayStart,
  //   " and ",
  //   arrayEnd,
  //   " = ",
  //   mergedArray
  // );
  return mergedArray;
}

function mergeSort(array) {
  const length = array.length;
  if (length <= 1) return array;
  // // console.log(`merge sort for `, array);
  let mid = Math.floor(length / 2);
  const arrayStart = mergeSort(array.slice(0, mid));
  const arrayEnd = mergeSort(array.slice(mid, length));
  return merge(arrayStart, arrayEnd);
}

const array = [5, 4, 2, 3, 7, 1, 8, 0];
const result = mergeSort(array);
console.log("sorted array = ", result);
