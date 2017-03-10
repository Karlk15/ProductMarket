export interface Product {
  id: number;
  product: {
    id: number;
    name: string;
    price: number;
    quantitySold: number;
    quantityInStock: number;
    imagePath: string;
  }
}
