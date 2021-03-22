const { default: Graph } = require("./graph");

/*
  This is my own solution, and instructor's solution was also the same
*/
function dfs(graph, currentVertex, visited = {}, result = []) {
  // push the current vertex into result
  result.push(currentVertex);
  // mark the current vertex as visited
  visited[currentVertex] = true;
  const neighbours = graph.neighbours(currentVertex);
  // for all the unvisited neighbours, run recursive dfs
  neighbours.forEach((vertex) => {
    if (!visited[vertex]) dfs(graph, vertex, visited, result);
  });
  return result;
}

const graph = new Graph();
[0, 1, 2, 3, 4, 5, 6, 7, 8].forEach((vertex) => graph.addVertex(vertex));
const edges = [[0, 1], [0, 3], [3, 2], [3, 4], [3, 5], [4, 6], [6, 7], [2, 8]];
edges.forEach(([from, to]) => graph.addEdge(from, to));
graph.print();
console.log("dfs result = ", dfs(graph, 0));
