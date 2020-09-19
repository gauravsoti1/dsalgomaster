/* global BigInt */
const factorials = [1n, 1n];

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
  function factorialsRecursive(currentN) {
    if (factorials[currentN]) return factorials[currentN];
    else {
      console.log("typeof currentN", typeof currentN);

      factorials[currentN] = currentN * factorialsRecursive(currentN - 1n);
    }
    return factorials[currentN];
  }
  return factorialsRecursive(BigInt(n));
}

console.log(extraLongFactorials(25));
