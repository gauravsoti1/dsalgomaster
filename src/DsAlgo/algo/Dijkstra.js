const { default: Graph } = require("DsAlgo/ds/GraphDirected");
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
  c: "C",
  d: "D",
};

const graph1 = new Graph();
Object.values(vertices1).forEach((vertex) => graph1.addVertex(vertex));
graph1.addEdge(vertices1.start, vertices1.a, 5);
graph1.addEdge(vertices1.start, vertices1.b, 2);
graph1.addEdge(vertices1.a, vertices1.c, 4);
graph1.addEdge(vertices1.b, vertices1.d, 7);
graph1.addEdge(vertices1.c, vertices1.d, 6);
graph1.print();

graph1.dijkstra(vertices1.start, vertices1.finish);
