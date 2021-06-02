/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let readI = 1,
    writeI = 0;
  let count = 1;
  const totalChars = chars.length;
  while (readI < totalChars) {
    const current = chars[readI];
    const last = chars[readI - 1];
    if (current !== last) {
      chars[writeI] = last;
      writeI++;
      if (count > 1) {
        const countString = count + "";
        countString.split("").forEach((value) => {
          chars[writeI] = value;
          writeI++;
        });
      }
      count = 1;
    } else {
      count++;
    }
    readI++;
  }
  chars[writeI] = chars[readI - 1];
  writeI++;
  if (count > 1) {
    const countString = count + "";
    countString.split("").forEach((value) => {
      chars[writeI] = value;
      writeI++;
    });
  }
  return writeI;
};
