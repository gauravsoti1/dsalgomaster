function Cell(x, y) {
  this.x = x;
  this.y = y;
}

// this is not right
function minChessMoves(source, destination) {
  const n = 8;
  let count = 0,
    visited = {};
  function recursive(x, y, count) {
    if (visited[`${x},${y}`]) {
      console.log("already visited", `${x},${y}`);
      return Number.POSITIVE_INFINITY;
    }
    // console.log("x==", x, "y===", y, "count===", count);
    if (x < 1 || x > n || y < 1 || y > n) return Number.POSITIVE_INFINITY;
    // We have reached our destination, we can return
    // count = count + 1;
    visited[`${x},${y}`] = true;
    if (x === destination.x && y === destination.y) return count;
    count = Math.min(
      // recursive(x - 1, y, count + 1),
      // recursive(x + 1, y, count + 1),
      // recursive(x, y - 1, count + 1),
      // recursive(x, y + 1, count + 1),
      // recursive(x + 1, y + 1, count + 1),
      // recursive(x + 1, y - 1, count + 1),
      // recursive(x - 1, y + 1, count + 1),
      // recursive(x - 1, y - 1, count + 1),

      recursive(x - 2, y - 1, count + 1),
      recursive(x - 1, y - 2, count + 1),

      recursive(x - 1, y + 2, count + 1),
      recursive(x - 2, y + 1, count + 1),

      recursive(x + 1, y + 2, count + 1),
      recursive(x + 2, y + 1, count + 1),

      recursive(x + 2, y - 1, count + 1),
      recursive(x + 1, y - 2, count + 1)
    );
    return count;
  }
  console.log(
    `result, minChessMoves to reach from ${source.x},${source.y} to ${destination.x}, ${destination.y}   ===`,
    recursive(source.x, source.y, count)
  );
}

const source = new Cell(2, 4);
const destination = new Cell(6, 4);

minChessMoves(source, destination);
