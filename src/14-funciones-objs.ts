(() => {
  const login = (data: { email: string; password: string }): boolean => {
    if (data.email === "admin" && data.password === "1234") {
      return true;
    } else {
      return false;
    }
  };

  const log = login({ email: "admin", password: "1234" });

  type Sizes = "small" | "medium" | "large";

  const products: any[] = [];

  const addProduct = (data: { name: string; size: Sizes; price: number }) => {
    products.push(data);
  };

  addProduct({ name: "Shirt", size: "medium", price: 19.99 });

  console.log(products);
})();
