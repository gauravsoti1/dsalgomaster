/*
  Got 100% in this
*/
function getFactorsArray(N) {
  const factors = new Array(N + 1).fill(0);
  let i = 2;
  while (i * i <= N) {
    if (factors[i] === 0) {
      let k = i * i;
      while (k <= N) {
        if (factors[k] === 0) factors[k] = i;
        k = k + i;
      }
    }
    i += 1;
  }
  return factors;
}

function isSemiPrime(N, factorsArray) {
  let x = N;
  let numPrimes = 0;
  while (factorsArray[x] > 0) {
    numPrimes++;
    x = x / factorsArray[x];
    if (numPrimes > 2) return false;
  }
  if (x > 0) numPrimes++;
  return numPrimes === 2;
}

function buildSubPrimeCountArray(N, semiPrimes) {
  const array = new Array(N + 1).fill(0);
  for (let i = 4; i <= N; i++) {
    array[i] = array[i - 1];
    if (semiPrimes[i]) array[i] = array[i] + 1;
  }
}

function solution(N, P, Q) {
  const maxRange = Math.max(...Q);
  const factorsArray = getFactorsArray(maxRange);
  // const semiPrimes = []
  const semiPrimes = new Array(N).fill(false);
  let i = 4;
  while (i <= N) {
    if (isSemiPrime(i, factorsArray)) semiPrimes[i] = true;
    i++;
  }
  let rangeI = 0;
  let totalQueries = P.length;
  const result = [];
  const semiPrimeCountArray = buildSubPrimeCountArray(N, semiPrimes);

  for (rangeI = 0; rangeI < totalQueries; rangeI++) {
    const from = P[rangeI];
    const to = Q[rangeI];
    // let currentSemiPrimes = 0;
    result.push(semiPrimeCountArray[to] - semiPrimeCountArray[from - 1]);
  }
  // console.log(maxRange);
  return result;
}
