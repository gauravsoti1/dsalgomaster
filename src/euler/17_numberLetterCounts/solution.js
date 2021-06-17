// My answer is off by 3, so there is something wrong which I can't figure out

const cache = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred",
  1000: "one thousand",
};

function translate(num) {
  if (num <= 20) return translateLessThan20(num);
  else if (num === 1000) return cache[1000];
  else if (num > 20 && num <= 100) return translateGreaterThan20(num);
  else return translateGreaterThan100(num);
}

function translateLessThan20(num) {
  return cache[num];
}

function translateGreaterThan100(num) {
  const result = [];
  const hundredsValue = Math.floor(num / 100);
  result.push(cache[hundredsValue]);
  result.push(cache[100]);
  const decimalValue = num - hundredsValue * 100;
  // console.log("num = ", num, "decimal value =", decimalValue);
  if (decimalValue > 0) {
    result.push("and");
    result.push(translate(decimalValue));
  }
  return result.join(" ");
}

function translateGreaterThan20(num) {
  const tensDecimal = Math.floor(num / 10);
  const unitValue = num % 10;
  const result = [];
  result.push(cache[tensDecimal * 10]);
  if (unitValue > 0) result.push(translateLessThan20(unitValue));
  return result.join(" ");
}

function count(translation) {
  let c = 0;
  for (let i = 0; i < translation.length; i++) {
    const code = translation.charCodeAt(i);
    if (code >= 97 && code <= 122) c++;
  }
  return c;
}
console.log(count(translate(1000)));

function numberLetterCounts(limit) {
  let totalCount = 0;
  for (let i = 1; i <= limit; i++) {
    const translation = translate(i);
    // console.log(i, "  = ", translation);
    totalCount += count(translation);
  }
  console.log(totalCount);
  return totalCount;
}

numberLetterCounts(150);
