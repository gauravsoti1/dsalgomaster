function DoubleLinkedListNode(key, value) {
  return { key, value, prev: null, next: null };
}

/*
  Time Complexity: O(1) for both put and get
  Space Complexity: O(capacity) since the space is only used for 
  a hashmap and double linked list with at most capacity + 1 elements

*/
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.head = DoubleLinkedListNode();
  this.tail = DoubleLinkedListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
  this.capacity = capacity;
};

// O(1) time complexity
LRUCache.prototype.removeNode = function(node) {
  /**
   * Remove an existing node from the linked list.
   */
  const prev = node.prev;
  const next = node.next;
  prev.next = next;
  next.prev = prev;
};

// O(1) time complexity
LRUCache.prototype.addNode = function(node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.popTail = function() {
  const node = this.tail.prev;
  this.removeNode(node);
  return node;
};

LRUCache.prototype.moveToHead = function(node) {
  this.removeNode(node);
  this.addNode(node);
};
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.cache.get(key);
  if (!node) return -1;

  // move the accessed node to the head;
  this.moveToHead(node);

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = this.cache.get(key);
  // const node = DoubleLinkedListNode(key, value);
  if (!node) {
    node = DoubleLinkedListNode(key, value);
    this.cache.set(key, node);
    this.addNode(node);
    this.size++;
    if (this.size > this.capacity) {
      // pop the tail
      const tail = this.popTail();
      this.cache.delete(tail.key);
      --this.size;
    }
  } else {
    node.value = value;
    this.moveToHead(node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
