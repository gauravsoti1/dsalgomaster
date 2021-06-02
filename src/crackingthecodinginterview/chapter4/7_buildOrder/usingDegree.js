class DirectedGraph {
  constructor() {
    this.list = {};
    this.degrees = {};
  }
  addVertex(vertex) {
    if (this.list[vertex] === undefined) this.list[vertex] = [];
    this.degrees[vertex] = 0;
  }

  addEdge(from, to) {
    if (this.list[from] === undefined)
      throw new Error(`${from} vertex has not been added`);
    this.list[from].push(to);
    this.degrees[to] = this.degrees[to] + 1;
  }

  getNeighbours(vertex) {
    return this.list[vertex];
  }

  getDegree(vertex) {
    return this.degrees[vertex];
  }
  decrementDegree(vertex) {
    this.degrees[vertex] = this.degrees[vertex] - 1;
  }
  incrementDegree(vertex) {
    this.degrees[vertex] = this.degrees[vertex] + 1;
  }
}

function buildGraph(projects, dependencies) {
  const graph = new DirectedGraph();
  projects.forEach((project) => {
    graph.addVertex(project);
  });
  dependencies.forEach(([from, to]) => graph.addEdge(from, to));
  return graph;
}

function updateZeroDepProjects(graph, projects, zeroDepProjects) {
  if (!Array.isArray(zeroDepProjects))
    throw new Error("zeroDepProjects should be an array");
  projects.forEach((project) => {
    if (graph.getDegree(project) === 0) zeroDepProjects.push(project);
  });
}

function buildOrder(projects, dependencies) {
  // build Graph
  const graph = buildGraph(projects, dependencies);
  // currentProjectIndex
  const totalProjects = projects.length;
  let currentProjectIndex = 0;
  const zeroDepProjects = [];
  updateZeroDepProjects(graph, projects, zeroDepProjects);
  while (currentProjectIndex < totalProjects) {
    const currentProject = zeroDepProjects[currentProjectIndex];
    // there is no zero dep project and we haven't processed all projects, hence there is a cycle
    if (!currentProject) return -1;
    const neighbours = graph.getNeighbours(currentProject);
    neighbours.forEach((neighbour) => graph.decrementDegree(neighbour));
    // new zero dep projects will only be present in the neighbours that we have updated
    updateZeroDepProjects(graph, neighbours, zeroDepProjects);
    currentProjectIndex++;
  }
  return zeroDepProjects;
}

(function testCase1() {
  const result = buildOrder(
    ["a", "b", "c", "d", "e", "f"],
    [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]]
  );
  console.log("result = ", result);
})();

(function testCase2() {
  console.log("-------- Testcase with cycle ----------");
  const result = buildOrder(
    ["a", "b", "c", "d", "e", "f"],
    [["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"], ["d", "f"]]
  );
  console.log("result = ", result);
})();
