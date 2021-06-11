const LinkedList = require("./LinkedList").default;

function convertArrayToList(array) {
  const linkedList = new LinkedList();
  array.forEach((a) => linkedList.add(a));
  return linkedList;
}

// const list = convertArrayToList([1, 2, 3, 4, 5, 6, 7]);

// list.print();

module.exports = {
  default: convertArrayToList,
};
