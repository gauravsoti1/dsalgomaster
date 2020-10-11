function binarySearch(arr, target){
  let start = 0, end = arr.length;
  let mid= 0;
  while(start <= end){
    mid = Math.floor((start+end)/2)
    if (target === arr[mid])
      return true;
    if (target < arr[mid]){
      end = mid - 1
    }
    else {
      start = mid + 1
    }
  }
  return false;
}

console.log("is 5 present ===", binarySearch([ 0,1, 2, 3, 4, 5], 5));
 

// bad thing to use arguments property of function
function binarySearchRecursive(arr, key, start = 0, end = arguments[0].length) {
  const length = end - start + 1;
  if (length === 0) return -1;

  const mid = Math.floor(length / 2);
  if (arr[mid] === key) return mid;
  const index1 = binarySearchRecursive(arr, key, 0, mid);
  if (index1 !== -1) return index1;

  const index2 = binarySearchRecursive(arr, key, mid + 1, end);
  if (index2 !== -1) return index2;
  return -1;
}