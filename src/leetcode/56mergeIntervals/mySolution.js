// since intervals are sorted, if the end time 
// of first interval is greater than or equal to
// the start time of the second interval, then they are overlapping
function isOverlapping(interval1, interval2){
  return interval1[1] >= interval2[0];
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // sorting intervals by their start time
  intervals = intervals.sort((a,b) => a[0] - b[0])
  let i = 1;
  // since intervals are being modified 
  // we are calculating the length again
  while( i < intervals.length ){
    const firstInterval = intervals[i-1];
    const secondInterval = intervals[i];
    if (isOverlapping(firstInterval, secondInterval)){
      // since either the first or the second interval can end later
      // we are finding the bigger end value and using it in our new
      // merged interval
      const mergedInterval = [firstInterval[0], Math.max(firstInterval[1],secondInterval[1])]
      // replace one of the intervals with the merged intervals
      intervals[i] = mergedInterval;
      // delete the first of the merged interval
      intervals.splice(i-1,1)
    }
    // we are only moving to the next element when there is no overlapping
    // because in overlapping scenario we create a new merged interval, so we need
    // to consider that again
    else
      i++
  }
  return intervals;
};