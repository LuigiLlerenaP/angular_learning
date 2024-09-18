import { Product, taxCalculation, tax } from "./05-function-destructuring";

const shoppingCart: Product[] = [
  { description: "Nokia", price: 100 },
  { description: "IPAD", price: 100 },
];
const [total, totalTax] = taxCalculation({ products: shoppingCart, tax });
console.log(shoppingCart);
console.log(`Total = ${total}`);
console.log(`Total plus tax = ${totalTax}`);
