const oppositeOpenChar = {
  ")": "(",
  "]": "[",
  "}": "{"
}

/*
  * Time Complexity: O(N)
  Got 100% in this
*/
function solution(S) {
  const stack = [];
  S.split("").forEach((c) => {
      const length = stack.length;
      // if it is a closing character and the last element in the stack is the 
      // opposite, then pop
      if (oppositeOpenChar[c] && oppositeOpenChar[c] === stack[length-1] )
          stack.pop()
      else 
          stack.push(c);

  })
  return stack.length === 0 ? 1 : 0;
}