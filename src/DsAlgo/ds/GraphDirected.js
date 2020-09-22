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
// graph1.print();

// graph1.dijkstra(vertices1.start, vertices1.finish);
