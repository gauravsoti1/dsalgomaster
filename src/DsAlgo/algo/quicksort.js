/*
  Did this in DS Algo masterclass udemy course
*/
/*
  This is my solution: I got to this solution on my own, without any help. But the code is not that clean but yeah got to learn a lot.
  Complexity:
  Best case and Average case: O(nlogn) because at each step for finding our pivotIndex we do O(n) comparisons
  and we divide the problem into logn steps
  
  Worst case is that the array is already sorted and we have been able to divide it into n steps instead of logn step
  because at every step we are just get the first element of the range as sorted element
*/
function quickSort(arr = []) {
  // assuming that the array would always be greater than length = 1
  console.log("input array =", arr);
  quickSortHelper(arr, 0, arr.length);
}

function quickSortHelper(arr, start, end) {
  console.log("quickSortHelper -> input", start, end);
  // printStack();
  if (start >= end) {
    return;
  }
  // pick first element as key
  const key = start;
  let j = key + 1,
    temp = null;
  // then loop through the array
  for (let i = start; i < end; i++) {
    // maintain a pointer for the current position
    // maintain a pointer callled j for the last swapped position, this will start with a value of 1
    // when you find a value less than the key element swap it with j, then increment both i and j
    // otherwise if the value is greater than increment only i
    if (arr[i] < arr[key]) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      console.log(`swapped index ${j} with ${i} arr =`, arr);
      j++;
    }
    // when you react the end of the array, swap key with the last j
    if (i === end - 1) {
      temp = arr[key];
      arr[key] = arr[j - 1];
      arr[j - 1] = temp;
      console.log(`final swap, swapped ${key} and ${j - 1}`, arr);
    }
  }
  quickSortHelper(arr, start, j - 1);
  quickSortHelper(arr, j, end);
  return arr;
}

quickSort([11, 23, 10, 1, 2, 3, 4, 5, 11]);





/*
  This is instructor's solution
  Complexity:
  Best case and Average case: O(nlogn) because at each step for finding our pivotIndex we do O(n) comparisons
  and we divide the problem into logn steps
  
  Worst case is that the array is already sorted and we have been able to divide it into n steps instead of logn step
  because at every step we are just get the first element of the range as sorted element
*/
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  // the index that we will swap with pivot and return at the end
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSortI(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
quickSortI([100,-3,2,4,6,9,1,2,5,3,23])




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1



