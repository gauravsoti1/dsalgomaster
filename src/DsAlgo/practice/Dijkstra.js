const { default: Graph } = require("DsAlgo/ds/graph/GraphDirected");

function getLowestCostNode(costs, processed) {
  let minCost = Number.POSITIVE_INFINITY;
  let minNode = null;
  Object.keys(costs)
    .filter((node) => !processed[node])
    .forEach((node) => {
      if (costs[node] < minCost) {
        minCost = costs[node];
        minNode = node;
      }
    });
  return minNode;
}

function dijkstra(startVertex, endVertex) {
  const costs = {},
    parents = {},
    processed = {};

  costs[startVertex] = 0;
  parents[startVertex] = startVertex;
  let lowestCostNode = getLowestCostNode(costs, processed);
  while (lowestCostNode) {
    const neighbours = this.neighbours(lowestCostNode);
    neighbours.forEach((neighbour) => {
      const currentCost = costs[neighbour] || Number.POSITIVE_INFINITY;
      const newCost =
        costs[lowestCostNode] + this.graph[lowestCostNode][neighbour];
      if (newCost < currentCost) {
        costs[neighbour] = newCost;
        parents[neighbour] = lowestCostNode;
      }
    });
    processed[lowestCostNode] = true;
    lowestCostNode = getLowestCostNode(costs, processed);
  }

  // for printing path
  let path = [];
  let current = endVertex;
  if (!costs[endVertex]) return "Sorry no path exists to this vertex";
  while (current && current !== startVertex) {
    path.push(current);
    current = parents[current];
  }
  path.push(startVertex);
  path = path.reverse();
  return { path, cost: costs[endVertex] };
}

Graph.prototype.dijkstra = dijkstra;
// Graph.prototype.print = print;

const vertices1 = {
  start: "start",
  finish: "finish",
  a: "A",
  b: "B",
};

const graph1 = new Graph();
Object.values(vertices1).forEach((vertex) => graph1.addVertex(vertex));
graph1.addEdge(vertices1.start, vertices1.a, 6);
graph1.addEdge(vertices1.start, vertices1.b, 2);
graph1.addEdge(vertices1.b, vertices1.a, 3);
graph1.addEdge(vertices1.a, vertices1.finish, 1);
graph1.addEdge(vertices1.b, vertices1.finish, 5);
graph1.print();

console.log(graph1.dijkstra(vertices1.start, vertices1.finish));
