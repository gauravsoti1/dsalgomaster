function sumSquareDifference(n) {
  let sumOfSquares = 0;
  let squareOfSums = 0;
  for (let i = 1; i <= n; i++) {
    sumOfSquares += Math.pow(i, 2);
    squareOfSums += i;
  }
  return Math.pow(squareOfSums, 2) - sumOfSquares;
}

sumSquareDifference(100);
