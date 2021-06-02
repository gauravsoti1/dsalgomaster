class DirectedGraph {
  static STATES = {
    blank: "BLANK",
    processing: "PROCESSING",
    processed: "PROCESSED",
  };
  constructor() {
    this.list = {};
    this.states = {};
  }

  addVertex(vertex) {
    if (this.list[vertex] === undefined) this.list[vertex] = [];
    this.states[vertex] = DirectedGraph.STATES.blank;
  }

  addEdge(from, to) {
    if (this.list[from] === undefined)
      throw new Error(`${from} vertex has not been added`);
    this.list[from].push(to);
  }

  getNeighbours(vertex) {
    return this.list[vertex];
  }
  updateState(vertex, newState) {
    this.states[vertex] = newState;
  }
  getState(vertex) {
    return this.states[vertex];
  }
}

// This approach is using dfs
function buildGraph(projects, dependencies) {
  const graph = new DirectedGraph();
  projects.forEach((project) => {
    graph.addVertex(project);
  });
  dependencies.forEach(([from, to]) => graph.addEdge(from, to));
  return graph;
}

function buildOrder(projects, dependencies) {
  const graph = buildGraph(projects, dependencies);
  const stack = [];

  function dfs(vertex) {
    const neighbours = graph.getNeighbours(vertex);
    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];
      const state = graph.getState(neighbour);
      // // console.log(`state of ${vertex} neighbour = ${neighbour} = ${state}`);
      if (state === DirectedGraph.STATES.processing) {
        // // console.log(`${neighbour} was already processing, hence we detected a cycle, returning`)
        return -1;
      }
      if (state !== DirectedGraph.STATES.processed) {
        graph.updateState(neighbour, DirectedGraph.STATES.processing);
        // // console.log(`setting ${neighbour} state to processing`);
        const result = dfs(neighbour);
        if (result === -1) return -1;
      }
    }
    // // console.log(`Adding ${vertex} to stack`);
    stack.push(vertex);
    graph.updateState(vertex, DirectedGraph.STATES.processed);
    return 1;
  }

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    if (graph.getState(project) === DirectedGraph.STATES.blank) {
      const result = dfs(project);
      // // console.log(`dfs for ${project}, returns result = ${result}`);
      if (result === -1) return -1; // We encountered a cycle
    }
  }
  return stack.reverse();
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
