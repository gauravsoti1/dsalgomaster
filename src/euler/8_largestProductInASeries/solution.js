import thousandDigits from "./thousandDigitsData.js";

export default function largestProductinaSeries(n) {
  // Keeping zeroes and product separate because 0 causes problem with rolling technique
  // as it makes the whole product zero and we can't divide the elem getting out of the sliding
  // window
  let product = 1,
    zeroes = 0;
  for (let i = 0; i < n; i++) {
    const elem = thousandDigits[i];
    if (elem !== 0) product = product * elem;
    else zeroes++;
  }
  let maxProduct = product * zeroes > 0 ? 0 : 1;
  for (let i = n; i < thousandDigits.length; i++) {
    const lastElem = thousandDigits[i - n];
    const currElem = thousandDigits[i];
    if (lastElem === 0) zeroes--;
    else product = product / lastElem;
    if (currElem === 0) zeroes++;
    else {
      product = product * currElem;
      if (zeroes === 0) maxProduct = Math.max(maxProduct, product);
    }
  }
  return maxProduct;
}

largestProductinaSeries(13);
