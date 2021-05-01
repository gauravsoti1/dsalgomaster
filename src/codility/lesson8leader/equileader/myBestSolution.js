/*
  Logic is that if a leader is present, then for any two ranges 
  leader can be only that value, so we don't need to calculate the leader again and again
*/

function solution(A) {
  const { leader, count } = findLeader(A);
  // console.log("leader = ", leader, " count = ", count);
  let totalLeaders = 0;
  if (leader === null) return totalLeaders;
  let leftLeaders = 0;
  let rightLeaders = count;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) {
      leftLeaders++;
    }
    rightLeaders = count - leftLeaders;

    const valueToBeALeaderOnLeftSide = Math.floor((i + 1) / 2);
    const valueToBeALeaderOnRightSide = Math.floor((A.length - i - 1) / 2);
    // console.log("leftLeaders = ", leftLeaders, " rightLeaders = ", rightLeaders, " valueToBeALeaderOnLeftSide = ", valueToBeALeaderOnLeftSide, " valueToBeALeaderOnRightSide = ", valueToBeALeaderOnRightSide)
    if (
      leftLeaders > valueToBeALeaderOnLeftSide &&
      rightLeaders > valueToBeALeaderOnRightSide
    )
      totalLeaders++;
  }
  return totalLeaders;
}

function findLeader(array) {
  const map = new Map();
  array.forEach((a) => {
    const value = map.get(a) || 0;
    map.set(a, value + 1);
  });
  const leaderValue = Math.floor(array.length / 2);
  let leader = null;
  map.forEach((value, key) => {
    if (value > leaderValue) leader = key;
  });
  return { leader, count: map.get(leader) || 0 };
}
