/*
  This is the optimum solution, got only 100% in this
*/
function solution(A) {
  const peaks = buildPeaksArray(A);
  // console.log(peaks);
  let maxFlags = peaks.length;
  let flagsUpper = maxFlags;
  let flagsLower = 1;
  let flagsMid = Math.floor((flagsUpper + flagsLower) / 2);
  let answer = 0;
  while (flagsUpper >= flagsLower) {
    flagsMid = Math.floor((flagsUpper + flagsLower) / 2);
    // // console.log(`For maxFlags = ${maxFlags}, currentFlagsPending = ${currentFlagsPending}`)
    // // console.log(`Can plant ${flagsMid}? `, canPlantNFlags(peaks, flagsMid) );
    if (canPlantNFlags(peaks, flagsMid)) {
      flagsLower = flagsMid + 1;
      answer = Math.max(answer, flagsMid);
    } else {
      flagsUpper = flagsMid - 1;
    }
  }
  return answer;
}

function canPlantNFlags(peaks, maxFlags) {
  let currentFlagsPending = maxFlags - 1;
  currentFlagsPending = currentFlagsPending < 0 ? 0 : currentFlagsPending;
  let fromPosition = 0,
    toPosition = 1;
  // // console.log(maxFlags);
  while (currentFlagsPending > 0 && toPosition < peaks.length) {
    // // console.log(`maxFlags = ${maxFlags}, fromPosition = ${fromPosition}, toPosition = ${toPosition}`)
    if (maxFlags <= peaks[toPosition] - peaks[fromPosition]) {
      // // console.log("decrementing, current flags = ", currentFlagsPending)
      currentFlagsPending--;
      fromPosition = toPosition;
      toPosition++;
    } else {
      toPosition++;
    }
  }
  return currentFlagsPending === 0;
}

function buildPeaksArray(A) {
  const peaks = [];
  const totalMRanges = A.length;
  let i = 1;
  while (i < totalMRanges - 1) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
      i += 2;
    } else i++;
  }
  return peaks;
}
