const nthUglyNumber = (n) => {
  let dp = [];
  let lastMultipliedWith2Index = 0,
    lastMultipliedWith3Index = 0,
    lastMultipliedWith5Index = 0;
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let next2 = dp[lastMultipliedWith2Index] * 2;
    let next3 = dp[lastMultipliedWith3Index] * 3;
    let next5 = dp[lastMultipliedWith5Index] * 5;
    let min = Math.min(next2, next3, next5);
    dp[i] = min;
    if (min === next2) lastMultipliedWith2Index++;
    if (min === next3) lastMultipliedWith3Index++;
    if (min === next5) lastMultipliedWith5Index++;
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
