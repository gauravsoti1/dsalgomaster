/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*
  Consult freecodecamp video around 4:40:00 for this
*/
var wordBreak = function(target, wordDict) {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (!table[i]) continue;
    for (let word of wordDict) {
      if (target.slice(i, i + word.length) === word) {
        // // console.log(`possible to generate ${target.slice(0, i+word.length)} from index = ${i} because of ${word}`)
        table[i + word.length] = true;
      }
    }
  }
  // // console.log(table);
  return table[target.length];
};
