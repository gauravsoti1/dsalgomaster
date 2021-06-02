const {
  default: PriorityQueue,
} = require("../../../faang/section22/PriorityQueue");

function valueAndSeqId(value, seqId) {
  return { value, seqId };
}

function mergeSequences(sequences) {
  const minHeap = new PriorityQueue((a, b) => a.value < b.value);
  sequences.forEach((sequence, index) => {
    // Assuming that any sequence won't be empty
    const obj = valueAndSeqId(sequence[0], index);
    minHeap.push(obj);
  });
  const result = [];
  let seqPositions = new Array(sequences.length).fill(1);
  while (!minHeap.isEmpty()) {
    const obj = minHeap.pop();
    result.push(obj.value);
    const index = seqPositions[obj.seqId];
    // if this sequence has more data
    if (index < sequences[obj.seqId].length) {
      const newObj = valueAndSeqId(sequences[obj.seqId][index], obj.seqId);
      minHeap.push(newObj);
      seqPositions[obj.seqId] = index + 1; // Incrementing pos in the sequence
    }
  }
  minHeap.print();
  return result;
}

// --------------- testing ---------------------
const testCase1 = [[3, 5, 7], [0, 6], [0, 6, 28]];

const testCases = [testCase1];

(function test() {
  testCases.forEach((testCase, index) => {
    const result = mergeSequences(testCase);
    console.log(`---------- TestCase ${index} -------------`);
    console.log("input = ", testCase, " result = ", result);
  });
})();
