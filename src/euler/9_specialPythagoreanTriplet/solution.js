function specialPythagoreanTriplet(n) {
  for (let a = 1; a < n - 2; a++) {
    // b only goes to n-a-1, we need to factor in the values of a and c
    // b starts after a because we know that b is greater than a
    for (let b = a + 1; b < n - a - 1; b++) {
      const c = n - a - b;
      const squareSum = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      // Using the equations we have and comparing the value of c
      if (c === squareSum) {
        // // console.log("a = ", a, "b = ", b, "c = ", c);
        // // console.log(a * b * c);
        return a * b * c;
      }
    }
  }
  return true;
}

specialPythagoreanTriplet(1000);
