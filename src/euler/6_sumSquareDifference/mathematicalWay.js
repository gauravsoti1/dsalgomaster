function sumSquareDifference(n) {
  let sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
  let squareOfSums = Math.pow((n * (n + 1)) / 2, 2);

  return squareOfSums - sumOfSquares;
}

sumSquareDifference(100);
