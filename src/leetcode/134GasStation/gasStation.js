function isTotalCostLessThanTotalGas(gas, cost) {
  const totalCost = cost.reduce(
    (totalCost, currentCost) => totalCost + currentCost,
    0
  );
  const totalGas = gas.reduce(
    (totalCost, currentCost) => totalCost + currentCost,
    0
  );
  return totalGas < totalCost;
}

// My solution is O(n) because I am essentially considering every station once

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  if (isTotalCostLessThanTotalGas(gas, cost)) return -1;
  const totalStations = gas.length;
  let startPoint = 0;
  for (startPoint = 0; startPoint < totalStations; startPoint++) {
    let currentStation = startPoint,
      currentGas = 0;
    if (gas[currentStation] < cost[currentStation]) continue;
    while (true) {
      const nextStationCost = cost[currentStation];
      currentGas += gas[currentStation];
      if (currentGas < nextStationCost) {
        /* 
          We only need to consider all the stations once
          Since till this current station we didn't get the 
          answer, we don't need to consider all the stations 
          again
        */
        startPoint = currentStation;
        break;
      } else {
        currentGas -= nextStationCost;
        currentStation = (currentStation + 1) % totalStations;
        if (currentStation === startPoint) return startPoint;
      }
    }
  }
  return -1;
};

/*
  Optimal Java solutionm with explanation
*/
// class Solution {
//   //if total gas is positive after round trip there is a soln
//   //total gas - total cost >= 0  for a soln
//   //we can use greedy approach
  
//   /**
//       A, B, C, D, E, F, G, H
      
//       we start from station A...
//       we totalGas - totalCost >= 0 ...we can move
      
//       Suppose, we are not able to reach station E... we wanted extra g1 gas to reach E from A
//       that means none of the station b/w A and D can reach E
      
//       We will move our start pointer to E..and again move
//       we are able to reach station H with some positive gas g2
      
//       since we are able to reach A to D and E to H... and at the end we have positive gas g2 which is >= g1
      
//       that means there exist a solution
      
//   **/
  
//   public int canCompleteCircuit(int[] gas, int[] cost) {
//       //if after reaching at the end...the gas that was required to reach unreachable stations is less than equal to currentGas
//       //that means we can start at a point and do a round trip
      
//       int requiredGas = 0; 
//       int currentGas = 0;
//       int start = 0;
      
//       for(int i = 0 ; i < gas.length ; i++){
//           currentGas += gas[i] - cost[i];
          
//           if(currentGas < 0){
//               requiredGas += -currentGas; // we need requiredGas from some where to reach this unreachable station
//               currentGas = 0;
//               start = i + 1;
//           }
//       }
      
//       return currentGas >= requiredGas ? start : -1;
//   }
// }
