// https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/

/*
  Shortest path in a Binary Maze

  Given a MxN matrix where each element can either be 0 or 1. We need to find the shortest path between a given source cell to a destination cell. The path can only be created out of a cell if its value is 1.
  Expected time complexity is O(MN).
  For example – 
  
  Input:
  mat[ROW][COL]  = {{1, 0, 1, 1, 1, 1, 0, 1, 1, 1 },
                  {1, 0, 1, 0, 1, 1, 1, 0, 1, 1 },
                  {1, 1, 1, 0, 1, 1, 0, 1, 0, 1 },
                  {0, 0, 0, 0, 1, 0, 0, 0, 0, 1 },
                  {1, 1, 1, 0, 1, 1, 1, 0, 1, 0 },
                  {1, 0, 1, 1, 1, 1, 0, 1, 0, 0 },
                  {1, 0, 0, 0, 0, 0, 0, 0, 0, 1 },
                  {1, 0, 1, 1, 1, 1, 0, 1, 1, 1 },
                  {1, 1, 0, 0, 0, 0, 1, 0, 0, 1 }};
  Source = {0, 0};
  Destination = {3, 4};

  Output:
  Shortest Path is 11 

*/

/*

  The idea is inspired from Lee algorithm and uses BFS.  

    We start from the source cell and calls BFS procedure.
    We maintain a queue to store the coordinates of the matrix and initialize it with the source cell.
    We also maintain a Boolean array visited of same size as our input matrix and initialize all its elements to false.
        We LOOP till queue is not empty
        Dequeue front cell from the queue
        Return if the destination coordinates have reached.
        For each of its four adjacent cells, if the value is 1 and they are not visited yet, we enqueue it in the queue and also mark them as visited.

  Note that BFS works here because it doesn’t consider a single path at once. It considers all the paths
  starting from the source and moves ahead one unit in all those paths at the same time which makes sure that the first time when the destination is visited, it is the shortest path.

*/

function getMatrixHelpers(maze) {
  const totalRows = maze.length;
  const totalCols = maze[0].length;

  function isNotBlocked(point) {
    return maze[point.x][point.y] === 1;
  }
  function isValidPoint(point) {
    return (
      point.x >= 0 && point.x < totalRows && point.y >= 0 && point.y < totalCols
    );
  }
  function initializeEmptyMatrix() {
    return new Array(totalRows).fill(0).map(() => new Array(totalCols).fill(0));
  }
  return {
    isNotBlocked,
    isValidPoint,
    totalRows,
    totalCols,
    initializeEmptyMatrix,
  };
}

function point({ x, y, dist = 0 }) {
  function isEqual(point2) {
    return this.x === point2.x && this.y === point2.y;
  }
  // This doesn't consider diagonal neighbours
  function neighbours() {
    const leftN = point({ y: this.y, x: this.x - 1, dist: this.dist + 1 });
    const rightN = point({ y: this.y, x: this.x + 1, dist: this.dist + 1 });
    const topN = point({ x: this.x, y: this.y - 1, dist: this.dist + 1 });
    const bottomN = point({ x: this.x, y: this.y + 1, dist: this.dist + 1 });
    return [leftN, rightN, topN, bottomN];
  }
  return { x, y, dist, isEqual, neighbours };
}

function BFS(maze = [], src, dest) {
  const {
    isNotBlocked,
    isValidPoint,
    initializeEmptyMatrix,
  } = getMatrixHelpers(maze);
  if (!isNotBlocked(src) || !isNotBlocked(dest)) return -1;

  const isVisited = initializeEmptyMatrix();
  isVisited[src.x][src.y] = true;
  const queue = [];
  // src.dist = 0; // don't need to this, by default distance of a point is zero
  queue.push(src);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.isEqual(dest)) {
      return current.dist;
    }
    const neighbours = current.neighbours();
    neighbours.forEach((neighbour) => {
      if (
        isValidPoint(neighbour) &&
        isNotBlocked(neighbour) &&
        !isVisited[neighbour.x][neighbour.y]
      ) {
        isVisited[neighbour.x][neighbour.y] = true;
        queue.push(neighbour);
      }
    });
  }
  return -1;
}

function run() {
  const maze = [
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  ];

  const source = point({ x: 0, y: 0 });
  const dest = point({ x: 8, y: 9 });
  const dist = BFS(maze, source, dest);
  console.log("distance ===", dist);
}

run();
