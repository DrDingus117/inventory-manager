export interface Product {
  id?: string;
  name: string;
  data?: {
    year?: number;
    price?: number;
    [key: string]: any;
  };
}
