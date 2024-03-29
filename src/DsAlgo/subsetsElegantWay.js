// very elegant functional programming way
const getAllSubsets = (theArray) =>
  theArray.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );

console.log(getAllSubsets([1, 2, 3]));
console.log(getAllSubsets([1, 2, 2]));
