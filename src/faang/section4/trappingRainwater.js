function trappingRainwater(blockHeights) {
  const totalBlocks = blockHeights.length;
  const leftMaxArray = new Array(totalBlocks);
  const rightMaxArray = new Array(totalBlocks);
  leftMaxArray[0] = 0;
  rightMaxArray[totalBlocks - 1] = 0;
  for (let i = 1; i < totalBlocks; i++) {
    leftMaxArray[i] = Math.max(leftMaxArray[i - 1], blockHeights[i - 1]);
  }
  for (let right = totalBlocks - 2; right >= 0; right--) {
    rightMaxArray[right] = Math.max(
      rightMaxArray[right + 1],
      blockHeights[right + 1]
    );
  }
  // console.log("leftMax = ", leftMaxArray);
  // console.log("rightMax = ", rightMaxArray);
  let totalWater = 0;
  for (let i = 0; i < totalBlocks; i++) {
    const maxLeft = leftMaxArray[i];
    const maxRight = rightMaxArray[i];
    const currentHeight = blockHeights[i];
    const blockOfWater = Math.min(maxLeft, maxRight) - currentHeight;
    if (blockOfWater > 0) totalWater += blockOfWater;
  }
  return totalWater;
}

const input = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const totalWater = trappingRainwater(input);
console.log("totalWater = ", totalWater);
