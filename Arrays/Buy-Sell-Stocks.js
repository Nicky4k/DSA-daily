const jubliantFoodworks = [
  19, 8, 2, 37, 4, 61, 9, 82, 37, 4, 6, 10, 8, 92, 7, 6,
];

function stocks(stock) {
  let buy = 0;
  let sell = 0;
  let maxProfit = 0;
  let minPrice = 0;
  for (let i = 0; i < stock.length; i++) {
    if (stock[i] < stock[minPrice]) {
      minPrice = i;
    }
    if (stock[i] - stock[minPrice] > maxProfit) {
      maxProfit = stock[i] - stock[minPrice];
      buy = minPrice;
      sell = i;
    }
  }

  console.log(
    ` Buy at day ${buy + 1} @${stock[buy]}\n and Sell at day ${sell + 1} @${
      stock[sell]
    }\n to make a profit of ${maxProfit}`
  );
}

stocks(jubliantFoodworks);
