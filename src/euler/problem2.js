const seq = [1, 2];
let newValue = 3;
let i = 2;
// values in sequence doesn't exceed 4 million
while (newValue < 4000000) {
  seq.push(newValue);
  i++;
  newValue = seq[i - 1] + seq[i - 2];
}

const answer = seq.reduce((sum, currValue) => {
  if (currValue % 2 === 0) sum += currValue;
  return sum;
}, 0);

console.log(answer);
