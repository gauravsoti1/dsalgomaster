/*
  TODO: use faang course implementation of heap because that's cleaner

*/
function MaxBinaryHeap() {
  let values = [];
  function getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  function pop() {
    const max = values[0];
    const end = values.pop();
    // if heap is not empty, then replace the max value
    // with the last value and bubble down
    if (values.length !== 0) {
      values[0] = end;
      bubbleDown(0);
    }
    return max;
  }

  function bubbleUp(index) {
    if (index <= 0) return;
    const current = values[index];
    const parentIndex = getParentIndex(index);
    const parent = values[parentIndex];
    // is current node greater than parent
    // then swap the value
    // and repeat the process
    if (current > parent) {
      values[parentIndex] = current;
      values[index] = parent;
      bubbleUp(parentIndex);
    }
  }
  function getChildrenIndices(parentIndex) {
    const leftChild = 2 * parentIndex + 1;
    const rightChild = 2 * parentIndex + 2;
    return [leftChild, rightChild];
  }

  function bubbleDown(index) {
    if (index < 0 || index >= values.length) return;
    const parent = values[index];
    // --- this section is to get the max child ---- //
    const [leftChildIndex, rightChildIndex] = getChildrenIndices(index);
    const leftChild = values[leftChildIndex] || Number.NEGATIVE_INFINITY;
    const rightChild = values[rightChildIndex] || Number.NEGATIVE_INFINITY;
    const maxChild = Math.max(leftChild, rightChild);
    const maxChildIndex =
      leftChild === maxChild ? leftChildIndex : rightChildIndex;
    // --- section ends here ---- //

    // if parent is less than maxChild, we need to swap and then continue bubble down
    // for the max child
    if (parent < maxChild) {
      values[index] = maxChild;
      values[maxChildIndex] = parent;
      bubbleDown(maxChildIndex);
    }
  }

  function insert(...valuesToInsert) {
    valuesToInsert.forEach((value) => {
      values.push(value);
      bubbleUp(values.length - 1);
    });
  }

  function toString() {
    console.log(JSON.stringify(values));
  }

  function getValues() {
    return [...values];
  }

  return {
    getParentIndex,
    pop,
    insert,
    toString,
    getValues,
  };
}

// let myHeap = MaxBinaryHeap();
// const toInsert = [15, 5, 10, 25, 7, 2, 1, 30, 45];
// myHeap.insert(...toInsert);
// console.log("heap after inserting these values ->  ", JSON.stringify(toInsert));
// myHeap.toString();
// console.log("Popping, value removed === ", myHeap.pop());
// console.log("Popping, value removed === ", myHeap.pop());

// console.log("heap now: ");
// myHeap.toString();
// myHeap.pop();
// myHeap.toString();
// myHeap.pop();
// myHeap.toString();
// myHeap.pop();
// myHeap.toString();
// myHeap.pop();
// myHeap.toString();
// myHeap.pop();
// myHeap.toString();
// myHeap.pop();
// myHeap.toString();
// myHeap.pop();
// myHeap.toString();
// myHeap.pop();
// myHeap.toString();

// -- checking scenario when we have only one value in the heap --- //
function testOnlyOneValueScenario() {
  let myHeap = MaxBinaryHeap();
  myHeap.insert(5);
  console.log("does heap contain value 5 at top?", myHeap.getValues()[0] === 5);
  const value = myHeap.pop();
  console.log("is popped value 5?", value === 5);
  console.log(
    "after popping value, is heap now empty ? ",
    myHeap.getValues().length === 0
  );
}

function testDuplicateValueScenario() {
  let myHeap = MaxBinaryHeap();
  myHeap.insert(5, 10, 7, 10, 10);
  console.log(
    "heap should contain value 10 at top",
    myHeap.getValues()[0] === 10
  );
  const firstPop = myHeap.pop();
  console.log("we should get 10 on popping", firstPop === 10);
  const secondPop = myHeap.pop();
  console.log("we should again get 10 on popping", secondPop === 10);
  const thirdPop = myHeap.pop();
  console.log(
    "we should again get 10 on popping, the third time",
    thirdPop === 10
  );
  const fourthPop = myHeap.pop();
  console.log("fourth pop should be 7", fourthPop === 7);
  const fifthPop = myHeap.pop();
  console.log("fifth pop should be 5", fifthPop === 5);
  const sixthPop = myHeap.pop();
  console.log("sixth pop should be undefined", sixthPop === undefined);
}

// testOnlyOneValueScenario();
testDuplicateValueScenario();
