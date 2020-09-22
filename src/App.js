import { BuySellStockOnce } from "DsAlgo/algo/arrays/buySellStockOnce";
import {
  DeleteAllOccurencesOfK,
  DeleteDuplicates,
} from "DsAlgo/algo/arrays/deleteDuplicates";
// import MinimumEditDistance from "DsAlgo/algo/dynamicProgramming/minimumEditDistance";
import React from "react";
import "./App.css";
// import "./DsAlgo/lcsubsequence";
// import "./DsAlgo/algo/ReverseLinkedList";
// import "./DsAlgo/practice/extraLongFactorials";
// import "./DsAlgo/ds/bst/insert";
// import "./DsAlgo/ds/bst/bfs";
// import "./DsAlgo/ds/binaryTree/dfs";
// import "./DsAlgo/ds/binaryTree/invert";
import "./DsAlgo/practice/Dijkstra";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      {/* <MinimumEditDistance /> */}
      {/* <DeleteDuplicates />
      <DeleteAllOccurencesOfK /> */}
      <BuySellStockOnce />
    </div>
  );
}

export default App;
