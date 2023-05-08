(() => {
  // Strings

  let productTitle = "My Product";
  productTitle = "My Product yes";
  console.log(productTitle);

  let costumerName: string = "John";
  costumerName = "John Doe";
  console.log(costumerName);

  const summary = `
    Product: ${productTitle}
    Costumer: ${costumerName}
    `;

  console.log(summary);
})();
