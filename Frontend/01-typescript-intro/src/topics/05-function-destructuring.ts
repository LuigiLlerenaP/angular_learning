export interface Product {
  description: string;
  price: number;
}
interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

const phone: Product = {
  description: "Sony",
  price: 1,
};

const tablet: Product = {
  description: "Samsung",
  price: 1,
};

const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
  const { tax, products } = options;
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
};

const shoppingCart: Product[] = [phone, tablet];

export const tax: number = 0.15;

const [total, totalTax] = taxCalculation({ products: shoppingCart, tax });

console.log(`Total = ${total}`);
console.log(`Total plus tax = ${totalTax}`);

export { taxCalculation };
