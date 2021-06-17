function addTwoNums(num1, num2) {
  const result = [];
  const length1 = num1.length;
  const length2 = num2.length;
  let carry = 0;
  let i = length1 - 1;
  let j = length2 - 1;
  function getValueCarry(...nums) {
    let value = nums.reduce((sum, num) => sum + num, 0);
    if (value >= 10) {
      carry = Math.floor(value / 10);
      value = value % 10;
      // // console.log(`value = ${value}, carry = ${carry}`)
    } else carry = 0;
    return [value, carry];
  }
  // Adding digits from the end
  while (i >= 0 && j >= 0) {
    const [value, newCarry] = getValueCarry(
      Number(num1[i]),
      Number(num2[j]),
      carry
    );
    carry = newCarry;
    // // console.log(`${num1[i]} + ${num2[j]}, value = ${value}, carry = ${carry}`)
    // result is getting pushed in reverse order, it doesn't matter because we are not using
    // this array in our calculation, we have separately maintained carry
    result.push(value);
    i--;
    j--;
  }
  // For cases when the first number is bigger than the second
  while (i >= 0) {
    const [value, newCarry] = getValueCarry(Number(num1[i]), carry); // making sure we don't forget the carry
    carry = newCarry;
    result.push(value);
    i--;
  }
  while (j >= 0) {
    const [value, newCarry] = getValueCarry(Number(num2[j]), carry);
    carry = newCarry;
    result.push(value);
    j--;
  }
  if (carry > 0) result.push(carry);
  return result.reverse().join("");
}

// Assuming there will be at least one number in the array
export default function largeSum(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = addTwoNums(sum, arr[i]);
  }
  // console.log(sum);
  const result = Number(sum.slice(0, 10));
  // // console.log("result = ", result);
  return result;
}
