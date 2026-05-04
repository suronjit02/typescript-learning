// utility types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

// pick
type ProductSummary = Pick<Product, "id" | "name" | "price">; // pick some key

// Omit
type ProductWithoutStock = Omit<Product, "stock" | "color">; // without some key

// Required
type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 23,
  name: "Mouse",
  price: "340",
  stock: 234,
  color: "black",
};

// optional for partial
type optionalProduct = Partial<Product>; // all is optional: ?

// readonly
type ProductReadOnly = Readonly<Product>; // can't change

// Record
const emptyObj: Record<string, unknown> = {};

const product1: ProductReadOnly = {
  id: 23,
  name: "Mouse",
  price: "340",
  stock: 234,
  color: "black",
};
