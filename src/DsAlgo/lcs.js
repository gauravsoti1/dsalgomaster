/*
  Tips: Ask the interviewer:
  Q1) what to return when there is no match, only 0 ? or some special string match?

  Q2) When there are 2, 3 matches with the same length, what to do? what to return?

  Q3) Any null cases? What should the output be at that time?

*/

// I haven't handled null cases in my solution here
function lcs(s1, s2) {
  // Tip: Always keep the longer string on the column side, helpful while calculating final answer
  const string1 = s1.length > s2.length ? s2 : s1;
  const string2 = s1.length > s2.length ? s1 : s2;
  // initial matrix with 0 data for strings length + 1
  const matrix = new Array(string1.length + 1)
    .fill(0)
    .map((a) => new Array(string2.length + 1).fill(0));
  console.log(JSON.stringify(matrix));
  // string 1 is rows, string 2 is column
  let maxValue = 0,
    maxRow = 0,
    maxCol = 0;
  // iterate matrix one row at a time from column index = 1 and row index = 1, ignore 0 index values
  for (let row = 1; row <= string1.length; row++) {
    for (let col = 1; col <= string2.length; col++) {
      // if characters at the current row and column index are equal
      // we need to get the value of previous match and add 1 to it
      // otherwise we need to make the value 0
      if (string1[row - 1] === string2[col - 1]) {
        matrix[row][col] = matrix[row - 1][col - 1] + 1;
        if (matrix[row][col] >= maxValue) {
          maxValue = matrix[row][col];
          maxRow = row;
          maxCol = col;
        }
      } else matrix[row][col] = 0;
    }
  }
  console.log(JSON.stringify(matrix));

  const result = [];
  let i = maxRow,
    j = maxCol;
  while (i > 0 && j > 0) {
    // since we have kept string2 as the bigger of the two strings, we can safely extract value from here
    if (matrix[i][j] > 0) result.push(string2[j - 1]);
    else break;
    i--;
    j--;
  }

  return `longest common match length for ${s1} and ${s2} === ${maxValue} and value  === ${result
    .reverse()
    .join("")}`;
}

console.log(lcs("hello", "yellow"));
// console.log(lcs("correct", "wrong"));
// console.log(lcs("no", "yes"));
// console.log(lcs("color", "crayon"));
// console.log(lcs("countless", "wonderful"));
// console.log(lcs("colourful", "wonderful"));
