/*
  My solution was 100% correct but I only got
  score = 55% in this because time complexity is O(n^2)
*/
function solution(nums) {
  const totalNumbers = nums.length;
  if (totalNumbers === 1) return 0;
  let equiLeaders = 0;
  for (let i = 0; i < totalNumbers - 1; i++) {
    const leftLeader = getLeader(nums, 0, i);
    const rightLeader = getLeader(nums, i + 1, totalNumbers - 1);
    // console.log("leftLeader = ", leftLeader, " rightLeader = ", rightLeader);
    if (leftLeader === -1 || rightLeader === -1) continue;
    if (leftLeader === rightLeader) equiLeaders++;
  }
  return equiLeaders;
}

function getLeader(array, from, to) {
  const map = new Map();
  for (let i = from; i <= to; i++) {
    const value = map.get(array[i]) || 0;
    map.set(array[i], value + 1);
  }
  const leaderValue = Math.floor((to - from + 1) / 2);
  // console.log("leaderValue === ", leaderValue);
  let result = -1;
  map.forEach((value, key) => {
    if (value > leaderValue) result = key;
  });
  return result;
}
