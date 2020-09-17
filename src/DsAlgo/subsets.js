/*
  url: https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG
  Difficulty: easy

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

*/

const findSubsets = function (nums) {
  let subsets = [];
  // First push an empty subset
  subsets.push([]);
  // let startIndex = 0,
  //   endIndex = subsets.length;
  nums.forEach((a) => {
    // startIndex = 0;
    // endIndex = subsets.length;
    /*
      startIndex and endIndex are not required here because we 
      are not worried about duplicates. All we need to do is
      when adding a new value from nums array to each already 
      existing subsets, we just need all the subsets that existed
      at the start of when we started adding and that's what we 
      get with subsets.forEach
    */
    subsets.forEach((subset) => subsets.push([...subset, a]));
    // for (let i = startIndex; i < endIndex; i++) {
    //   subsets.push([...subsets[i], a]);
    // }
  });
  return subsets;
};

console.log(
  "Here is the list of subsets:",
  JSON.stringify(findSubsets([1, 3]))
);
console.log(
  "Here is the list of subsets:",
  JSON.stringify(findSubsets([1, 5, 3]))
);
