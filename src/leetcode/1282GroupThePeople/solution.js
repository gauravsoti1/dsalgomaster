/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const map = new Map();
  const answer = [];
  groupSizes.forEach((groupSize, index) => {
    // console.log(`person ${index} belongs in a group of size = ${groupSize}`)
    if (!map.has(groupSize)) map.set(groupSize, []);
    const group = map.get(groupSize);
    group.push(index);
    if (group.length === groupSize) {
      answer.push(group);
      map.delete(groupSize);
    }
  });
  console.log();
  return answer;
};

// was able to succesfully submit and get a good score
