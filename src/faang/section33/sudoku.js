function getBoxId(row, col) {
  const colVal = Math.floor(col / 3);
  const rowVal = Math.floor(row / 3) * 3;
  return colVal + rowVal;
}

function convertGridToHashMap(grid) {
  const cols = [];
  for (let col = 0; col < 9; col++) {
    cols.push(new Set());
    for (let row = 0; row < 9; row++) {
      const value = grid[row][col];
      if (value !== null) cols[col].add();
    }
  }
  const rows = [];
  const boxes = [];
  for (let i = 0; i < 9; i++) {
    boxes.push(new Set());
  }
  for (let row = 0; row < 9; row++) {
    rows.push(new Set());
    for (let col = 0; col < 9; col++) {
      const value = grid[row][col];
      if (value !== null) {
        rows[row].add(value);
        const boxId = getBoxId(row, col);
        boxes[boxId].add(value);
      }
    }
  }

  function printGrid() {
    console.log("--------- Grid -----------");
    for (let i = 0; i < 9; i++) {
      console.log(grid[i].join(", "));
    }
    console.log("--------------------------");
  }

  function isValid(newValue, newValueRow, newValueCol) {
    // if (newValueRow === 0 && newValueCol === 2) {
    //   if (cols[newValueCol].has(newValue))
    //     console.log(`col has value ${newValue}`);
    //   if (rows[newValueRow].has(newValue))
    //     console.log(`row has value ${newValue}`);
    //   const boxId = getBoxId(newValueRow, newValueCol);

    //   if (boxes[boxId].has(newValue))
    //     console.log(`box with id = ${boxId} has value ${newValue}`, boxes);
    // }
    if (cols[newValueCol].has(newValue)) return false;
    if (rows[newValueRow].has(newValue)) return false;
    const boxId = getBoxId(newValueRow, newValueCol);
    if (boxes[boxId].has(newValue)) return false;
    return true;
  }

  function updateRowsColsBoxes(newValue, newValueRow, newValueCol) {
    cols[newValueCol].add(newValue);
    rows[newValueRow].add(newValue);
    const boxId = getBoxId(newValueRow, newValueCol);
    boxes[boxId].add(newValue);
    // console.log(`Adding ${newValue}, new row = `, rows[0]);
    // printGrid();
  }

  function removeValue(newValue, newValueRow, newValueCol) {
    cols[newValueCol].delete(newValue);
    rows[newValueRow].delete(newValue);
    const boxId = getBoxId(newValueRow, newValueCol);
    boxes[boxId].delete(newValue);
    // console.log(`Removing ${newValue}, new row = `, rows[0]);
    // printGrid();
  }
  // console.log("rows = ", rows);
  // console.log("cols = ", cols);
  // console.log("boxes = ", boxes);
  console.log("boxes", boxes);
  return {
    cols,
    rows,
    boxes,
    isValid,
    updateRowsColsBoxes,
    removeValue,
    printGrid,
  };
}

function sudokuSolver(grid) {
  const {
    isValid,
    updateRowsColsBoxes,
    removeValue,
    printGrid,
  } = convertGridToHashMap(grid);

  function recursiveSudokuSolver(currentRow, currentCol) {
    console.log(` ${currentRow} and ${currentCol}`);
    if (currentRow >= 9) return true;
    if (currentCol >= 9) return recursiveSudokuSolver(currentRow + 1, 0);
    if (grid[currentRow][currentCol] === null) {
      // let lastAddedValue = null;
      for (let i = 1; i <= 9; i++) {
        if (isValid(i, currentRow, currentCol)) {
          // console.log(`adding value ${i} at ${currentRow} and ${currentCol}`);
          // lastAddedValue = i;
          grid[currentRow][currentCol] = i;
          updateRowsColsBoxes(i, currentRow, currentCol);
          const solved = recursiveSudokuSolver(currentRow, currentCol + 1);
          // console.log(
          //   `for ${currentRow},${currentCol} and value = ${i}, answer is ${solved}`
          // );
          if (solved) return true;
          else {
            removeValue(i, currentRow, currentCol);
            grid[currentRow][currentCol] = null;
          }
        }
      }
      // console.log("No value is valid");
      // printGrid();
      // grid[currentRow][currentCol] = null;
      // removeValue(lastAddedValue, currentRow, currentCol);
      return false;
    } else {
      return recursiveSudokuSolver(currentRow, currentCol + 1);
    }
  }
  recursiveSudokuSolver(0, 0);
  console.log("solved solution = ", grid);
  return grid;
}

const sudokuGrid = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9],
];

sudokuSolver(sudokuGrid);
