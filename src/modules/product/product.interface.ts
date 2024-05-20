export interface IVariant {
  type: string;
  value: string;
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariant[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
}
