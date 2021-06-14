// To find if a number is prime or not, we need to check if its divisible by
// the prime numbers smaller than its square root
function nthPrime(n) {
  const primes = [2];
  let currNum = 3;
  // by limiting it to primes length less than n, we are
  // able to add the nth element which we can access later
  while (primes.length < n) {
    const maxDivisor = Math.sqrt(currNum);
    let isPrime = true;
    for (let p = 0; primes[p] <= maxDivisor; p++) {
      if (currNum % primes[p] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(currNum);
    currNum += 2;
  }
  return primes[primes.length - 1];
}

nthPrime(10001);
