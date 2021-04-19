/*
  This is instructor's solution
  Complexity:
  Best case and Average case: O(nlogn) because at each step for finding our pivotIndex we do O(n) comparisons
  and we divide the problem into logn steps
  
  Worst case is that the array is already sorted and we have been able to divide it into n steps instead of logn step
  because at every step we are just get the first element of the range as sorted element
*/

/*
  This solution without explanation seems very tricky to understand
*/
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;
  // // console.log(`Initial swap id = ${swapIdx} and pivot = ${pivot}`);
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      if (swapIdx !== i) {
        console.log("new swap id = ", swapIdx, " array right now = ", arr);
        console.log(`swapping ${arr[swapIdx]} and ${arr[i]}`);
        swap(arr, swapIdx, i);
      }
    }
  }

  // Swap the pivot from the start the swapPoint
  // // console.log(`swapping pivot from the start i.e. swapping ${arr[swapIdx]} and ${arr[start]}, array before`, arr);
  swap(arr, start, swapIdx);
  // // console.log("array after = ", arr);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  console.log("result = ", arr);
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);
