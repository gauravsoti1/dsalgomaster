/*
  Denote by (ai, bi) pairs of values a and b, for which the above algorithm performs i steps.
  Then bi � Fibi−1 (where Fibi is the i-th Fibonacci number). Inductive proof:
  1. for one step, b1 = 0,
  2. for two steps, b � 1,
  3. for more steps, (ak+1, bk+1) → (ak, bk) → (ak−1, bk−1), then ak = bk+1, ak−1 = bk,
  bk−1 = ak mod bk, so ak = q · bk + bk−1 for some q � 1, so bk+1 � bk + bk−1.
  Fibonacci numbers can be approximated by:
  Fibn ≈ ( 1+√5
  2 )n
  √5 (12.1)
  Thus, the time complexity is logarithmic based on the sum of a and b — O(log(a + b)).

*/

function euclideanByDivision(a, b) {
  if (a % b === 0) return b;
  return euclideanByDivision(b, a % b);
}

const input1 = [24, 9];
console.log(
  `GCD for ${input1[0]} and ${input1[1]} `,
  euclideanByDivision(...input1)
);

const input2 = [15, 75];
console.log(
  `GCD for ${input2[0]} and ${input2[1]} = `,
  euclideanByDivision(...input2)
);
