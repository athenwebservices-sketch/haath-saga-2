
export interface Product {
  id: string;
  name: string;
  saga: string;
  price: number;
  category: string;
  fabric: string;
  dyeType: string;
  occasion: string;
  images: string[];
  dropEdition: string;
  customFitAvailable: boolean;
}

export interface FilterState {
  fabric: string[];
  occasion: string[];
  dyeType: string[];
  priceRange: [number, number];
  dropEdition: string[];
}
