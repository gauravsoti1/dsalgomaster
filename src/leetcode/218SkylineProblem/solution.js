function buildBuilding(array) {
  return {
    x1: array[0],
    x2: array[1],
    height: array[2],
  };
}

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
// building are already sorted by their left value
/*
  Couldn't solve all the test cases, my memory was overflowing for large values because 
  I was allocating array for that large value
*/
var getSkyline = function(buildings) {
  const buildingsObjectArray = buildings.map((building) =>
    buildBuilding(building)
  );
  const maxRight = Math.max(
    ...buildingsObjectArray.map((building) => building.x2)
  );
  if (buildings.length === 1)
    return [
      [buildingsObjectArray[0].x1, buildingsObjectArray[0].height],
      [buildingsObjectArray[0].x2, 0],
    ];
  const maxHeightAtEveryPosition = new Array(2 * (maxRight + 2)).fill(0);
  // console.log("maxRight = ", maxRight);
  buildingsObjectArray.forEach((building) => {
    let x1 = building.x1,
      x2 = building.x2;
    for (let i = 2 * x1; i <= 2 * x2; i++) {
      maxHeightAtEveryPosition[i] = Math.max(
        maxHeightAtEveryPosition[i],
        building.height
      );
    }
  });
  const skyline = [];
  maxHeightAtEveryPosition.forEach((height, index) => {
    if (height > (maxHeightAtEveryPosition[index - 1] || 0))
      skyline.push([index / 2, height]);
    if (height < (maxHeightAtEveryPosition[index - 1] || 0))
      skyline.push([(index - 2) / 2, height]);
  });
  // console.log("maxHeightAtEveryPosition = ", maxHeightAtEveryPosition);
  return skyline;
};
