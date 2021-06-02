/*
  There are a lot of ways to calculate missing elements
  1. Hashmap approach
  2. array sum - n(n-1)/2

  There is another approach which involves XOR
*/

// array contains n-1 integers, each between 0 and n-1, inclusive
// hence the formula = (n-1)n/2
function findMissingElement(array) {
  let missingNumber = 0;
  const n = array.length;
  // We are XORing each number with the value from 0 to n
  // By XORing the numbers which are present in the array cancel out and we get
  // the number which is missing
  for (let i = 1; i <= n; i++) {
    missingNumber ^= i ^ array[i - 1];
  }
  console.log(
    "array = ",
    array,
    "missing number from 0 to n = ",
    missingNumber
  );

  return missingNumber;
}

findMissingElement([5, 3, 0, 1, 2]);
findMissingElement([3, 3, 0, 1, 2]);

// What if the numbers were from 1 to n and didn't include 0?

function findMissingElement1(array) {
  let missingNumber = 0;
  const n = array.length;
  // We are XORing each number with the value from 1 to n+1
  // By XORing the numbers which are present in the array cancel out and we get
  // the number which is missing
  // We are going to n+1 because if one number is missing, then one extra would be there which is n+1
  for (let i = 1; i <= n + 1; i++) {
    missingNumber ^= i ^ array[i - 1];
  }
  console.log("missing number from 1 to n = ", missingNumber);
  return missingNumber;
}

findMissingElement1([5, 3, 1, 2]);
