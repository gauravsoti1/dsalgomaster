/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */

function shouldWeGuess(word, notPos, answer) {
  for (let i = 0; i < 6; i++) {
    const isCharPresentInListOfNotPosChars = notPos[i].has(word.charAt(i));
    const currentCharIsNotEqualToAnswerChar =
      answer && answer[i] && answer[i] !== word.charAt(i);
    if (isCharPresentInListOfNotPosChars || currentCharIsNotEqualToAnswerChar) {
      console.log(
        `for ${word}, isCharPresentInListOfNotPosChars = ${isCharPresentInListOfNotPosChars} and currentCharIsNotEqualToAnswerChar = ${currentCharIsNotEqualToAnswerChar}`
      );
      return false;
    }
  }
  return true;
}

function getNextGuessWordIndex(wordlist, notPos, currentIndex, answer) {
  const checkedWords = [];
  let result = -1;
  for (let i = currentIndex + 1; i < wordlist.length; i++) {
    const word = wordlist[i];
    checkedWords.push(word);
    if (shouldWeGuess(word, notPos, answer)) {
      result = i;
      break;
    }
  }
  // console.log(`words checked after ${wordlist[currentIndex]}`, checkedWords);
  // "notPos = ", notPos
  return result;
}

function getNotPosDS() {
  const notPos = new Array(6);
  for (let i = 0; i < 6; i++) {
    notPos[i] = new Map();
  }
  function updateOnNoMatch(guess) {
    for (let i = 0; i < 6; i++) {
      notPos[i].set(guess.charAt(i), true);
    }
  }
  return {
    updateNotPosOnNoMatch: updateOnNoMatch,
    notPos,
  };
}

function findMatchingWordWithCharAtSameIndex({
  currentGuess,
  currentGuessWordIndex,
  charIndex,
  wordlist,
}) {
  const matchingWordsAtSameIndex = [];
  for (let w = currentGuessWordIndex + 1; w < wordlist.length; w++) {
    const word = wordlist[w];
    if (word.charAt(charIndex) === currentGuess.charAt(charIndex)) {
      matchingWordsAtSameIndex.push(word);
    }
  }
  return matchingWordsAtSameIndex;
}

function getNewPossibleWords(
  currentGuessWordIndex,
  possibleWords,
  notPos,
  answer
) {
  const newPossibleWords = [];
  for (let w = currentGuessWordIndex + 1; w < possibleWords.length; w++) {
    const word = possibleWords[w];
    if (shouldWeGuess(word, notPos, answer)) newPossibleWords.push(word);
  }
  return newPossibleWords;
}

/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
  const totalWords = wordlist.length;
  let possibleWords = [...wordlist];
  const { notPos, updateNotPosOnNoMatch } = getNotPosDS();
  const answer = new Array(6);
  // // console.log("notPos = ", notPos[0].has("sdf"))
  let currentGuessWordIndex = 0;
  let result = -1;
  let loopIterations = 0;
  while (result !== 6 && loopIterations <= 10) {
    loopIterations++;
    const currentGuess = wordlist[currentGuessWordIndex];
    result = master.guess(currentGuess);
    // // console.log(`result for ${currentGuess} = `, result);
    if (result === 0) {
      updateNotPosOnNoMatch(currentGuess);
      possibleWords = getNewPossibleWords(0, possibleWords, notPos, answer);
      console.log("new Possible words = ", possibleWords);
    } else {
      for (let i = 0; i < 6; i++) {
        const matchingWordsAtSameIndex = findMatchingWordWithCharAtSameIndex({
          wordlist: possibleWords,
          currentGuess,
          currentGuessWordIndex,
          charIndex: i,
        });
        if (matchingWordsAtSameIndex.length === 0) {
          // console.log(
          //   `no matching words found for charIndex = ${i}, guess word = ${currentGuess}`
          // );
          notPos[i].set(currentGuess.charAt(i), true);
          possibleWords = getNewPossibleWords(0, possibleWords, notPos, answer);
          console.log("new Possible words = ", possibleWords);
        } else {
          let thisCharIsCorrect = true;
          // console.log(
          //   `matching words at index = ${i} = `,
          //   matchingWordsAtSameIndex
          // );
          for (let w = 0; w < matchingWordsAtSameIndex.length; w++) {
            const word = matchingWordsAtSameIndex[w];
            const currResult = master.guess(word);
            if (currResult === 0) {
              notPos[i].set(word.charAt(i), true);
              // console.log("notPos = ", notPos);
              possibleWords = getNewPossibleWords(
                0,
                possibleWords,
                notPos,
                answer
              );
              thisCharIsCorrect = false;
              break;
            } else if (currResult === 6) {
              result = 6;
              break;
            }
          }
          if (thisCharIsCorrect) {
            answer[i] = currentGuess.charAt(i);
            possibleWords = getNewPossibleWords(
              0,
              possibleWords,
              notPos,
              answer
            );
          }
        }
      }
    }
    // // console.log(`result for guess = ${currentGuess} = ${result}`);
    currentGuessWordIndex = getNextGuessWordIndex(
      wordlist,
      notPos,
      currentGuessWordIndex,
      answer
    );
  }
  // // console.log("possible guesses left = ", possibleWords, "answer = ", answer);
  // // console.log("loop iterations = ", loopIterations);
  // // console.log("not possible = ", notPos);
};

function findSecretWordHelper() {}
