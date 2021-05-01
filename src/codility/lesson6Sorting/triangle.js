function isTriangle(x, y, z) {
  // console.log(x,y,z)
  return x + y > z && y + z > x && z + x > y;
}

/*
  bad solution because it is O(N^3)
  three loops are unnecessary
*/

function solution(A) {
  const positiveValues = A.reduce((newArr, a) => {
    if (a > 0) newArr.push(a);
    return newArr;
  }, []);
  positiveValues.sort((a, b) => a - b);
  const length = positiveValues.length;
  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        if (isTriangle(positiveValues[i], positiveValues[j], positiveValues[k]))
          return 1;
      }
    }
  }
  return 0;
}

/*

  good solution:
  We don't need to do three nested loops because if in a sorted array,
  [1,2,3,4] we get a condition where first three values is not a triangle
  , ex: say 1,2,3 don't make a triangle, then: 1,2,4 or 1,3,4 also won't make
  a triangle
  also we don't have to calculate total number of triangles

  Got 100%
*/
function goodSolution(A) {
  const positiveValues = A.reduce((newArr, a) => {
    if (a > 0) newArr.push(a);
    return newArr;
  }, []);
  positiveValues.sort((a, b) => a - b);
  const length = positiveValues.length;
  for (let i = 0; i < length - 2; i++) {
    const j = i + 1;
    const k = j + 1;
    // console.log(i,j,k)
    if (isTriangle(positiveValues[i], positiveValues[j], positiveValues[k]))
      return 1;
  }
  return 0;
}
