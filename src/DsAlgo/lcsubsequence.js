const { printMatrixWithXyLabel: printMatrix1 } = require("./helper");

function lcs(string1, string2) {
  // Create a matrix of length1 +1, length2 +1
  const matrix = new Array(string1.length + 1)
    .fill(0)
    .map((row) => new Array(string2.length + 1).fill(0));
  // loop through the matrix till last position
  for (let row = 1; row <= string1.length; row++) {
    for (let col = 1; col <= string2.length; col++) {
      // if row and col characters are match then we add 1 to the upper left value and save to our current value
      if (string1[row - 1] === string2[col - 1]) {
        matrix[row][col] = matrix[row - 1][col - 1] + 1;
      } else
        matrix[row][col] = Math.max(
          matrix[row][col - 1],
          matrix[row - 1][col - 1]
        );
      // else we save the previous value in the row
    }
  }
  printMatrix1(matrix, string1, string2);
  console.log(
    "common subsequence ===",
    findTheFinalSubsequence(matrix, string1, string2)
  );
  // return result.join("");
  return matrix[string1.length][string2.length];
}

function findTheFinalSubsequence(matrix, string1, string2) {
  // Need to find the indexes where value is greater than 0 and the characrers for row and col are equal
  const length1 = string1.length,
    length2 = string2.length;
  let i = length1,
    j = length2;
  if (!matrix[length1][length2]) return [""];
  const result = [];
  while (i > 0 && j > 0) {
    if (string1[i - 1] === string2[j - 1]) {
      result.unshift(string1[i - 1]);
      i--;
      j--;
    }
    // if the value in the previous column is equal, let's change j
    // accordingly and go there, then there we can check if the chars are equal
    // and add it to our result
    else if (matrix[i][j] === matrix[i][j - 1]) j--;
    // same as the above second case, in this scenario, value at the 1 row before would be equal
    else i--;
  }
  return result;
}

console.log(lcs("hello", "yellow"));
