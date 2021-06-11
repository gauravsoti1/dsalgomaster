function ListNode(value, next = null) {
  this.next = next;
  this.value = value;
}
ListNode.prototype.toString = function() {
  return `
  {
    value: ${this.value},
    next: ${this.next ? this.next.value : null}
  }
  `;
};

// wrote this simple, elegant useful file myself
function LinkedList(head = null) {
  this.head = head;
  this.size = 0;
  this.add = (value) => {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;

    this.size++;
  };

  this.search = (key) => {
    let current = this.head;
    while (current !== null && current.value !== key) {
      current = current.next;
    }
    return current;
  };

  this.insertAfter = (node, newNode) => {
    newNode.next = node.next;
    node.next = newNode;
  };

  // Deletes a node immediately following the node, assumes node is not tail
  this.deleteNodeAfter = (node) => {
    node.next = node.next.next;
  };

  this.toArray = () => {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  };

  this.print = () => {
    const toPrint = this.toArray();
    console.log("list ===", toPrint.join(" -> "));
  };
}

module.exports = {
  default: LinkedList,
  ListNode,
};
