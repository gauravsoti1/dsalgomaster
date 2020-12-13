function MinBinaryHeap() {
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
    // is current node less than parent
    // then swap the value
    // and repeat the process
    if (current < parent) {
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
    const leftChild = values[leftChildIndex] || Number.POSITIVE_INFINITY;
    const rightChild = values[rightChildIndex] || Number.POSITIVE_INFINITY;
    const minChild = Math.min(leftChild, rightChild);
    const minChildIndex =
      leftChild === minChild ? leftChildIndex : rightChildIndex;
    // --- section ends here ---- //

    // if parent is less than maxChild, we need to swap and then continue bubble down
    // for the max child
    if (minChild < parent) {
      values[index] = minChild;
      values[minChildIndex] = parent;
      bubbleDown(minChildIndex);
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
    pop: pop,
    insert:insert,
    toString: toString,
    getValues: getValues,
  };
}


var nthUglyNumber = function (n) {
  const numbers = MinBinaryHeap();
  numbers.insert(1)
  const seen = {1: true};
  // Run for total of n-2 times
  // because 1st ugly number is already there
  // and in the last iteration, we are actually calculating the nth ugly number
  for (let i = 1; i <n; i++) {
    // At every iteration, get the min value from heap
    const number = numbers.pop();
    [2, 3, 5].forEach((n) => {
      const newUglyNumber = number * n;
      if (!seen[newUglyNumber]) {
        // since we are using heap, we make sure that at every insertion
        // we get the smallest ugly number
        numbers.insert(newUglyNumber);
        seen[newUglyNumber] = true;
      }
    });
  }
  // Now the first number is our nth ugly number
  // pop and return it
  return numbers.pop();
};
