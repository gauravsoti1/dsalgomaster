// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function myStack() {
  const stack = [];
  function peek() {
    const length = stack.length;
    return stack[length - 1];
  }
  function pop() {
    return stack.pop();
  }
  function push(value) {
    stack.push(value);
  }
  function isEmpty() {
    const length = stack.length;
    return length === 0;
  }

  function print() {
    console.log("stack = ", stack);
  }
  return {
    peek,
    pop,
    push,
    print,
    isEmpty,
  };
}

function solution(A) {
  const stack = myStack();
  const N = A.length;
  /*
    If elements: current and at the top of stack are different,
    we pop from the stack, if they are same, we push to the stack
    at the end you will be only left with the leaderCandidate,
  */
  for (let i = 0; i < N; i++) {
    if (i === 0 || stack.isEmpty()) stack.push(A[i]);
    else {
      if (stack.peek() !== A[i]) stack.pop();
      else stack.push(A[i]);
    }
    // stack.print()
  }
  const leaderCandidate = stack.pop();
  if (leaderCandidate === undefined) return -1;
  let count = 0,
    index;
  /*
    it is not necessary that the elem left will occur in the array
    for more than N/2 times, so we check the count
  */
  for (let i = 0; i < N; i++) {
    if (A[i] === leaderCandidate) {
      index = i;
      count++;
    }
  }
  // console.log("leader = ", leaderCandidate, " count = ", count, " N = ", N)
  return count > N / 2 ? index : -1;
}
