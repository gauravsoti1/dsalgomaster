/**
  Time Complexity: O(k)
  This is a sliding window technique
  Got explanation of this solution here: https://interviewrecipes.com/2020/06/21/leetcode-1423/
 */
var maxScore = function(cardPoints, k) {
  const sumOfFrontElements = [0],
    sumOfLastElements = [0],
    totalCards = cardPoints.length;
  // Storing cumulative sum of front elements till k
  for (let i = 1; i <= k; i++) {
    sumOfFrontElements[i] = sumOfFrontElements[i - 1] + cardPoints[i - 1];
  }
  // Storing cumulative sum of last elements till totalCards-k
  // sumOfLastElements[0] = 0, sumOfLastElements[1] = cardPoints[N-1], sumOfLastElements[2] = sumOfLastElements[1] + cardPoints[N-2]
  for (let i = 1; i <= k; i++) {
    sumOfLastElements[i] =
      sumOfLastElements[i - 1] + cardPoints[totalCards - i];
  }
  // console.log(sumOfFrontElements, sumOfLastElements);
  let answer = 0;
  /*
    So we consider all possible scenarios,
    either we take 0 elements at start and k elements at the end
    or
    1 element at start and k-1 elements at the end
    or 
    2 elements at the start and k-2 elements at the end
    finding the max of all these possible scenarios
  */
  for (let i = 0; i <= k; i++) {
    // console.log(`max of ${sumOfFrontElements[i]} and ${sumOfLastElements[totalCards - i]} at index ${i} and ${totalCards-i}`)
    answer = Math.max(answer, sumOfFrontElements[i] + sumOfLastElements[k - i]);
  }
  return answer;
};
