// Sieve of Eratosethenes method
function primesBelowN(n) {
  const isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  // Since it is below n, we need to check only till n-1
  for (let index = 2; index <= Math.sqrt(n - 1); index++) {
    if (isPrime[index]) {
      let multiple = index * index;
      while (multiple < n) {
        isPrime[multiple] = false;
        multiple += index;
      }
    }
  }

  return isPrime.reduce((result, isPrime, index) => {
    if (isPrime) result.push(index);
    return result;
  }, []);
}

function primeSummation(n) {
  const primes = primesBelowN(n);
  // // console.log(primes);
  const sum = primes.reduce((sum, elem) => sum + elem, 0);
  console.log("sum = ", sum);
  return sum;
}

primeSummation(2000000);
