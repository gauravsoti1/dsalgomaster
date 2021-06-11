function DoublyListNode(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

DoublyListNode.prototype.toString = function() {
  return `{
    prev: ${this.prev ? this.prev.value : null},
    value: ${this.value},
    next: ${this.next ? this.next.value : null},
  }`;
};

function DoublyLinkedList(head = null, tail = null) {
  this.head = head;
  this.tail = tail;
  this.size = 0;
  this.add = (value) => {
    const node = new DoublyListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const temp = this.tail;
      // temp.next = node;
      // node.prev = temp;
      this.tail.next = node;
      this.tail = node;
      this.tail.prev = temp;
    }
    this.size++;
  };
  this.get = (index) => {
    if (index >= this.size) throw new RangeError("Out Of Bounds");
    let i = 0,
      current = this.head;
    while (current && i !== index) {
      current = current.next;
      i++;
    }
    return current;
  };
  this.search = (value) => {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    return current;
  };
  this.searchReverse = (value) => {
    let current = this.tail;
    while (current && current.value !== value) {
      current = current.prev;
    }
    return current;
  };
  this.print = () => {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  };
  this.printReverse = () => {
    let current = this.tail;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.prev;
    }
    console.log(result.join(" -> "));
  };
}

const list = new DoublyLinkedList();
list.add(1);
list.add(5);
list.add(7);
list.print();
list.printReverse();

console.log("" + list.search(5));
console.log("" + list.search(8));
console.log("" + list.searchReverse(5));
console.log("" + list.searchReverse(8));
try {
  console.log(" 8th element = ", list.get(8));
} catch (e) {
  console.log(e);
}
console.log(" 1st element = " + list.get(1));
console.log(" 0 element = " + list.get(0));
console.log(" 2nd element = " + list.get(2));
