export default class Graph {
  constructor() {
    this.graph = {};
  }

  addVertex(vertex) {
    this.graph[vertex] = {};
  }

  neighbours(vertex) {
    return Object.keys(this.graph[vertex]);
  }

  addEdge(from, to, weight) {
    this.graph[from][to] = weight;
  }

  dijkstra(startVertex, endVertex) {
    const parents = {};
    const costs = {};
    const processed = {};
    const neighbours = this.neighbours(startVertex);
    const print = (message, data) => {
      const dataCopy = { ...data };
      console.log(message, dataCopy);
    };
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
        // if the new cost is less than the current cost
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

  print() {
    console.log(JSON.stringify(this.graph));
  }
}

// const graph = new Graph();
// const vertices = {
//   start: "start",
//   a: "A",
//   b: "B",
//   final: "final"
// };
// graph.addVertex(vertices.start);
// graph.addVertex(vertices.a);
// graph.addVertex(vertices.b);
// graph.addVertex(vertices.final);
// graph.addEdge(vertices.start, vertices.a, 6);
// graph.addEdge(vertices.start, vertices.b, 2);
// graph.addEdge(vertices.b, vertices.a, 3);
// graph.addEdge(vertices.b, vertices.final, 5);
// graph.addEdge(vertices.a, vertices.final, 1);
// graph.print();

// graph.dijkstra(vertices.start, vertices.final);

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
