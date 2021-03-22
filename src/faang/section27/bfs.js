const { default: Graph } = require("./graph");

function bfs(graph, startVertex) {
  const queue = [startVertex];
  const visited = {},
    result = [];
  while (queue.length > 0) {
    const currentVertex = queue.shift();
    result.push(currentVertex);
    visited[currentVertex] = true;
    const neighbours = graph.neighbours(currentVertex);
    neighbours.forEach((vertex) => {
      if (!visited[vertex]) queue.push(vertex);
    });
  }
  return result;
}

const graph = new Graph();
[0, 1, 2, 3, 4, 5, 6, 7, 8].forEach((vertex) => graph.addVertex(vertex));
const edges = [[0, 1], [0, 3], [3, 2], [3, 4], [3, 5], [4, 6], [6, 7], [2, 8]];
edges.forEach(([from, to]) => graph.addEdge(from, to));
graph.print();
console.log("bfs result = ", bfs(graph, 0));
