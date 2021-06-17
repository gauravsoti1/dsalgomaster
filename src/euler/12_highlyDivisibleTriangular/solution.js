function divisorsCount(num) {
  let divisor = 1;
  let divisorCount = 0;
  while (divisor * divisor < num) {
    if (num % divisor === 0) divisorCount += 2;
    divisor++;
  }
  if (num === divisor * divisor) divisorCount++;
  return divisorCount;
}

function divisibleTriangleNumber(n) {
  let naturalNums = [1];
  let index = 1;
  // 1st triangular number = 1
  // 2nd triangular number = 1st triangular number + 2 = 3
  // 3rd Triangular number = 2nd triangular number + 3 = 6
  while (true) {
    const newNum = naturalNums[index - 1] + index + 1;
    if (divisorsCount(newNum) >= n) {
      return newNum;
    }
    naturalNums.push(newNum);
    index++;
  }
}

divisibleTriangleNumber(167);
