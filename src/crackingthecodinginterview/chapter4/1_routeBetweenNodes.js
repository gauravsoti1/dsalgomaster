class DirectedGraph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (this.list[vertex] === undefined) this.list[vertex] = [];
  }

  addEdge(from, to) {
    if (this.list[from] === undefined)
      throw new Error(`${from} vertex has not been added`);
    this.list[from].push(to);
  }

  getNeighbours(vertex) {
    return this.list[vertex];
  }
}

function buildGraph(numNodes, edges) {
  const graph = new DirectedGraph();
  for (let i = 1; i <= numNodes; i++) {
    graph.addVertex(i);
  }
  edges.forEach(([from, to]) => graph.addEdge(from, to));
  return graph;
}
/*
  This can be done with breadth first search as well.
  DFS - Visited one chain deeply
  BFS - Visits all neighbours first then goes deeper
  BFS will provide better result in most cases
*/
function hasPath(numNodes, edges, start, finish) {
  const graph = buildGraph(numNodes, edges);
  function hasPathRecursive(start, finish, visited) {
    if (start === finish) return true;
    visited.add(start);
    const neighbours = graph.getNeighbours(start);
    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];
      if (!visited.has(neighbour)) {
        const result = hasPathRecursive(neighbour, finish, visited);
        if (result === true) return true;
      }
    }
    return false;
  }
  return hasPathRecursive(start, finish, new Set());
}

(function testCase1() {
  console.log("---------Test case 1----------");
  const numNodes = 4;
  const edges = [[1, 2], [1, 3], [2, 4]];
  const result1 = hasPath(numNodes, edges, 1, 4);
  console.log(
    "There should be a path between 1 and 4.",
    "Test Passed?",
    result1 === true
  );
  const result2 = hasPath(numNodes, edges, 3, 4);
  console.log(
    "There should not be a path between 3 and 4.",
    "Test Passed?",
    result2 === false
  );
  const result3 = hasPath(numNodes, edges, 1, 3);
  console.log(
    "There should be a path between 1 and 3.",
    "Test Passed?",
    result3 === true
  );
})();

(function testCase2() {
  console.log("---------Test case 2----------");
  const numNodes = 5;
  const edges = [];
  const result1 = hasPath(numNodes, edges, 1, 4);
  console.log(
    "There should not be a path between 1 and 4.",
    "Test Passed?",
    result1 === false
  );
  const result2 = hasPath(numNodes, edges, 3, 4);
  console.log(
    "There should not be a path between 3 and 4.",
    "Test Passed?",
    result2 === false
  );
  const result3 = hasPath(numNodes, edges, 1, 3);
  console.log(
    "There should not be a path between 1 and 3.",
    "Test Passed?",
    result3 === false
  );
})();
