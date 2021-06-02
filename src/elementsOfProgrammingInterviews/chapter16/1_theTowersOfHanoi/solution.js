const totalRings = 3;

function peg() {
  const data = [];
  function peek() {
    return data[data.length - 1];
  }
  function isEmpty() {
    return data.length === 0;
  }
  // you can push into it
  // you can pop from it
  // if when you are pushing and the last value is smaller than the current value it will throw error
  function push(value) {
    if (!isEmpty()) {
      const lastValue = peek();
      if (value > lastValue) {
        console.log(`can't add ${value} on top of ${lastValue}`);
        return false;
      }
    }
    data.push(value);
  }
  function pop() {
    return data.pop();
  }
  function print() {
    const result = [...data];
    console.log(result.reverse().join("\n"));
  }
  return { data, push, pop, print };
}

function buildInitialTower() {
  const peg1 = peg();
  const peg2 = peg();
  const peg3 = peg();
  const pegs = [peg1, peg2, peg3];

  for (let i = totalRings; i >= 1; i--) {
    peg1.push(i);
  }
  function print() {
    console.log();
    console.log(" peg1 ", " peg2 ", " peg3 ");
    const result = [];
    for (let i = totalRings; i >= 1; i--) {
      // pegs
      const allPegsDataForThisIndex = [];
      for (let p = 0; p < 3; p++) {
        allPegsDataForThisIndex.push(pegs[p].data[i - 1] || "");
      }
      result.push(allPegsDataForThisIndex);
    }
    console.log(result.map((a) => a.join("\t")).join("\n"));
    console.log();
  }
  return { pegs, print };
}

function theTowerOfHanoi() {
  const tower = buildInitialTower();
  const { pegs } = tower;
  function computeTowerOfHanoiSteps(numRingsToMove, fromPeg, toPeg, usePeg) {
    if (numRingsToMove > 0) {
      computeTowerOfHanoiSteps(numRingsToMove - 1, fromPeg, usePeg, toPeg);
      const fromRing = pegs[fromPeg].pop();
      const result = pegs[toPeg].push(fromRing);
      // // if (result === false) {
      // //   console.log(
      // //     `move failed for ringsToMove = ${numRingsToMove}, fromPeg = ${fromPeg}, toPeg = ${toPeg}, usePeg = ${usePeg}`
      // //   );
      // //   pegs.forEach((peg, index) => {
      // //     console.log(`peg ${index + 1} = `);
      // //     peg.print();
      // //   });
      // //   return;
      // // }
      console.log(
        `Moving ring = ${fromRing} from peg = ${fromPeg + 1} to peg = ${toPeg +
          1} using ${usePeg + 1}`
      );
      tower.print();
      computeTowerOfHanoiSteps(numRingsToMove - 1, usePeg, toPeg, fromPeg);
    }
  }
  computeTowerOfHanoiSteps(totalRings, 0, 1, 2);
  console.log("---- tower after transferring to to peg 2 ------");
}

theTowerOfHanoi();
