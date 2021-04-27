/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */

/*
  Could only solve 14 out of 32 cases
*/
var minDifficulty = function(jobDifficulty, d) {
  const totalJobs = jobDifficulty.length;
  if (totalJobs < d) return -1;
  if (totalJobs === d)
    return jobDifficulty.reduce((sum, currentElem) => sum + currentElem, 0);
  // const subSetsRanges = new Array(d).map(() => []);
  // const minElemForARange = 1;
  let maxForARange = totalJobs - d + 1;
  // console.log(subSetsRanges);
  let i = maxForARange - 1;
  // let maxIndex = 0;
  let minSum = Number.POSITIVE_INFINITY;
  while (i < totalJobs) {
    let max = 0;
    const startRange = i - maxForARange + 1;
    for (let m = startRange; m <= i; m++) {
      max = Math.max(max, jobDifficulty[m]);
    }
    let sum = max;
    for (let from = 0; from < startRange; from++) {
      sum += jobDifficulty[from];
    }
    for (let to = i + 1; to < totalJobs; to++) {
      sum += jobDifficulty[to];
    }
    minSum = Math.min(sum, minSum);
    console.log(`For i = ${i}, max = ${max}, sum = ${sum}`);
    i += 1;
  }
  return minSum;
};
