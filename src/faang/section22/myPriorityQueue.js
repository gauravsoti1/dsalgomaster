// I made this more understandable

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  push(value) {
    this._heap.push(value);
    this._bubbleUp();
  }

  comparator(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _parentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  peek() {
    return this._heap[0];
  }

  _leftChildIdx(parentIdx) {
    return parentIdx * 2 + 1;
  }

  _rightChildIdx(parentIdx) {
    return parentIdx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[j], this._heap[i]] = [this._heap[i], this._heap[j]];
  }

  pop() {
    this._swap(0, this.size() - 1);
    const answer = this._heap.pop();
    this._bubbleDown();
    return answer;
  }

  size() {
    return this._heap.length;
  }

  _bubbleDown() {
    // start from the first node
    // compare left and right with the comparator
    // whichever has bigger value
    // replace parent with it
    let currentIdx = 0;
    let leftChildIdx = this._leftChildIdx(currentIdx);
    let rightChildIx = this._rightChildIdx(currentIdx);
    const size = this.size();
    while (
      (leftChildIdx < size && this.comparator(leftChildIdx, currentIdx)) ||
      (rightChildIx < size && this.comparator(rightChildIx, currentIdx))
    ) {
      const greaterChildIdx =
        rightChildIx < size && this.comparator(rightChildIx, leftChildIdx)
          ? rightChildIx
          : leftChildIdx;
      this._swap(greaterChildIdx, currentIdx);
      currentIdx = greaterChildIdx;
      leftChildIdx = this._leftChildIdx(currentIdx);
      rightChildIx = this._rightChildIdx(currentIdx);
    }
  }

  _bubbleUp() {
    // start from the last node
    // swap it with parent as long as the comparator
    // returns true
    let currentIdx = this.size() - 1;
    while (
      currentIdx > 0 &&
      this.comparator(currentIdx, this._parentIdx(currentIdx))
    ) {
      const parentIdx = this._parentIdx(currentIdx);
      this._swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
    }
  }
  print() {
    console.log(this._heap);
  }
}

// 0,1,2,3,4
// parent of 3, and  4 = 1

const maxHeap = new PriorityQueue();
maxHeap.push(5);
maxHeap.push(1);
maxHeap.push(10);
maxHeap.push(3);
maxHeap.push(2);
maxHeap.push(15);

console.log("popped, value = ", maxHeap.pop());
console.log("popped, value = ", maxHeap.pop());
console.log("popped, value = ", maxHeap.pop());
console.log("popped, value = ", maxHeap.pop());
console.log("popped, value = ", maxHeap.pop());
console.log("popped, value = ", maxHeap.pop());

maxHeap.print();

const minHeap = new PriorityQueue((a, b) => a < b);
minHeap.push(10);
minHeap.push(1);
minHeap.push(15);
minHeap.push(10); // Even duplicate value works properly
minHeap.push(12);
minHeap.push(3);

console.log("popped, value = ", minHeap.pop());
console.log("popped, value = ", minHeap.pop());
console.log("popped, value = ", minHeap.pop());
console.log("popped, value = ", minHeap.pop());
console.log("popped, value = ", minHeap.pop());
console.log("popped, value = ", minHeap.pop());

minHeap.print();
