interface Products {
  products: [];
}
interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  price: number;
  images: [string];
  brand: string;
  category: string;
  total: number;
}

export type { Product, Products };
