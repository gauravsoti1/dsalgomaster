function generateFibNumbers(maxValue) {
  const fibs = [0, 1];
  let currentValue = null,
    index = 2;
  while (currentValue <= maxValue) {
    currentValue = fibs[index - 1] + fibs[index - 2];
    fibs.push(currentValue);
    index++;
  }
  return fibs;
}

function solution(A) {
  const fibs = generateFibNumbers(A.length + 1);
  // console.log(fibs);
  const fibMap = {};
  fibs.forEach((value) => (fibMap[value] = true));
  const allPosPositions = buildTotalPossiblePositionsArray(A, fibMap);
  // console.log("allPosPositions = ", allPosPositions);
  return countWays(-1, A, fibMap, {}, allPosPositions);
}

function buildTotalPossiblePositionsArray(A, fibMap) {
  const answerMap = {};
  for (let i = -1; i < A.length; i++) {
    if (i === -1 || A[i] === 1) {
      answerMap[i] = possiblePositionsFromCurrent(i, A, fibMap);
    }
  }
  return answerMap;
}

function possiblePositionsFromCurrent(position, A, fibMap) {
  const positions = [];
  for (let i = position + 1; i < A.length; i++) {
    if (A[i] === 1) positions.push(i);
  }
  const posPos = [];
  positions.forEach((p) => {
    if (fibMap[p - position]) posPos.push(p);
  });
  if (fibMap[A.length - position]) posPos.push(A.length);
  return posPos;
}

function countWays(position, A, fibMap, cache = {}, allPosPositions) {
  // console.log("position = ", position, "cache = ", cache);
  if (position === A.length) return 0;
  if (cache[position] !== undefined) return cache[position];
  const pos = allPosPositions[position];
  // console.log("total possible pos = ", pos);
  let jumps = [];
  pos.forEach((p) => {
    const jump = countWays(p, A, fibMap, cache, allPosPositions);
    if (jump >= 0) jumps.push(jump);
  });
  if (jumps.length === 0) {
    cache[position] = -1;
    return -1;
  }
  const minJump = Math.min(...jumps) + 1;
  cache[position] = minJump;
  // console.log("jumps =", jumps, "minJump ==", minJump);
  return minJump;
}
