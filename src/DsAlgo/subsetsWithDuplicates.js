/*
  url: https://www.educative.io/courses/grokking-the-coding-interview/7npk3V3JQNr
  Difficulty: easy
  Time and Space Complexity same as subsets
*/

// Duplicate means that initial array can have duplicate values
// and when we are generating subsets, we need to make sure that
// we don't create duplicate subsets
const findSubsets = function(nums) {
  let subsets = [];
  // First push an empty subset
  subsets.push([]);
  let startIndex, endIndex;
  /* 
    I am adding this extra code
    I think we should sort the nums first
    Otherwise we won't be able to compare the duplicates
  */
  // I checked, sorting is required
  nums.sort();
  // here we are concerned about avoiding duplicates
  /* General psuedocode is that every time we process a new entry
     inside our nums array, we need to multiply it with all the 
     subsets that already exist, which will be only an empty subset
     for the first element
  */
  nums.forEach((a, index) => {
    /*
      this is the main part that avoids duplicate subsets, here we change
      the startIndex to the index of first subset that was generated in 
      the previous step. We always set endIndex to the length of subsets,
      so at the start of the each step, endIndex is pointing to the first element
      generated in the previous step
      Why only using the new subsets generated in previous step avoid duplicates?
      Because they haven't already been processed with our duplicate elements in the last step
      but all others have been 
    */
    // if the current character in subset is equal to the last value, startIndex should be endIndex
    startIndex = index > 0 && nums[index] === nums[index - 1] ? endIndex : 0;
    endIndex = subsets.length;
    for (let i = startIndex; i < endIndex; i++) {
      subsets.push([...subsets[i], a]);
    }
  });
  return subsets;
};

console.log(
  "Here is the list of subsets:",
  JSON.stringify(findSubsets([1, 3, 3]))
);
/* 
  After iteration no  0 [[],[1]]
  After iteration no  1 [[],[1],[3],[1,3]]
  After iteration no  2 [[],[1],[3],[1,3],[3,3],[1,3,3]]
  Final Output: Here is the list of subsets: [[],[1],[3],[1,3],[3,3],[1,3,3]]
*/

// console.log(
//   "Here is the list of subsets:",
//   JSON.stringify(findSubsets([1, 5, 3, 3]))
// );
// Output: Here is the list of subsets: [[],[1],[5],[1,5],[3],[1,3],[5,3],[1,5,3],[3,3],[1,3,3],[5,3,3],[1,5,3,3]]

console.log(
  "Here is the list of subsets:",
  JSON.stringify(findSubsets([3, 1, 3]))
);
// [[],[1],[3],[1,3],[3,3],[1,3,3]]

console.log(
  "Here is the list of subsets:",
  JSON.stringify(findSubsets([1, 3, 3, 3, 1]))
);
// [[],[1],[1,1],[3],[1,3],[1,1,3],[3,3],[1,3,3],[1,1,3,3],[3,3,3],[1,3,3,3],[1,1,3,3,3]]
