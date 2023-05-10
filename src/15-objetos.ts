(() => {
  type Sizes = "small" | "medium" | "large";
  type Product = { name: string; size: Sizes; price: number };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({ name: "Shirt", size: "medium", price: 19.99 });

  addProduct({ name: "Jacket", size: "small", price: 15 });

  addProduct({ name: "Shoes", size: "large", price: 25 });

  console.log(products);
})();
