function printListUsingHead(head) {
  let current = head;
  const result = [];
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

module.exports = { default: printListUsingHead };
