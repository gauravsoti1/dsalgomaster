var maxArea = function(height) {
  // Consider every possible solution and return the max
  const total = height.length;
  let maxVolume = 0;
  for (let left = 0; left < total - 1; left++) {
    for (let right = total - 1; right > left; right--) {
      const leftValue = height[left];
      const rightValue = height[right];
      const volume = (right - left) * Math.min(leftValue, rightValue);
      maxVolume = Math.max(maxVolume, volume);
      // console.log(`maxVolume for values ${leftValue} and ${rightValue} = `, maxVolume )
    }
  }
  return maxVolume;
};

/*
  Time Complexity: O(n*n)
*/
