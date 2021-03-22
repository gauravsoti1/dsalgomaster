function DirectedGraph() {
  const adjacencyList = {};
  const indegree = {};
  function addVertex(vertex) {
    if (adjacencyList[vertex] !== undefined) return;
    adjacencyList[vertex] = [];
    indegree[vertex] = 0;
  }
  function addEdge(from, to) {
    [from, to].forEach((vertex) => {
      if (adjacencyList[vertex] === undefined) addVertex(vertex);
    });
    adjacencyList[from].push(to);
    indegree[to] = indegree[to] + 1;
  }
  // Worst Case O(V)
  function removeVertex(vertex) {
    neighbours(vertex).forEach((neighbour) => {
      indegree[neighbour] = indegree[neighbour] - 1;
    });
    delete adjacencyList[vertex];
    delete indegree[vertex];
  }

  function neighbours(vertex) {
    return adjacencyList[vertex];
  }

  function getIndegree(vertex) {
    return indegree[vertex];
  }
  // get first vertex with indegree value of 0
  // Time Complexity O(V)
  function getZeroIndegreeVertex() {
    const entries = Object.entries(indegree);
    const zeroDegreeVertexEntry = entries.filter(
      ([vertex, value]) => value === 0
    )[0];
    return zeroDegreeVertexEntry ? zeroDegreeVertexEntry[0] : null;
  }

  function size() {
    return Object.keys(adjacencyList).length;
  }

  function print() {
    console.log(adjacencyList);
  }
  return {
    addVertex,
    addEdge,
    print,
    getIndegree,
    getZeroIndegreeVertex,
    neighbours,
    removeVertex,
    size,
  };
}

module.exports = { default: DirectedGraph };
