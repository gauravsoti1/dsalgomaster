const { default: Graph } = require("./Graph");
const p = document.createElement("p");
p.innerText = "Finding bfs for a graph";
document.body.appendChild(p);
// graph param will contain the adjacency list
function bfs(graph, startVertex) {
  const visited = {};
  const result = [];
  const queue = [];
  queue.push(startVertex);
  visited[startVertex] = true;

  while (queue.length > 0) {
    const currentVertex = queue.shift();

    result.push(currentVertex);
    const neighbours = graph[currentVertex];
    neighbours.forEach((neighbour) => {
      if (!visited[neighbour]) {
        queue.push(neighbour);
        visited[neighbour] = true;
      }
    });
  }
  return result;
}

const dallas = "Dallas";
const tokyo = "Tokyo";
const losAngeles = "Los Angeles";
const newDelhi = "New Delhi";
const mumbai = "Mumbai";

function buildGraph() {
  let graph = new Graph();

  graph.addVertex(dallas);
  graph.addVertex(tokyo);
  graph.addVertex(losAngeles);
  graph.addVertex(mumbai);
  graph.addVertex(newDelhi);

  graph.addEdge(dallas, tokyo);
  graph.addEdge(tokyo, losAngeles);
  graph.addEdge(dallas, losAngeles);
  graph.addEdge(newDelhi, losAngeles);
  graph.addEdge(newDelhi, mumbai);
  // graph.print();
  return graph;
}

const graph = buildGraph();
graph.print();

const result = bfs(graph.adjacencyList, dallas);
console.log("start vertex ===", dallas, "bfs result ===", result.join(" -> "));
// Output: start vertex === Dallas bfs result === Dallas -> Tokyo -> Los Angeles -> New Delhi -> Mumbai

const result1 = bfs(graph.adjacencyList, mumbai);
console.log("start vertex ===", mumbai, "bfs result ===", result1.join(" -> "));
// Output: start vertex === Mumbai bfs result === Mumbai -> New Delhi -> Los Angeles -> Tokyo -> Dallas
