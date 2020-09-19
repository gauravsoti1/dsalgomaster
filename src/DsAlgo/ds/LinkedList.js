function Node({ next, value }) {
  this.next = next;
  this.value = value;
}

// wrote this simple, elegant useful file myself
export default function LinkedList() {
  this.head = null;
  this.size = 0;
  this.add = (value) => {
    const newNode = new Node({ value });
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  };

  this.print = () => {
    const toPrint = [];
    let current = this.head;
    while (current) {
      toPrint.push(current.value);
      current = current.next;
    }
    console.log("list ===", toPrint.join(" -> "));
  };
}
