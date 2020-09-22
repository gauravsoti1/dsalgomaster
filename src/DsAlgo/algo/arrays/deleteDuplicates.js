/*

  Delete Duplicates from a sorted array
  Source: Elements Of Programming Interview Book, Page: 82

  After deleting duplicates, shift the values to the left
  Time Complexity: O(n) Space Complexity: O(1), Also do it one pass only

*/
import React, { useState } from "react";

function deleteDuplicates(arr = []) {
  if (!Array.isArray(arr)) {
    console.log("Please provide an array");
    return;
  }
  let writeIndex = 1;
  let duplicates = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    } else duplicates++;
  }
  // Extra step, making sure at the end we have zeroes and not the duplicate values, for better visuals
  // Sometimes the interviewer might ask to do it in one pass only
  for (let i = arr.length - 1; i > arr.length - 1 - duplicates; i--) {
    arr[i] = 0;
  }
  return arr;
}

export function DeleteDuplicates() {
  const [state, setstate] = useState("1,3,3,4,4,5,6,7");
  function handleChange(e) {
    const { name, value } = e.target;
    setstate(value);
  }
  return (
    <div>
      <h1>Arrays: Delete Duplicates from a sorted array</h1>
      <h6>Source: Elements Of Programming Interview Book, Page: 82</h6>
      <label htmlFor="array"> Comma separated array elements </label>
      <input type="text" name="array" value={state} onChange={handleChange} />
      <h4>After deleting duplicates:</h4>
      <h4>Array = {deleteDuplicates(state.split(",")).join(" , ")}</h4>
    </div>
  );
}

/*
  Question:
    Implement a fn which takes as input an array and a key,
    and updates the array so that all occurences of the key have
    been removed and the remaining elements have been shifted to
    the left to fill the emptied indices
*/
function deleteAllOccurencesOfK(arr = [], key) {
  if (!Array.isArray(arr)) {
    console.log("Please provide an array");
    return;
  }
  let writeIndex = 0,
    duplicates = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    } else duplicates++;
  }
  // Extra step, making sure at the end we have zeroes and not the duplicate values, for better visuals
  for (let i = arr.length - 1; i > arr.length - 1 - duplicates; i--) {
    arr[i] = 0;
  }
  return arr;
}

export function DeleteAllOccurencesOfK() {
  // These values are in string, should be in integers, kept it in string just for
  // ease, to be able to add values from the UI
  const [state, setstate] = useState({ arr: "1,3,3,4,4,5,6,7", key: "3" });
  function handleChange(e) {
    const { name, value } = e.target;
    setstate((state) => ({ ...state, [name]: value }));
  }
  const arr = state.arr.split(",");
  const result = deleteAllOccurencesOfK(arr, state.key).join(" , ");
  return (
    <div>
      <h1>Arrays: Delete All Occurences Of key</h1>
      <h6>Source: Elements Of Programming Interview Book, Page: 83</h6>
      <label htmlFor="array"> Comma separated array elements </label>
      <input type="text" name="arr" value={state.arr} onChange={handleChange} />
      <label htmlFor="key"> Key </label>
      <input type="text" name="key" value={state.key} onChange={handleChange} />
      <h4>After deleting occurences of {state.key}:</h4>
      <h4>Array = {result}</h4>
    </div>
  );
}
