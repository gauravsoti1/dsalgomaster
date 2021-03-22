function getLast1(array, i){
  const length = array.length;
  while(i < length){
      if (array[i] === 0)
          return i-1;
      else 
          i++;
  }
  return -1;
}
function getNext1(array, i){
  const length = array.length;
  while(i < length){
      if (array[i] === 1)
          return i;
      else 
          i++;
  }
  return -1;
}

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);
  const binaryArray = binary.split("").map((n) => Number(n))
  let maxGap = 0;
  let length = binaryArray.length;
  let i = 0, j=0;
  while (i < length && j < length){
      /* 
        for this binary: 110011
        If we are at index 0, we need to skip to index 1
        that's what we get with getLast1 function
      */
      i = getLast1(binaryArray, i);
      if(i === -1)
          break
      j = getNext1(binaryArray,i+1)
      if (j === -1)
          break
      maxGap = Math.max(maxGap, j-i-1)
      i=j;
  }
  return maxGap;
}
