export function printMatrix(matrix) {
  console.log(matrix.forEach((row) => console.log(row.join(" , "))));
}

export function printMatrixWithXyLabel(matrix, x, y) {
  console.log("matrix ===");
  const columnString = "%c" + [" ", " ", "", ...y].join("\t");
  console.log(columnString, "color: teal; font-weight: bold; ");
  console.log(
    matrix.forEach((row, i) => {
      const toPrint = [i > 0 ? x[i - 1] : "", " ", ...row];
      console.log(toPrint.join("\t"));
    })
  );
}
