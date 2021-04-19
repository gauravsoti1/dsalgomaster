/*
  Smallest prime factor of 44 = 2
  Smallest prime factor of 45 = 3
  Smallest prime factor of 46 = 2
  Smallest prime factor of 48 = 2
  Smallest prime factor of 49 = 7
  Smallest prime factor of 50 = 2
*/
// smallest prime for every i till n which divides the number
function arrayFactorization(n) {
  const factors = new Array(n + 1).fill(0);
  let i = 2;
  while (i * i <= n) {
    // if there is no smallest prime factor of current number, that means it is a prime number
    if (factors[i] === 0) {
      let k = i * i;
      // for every multiple of this current prime number, we set that the smallest prime number
      // is the current number
      while (k <= n) {
        if (factors[k] === 0) factors[k] = i;
        console.log("k = ", k);
        k += i;
      }
    }
    i += 1;
  }
  return factors;
}

function factorization(n) {
  const F = arrayFactorization(n);
  // console.log(`factors array for ${n} = `);
  printFactorsArray(arrayFactorization(n));
  let x = n;
  const primeFactors = [];
  // loop till the current number has the smallest prime factor greater than 0
  while (F[x] > 0) {
    primeFactors.push(F[x]);
    // Assume x was 50 and smallest prime factor for x = 2, now we will run the loop for 50/2 = 25
    x = x / F[x];
  }
  primeFactors.push(x);
  return primeFactors;
}

function printFactorsArray(factors) {
  factors.forEach((factor, index) => {
    if (factor !== 0)
      console.log(`Smallest prime factor of ${index} = ${factor}`);
  });
}

console.log("factors for 50 = ", factorization(50));
