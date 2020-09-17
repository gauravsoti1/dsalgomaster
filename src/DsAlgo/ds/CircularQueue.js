/*
  Did this at freecodecamp
*/
class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    // Write will have conditions for you to know to allow them
    // Write only if something hasn't been read
    // In this case only if the value is null you can write above it
    if (this.queue[this.write] !== null)
      return null;
    this.queue[this.write] = item;
    this.write = (this.write + 1) % (this.queue.length);
    return item;
    // Return the item if gets enqueued otherwise return null
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] === null)
      return null;
    const result = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = (this.read + 1) % (this.queue.length);
    return result;
    // Only change code above this line
  }
}