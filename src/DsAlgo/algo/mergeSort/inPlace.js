/*
  In place merge sort is not O(nlogn) because it requires shifting, it is O(n^2)
*/
function merge(array, start1, end1, start2, end2) {
  // // console.log(`merge from ${start1} to ${end1} and ${start2} to ${end2}`);
  let i = start1;
  let j = start2;
  while (i <= end1 && j <= end2) {
    if (array[i] <= array[j]) {
      i++;
    } else {
      const value = array[j]; // this is the smaller value
      let index = j;
      // // console.log("array before = ", array);
      while (index !== i) {
        array[index] = array[index - 1];
        index--;
      }
      array[i] = value;
      /* 
        console.log(
        `${array[i]} is greater than ${array[j]}, hence values after shifting = `,
        array
      );
      */
      i++;
      j++;
    }
  }
  // // console.log("array after", array);
}

function mergeSort(array, start, end) {
  if (end - start < 1) return;
  // // console.log(`merge sort from ${start} to ${end}`);
  let mid = Math.floor((start + end) / 2);
  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);
  merge(array, start, mid, mid + 1, end);
}

const array = [5, 4, 2, 3, 7, 1, 8];
mergeSort(array, 0, 6);
console.log("sorted array = ", array);
