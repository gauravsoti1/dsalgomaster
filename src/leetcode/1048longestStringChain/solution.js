/**
 * @param {string[]} words
 * @return {number}
 */
 var longestStrChain = function(words) {
  const dp = {};
    words.sort( (a, b) => a.length - b.length);
    let ans = 0;
    for (let word of words) {
      let best = 0;
      // Considering all possible variations of the current word
      for (let i = 0; i < word.length; i++) {
        let prev = word.substring(0, i) + word.substring(i + 1);
        const newValue = (dp[prev] || 0) + 1;
        console.log("for word = ", word," prev= ",prev, " current best = ", best, "newValue = ", newValue);
        best = Math.max(best, newValue );
      }
      dp[word] = best;
      ans = Math.max(ans, best);
    }
    console.log(dp)
    return ans;
  }

/*
  Your input: ["a","b","ba","bca","bda","bdca"]

  for word =  a  prev=    current best =  0 newValue =  1
  for word =  b  prev=    current best =  0 newValue =  1
  for word =  ba  prev=  a  current best =  0 newValue =  2
  for word =  ba  prev=  b  current best =  2 newValue =  2
  for word =  bca  prev=  ca  current best =  0 newValue =  1
  for word =  bca  prev=  ba  current best =  1 newValue =  3
  for word =  bca  prev=  bc  current best =  3 newValue =  1
  for word =  bda  prev=  da  current best =  0 newValue =  1
  for word =  bda  prev=  ba  current best =  1 newValue =  3
  for word =  bda  prev=  bd  current best =  3 newValue =  1
  for word =  bdca  prev=  dca  current best =  0 newValue =  1
  for word =  bdca  prev=  bca  current best =  1 newValue =  4
  for word =  bdca  prev=  bda  current best =  4 newValue =  4
  for word =  bdca  prev=  bdc  current best =  4 newValue =  1
  { a: 1, b: 1, ba: 2, bca: 3, bda: 3, bdca: 4 }





*/
