function PriorityQueue() {
  this.collection = [];
  this.size = function() {
    return this.collection.length;
  };
  // at first index is the data, second index is priority
  // [[a,1], [b,2], [c,2], [d,1]]
  this.enqueue = function(newValue) {
    const size = this.size();
    if (size === 0) {
      this.collection.push(newValue);
      return;
    }
    /* find the index where newValue's priority would come
     assuming that priority is the least then it would come at
      the start, otherwise let's start from the end and find a value which is equal to the priority
     */
    let index = 0;
    for (let i = size - 1; i >= 0; i--) {
      /* if the priority of new value is greater than
         or equal to the current value at this index
         we need to insert in the next index to this
      */
      if (newValue[1] >= this.collection[i][1]) {
        index = i + 1;
        break;
      }
    }
    const newCollection = [...this.collection];
    newCollection.splice(index, 0, newValue);
    this.collection = newCollection;
  };

  this.dequeue = function() {
    if (this.isEmpty()) return "The queue is empty";
    else return this.collection.shift(1)[0];
  };

  this.front = function() {
    return this.collection[0][0];
  };

  this.isEmpty = function() {
    return this.collection.length === 0;
  };
  // Only change code above this line
}
