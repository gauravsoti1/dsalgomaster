function isTriangle(a, b, c) {
  // console.log("a = ", a, " b =", b, " c =", c);
  return a + b > c && a + c > b && b + c > a;
}

/*
  Got 54% in this,
  got wrong answers for large values as well
*/
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
        if (isItATriangle) noOfTriangles++;
        else {
          if (secondI === firstI + 1 && thirdI === secondI + 1)
            firstCase = true;
          break;
        }
      }
      // when the first case is not a triangle in itself, we need to break the second loop as well
      // for example for values [1,2,8,10] if 1,2 ,8 is not a triangle,
      // then we are sure that 1,2,10 will also not be a triangle
      if (firstCase) break;
    }
  }
  return noOfTriangles;
}
