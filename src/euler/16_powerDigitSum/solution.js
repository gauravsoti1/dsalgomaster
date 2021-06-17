// Since we have to calculate the power of 2, so multiplying a string number with 2
function multiplyStringNumWith2(num) {
  let carry = 0;
  const result = [];
  for (let i = num.length - 1; i >= 0; i--) {
    let value = Number(num[i]) * 2 + carry;
    if (value >= 10) {
      carry = Math.floor(value / 10);
      value = value % 10;
    } else carry = 0;
    result.push(value);
  }
  if (carry > 0) result.push(carry);
  return result.reverse().join("");
}

function powerDigitSum(exponent) {
  let value = "1";
  let power = exponent;
  while (power > 0) {
    value = multiplyStringNumWith2(value);
    power--;
  }
  let sumOfDigits = 0;
  for (let i = 0; i < value.length; i++) {
    sumOfDigits += Number(value[i]);
  }
  // // console.log("value =", value, "sumOfDigits = ", sumOfDigits);

  return sumOfDigits;
}

powerDigitSum(1000);
