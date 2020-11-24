export default class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // we are not concerned about error handling right now
  addEdge(vertex1, vertex2) {
    // we are adding to both because currently we are considering this to be
    // an undirected graph
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    console.log(`removing edge between ${vertex1} and ${vertex2}`);
    // we could have used filter as well
    const v2Index = this.adjacencyList[vertex1].findIndex((v) => v === vertex2);
    this.adjacencyList[vertex1].splice(v2Index, 1);

    const v1Index = this.adjacencyList[vertex2].findIndex((v) => v === vertex1);
    this.adjacencyList[vertex2].splice(v1Index, 1);
  }

  removeVertex(vertex) {
    /* loop through the adjacencyList of vertex
       then for all the vertices call removeEdge
       then remove the vertex itself

       we are copying vertices because otherwise
       it is a copy by reference and the vertex
       gets removed when we call removeEdge function
    */
    const vertices = [...this.adjacencyList[vertex]];

    for (let v of vertices) {
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfs(startVertex, visited = {}, result = []) {
    if (!startVertex) return;
    visited[startVertex] = true;
    result.push(startVertex);
    // get the adjacency list of start vertex
    const adjacencyList = this.adjacencyList[startVertex];

    // loop throught the list until all the items in the list have been visited
    for (let v of adjacencyList) {
      if (!visited[v]) this.dfs(v, visited, result);
    }

    //         console.log(startVertex);

    // for every vertex, call dfs with the vertex
    // exit from the function whene we have visited a vertex's all siblings
    return result;
  }

  dfsIterative(startVertex, result = []) {
    const visited = {};
    const stack = [];
    // push the start vertex to stack
    stack.push(startVertex);
    visited[startVertex] = true;
    while (stack.length > 0) {
      //get first element from the stack
      const vertex = stack.pop();
      result.push(vertex);
      // if vertex hasn't already been visited
      const adjacencyList = this.adjacencyList[vertex];
      for (let neighbour of adjacencyList) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      }
    }
    return result;
  }

  bfs(startVertex, visited = {}, result = [], queue = []) {
    // get adjacencyList of startVertex
    queue.push(startVertex);
    visited[startVertex] = true;
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      const adjacencyList = this.adjacencyList[vertex] || [];
      // visit all the vertices and mark them visited and add them to queue
      for (let v of adjacencyList) {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      }
    }
    return result;
  }

  bfs1(startVertex) {
    // Need to find endVertex, start from startVertex
    const queue = [];
    const visited = {};
    const result = [];
    queue.push(startVertex);
    visited[startVertex] = true;
    while (queue.length !== 0) {
      const vertex = queue.shift();
      result.push(vertex);
      // if (vertex === endVertex) return result;
      const neighbours = this.adjacencyList[vertex];
      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          queue.push(neighbour);
          visited[neighbour] = true;
        }
      }
    }
    return result;
  }

  dfs1(startVertex) {
    const visited = {};
    const result = [];
    const dfsHelper = (vertex) => {
      if (!vertex) return;
      result.push(vertex);
      visited[vertex] = true;
      const neighbours = this.adjacencyList[vertex];
      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          dfsHelper(neighbour);
        }
      }
    };
    dfsHelper(startVertex);
    return result;
  }

  dfsIterative1(startVertex) {
    const visited = {};
    const result = [];
    const stack = [];
    visited[startVertex] = true;
    stack.push(startVertex);
    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);
      const neighbours = this.adjacencyList[vertex];
      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      }
    }
    return result;
  }

  print() {
    console.log("graph =", JSON.stringify(this.adjacencyList));
  }
}

let graph = new Graph();
let dallas = "Dallas";
let tokyo = "Tokyo";
let losAngeles = "Los Angeles";
let newDelhi = "New Delhi";
let mumbai = "Mumbai";

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
graph.print();

// graph.removeEdge(tokyo, losAngeles);
// console.log("removed tokyo and los angeles edge")
// graph.print();

// graph.removeVertex(losAngeles);
// console.log("removed los angeles");
// graph.print();

// ********* for displaying dfs **********
// {
// console.log("printing dfs");
// let resultDfs = graph.dfs(newDelhi);
// console.log(resultDfs.join("\n ↓ \n"));
// }

// ********* for displaying bfs **********
// {
// console.log("printing bfs");
// let result = graph.bfs(newDelhi);
// console.log(result.join("\n ↓ \n"));
// }

// {
console.log("printing dfs iterative");
let result = graph.dfsIterative(newDelhi);
console.log(result.join("\n ↓ \n"));
// }

// ********* for dfs1 ********
// console.log("printing dfs1");
// let resultDfs1 = graph.dfs1(newDelhi);
// console.log(resultDfs1.join("\n ↓ \n"));

// ********* for bfs1 ********
// let resultBfs1 = graph.bfs1(newDelhi);
// console.log(resultBfs1);

// ********* for dfsIterative1 ********
console.log("printing dfs iterative 1");
let resultDfsiterative1 = graph.dfsIterative1(newDelhi);
console.log(resultDfsiterative1.join("\n ↓ \n"));
