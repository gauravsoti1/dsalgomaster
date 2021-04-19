const A = "A";
const C = "C";
const G = "G";
const T = "T";

const impactFactors = {
  A: 1,
  C: 2,
  G: 3,
  T: 4,
};

function solution(S, P, Q) {
  const counts = [[0, 0, 0, 0]];
  // Counting total A,C,G,T for every index
  for (let i = 0; i < S.length; i++) {
    const currentCounts = [...counts[i]];
    switch (S.charAt(i)) {
      case A:
        currentCounts[0] = currentCounts[0] + 1;
        break;
      case C:
        currentCounts[1] = currentCounts[1] + 1;
        break;
      case G:
        currentCounts[2] = currentCounts[2] + 1;
        break;
      case T:
        currentCounts[3] = currentCounts[3] + 1;
        break;
      default:
        break;
    }
    counts[i + 1] = currentCounts;
  }
  const totalQueries = P.length;
  const answers = [];
  for (let queryI = 0; queryI < totalQueries; queryI++) {
    const from = P[queryI];
    const to = Q[queryI];
    // Get the count of A,C,G,T in current range
    const count = subtractCounts(counts[to + 1], counts[from]);
    // A is at 0 index, C at 1 index and so on
    // starting from index 0, whichever index that comes first has value greater than 0
    // that is our minimum index, and value of its impact factor is i+1
    // because A which is at 0 has an impact factor of 1 and so on
    for (let i = 0; i <= 3; i++) {
      if (count[i] > 0) {
        answers.push(i + 1);
        break;
      }
    }
  }
  // console.log(counts);
  return answers;
}

function subtractCounts(count1, count2) {
  const count = new Array(4).fill(0);
  for (let i = 0; i <= 3; i++) {
    count[i] = count1[i] - count2[i];
  }
  return count;
}
