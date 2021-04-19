function sieve(n) {
  // Initiliaze an array with all primes and length 1 greater than n,
  // so that we can start index from 1
  const primes = new Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;
  let i = 2;
  // iterating till square root of n
  while (i * i <= n) {
    // if current number is a prime
    if (primes[i]) {
      let k = i * i;
      // let's make all its factors non-prime
      while (k <= n) {
        primes[k] = false;
        k += i;
      }
    }
    i += 1;
  }
  return primes;
}

function convertTrueFalseArrayToPrimeNumbers(array) {
  return array.reduce((result, current, index) => {
    if (current) result.push(index);
    return result;
  }, []);
}

(function primesTill20() {
  console.log(
    "primes till 20 = ",
    convertTrueFalseArrayToPrimeNumbers(sieve(20))
  );
})();

(function primesTill50() {
  console.log(
    "primes till 50 = ",
    convertTrueFalseArrayToPrimeNumbers(sieve(50))
  );
})();
