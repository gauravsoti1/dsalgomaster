function largestPrimeFactor(number) {
  let largestPrime = 2;
  let n = number;
  // largestPrime in this loop will also have a value of composite number many times
  // but that doesn't matter as it won't meet the condition n % largestPrime === 0
  // because since it's a composite number, the prime numbers before it would have
  // already divided the number
  while (n > 1) {
    if (n % largestPrime === 0) n = n / largestPrime;
    else {
      largestPrime++;
    }
  }
  console.log("largestPrime = ", largestPrime);
  return largestPrime;
}

largestPrimeFactor(600851475143);
