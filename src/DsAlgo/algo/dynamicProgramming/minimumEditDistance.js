import { printMatrix } from "DsAlgo/helper";
import React, { useState } from "react";

// this is recursive solution
function minimumEditDistance(str1, str2) {
  // Both strings are empty and hence equal, so minimum edit distance is 0
  if (str1.length === 0 && str2.length === 0) return 0;
  /* 
    If one string is empty, then we will have to add
    all the characters of the second string, hence 
    minimum edit distance will be the length of the non-empty string
  */
  if (str2.length === 0) return str1.length;
  if (str1.length === 0) return str2.length;
  // Characters at the current position are equal, we don't need to do
  // anything, move on to the next characters of both the strings
  if (str1[0] === str2[0])
    return minimumEditDistance(str1.slice(1), str2.slice(1));
  if (str1[0] !== str2[0]) {
    // update means move on to the next characters of both the strings
    let update = minimumEditDistance(str1.slice(1), str2.slice(1));
    // for delete, we are thinking that we are altering string1 to make it
    // look like string2, in code it is like moving on to the next character
    // for just this string
    let del = minimumEditDistance(str1.slice(1), str2);
    // for add, in code it is like don't do anything to this character of
    // string1, delete 1st character of string2
    let add = minimumEditDistance(str1, str2.slice(1));
    let min = Math.min(update, del);
    min = Math.min(min, add);
    return min + 1;
  }
}

function isPresent() {
  return this !== null || this !== undefined;
}

String.prototype.isPresent = isPresent;

function minimumEditDistanceDP(str1, str2) {
  if (!str1.isPresent() || !str2.isPresent())
    throw new Error("Please provide both strings");
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
        dp[row][col] =
          Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]) +
          1; // 1 is for the 1 move we need to make: either replace, add or delete
      }
    }
  }
  // printMatrix(dp);
  return dp[str1.length][str2.length];
}

export default function MinimumEditDistance() {
  const [state, setState] = useState({
    string1: "Saturday",
    string2: "Sunday",
  });
  const { string1, string2 } = state;
  function handleChange(e) {
    const target = e.target;
    const { value, name } = target;
    setState((state) => ({ ...state, [name]: value }));
  }

  return (
    <div>
      <h1>Dynamic Programming: Minimum Edit Distance</h1>
      <h4>
        Minimum distance for converting {string1} to {string2} =
      </h4>
      <h6>Using Recursion: {minimumEditDistance(string1, string2)}</h6>
      <h6>
        Using Dynamic Programming: {minimumEditDistanceDP(string1, string2)}
      </h6>
      <label htmlFor="string1">String1 = </label>
      <input
        name="string1"
        type="text"
        value={state.string1}
        onChange={handleChange}
      />
      &nbsp;
      <label htmlFor="string2">String2 = </label>
      <input
        name="string2"
        type="text"
        value={state.string2}
        onChange={handleChange}
      />
    </div>
  );
}
