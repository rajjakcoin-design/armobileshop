export type ProductCondition = 'New' | 'Like New' | 'Good' | 'Fair';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'Smartphone' | 'Accessory';
  price: number;
  originalPrice?: number;
  condition: ProductCondition;
  image: string;
  images?: string[];
  specs: {
    storage?: string;
    ram?: string;
    color?: string;
    screen?: string;
  };
  description: string;
  rating: number;
  reviews: number;
  isTrending?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum FilterType {
  BRAND = 'BRAND',
  CONDITION = 'CONDITION',
  PRICE = 'PRICE',
}