/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
/*
  We just do simple DFS, if we are able to visit all rooms, then return true
  otherwise false
*/
var canVisitAllRooms = function(rooms) {
  const totalRooms = rooms.length;
  const visitedRooms = new Array(totalRooms).fill(false);
  const stack = [0];
  visitedRooms[0] = true;

  while (stack.length !== 0) {
    const room = stack.pop();
    const roomKeys = rooms[room];
    roomKeys.forEach((key) => {
      if (!visitedRooms[key]) {
        stack.push(key);
        visitedRooms[key] = true;
      }
    });
  }
  for (let visited of visitedRooms) {
    if (!visited) return false;
  }
  return true;
};
