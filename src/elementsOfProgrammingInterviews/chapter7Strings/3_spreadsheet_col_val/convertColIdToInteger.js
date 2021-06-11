function convertColIdToInteger(colId) {
  let result = 0;
  const totalChars = colId.length;
  for (let i = totalChars - 1; i >= 0; i--) {
    const multiplyBy = Math.pow(26, totalChars - i - 1);
    const char = colId.charAt(i);
    const charValue = char.charCodeAt() - 64;
    result += charValue * multiplyBy;
  }
  return result;
}

module.exports = convertColIdToInteger;
