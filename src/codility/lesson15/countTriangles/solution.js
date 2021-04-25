/*
  Got 100% correctness
  25% performance
*/
function isTriangle(a, b, c) {
  // console.log("a = ", a, " b =", b, " c =", c);
  return ((a + b) > c) && ((a + c) > b) && ((b + c) > a)
}

// I was very close to the best solution in my other solutions, as the best solution is O(n^2)
function solution(A) {
  let noOfTriangles = 0;
  A.sort((a, b) => a - b);
  // console.log("sorted A", A);
  // let firstI = 0;
  const totalElem = A.length;
  for (let firstI = 0; firstI < totalElem - 2; firstI++) {
      let firstCase = false;
      for (let secondI = firstI + 1; secondI < totalElem - 1; secondI++) {
          for (let thirdI = secondI + 1; thirdI < totalElem; thirdI++) {
              const isItATriangle = isTriangle(A[firstI], A[secondI], A[thirdI]);
              if (isItATriangle){
                  noOfTriangles++;
                  // console.log("It is a triangle");
              }
              else {
                  // if (secondI === firstI + 1 && thirdI === secondI + 1)
                  //     firstCase = true;
                  break;
              }
          }
          // if (firstCase)
          //     break;
      }
  }
  return noOfTriangles;
}