const { default: Graph } = require("DsAlgo/ds/graph/GraphDirected");
/*
  costs = {a: 5} -> means cost of a from start vertex is 5

*/

/*
  Dijkstra follows greedy approach, at every step (going to a new neighbour)
  we update what is the lowest cost to reach a node
  from the start node 
*/
function dijkstra(startVertex, endVertex) {
  const parents = {};
  const costs = {};
  const processed = {};
  const neighbours = this.neighbours(startVertex);
  neighbours.forEach((neighbour) => {
    costs[neighbour] = this.graph[startVertex][neighbour] || Infinity;
    parents[neighbour] = startVertex;
  });
  // O(V)
  const getLowestCostNode = () => {
    let minCost = Infinity;
    let minVertex = null;
    Object.entries(costs)
      .filter((entry) => !processed[entry[0]])
      .forEach((entry) => {
        const cost = entry[1];
        if (cost < minCost) {
          minCost = cost;
          minVertex = entry[0];
        }
      });
    return minVertex;
  };

  let lowestCostVertex = getLowestCostNode();
  while (lowestCostVertex) {
    // current cost of the vertex
    const cost = costs[lowestCostVertex];
    let neighbours = this.neighbours(lowestCostVertex);
    for (let neighbour of neighbours) {
      // making sure that the cost of the neighbour exists in the table, otherwise setting it to infinity
      costs[neighbour] = costs[neighbour] || Infinity;
      // newCost for the neighbour is the weight of the edge from current node that is being prcessed
      // to the neighbour + cost of the current processing node
      const newCost = this.graph[lowestCostVertex][neighbour] + cost;
      // if the new cost is less than the current cost of the neighbour, update
      if (newCost < costs[neighbour]) {
        costs[neighbour] = newCost;
        parents[neighbour] = lowestCostVertex;
      }
    }
    processed[lowestCostVertex] = true;
    lowestCostVertex = getLowestCostNode();
  }
  const printShortestPath = (vertex) => {
    const result = [vertex];
    let parent = parents[vertex];
    while (parent) {
      result.push(parent);
      parent = parents[parent];
    }
    console.log("shortest path for", vertex, "=", result.reverse());
  };
  printShortestPath(endVertex);
  console.log("final cost === ", costs[endVertex]);
  return costs[endVertex];
}

function print() {
  console.log(JSON.stringify(this.graph));
}

Graph.prototype.dijkstra = dijkstra;
Graph.prototype.print = print;

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
// graph1.print();

graph1.dijkstra(vertices1.start, vertices1.finish);

function getLowestCostNode(costs, visited) {
  let minCost = Number.POSITIVE_INFINITY,
    resultVertex = null;
  Object.entries(costs)
    .filter(([vertex]) => !visited[vertex])
    .forEach(([vertex, cost]) => {
      if (cost < minCost) {
        minCost = cost;
        resultVertex = vertex;
      }
    });
  return resultVertex;
}

function dijkstra1(startVertex, endVertex) {
  const parents = {},
    costs = {},
    visited = {};
  costs[startVertex] = 0;
  parents[startVertex] = null;
  let lowestCostNode = startVertex;
  while (lowestCostNode) {
    const cost = costs[lowestCostNode];
    const neighbours = this.neighbours(lowestCostNode);
    neighbours.forEach((neighbour) => {
      costs[neighbour] = costs[neighbour] || Number.POSITIVE_INFINITY;
      let newCost = this.graph[lowestCostNode][neighbour] + cost;
      if (newCost < costs[neighbour]) {
        costs[neighbour] = newCost;
        parents[neighbour] = lowestCostNode;
      }
    });
    visited[lowestCostNode] = true;
    lowestCostNode = getLowestCostNode(costs, visited);
  }

  const result = [endVertex];
  let parent = parents[endVertex];
  while (parent) {
    result.push(parent);
    parent = parents[parent];
  }
  console.log("final cost === ", costs[endVertex]);
  return result.reverse();
}

Graph.prototype.dijkstra1 = dijkstra1;

const graph2 = new Graph();
Object.values(vertices1).forEach((vertex) => graph2.addVertex(vertex));
graph2.addEdge(vertices1.start, vertices1.a, 6);
graph2.addEdge(vertices1.start, vertices1.b, 2);
graph2.addEdge(vertices1.b, vertices1.a, 3);
graph2.addEdge(vertices1.a, vertices1.finish, 1);
graph2.addEdge(vertices1.b, vertices1.finish, 5);
graph2.print();

console.log(graph2.dijkstra1(vertices1.start, vertices1.finish));
