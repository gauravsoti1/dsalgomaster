/*
  url: https://www.educative.io/courses/grokking-the-coding-interview/7npk3V3JQNr
  Difficulty: easy
  Time and Space Complexity same as subsets
*/

const findSubsets = function (nums) {
  let subsets = [];
  // First push an empty subset
  subsets.push([]);
  let startIndex, endIndex;
  // here we are concerned about avoiding duplicates
  /* General psuedocode is that every time we process a new entry
     inside our nums array, we need to multiply it with all the 
     subsets that already exist, which will be only an empty subset
     for the first element
  */
  nums.forEach((a, index) => {
    /*
      this is the main part that avoids duplicate, here we change
      the startIndex to the index of first subset that was generated in 
      the previous step. We always set endIndex to the length of subsets,
      so at the start of the each step, endIndex is pointing to the first element
      generated in the previous step
      Why only using the new subsets generated in previous step avoid duplicates?
      Because they haven't already been processed with our duplicate elements in the last step
      but all others have been 
    */
    if (index > 0 && nums[index] === nums[index - 1]) {
      startIndex = endIndex;
    } else startIndex = 0;
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
console.log(
  "Here is the list of subsets:",
  JSON.stringify(findSubsets([1, 5, 3, 3]))
);
