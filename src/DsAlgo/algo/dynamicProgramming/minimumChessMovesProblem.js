function Cell(x, y) {
  this.x = x;
  this.y = y;
}

function minChessMoves(source, destination) {
  const n = 8;
  let count = 0,
    visited = {};
  function recursive(x, y, count, visited) {
    console.log("x==", x, "y===", y, "count===", count);
    if (visited[`${x},${y}`]) return count;
    if (x < 1 || x > n || y < 1 || y > n) return count;
    // We have reached our destination, we can return
    // count = count + 1;
    if (x === destination.x && y === destination.y) return count;
    count = Math.min(
      recursive(x - 1, y, count + 1),
      recursive(x + 1, y, count + 1),
      recursive(x, y - 1, count + 1),
      recursive(x, y + 1, count + 1),
      recursive(x + 1, y + 1, count + 1),
      recursive(x + 1, y - 1, count + 1),
      recursive(x - 1, y + 1, count + 1),
      recursive(x - 1, y - 1, count + 1),

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
  recursive(source.x, source.y, count, visited);
}

const source = new Cell(4, 4);
const destination = new Cell(7, 4);

minChessMoves(source, destination);
