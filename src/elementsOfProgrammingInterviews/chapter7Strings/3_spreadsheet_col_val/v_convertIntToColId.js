function getExcelColumnName(columnNumber) {
  let columnName = [];
  let leastSignificantDigit;

  while (columnNumber > 0) {
    // Subtracting -1 to handle boundary cases because index 0 corresponds to A and 25 corresponds to Z
    leastSignificantDigit = (columnNumber - 1) % 26;
    // // console.log("dividend = ", dividend, " modulo = ", modulo);
    const charValue = String.fromCharCode(65 + leastSignificantDigit);
    columnName.push(charValue);
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return columnName.reverse().join("");
}

module.exports = getExcelColumnName;
