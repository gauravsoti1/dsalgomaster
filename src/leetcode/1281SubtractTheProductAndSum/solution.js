var subtractProductAndSum = function(n) {
  const numberArray = n
    .toString()
    .split("")
    .map((s) => Number(s));
  // console.log("number array = ", numberArray);
  const product = numberArray.reduce((product, num) => product * num, 1);
  const sum = numberArray.reduce((sum, num) => sum + num, 0);
  return product - sum;
};
