/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
 var numOfMinutes = function(n, headID, managers, informTime) {
  const graph = buildSubordinateTree(managers);
  return getInformTime(informTime, graph, headID);
};

function getInformTime(informTime, graph, headId){
  const subordinates = graph[headId];
  let max = 0;
  // I have informtime for all subordinates, then I need to go deeper for individual subordinate
  let informTimeHead = informTime[headId];
  subordinates.forEach((subordinate) => {
    max = Math.max(max, getInformTime(informTime, graph, subordinate));
  })
  return informTimeHead +  max;
}

// [2,2,-1,2,2,2]
function buildSubordinateTree(managers){
  const graph = [];
  managers.forEach((manager, index ) => {
    graph.push([]);
  })
  // 2 is the manager of index 0, that means 2 will have 0 in its adjacency list
  managers.forEach((manager, index) => {
    if (manager === -1)
      return;
    const subordinates = graph[manager];
    subordinates.push(index);
  })
  return graph;
}