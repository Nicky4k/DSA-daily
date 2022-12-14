console.log(
  "We can buy N number of times and sell N number of times, we must buy before Sell, we cannot short sell! What is the maximum profit we can make"
);

const teslaStockPrice = [5, 3, 9, 10, 1, 6, 4];

function multiStocks(stocks) {
  let profit = 0;
  let minPrice = stocks[0];
  for (let i = 0; i < stocks.length; i++) {
    if (stocks[i] > minPrice) {
      profit += stocks[i] - minPrice;
    }
    minPrice = stocks[i];
  }
  return profit;
}

multiStocks(teslaStockPrice);
