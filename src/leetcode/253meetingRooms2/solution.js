/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const startTimes = [], endTimes = [], totalIntervals = intervals.length
  for (let i = 0; i < totalIntervals; i++ ){
    startTimes[i] = intervals[i][0];
    endTimes[i] = intervals[i][1]
  }
  //  sorted start times
  startTimes.sort((a,b) => a-b);
  //  sorted end times
  endTimes.sort((a,b) => a-b);
  // create noOfRooms variable
  let noOfMeetingRooms = 0;
  let startPointer = 0, endPointer = 0;
  // loop through until all start times have been considered
  while (startPointer < totalIntervals){
    if (startTimes[startPointer] >= endTimes[endPointer]){
      noOfMeetingRooms--;
      endPointer++;
    }
    startPointer++;
    noOfMeetingRooms++;
  }
  return noOfMeetingRooms;
};