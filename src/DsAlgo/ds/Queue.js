function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line

  this.size = function () {
    return collection.length;
  }

  this.front = function () {
    return collection[0];
  }

  this.enqueue = function (value) {
    collection.push(value)
  }

  this.dequeue = function () {
    return collection.shift(1);
  }

  this.isEmpty = function () {
    return collection.length === 0
  }


  // Only change code above this line
}