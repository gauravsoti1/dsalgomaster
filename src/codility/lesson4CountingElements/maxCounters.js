/*
  Time Complexity is O(N+M)
  M is the number of instructions and N is the number of counters
  Scored 100% in this

*/
function solution(N, A) {
  let maxCounter = 0,
    lastMaxValue = 0;
  const counters = new Array(N).fill(0);
  // loop through every instruction
  A.forEach((instruction) => {
    // here we need to update individual counter
    if (1 <= instruction && instruction <= N) {
      const currentValue = counters[instruction - 1];
      /* 
        if current counter value is already more than the lastMaxValue
        then that means it was updated before, hence we can just increment
        it by one
        If the current value is less than lastMaxValue, eg: lastMaxValue = 2
        but the counter is still at 0, then we will increment 1 in lastMaxValue
        and update the counter
      */
      counters[instruction - 1] =
        currentValue > lastMaxValue ? currentValue + 1 : lastMaxValue + 1;
      maxCounter = Math.max(maxCounter, counters[instruction - 1]);
    } else if (instruction === N + 1) {
      /*
        when we have to update all values to maxCounter value
        it doesn't make sense to update them each and every time
        by running a for loop, it increases complexity
        that's why we are storing the lastMaxValue
      */
      lastMaxValue = maxCounter;
    }
  });
  // some counters will still be less than the lastMaxValue
  // we need to make sure than we set them equal to the 
  // lastMaxValue
  counters.forEach((counter, index) => {
    if (counter < lastMaxValue) counters[index] = lastMaxValue;
  });
  return counters;
}
