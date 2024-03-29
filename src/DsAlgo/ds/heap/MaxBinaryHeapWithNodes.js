function Node(name, priority) {
  function compareTo(node) {
    const priorityDifference = priority - node.priority;
    if (priorityDifference === 0) return 0;
    else if (priorityDifference < 0) return 1;
    else return -1;
  }
  function isHigherPriorityThan(node) {
    return priority < node.priority;
  }

  function isLowerPriorityThan(node) {
    return priority > node.priority;
  }
  function toString() {
    return `${name}, ${priority}`;
  }
  return {
    name,
    priority,
    compareTo,
    isHigherPriorityThan,
    isLowerPriorityThan,
    toString,
  };
}

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
    if (current.isHigherPriorityThan(parent)) {
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
    const leftChild =
      values[leftChildIndex] || Node("", Number.NEGATIVE_INFINITY);
    const rightChild =
      values[rightChildIndex] || Node("", Number.NEGATIVE_INFINITY);
    let maxChild, maxChildIndex;
    if (leftChild.isHigherPriorityThan(rightChild)) {
      maxChild = leftChild;
      maxChildIndex = leftChildIndex;
    } else {
      maxChild = rightChild;
      maxChildIndex = rightChildIndex;
    }
    // --- section ends here ---- //

    // if parent is less than maxChild, we need to swap and then continue bubble down
    // for the max child
    if (parent.isLowerPriorityThan(maxChild)) {
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

// -- checking scenario when we have only one value in the heap --- //
function testOnlyOneValueScenario() {
  let myHeap = MaxBinaryHeap();
  myHeap.insert(Node("First insert", 5));
  myHeap.toString();
  console.log(
    "does heap contain value 5 at top?",
    myHeap.getValues()[0].priority === 5
  );
  const value = myHeap.pop();
  console.log("is popped value 5?", value.priority === 5);
  console.log(
    "after popping value, is heap now empty ? ",
    myHeap.getValues().length === 0
  );
}

function testDuplicateValueScenario() {
  let myHeap = MaxBinaryHeap();
  myHeap.insert(
    Node("first insert", 5),
    Node("second insert", 1),
    Node("third insert", 7),
    Node("fourth insert", 1),
    Node("fifth insert", 1)
  );
  console.log(
    "heap should contain name second insert at top",
    myHeap.getValues()[0].name === "second insert"
  );
  myHeap.pop();
  console.log(
    "heap should contain name fourth insert at top",
    myHeap.getValues()[0].name === "fourth insert"
  );
  myHeap.toString();

  // myHeap.pop();
  
}

// testOnlyOneValueScenario();
testDuplicateValueScenario();
