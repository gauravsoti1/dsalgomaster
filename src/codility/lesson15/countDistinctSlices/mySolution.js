/*
  Got 70% in this
*/
function solution(M, A) {
  let slices = 0;
  let startI = 0;
  // // const s = [];
  const totalElements = A.length;
  while (startI < totalElements) {
    let endI = startI;
    // // s.push([startI, endI]);
    const encounteredElem = { [A[startI]]: true };
    // We have to include each element as an individual slice as well, i.e. 0,0 is a slice, so is 1,1
    slices++;
    endI++;
    while (endI < totalElements && encounteredElem[A[endI]] === undefined) {
      slices++;
      // // s.push([startI, endI]);
      encounteredElem[A[endI]] = true;
      endI++;
    }
    startI++;
  }
  // // console.log("slices = ", s);
  return slices;
}
