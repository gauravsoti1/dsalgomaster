/*
  My beautiful code that I wrote later after reading grokking algorithms book,
  works well and is understandable

  But this code requires extra space
*/

function getPivotIndex(arr = []) {
  return Math.floor(Math.random() * arr.length);
}

function partition(arr = [], pivotIndex) {
  const left = [],
    right = [];
  const pivot = arr[pivotIndex];
  arr.forEach((elem, index) => {
    if (index === pivotIndex) return;
    if (elem < pivot) left.push(elem);
    else right.push(elem);
  });
  return { left, pivot, right };
}

function quickSort(arr = []) {
  if (arr.length <= 1) return arr;
  const pivotIndex = getPivotIndex(arr);
  const { left, pivot, right } = partition(arr, pivotIndex);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/* ******* Complete here *******  */

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
