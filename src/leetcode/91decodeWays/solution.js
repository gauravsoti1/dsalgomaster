/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(chars, index = 0, memo={}) {

  if (memo[index] !== undefined)
    return memo[index];
  if (index === chars.length )
    return 1;
  if (chars[index] === '0')
    return 0;
  if (index === chars.length - 1 )
    return 1;
  const oneCharPoss = numDecodings(chars, index+1, memo);
  const twoFirst = chars.substring(index, index + 2);
  let twoFirstPossibilities = 0
  if (Number(twoFirst) <= 26 ){
    twoFirstPossibilities = numDecodings(chars,index+2, memo);
  }
  memo[index] = oneCharPoss + twoFirstPossibilities;
  return memo[index];
  
};