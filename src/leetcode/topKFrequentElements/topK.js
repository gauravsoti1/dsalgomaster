function topKFrequent(nums, k) {
  const freq = new Map();
  for (let num of nums) {
    if (freq.get(num) == null) {
      freq.set(num, 1);
    } else {
      freq.set(num, freq.get(num) + 1);
    }
  }

  const freqListMap = new Map();
  let maxValue = Number.NEGATIVE_INFINITY;
  for (let [key, value] of freq) {
    maxValue = Math.max(maxValue, value);
    let values = freqListMap.get(value);
    if (values == null) {
      values = [];
    }
    values.push(key);
    freqListMap.set(value, values);
  }

  console.log(freqListMap); // Output like: { 3 => [ 1 ], 2 => [ 2 ], 1 => [ 3 ] }

  // from map to array of array
  let inverseMatrix = new Array(maxValue + 1).fill(0).map(() => []);
  for (let [key, values] of freqListMap) {
    inverseMatrix[key] = values;
  }

  /*
    Output like:
    [
      [   ],
      [ 3 ],
      [ 2 ],
      [ 1 ]
    ]

  */
  console.log(JSON.stringify(inverseMatrix));

  let solution = [];
  let idx = 0;
  for (let freq1 = inverseMatrix.length - 1; freq1 >= 0; freq1--) {
    //System.out.println("FREQ1: "+freq1);
    for (let val of inverseMatrix[freq1]) {
      //System.out.println("VAL: "+val);
      if (val == null) {
        break;
      }
      solution[idx] = val;
      idx++;
      if (idx >= k) {
        return solution;
      }
    }
  }
  return solution;
}

console.log(topKFrequent([1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3], 2));
