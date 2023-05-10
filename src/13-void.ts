() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((price) => {
      total += price;
    });
    return total;
  };

  const totalPrice = calcTotal([19.99, 29.99, 39.99]);

  const printTotal = (total: number): void => {
    console.log(`Total price: ${total}`);
  };

  printTotal(totalPrice);
};
