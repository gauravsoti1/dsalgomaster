function solution(A) {
  A.sort((a, b) => a - b);
  // console.log("sorted A", A);
  let noOfTriangles = 0;

  for (let x = 0; x < A.length - 2; x++) {
    let y = x + 1;
    let z = x + 2;
    while (z < A.length) {
      // console.log(`Considering ${A[x]}, ${A[y]}, ${A[z]}`);
      if (A[x] + A[y] > A[z]) {
        noOfTriangles += z - y;
        z += 1;
      } else if (y < z - 1) y += 1;
      else {
        z += 1;
        y += 1;
      }
    }
  }
  return noOfTriangles;
}
