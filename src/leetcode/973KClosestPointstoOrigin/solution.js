class PriorityQueue {
  constructor(comparator = (a, b) => a > b, maxSize = Number.POSITIVE_INFINITY) {
    this._heap = [];
    this._comparator = comparator;
    this._maxSize = maxSize;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  
  _maxIndex(){
    let maxValue = Number.NEGATIVE_INFINITY;
    let maxIndex = -1;
    this._heap.forEach((point, index) => {
     if (point.distance > maxValue){
       maxValue = point.distance;
       maxIndex = index;
     }
      
    })
    return maxIndex;
  }
 
  push(value) {
    if(this.size() >= this._maxSize ){
      // replacing the max value because we need the to keep the minimum values
      const maxIndex = this._maxIndex();
      if (value.distance < this._heap[maxIndex].distance)
       this._heap[maxIndex] = value;
    }
    else 
      this._heap.push(value);
    this._siftUp();
    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

function Point(x,y,distance){
  function toString(){
    return [x,y]
  }
  return {x,y, distance, toString}
}



var kClosest = function(points, k) {
    // create a priority queue with maxSize = k
    const totalPoints = points.length;
    // If k is sufficiently small and it benefits us to store only k, then we will use it, otherwise we will use only totalPoints
    const priorityQueue = new PriorityQueue((a,b) => a.distance < b.distance,  k < Math.log(totalPoints) ? k : totalPoints )
    // for all points, calculate distance and add into priority queue
    points.forEach((point) => {
      const x = point[0], y = point[1];
      const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y,2))
      const object = Point(point[0], point[1], distance );
      priorityQueue.push(object);
      // priorityQueue.printValues();
    })
  const result = []
  while(!priorityQueue.isEmpty()){
    result.push(priorityQueue.pop().toString())
  }
  return result;
};