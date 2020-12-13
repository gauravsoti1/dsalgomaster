const nthUglyNumber = (n) => {
  let dp = new Array(n).fill(0);
  let i2 = 0,
    i3 = 0,
    i5 = 0;
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let next2 = dp[i2] * 2;
    let next3 = dp[i3] * 3;
    let next5 = dp[i5] * 5;
    let min = Math.min(next2, next3, next5);
    dp[i] = min;
    if (min === next2) i2++;
    if (min === next3) i3++;
    if (min === next5) i5++;
  }
  return dp[n - 1];
};


/*
  * Solution explaination:

    Run the loop for n times
    At every iteration get the next 2,3,5 multiples 
    also maintain index of current 2, 3, 5 multiples
    
    get the minimum of the next mutliples;
    store the min multiple at the current i

*/