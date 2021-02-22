/*
  Time Complexity: O(nlogn)
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const totalNumbers = citations.length;
  if (totalNumbers === 0)
    return 0;
  const sortedCitations = citations.sort((a,b) => a-b);
  for (let n = totalNumbers; n > 0; n--){
    const index = totalNumbers - n;
    if (sortedCitations[index] >= n)
      return n;
  }
  return 0;
};