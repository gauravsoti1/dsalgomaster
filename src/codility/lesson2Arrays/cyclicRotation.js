/*
  Got 100% in this, performance was not calculated
*/
function solution(numbers, timesToRotate) {
  const totalNumbers = numbers.length;
  if (timesToRotate === 0 || totalNumbers === timesToRotate) return numbers;
  const rotatedArray = [];
  numbers.forEach((num, i) => {
    const newIndex = (i + timesToRotate) % totalNumbers;
    rotatedArray[newIndex] = num;
  });
  return rotatedArray;
}
