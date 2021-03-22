const { default: DirectedGraph } = require("./DirectedGraph");
// get one zero degree vertex
// remove all the edges from it
// update indegree as well
// do this for all zero degree vertex
/*
  Time Complexity: O(V^2)
*/
function topologicalSort(originalGraph) {
  const graph = { ...originalGraph };
  const result = [];
  let zeroVertex = graph.getZeroIndegreeVertex();
  // Worst Case loop will run V times
  while (zeroVertex) {
    result.push(zeroVertex);
    // This reduces indegree of all the neighbours and removes the vertex
    graph.removeVertex(zeroVertex);
    zeroVertex = graph.getZeroIndegreeVertex();
  }
  console.log("result ===", result);
  return graph.size() === 0;
}

const graph = DirectedGraph();

const prerequisites = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]];

prerequisites.forEach(([after, before]) => graph.addEdge(before, after));
console.log("Is course schedule possible?", topologicalSort(graph));
// graph.print();
