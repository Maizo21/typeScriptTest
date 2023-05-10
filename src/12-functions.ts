() => {
  type Sizes = "small" | "medium" | "large";

  function createProductToJson(name: string, size: Sizes, price: number) {
    return {
      name,
      size,
      price,
    };
  }

  const product = createProductToJson("Shirt", "medium", 19.99);
  console.log(product);

  //arrow function

  const createProductToJsonArrow = (
    name: string,
    size: Sizes,
    price: number,
    brand?: string
  ) => ({ name, size, price });

  const productArrow = createProductToJsonArrow(
    "Shirt",
    "medium",
    19.99,
    "Zara"
  );
  console.log(productArrow);

  const productArrow2 = createProductToJsonArrow("Shirt", "medium", 19.99);
  console.log(productArrow2);
};
