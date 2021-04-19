// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const DOWNSTREAM = 1;
const UPSTREAM = 0;

// fish1 should be up in the stream
function willFishesMeet(fish1Direction, fish2Direction) {
  return fish1Direction === DOWNSTREAM && fish2Direction === UPSTREAM;
}

function getFishesAtTop(stack) {
  const length = stack.length;
  return [stack[length - 2], stack[length - 1]];
}

/*
    all fish are moving with the same spee
    hence fishes moving in the same direction won't meet
*/

/*
    max N = 100,000
    Time Complexity: O(N)
*/
function solution(sizes, directions) {
  let index = 0;
  const stack = [];
  const totalFishes = sizes.length;
  while (index < totalFishes) {
    stack.push(index);
    if (index === 0) continue;
    else {
      // console.log("stack = ", stack);
      let [fish1, fish2] = getFishesAtTop(stack);
      let fishesMeet = willFishesMeet(directions[fish1], directions[fish2]);
      // console.log(
      //   `fishes at top = ${fish1},${fish2}`,
      //   " will fishesMeet = ",
      //   fishesMeet
      // );

      // while 2 fishes at the top continue to meet, we keep removing the smaller fish from the stack
      while (fishesMeet) {
        // sizes in this scenario is like this [2,4], so we are interchanging to [4,2], so that we can
        // remove the smaller fish with size = 2 easily using pop
        if (sizes[fish2] > sizes[fish1]) {
          stack[stack.length - 2] = stack[stack.length - 1];
        }
        stack.pop();
        const fishes = getFishesAtTop(stack);
        fish1 = fishes[0];
        fish2 = fishes[1];
        fishesMeet = willFishesMeet(directions[fish1], directions[fish2]);
      }
    }
    index++;
  }
  return stack.length;
}
