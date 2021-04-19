function solution(M, A) {
  const seen = new Array(M + 1).fill(false); // from 0 to M
  // Arrays.fill(seen, false); // note: "false" by default

  let fromIndex = 0;
  let toIndex = 0;
  let numSlice = 0;

  // key point: move the "leftEnd" and "rightEnd" of a slice
  while (fromIndex < A.length && toIndex < A.length) {
    // case 1: distinct (rightEnd)
    if (seen[A[toIndex]] == false) {
      // note: not just +1
      // there could be (rightEnd - leftEnd + 1) combinations (be careful)
      const toAdd = toIndex - fromIndex + 1;
      // console.log(`from = ${fromIndex}, to = ${toIndex}, toAdd = `, toAdd);
      numSlice = numSlice + toAdd;
      if (numSlice >= 1000000000) return 1000000000;

      // increase the slice to right by "1" (important)
      seen[A[toIndex]] = true;
      toIndex++;
    }
    // case 2: not distinct
    else {
      // decrease the slice from left by "1" (important)
      // remove A[leftEnd] from "seen" (be careful)
      // this will make every seen false one by one
      seen[A[fromIndex]] = false;
      // console.log("seen = ", seen);
      fromIndex++;
    }
  }

  return numSlice;
}
