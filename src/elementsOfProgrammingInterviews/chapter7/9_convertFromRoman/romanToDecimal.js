const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// this can be cleaned up a little, check if this works properly or not
function romanToDecimal(roman) {
  const length = roman.length;
  let result = 0;
  for (let i = length - 1; i >= 0; i--) {
    let value = map[roman[i]];
    if (i < length - 1 && value < map[roman[i + 1]]) value = -value;
    result += value;
  }
  return result;
}
