// it also removes the negative sign from the arrays with mutation
function getResultMultiplier(array1, array2) {
  let resultMultiplier = 1;
  if (array1[0] === "-") {
    resultMultiplier = resultMultiplier * -1;
    array1.splice(0, 1);
  }
  if (array2[0] === "-") {
    resultMultiplier = resultMultiplier * -1;
    array2.splice(0, 1);
  }
  return resultMultiplier;
}
function multiply(array1, array2) {
  const resultMultiplier = getResultMultiplier(array1, array2);
  const [smallerNum, biggerNum] = [array1, array2].sort(
    (a, b) => a.length - b.length
  );
  const result = [];
  let carry = 0;
  const sLength = smallerNum.length;
  const bLength = biggerNum.length;
  let zeroCount = 0;
  for (let s = sLength - 1; s >= 0; s--) {
    const resultN = [];
    for (let i = 0; i < zeroCount; i++) {
      resultN.push(0);
    }
    for (let b = bLength - 1; b >= 0; b--) {
      let value = biggerNum[b] * smallerNum[s] + carry;
      if (value >= 10) {
        carry = Math.floor(value / 10);
        value = value % 10;
      } else carry = 0;
      resultN.push(value);
    }
    if (carry > 0) {
      resultN.push(carry);
      carry = 0;
    }
    resultN.reverse();
    result.push(resultN);
    zeroCount++;
  }

  const maxLength = Math.max(...result.map((arr) => arr.length));
  const finalResult = [];
  let newCarry = 0;
  for (let c = maxLength - 1; c >= 0; c--) {
    let currSum = 0;
    for (let i = 0; i < result.length; i++) {
      const lengthDiff = maxLength - result[i].length;
      currSum += result[i][c - lengthDiff] || 0;
    }
    currSum = currSum + newCarry;
    if (currSum >= 10) {
      newCarry = Math.floor(currSum / 10);
      currSum = currSum % 10;
    } else newCarry = 0;
    finalResult.push(currSum);
  }
  if (newCarry > 0) finalResult.push(newCarry);
  if (resultMultiplier < 0) finalResult.push("-");
  finalResult.reverse();
  // console.log(smallerNum, biggerNum);
  console.log(result.map((arr) => arr.join(" ")).join("\n"));
  console.log("finalResult = ", finalResult.join(" "));
}

const num1 = [1, 9, 3, 7, 0, 7, 7, 2, 1],
  num2 = ["-", 7, 6, 1, 8, 3, 8, 2, 5, 7, 2, 8, 7];
console.log(num1.join(" "));
console.log(num2.join(" "));
// const num1 = [1, 9, 3, 7, 0],
//   num2 = ["-", 7, 6, 1];
console.log(multiply(num1, num2));
