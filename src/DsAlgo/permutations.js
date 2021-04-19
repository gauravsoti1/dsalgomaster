/*
  url: https://www.educative.io/courses/grokking-the-coding-interview/B8R83jyN3KY
  Difficulty: medium

  Time complexity #
  Since, in each step, the number of subsets doubles as we 
  add each element to all the existing subsets, the time 
  complexity of the above algorithm is O(2^N), 
  where ‘N’ is the total number of elements in the input set. 
  This also means that, in the end, we will have a total of 
  O(2^N) subsets.
  
  Space complexity #
  All the additional space used by our algorithm is for the output
  list. Since we will have a total of O(2N)O(2^N)O(2​N​​) subsets,
  the space complexity of our algorithm is also O(2N)O(2^N)O(2​N​​).

  Problem Statement #

  Given a set of distinct numbers, find all of its permutations.

  Permutation is defined as the re-arranging of the elements of the set. 
  For example, {1, 2, 3} has the following six permutations:

    {1, 2, 3}
    {1, 3, 2}
    {2, 1, 3}
    {2, 3, 1}
    {3, 1, 2}
    {3, 2, 1}

  If a set has ‘n’ distinct elements it will have n!n!n! permutations.
*/

// code from educative.io
function find_permutations(nums) {
  console.log("nums ===", nums);
  let numsLength = nums.length,
    result = [],
    permutations = [];
  permutations.push([]);

  nums.forEach((currentNumber) => {
    // we will take all existing permutations and add the current number to create new permutations
    const curTotPerm = permutations.length;
    for (let position = 0; position < curTotPerm; position++) {
      const oldPermutation = permutations.shift();
      // create a new permutation by adding the current number at every position
      for (let j = 0; j < oldPermutation.length + 1; j++) {
        const newPermutation = oldPermutation.slice(0); // clone the permutation
        newPermutation.splice(j, 0, currentNumber); // insert currentNumber at index 'j'
        if (newPermutation.length === numsLength) {
          result.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  });
  return result;
}

// console.log("Here are all the permutations:");
// const result = find_permutations([1, 3, 5]);
// result.forEach((permutation) => {
//   console.log(permutation);
// });

// My try at a cleaner code
function find_perms(nums = []) {
  const permutations = [[]];
  const result = [];
  const numsLength = nums.length;

  nums.forEach((currentNumber) => {
    const totalPermutations = permutations.length;
    // We need to run as many times as there are permuatations present
    // we are using this for loop because we need to take out the permuations one by one
    // Can't use while loop here because, at each step we need to
    // run this loop only the number of times as the number of the permuations at the start
    for (let count = 0; count < totalPermutations; count++) {
      const oldPermutation = permutations.shift();
      for (let position = 0; position <= oldPermutation.length; position++) {
        let newPermutation = oldPermutation.slice(0);
        newPermutation.splice(position, 0, currentNumber);
        if (newPermutation.length === numsLength) {
          result.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
    // newPermutation.push(currentNumber);
    // print(newPermutation);
  });

  return result;
}

console.log("Result ===");
console.log(JSON.stringify(find_perms([1, 3, 5])));

// 2nd try, immediately wrote code to prove that yeah I know this
function find_perms1(nums = []) {
  const result = [];
  const permuatations = [];
  const numsLength = nums.length;
  permuatations.push([]);
  nums.forEach((currentNumber) => {
    const totalPermutations = permuatations.length;
    for (let count = 0; count < totalPermutations; count++) {
      const oldPermutation = permuatations.shift();
      for (let position = 0; position < oldPermutation.length + 1; position++) {
        const newPermutation = oldPermutation.slice(0);
        newPermutation.splice(position, 0, currentNumber);
        // if (newPermutation.length === numsLength) {
        //   result.push(newPermutation);
        // } else
        permuatations.push(newPermutation);
      }
    }
  });
  console.log("permutations ===", permuatations);
  return result;
}

console.log("Result find_perms1 ===");
console.log(JSON.stringify(find_perms1([1, 3, 5])));
// [[5,3,1],[3,5,1],[3,1,5],[5,1,3],[1,5,3],[1,3,5]]

// All contagious string
function allUniqueSubstrings(string) {
  const array = [...string];
  const result = new Set();
  const length = array.length;
  array.forEach((char, index) => {
    result.add(char);
    const currentValues = [];
    currentValues.push(char);
    for (let i = index + 1; i < length; i++) {
      const value = currentValues.pop() + array[i];
      result.add(value);
      currentValues.push(value);
    }
  });
  return Array.from(result).sort((a, b) => a.length - b.length);
}

console.log(allUniqueSubstrings("babb"));
// [ "b", "a", "ba", "ab", "bb", "bab", "abb", "babb" ]
