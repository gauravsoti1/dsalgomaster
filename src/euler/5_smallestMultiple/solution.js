// num1 should be greater than num2
function findLcm(num1, num2) {
  return (num1 * num2) / findHcf(num1, num2);
}

// num1 should be greater than num2
function findHcf(num1, num2) {
  // making sure that the dividend is the bigger number
  const [dividend, divisor] = [num1, num2].sort((a, b) => b - a);
  if (divisor === 0) return dividend;
  const remainder = dividend % divisor;
  return findHcf(divisor, remainder);
}

function smallestMult(n) {
  let lcm = 1;
  for (let i = 2; i <= n; i++) {
    lcm = findLcm(i, lcm);
  }
  return lcm;
}

smallestMult(20);
