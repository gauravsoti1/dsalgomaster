/**
 * @param {string} word
 * @return {number[]}
 */
// this pattern table tells us which index to consider next if we don't get a match
// we are trying to get longest prefix which is also a suffix
function buildPatternTable(word) {
  const patternTable = [0];
  let prefixLen = 0;
  let suffixIndex = 1;
  /* we are trying to find repetive substring pattern so that we don't have to start our search
     from scratch when we don't need to.
     patten array for onions = [0,0,0,1,2,0]
  */
  while (suffixIndex < word.length) {
    if (word[prefixLen] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixLen + 1;
      suffixIndex += 1;
      prefixLen += 1;
    } else {
      if (prefixLen > 0) {
        // find the longest length of prefix in the previous case and make that equal to the prefixLen
        prefixLen = patternTable[prefixLen - 1];
      } else if (prefixLen === 0) {
        patternTable[suffixIndex] = 0;
        suffixIndex += 1;
      }
    }
  }
  // // console.log("patternTable", patternTable);
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
    }
    // we are at word Index 0, there is nothing we can do to move ahead in the text to find a match
    else {
      textIndex += 1;
    }
  }

  return -1;
}
