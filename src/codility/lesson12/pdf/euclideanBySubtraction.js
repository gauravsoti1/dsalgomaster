/*
  The Euclidean algorithm is one of the oldest numerical algorithms still to be in common
  use. It solves the problem of computing the greatest common divisor (gcd) of two positive
  integers.
*/

/*

  Let’s estimate this algorithm’s time complexity (based on n = a+b). The number of steps can
  be linear, for e.g. gcd(x, 1), so the time complexity is O(n). This is the worst-case complexity,
  because the value x + y decreases with every step. 

*/
function euclideanBySubtraction(a, b) {
  console.log("checking for ", a, " and ", b);
  if (a === b) return a;
  if (a > b) return euclideanBySubtraction(a - b, b);
  else return euclideanBySubtraction(a, b - a);
}

const answer = euclideanBySubtraction(5, 2);

console.log(`GCM for 5 and 2 = `, answer);
