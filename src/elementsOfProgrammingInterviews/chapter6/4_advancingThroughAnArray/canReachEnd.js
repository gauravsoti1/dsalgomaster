// idea is till we can, we have to figure out the furthest we can reach from
// an index, if furthestReachSoFar gets greater than the last index, then we can reach the end
function canReachEnd(array) {
  let furthestReachSoFar = 0,
    lastIndex = array.length - 1;
  //  i <= furthestReachSoFar because we won't be able to move ahead after that
  for (
    let i = 0;
    i <= furthestReachSoFar && furthestReachSoFar < lastIndex;
    i++
  ) {
    furthestReachSoFar = Math.max(furthestReachSoFar, i + array[i]);
  }
  return furthestReachSoFar >= lastIndex;
}

console.log(canReachEnd([3, 3, 1, 0, 2, 0, 1]));
console.log(canReachEnd([3, 2, 0, 0, 2, 0, 1]));
