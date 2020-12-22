var countAndSay = function(n) {
  if (n === 1)
    return "1";
  const value = countAndSay(n-1);
  const result = [];
  let currentValue = value[0];
  let currentCount = 1;
  for (let i = 1; i < value.length; i++){
    if (currentValue === value[i])
      currentCount++;
    else {
      result.push(currentCount.toString());
      result.push(currentValue.toString());
      currentValue = value[i];
      currentCount = 1;
    }
  }     
  result.push(currentCount.toString());
  result.push(currentValue.toString());
  const resultValue =  result.join("");
  // console.log(`n = ${n} resultValue = ${resultValue}`);
  return resultValue;
};