/*

  how dp matrix looks like for words horse and ros
          r  o  s 
     [ 0, 1, 2, 3 ]
  h  [ 1, 1, 2, 3 ]
  o  [ 2, 2, 1, 2 ]
  r  [ 3, 2, 2, 2 ]
  s  [ 4, 3, 3, 2 ]
  e  [ 5, 4, 4, 3 ]

  index 0,0 means how many operations it would take to change an empty string to empty string which is 0
  Index 2,1 means how many operations it would take to change "ho" to "r" which is 2, one delete or add, and one replace

*/
function minimumEditDistanceDP(str1, str2) {
  const dp = new Array(str1.length + 1)
    .fill(0)
    .map((a) => new Array(str2.length + 1).fill(0));
  // fill the first column
  for (let row = 0; row <= str1.length; row++) dp[row][0] = row;
  // fill the first row
  for (let col = 0; col <= str2.length; col++) dp[0][col] = col;

  for (let row = 1; row <= str1.length; row++) {
    for (let col = 1; col <= str2.length; col++) {
      // characters at this index are equal, just store the value at col-1 and row -1
      if (str1[row - 1] === str2[col - 1]) dp[row][col] = dp[row - 1][col - 1];
      else {
        // dp[row - 1][col - 1] : this I guess is for update operation
        // inserting or deleting a char is same, as we can delete from one or add to another, it would give the same output
        // replacing is going back 1 row and 1 col
        dp[row][col] =
          Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]) +
          1; // 1 is for the 1 move we need to make: either replace, add or delete
      }
    }
  }
  return dp[str1.length][str2.length];
}
