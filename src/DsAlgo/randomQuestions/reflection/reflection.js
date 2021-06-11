const ORDERS = { none: "none", asc: "asc", desc: "desc" };

function areContinuous(lastElem, currElem, order) {
  if (lastElem === Number.NEGATIVE_INFINITY) return [true, ORDERS.none];
  const isGreater = currElem > lastElem;
  const isSmaller = currElem < lastElem;
  const currentOrder = isGreater
    ? ORDERS.asc
    : isSmaller
    ? ORDERS.desc
    : ORDERS.none;
  // currentOrder is required only when the previous order was none
  // but returning in all the cases for consistency
  if (order === ORDERS.none) return [isGreater || isSmaller, currentOrder];
  else if (order === ORDERS.asc) return [isGreater, currentOrder];
  else return [isSmaller, currentOrder];
}

function reflection(a) {
  const len = a.length;
  let maxLen = 0,
    currLen = 0, // starting from 0 to make sure that we don't ignore the scenario when all the elements are distinct
    endIn = len - 1,
    lastElem = Number.NEGATIVE_INFINITY;
  // Not being biased what kind of order it will be
  let currOrder = ORDERS.none;
  for (let i = 0; i < len - 1; i++) {
    const toMatch = a[i];
    const [isContinuousResult, contOrder] = areContinuous(
      lastElem,
      toMatch,
      currOrder
    );
    if (isContinuousResult) {
      for (let j = endIn; j > i; j--) {
        if (toMatch === a[j]) {
          // When we get a match, we need to make sure that the next search we do
          // from the end start from lastIndex we found the match at
          endIn = j - 1;
          currLen++;
          maxLen = Math.max(currLen, maxLen);
          lastElem = a[i];
          currOrder = contOrder;
        }
      }
    } else {
      lastElem = Number.NEGATIVE_INFINITY;
      currLen = 0;
      endIn = len - 1;
      currOrder = ORDERS.none;
    }
  }
  return maxLen;
}

console.log(reflection([4, 5, 7, 7, 5, 4, 1, 2]));
console.log(reflection([4, 5, 7, 2, 1, 7, 5, 4]));
console.log(reflection([10, 9, 8, 7, 1, 2, 7, 8, 9, 10]));
