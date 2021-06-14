const isPalindrome = (function() {
  const cache = {};
  function isPalindrome(number) {
    if (cache[number]) return cache[number];
    const numString = number + "";
    let i = 0,
      j = numString.length - 1;
    while (i < j) {
      if (numString[i] !== numString[j]) {
        cache[number] = false;
        return false;
      }
      i++;
      j--;
    }
    cache[number] = true;
    return true;
  }
  return isPalindrome;
})();

function largestPalindromeProduct(n) {
  let num1 = Math.pow(10, n) - 1;
  let min = Math.pow(10, n - 1);
  let palindrome = 0;
  while (num1 >= min) {
    let num2 = num1;
    while (num2 >= min) {
      const product = num1 * num2;
      if (isPalindrome(product) && product > palindrome) {
        palindrome = product;
      }
      num2--;
    }
    num1--;
  }
  return palindrome;
}

largestPalindromeProduct(3);
