// undirected graph
// this is my own solution, not the teacher's
function Graph() {
  const adjacencyList = {};
  function addVertex(vertex) {
    if (adjacencyList[vertex] === undefined) adjacencyList[vertex] = [];
  }
  function addEdge(from, to) {
    const fromVertexNeighbours = adjacencyList[from];
    const toVertexNeighbours = adjacencyList[to];
    if (fromVertexNeighbours === undefined)
      throw new Error(`${from} vertex doesn't exist`);
    if (toVertexNeighbours === undefined)
      throw new Error(`${to} vertex doesn't exist`);
    fromVertexNeighbours.push(to);
    toVertexNeighbours.push(from);
  }
  function neighbours(vertex) {
    const n = adjacencyList[vertex];
    if (n === undefined) throw new Error(`${vertex} vertex doesn't exist`);
    return n;
  }
  function print() {
    console.log(adjacencyList);
  }
  return { addVertex, addEdge, neighbours, print };
}

module.exports = { default: Graph };
