/*
  Time Complexity: O(n^2)
*/
var hIndex = function(citations) {
  const totalNumbers = citations.length;
  if (totalNumbers === 0)
    return 0;
  for (let n = totalNumbers; n > 0; n--){
    let countAtLeastH = 0;
    citations.forEach((citation) => {
      if (citation >= n )
        countAtLeastH++
    })    
    if (countAtLeastH >= n)
      return n;
  }
  return 0;
};

