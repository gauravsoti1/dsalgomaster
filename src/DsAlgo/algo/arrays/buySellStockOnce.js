import React, { useState } from "react";

/*

  Buy And Sell Stock Once
  Source: Elements Of Programming Interview Book, Page: 83

  Question: Write a program that takes an array denoting the daily 
  stock price, and returns the maximum profit that could be made 
  by buying and then selling one share of that stock

  Stock Prices: [310,315,275,295,260,270,290,230,255,250]
  Max Profit: 30 -> 290 - 260
*/

function buySellStockOnce(prices = []) {
  if (!Array.isArray(prices)) {
    console.log("Please provide prices as an array");
    return;
  }
  let minPrice = Number.POSITIVE_INFINITY,
    maxProfit = 0;
  prices.forEach((price, index) => {
    maxProfit = Math.max(maxProfit, price - minPrice);
    minPrice = Math.min(price, minPrice);
  });
  return maxProfit;
}

export function BuySellStockOnce() {
  const [pricesString, setstate] = useState(
    "310,315,275,295,260,270,290,230,255,250"
  );
  function handleChange(e) {
    const { name, value } = e.target;
    setstate(value);
  }
  return (
    <div>
      <h1>Arrays: Buy And Sell Stock Once</h1>
      <h6>Source: Elements Of Programming Interview Book, Page: 83</h6>
      <label htmlFor="array"> Comma separated prices elements </label>
      <input
        type="text"
        name="array"
        value={pricesString}
        onChange={handleChange}
      />
      <h4>Max Profit = {buySellStockOnce(pricesString.split(","))}</h4>
    </div>
  );
}
