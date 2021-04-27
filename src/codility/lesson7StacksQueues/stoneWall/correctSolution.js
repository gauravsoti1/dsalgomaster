class MyStack extends Array {
  constructor(size = 0) {
    super(size);
  }
  peek() {
    return this[this.length - 1];
  }
  isEmpty() {
    return this.length === 0;
  }
}

/*
  Time Complexity: O(N)
  Got 100% in this
*/
function solution(H) {
  const st = new MyStack();
  let numBlock = 0;

  // note: H[i] is the ith height of the wall
  for (let i = 0; i < H.length; i++) {
    // step 1: "stack is not empty" AND "from high to low"
    // then, "pop" (it is the key point, be careful)
    // we are popping because current block in the stack
    // won't be used anymore
    while (!st.isEmpty() && st.peek() > H[i]) {
      st.pop();
    }
    // step 2: if the stack is empty
    if (st.isEmpty()) {
      numBlock++; // add a block
      st.push(H[i]); // push the height
    }
    // step 3: the height is the same: do nothing
    else if (st.peek() === H[i]) {
    }
    // step 4: from low to high
    // we are not removing the element from the stack
    // because current height can be used later on
    else if (st.peek() < H[i]) {
      numBlock++; // add a block
      st.push(H[i]); // push the height
    }
  }

  return numBlock;
}
