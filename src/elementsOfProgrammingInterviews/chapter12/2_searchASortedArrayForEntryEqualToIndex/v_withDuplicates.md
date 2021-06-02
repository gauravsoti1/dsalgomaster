Solution I found online

[Source](https://www.geeksforgeeks.org/find-fixed-point-array-duplicates-allowed/)

```javascript
function binarySearch(arr, low, high) {
  if (high < low) return -1;

  // low + (high - low) / 2
  var mid = parseInt((low + high) / 2);
  var midValue = arr[mid];

  if (mid == arr[mid]) return mid;

  // Search left
  var leftindex = Math.min(mid - 1, midValue);
  var left = binarySearch(arr, low, leftindex);

  if (left >= 0) return left;

  // Search right
  var rightindex = Math.max(mid + 1, midValue);
  var right = binarySearch(arr, rightindex, high);

  return right;
}

// Driver code

// input 1
var arr = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13];

var n = arr.length;
document.write("Fixed Point is " + binarySearch(arr, 0, n - 1));
// input 2
var arr1 = [-10, -1, 3, 3, 10, 30, 30, 50, 100];

var n1 = arr1.length;

document.write("<br>Fixed Point is " + binarySearch(arr1, 0, n1 - 1));
```
