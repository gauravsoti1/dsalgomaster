// how to calculate prime factors?
// they go uptill square root of the number

// Calculate all the factors of the number and then start from the end
// and see if it is a prime, then return

function calculateFactors() {
  const n = 600851475143;
  let i = 2;
  const left = [];
  const right = [];
  while (i * i < n) {
    if (n % i === 0) {
      left.push(i);
      right.push(n / i);
    }
    i++;
  }
  if (i * i === n) left.push(i);
  const result = [...left, ...right.reverse()];
  // console.log(result);
  return result;
  // console.log(n);
}

const factors = calculateFactors();

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const totalFactors = factors.length;

for (let i = totalFactors - 1; i >= 0; i--) {
  if (isPrime(factors[i])) {
    console.log(factors[i]);
    return;
  }
}
