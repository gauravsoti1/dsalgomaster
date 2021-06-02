function nQueens(n) {
  const result = [];
  const colPlacement = [];
  solveNQueens(n, 0, colPlacement, result);
  return result;
}

function solveNQueens(n, row, colPlacement, result) {
  if (n === row) {
    result.push(colPlacement);
    return;
  }
  // try placing at every col for this row
  for (let i = 0; i < n; i++) {
    colPlacement.push(i);
    // if valid, then only go ahead and try for the next row
    if (isValid(colPlacement)) {
      solveNQueens(n, row + 1, [...colPlacement], result);
    }
    colPlacement.pop();
  }
}

function isValid(colPlacement) {
  let rowId = colPlacement.length - 1; // total rows filled till now
  // we check till one row before
  for (let i = 0; i < rowId; i++) {
    const diff = Math.abs(colPlacement[i] - colPlacement[rowId]);
    if (diff === 0 || diff === rowId - i) return false;
  }
  return true;
}

const result = nQueens(4);

console.log("result for n = 4 = ", result);

const result1 = nQueens(5);

console.log("result for n = 5 = ", result1);
