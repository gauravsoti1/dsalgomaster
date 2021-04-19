/*
  Perimeter will be the smallest when length and breadth 
  of the rectangle will be as close to each other as possible 
  in value
*/
function solution(N) {
  let x = undefined;
  let y = undefined;
  let index = Math.floor(Math.sqrt(N));
  // console.log("index = ", index);
  while (index >= 1 && x === undefined) {
    // we have found the closest value to sqrt of N which divides N
    // hence it will be the length and N/index will be the breadth
    if (N % index === 0) {
      x = index;
      y = N / index;
    }
    index--;
  }
  // console.log("x = ", x , " y = ", y);
  return 2 * (x + y);
}
