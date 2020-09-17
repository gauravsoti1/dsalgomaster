const { print } = require("../helper");

/**
  Knuth Morris Pratt
 * @param {string} word
 * @return {number[]}
 */
function buildPatternTable(word) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}

/**
 * @param {string} text
 * @param {string} word
 * @return {number}
 */
export default function knuthMorrisPratt(text, word) {
  if (word.length === 0) {
    return 0;
  }

  let textIndex = 0;
  let wordIndex = 0;

  const patternTable = buildPatternTable(word);

  while (textIndex < text.length) {
    if (text[textIndex] === word[wordIndex]) {
      // We've found a match.
      if (wordIndex === word.length - 1) {
        // We can also continue searching the string
        // for more matches
        return textIndex - word.length + 1;
      }
      wordIndex += 1;
      textIndex += 1;
    } else if (wordIndex > 0) {
      wordIndex = patternTable[wordIndex - 1];
    } else {
      wordIndex = 0;
      textIndex += 1;
    }
  }

  return -1;
}

// Returns start index of the first substring match
// Adding knuthMorris to String's prototype
String.prototype.findSubStringIndex = function (pattern) {
  return knuthMorrisPratt(this, pattern);
};

console.log("index ===", "hello how are you".findSubStringIndex("are"));

/*

  My practice  

*/

function buildLpsPattern(pattern) {
  let prefixIndex = 0,
    suffixIndex = 1;
  const length = pattern.length;
  const lps = [0];

  while (suffixIndex < length) {
    if (pattern[prefixIndex] === pattern[suffixIndex]) {
      lps[suffixIndex] = prefixIndex + 1;
      prefixIndex++;
      suffixIndex++;
    } else if (prefixIndex === 0) {
      lps[suffixIndex] = 0;
      suffixIndex++;
    } else {
      prefixIndex = lps[prefixIndex - 1];
    }
  }
  return lps;
}

function kmp(string, pattern) {
  let s = 0;
  let p = 0;
  const lps = buildLpsPattern(pattern);
  print("lps ===", lps);
  const result = [];
  while (s < string.length) {
    if (string[s] === pattern[p]) {
      if (p === pattern.length - 1) {
        result.push(s - pattern.length + 1);
        p = -1;
      }
      s++;
      p++;
    } else if (p > 0) {
      p = lps[p - 1];
    } else {
      s++;
    }
  }
  return result;
}

console.log("index ===", kmp("hello how are you, are you doing okay?", "are"));
