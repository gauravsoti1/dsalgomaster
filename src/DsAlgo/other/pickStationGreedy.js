const { print } = require("../helper");
/* 

  From Grokking Book
  Page 166

*/

function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  let difference = new Set([...setA].filter((x) => !setB.has(x)));
  return difference;
}

const STATES = {
  idaho: "id",
  nevada: "nv",
  utah: "ut",
  california: "ca",
  arizona: "az",
  mt: "mt",
  wa: "wa",
  or: "or"
};

const { idaho, nevada, utah, california, arizona, mt, wa, or } = STATES;

const stations = {
  kone: new Set([idaho, nevada, utah]),
  ktwo: new Set([wa, idaho, mt]),
  kthree: new Set([or, nevada, california]),
  kfour: new Set([nevada, utah]),
  kfive: new Set([california, arizona]),
  ksix: new Set([wa])
};
const states_needed = new Set([
  mt,
  wa,
  or,
  idaho,
  nevada,
  utah,
  california,
  arizona
]);

// const states_needed = new Set([mt, wa, or, idaho, nevada, utah, california]);

function pickStations() {
  // Greedy approach
  let statesNotCovered = new Set(states_needed);

  let stationsNotCovered = new Set(Object.keys(stations));
  const result = [];

  // get the best station for the current case
  function getBestStation() {
    let bestStation,
      maxStatesCoveredSize = Number.NEGATIVE_INFINITY;
    // loop through all the stations that have not been covered
    stationsNotCovered.forEach((station) => {
      // get the states the current station covers
      const states = stations[station];
      // get how many states it covers which are still not covered
      const statesCovered = intersection(statesNotCovered, states);
      // is this the best possible choice? If yes, then update the bestStation and maxStates covered
      if (statesCovered.size > maxStatesCoveredSize) {
        maxStatesCoveredSize = statesCovered.size;
        bestStation = station;
      }
    });
    return bestStation;
  }
  // loop until you have all the states needed
  while (statesNotCovered.size !== 0) {
    // Get the station which covers the most required stations
    const bestStation = getBestStation();
    result.push(bestStation);
    // remove it from the stationsNotCovered
    stationsNotCovered.delete(bestStation);
    // remove all the states that have been covered by this best station
    statesNotCovered = difference(statesNotCovered, stations[bestStation]);
  }
  // return a list of stations which cover all the states
  return result;
}

console.log([...pickStations()]);
