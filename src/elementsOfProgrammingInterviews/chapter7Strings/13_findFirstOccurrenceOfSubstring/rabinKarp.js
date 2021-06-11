const getValue = (function getValueWrapper() {
  const cache = {};
  function getValueFn(char) {
    if (cache[char] !== undefined) return cache[char];
    const value = char.charCodeAt() - "A".charCodeAt() + 1;
    cache[char] = value;
    return value;
  }
  return getValueFn;
})();

export function rabinKarp(text, pattern) {
  const pLen = pattern.length;
  const tLen = text.length;
  if (pLen === 0 || pLen > tLen) return -1; // pattern can't be bigger than text for there to be a match
  const BASE = 26;
  // Calculating value of hashcodes like this: ABC = 26^2 * 1 + 26^1 *2 + 26^0 * 3
  let tHash = 0,
    sHash = 0;
  for (let i = 0; i < pLen; i++) {
    tHash += Math.pow(BASE, pLen - i - 1) * getValue(text[i]);
    sHash += Math.pow(BASE, pLen - i - 1) * getValue(pattern[i]);
    // // console.log("i = ", "tHash = ", tHash, "sHash = ", sHash);
  }
  const powerS = Math.pow(BASE, pLen - 1);

  for (let i = pLen; i < tLen; i++) {
    // // console.log("i = ", "tHash = ", tHash, "sHash = ", sHash);
    if (tHash === sHash && text.substring(i - pLen, i) === pattern)
      return i - pLen;
    // rolling hash calculation
    tHash -= getValue(text[i - pLen]) * powerS;
    tHash = tHash * BASE; // shifting one significant digit
    tHash += getValue(text[i]);
  }
  if (tHash === sHash && text.substring(tLen - pLen) === pattern)
    return tLen - pLen;
  return -1;
}
