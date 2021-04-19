/*
  Created At: March 29, 9:02pm
*/

/*
  Time Complexity: 2^N
  This is not the ideal solution at all but it is good for understanding
  and this is the solution I came up with
*/

/*
  We can use memo here as well. The key to cache will be 
  the string of startPointer, endPointer and k
*/

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const totalCards = cardPoints.length;
  if (k === 1) return Math.max(cardPoints[0], cardPoints[totalCards - 1]);
  if (k === totalCards) return cardPoints.reduce((sum, a) => (sum += a), 0);
  return maxScoreRecursive(cardPoints, 0, k, 0, totalCards - 1);
};

function maxScoreRecursive(cardPoints, score, k, leftPointer, rightPointer) {
  if (k === 0 || leftPointer > rightPointer) return score;
  return Math.max(
    maxScoreRecursive(
      cardPoints,
      score + cardPoints[leftPointer],
      k - 1,
      leftPointer + 1,
      rightPointer
    ),
    maxScoreRecursive(
      cardPoints,
      score + cardPoints[rightPointer],
      k - 1,
      leftPointer,
      rightPointer - 1
    )
  );
}
