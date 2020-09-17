function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.size = function () {
    return this.collection.length;
  }
  const insert = (index, data) => {
    const length = this.size();
    /* 
      if index is equal to the length of the collection
      then we don't need to do any shifting, just insert
      at the end
    */
    if (index === length) {
      this.collection.push(data);
      return;
    }
    const newCollection = [];
    let i = 0;
    /*
      Copy all the elements of the collection
      to a new one, and also insert the new 
      data at the index that we want
    */
    while (i < length) {
      if (i === index)
        newCollection.push(data);
      newCollection.push(this.collection[i])
      i++;
    }
    this.collection = newCollection;
  }

  // [[a,1], [b,2], [c,2], [d,1]]
  this.enqueue = function (newValue) {
    const size = this.size();
    if (size === 0) {
      this.collection.push(newValue);
      return
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
    insert(index, newValue);
  }

  this.dequeue = function () {
    if (this.isEmpty())
      return "The queue is empty"
    else
      return this.collection.shift(1)[0];
  }

  this.front = function () {
    return this.collection[0][0];
  }

  this.isEmpty = function () {
    return this.collection.length === 0;
  }
  // Only change code above this line
}