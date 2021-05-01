// Didn't get the correct answer for all the cases
// Also it would have timed out for large values because I didn't use heap

const sellType = "sell";
const buyType = "buy";

const typesMatch = {
  0: buyType,
  1: sellType,
};

function order({ price, quantity, type }) {
  return { price, quantity, type: typesMatch[type] };
}

class Stack extends Array {
  constructor(size = 0) {
    super(size);
  }
  peek() {
    return this[this.length - 1];
  }
}

function sortAsc(a, b) {
  return a.price - b.price;
}

function sortDesc(a, b) {
  return b.price - a.price;
}

/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(ordersArray) {
  // We need to be able to get the larget value order
  // so sort in asc order, so that we can easily pop
  const buy = new Stack();
  // We need to be able to get the smallest value order
  // so sort in decreasing order, so that we can easily pop
  const sell = new Stack();

  const orders = ordersArray.map(([price, amount, buySell]) =>
    order({ price, quantity: amount, type: buySell })
  );

  // console.log(orders);
  orders.forEach((order) => {
    if (order.type === buyType) {
      let leastValueSellOrder = sell.peek();
      if (!leastValueSellOrder) {
        buy.push(order);
        buy.sort(sortAsc);
      } else {
        //           that sell order's price is smaller than or equal to the current buy order's price
        while (
          leastValueSellOrder &&
          leastValueSellOrder.price <= order.price &&
          order.quantity !== 0
        ) {
          const orderQuantity = order.quantity;
          const remainingBuyOrderQuantity =
            order.quantity - leastValueSellOrder.quantity;
          order.quantity =
            remainingBuyOrderQuantity < 0 ? 0 : remainingBuyOrderQuantity;
          leastValueSellOrder.quantity =
            leastValueSellOrder.quantity - orderQuantity;
          if (leastValueSellOrder.quantity <= 0) {
            sell.pop();
            leastValueSellOrder = sell.peek();
          }
        }
        if (order.quantity !== 0) {
          buy.push(order);
          buy.sort(sortAsc);
        }
      }
    } else {
      // if the order is a sell order, you look at the buy order with the largest price in the backlog. If that buy order's price is larger than or equal to the current sell order's price, they will match and be executed, and that buy order will be removed from the backlog. Else, the sell order is added to the backlog.
      let biggestValueBuyOrder = buy.peek();
      if (!biggestValueBuyOrder) {
        sell.push(order);
        sell.sort(sortDesc);
      } else {
        //           that sell order's price is smaller than or equal to the current buy order's price
        while (
          biggestValueBuyOrder &&
          biggestValueBuyOrder.price >= order.price &&
          order.quantity !== 0
        ) {
          const orderQuantity = order.quantity;
          const remainingSellOrderQuantity =
            order.quantity - biggestValueBuyOrder.quantity;
          order.quantity =
            remainingSellOrderQuantity < 0 ? 0 : remainingSellOrderQuantity;
          biggestValueBuyOrder.quantity =
            biggestValueBuyOrder.quantity - orderQuantity;
          if (biggestValueBuyOrder.quantity <= 0) {
            sell.pop();
            biggestValueBuyOrder = sell.peek();
          }
        }
        if (order.quantity !== 0) {
          sell.push(order);
          sell.sort(sortDesc);
        }
      }
    }
    // console.log("buy = ", buy, "sell = ", sell)
  });

  // console.log("buy = ", buy);
  // console.log("sell = ", sell);

  let totalBuyOrders = buy.reduce((sum, current) => sum + current.quantity, 0);
  let totalSellOrders = sell.reduce(
    (sum, current) => sum + current.quantity,
    0
  );
  return (totalBuyOrders + totalSellOrders) % (Math.pow(10, 9) + 7);
};
