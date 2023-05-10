import { addProduct, calcStock, products } from "./product.service";

addProduct({ name: "Shirt", size: "medium", price: 19.99, stock: 10 });

addProduct({ name: "Jacket", size: "small", price: 15, stock: 5 });

addProduct({ name: "Shoes", size: "large", price: 25, stock: 20 });

console.log(products);

console.log(calcStock());
