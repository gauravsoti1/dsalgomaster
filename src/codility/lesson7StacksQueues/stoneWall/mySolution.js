class MyStack extends Array {
  constructor(size = 0) {
    super(size);
  }
  peek() {
    return this[this.length - 1];
  }
}

/*
  Got 50% in this, solution was 80% correct
  After seeing the solution online, my approach was decent and very close
*/
function solution(heightArray) {
  let numBlocks = 1;
  let totalBlocks = heightArray.length;
  const stack = new MyStack();
  stack.push(heightArray[0]);
  // stack.from(heightArray);
  // console.log(stack);
  let i = 1;
  while (i < totalBlocks) {
    const h = heightArray[i];
    let lastElem = stack.peek();
    // console.log(`lastElem = ${lastElem}, h = ${h}`)
    if (h < lastElem) {
      stack.pop();
      lastElem = stack.peek();
      if (lastElem !== h) {
        stack.push(h);
        numBlocks++;
      }
    } else if (h > lastElem) {
      stack.push(h);
      numBlocks++;
    }
    i++;
  }
  // console.log(stack);

  return numBlocks;
}
