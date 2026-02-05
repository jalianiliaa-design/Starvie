
export interface PriceOption {
  duration: string;
  price: number;
}

export interface AppProduct {
  id: string;
  name: string;
  category: string;
  icon?: string;
  image?: string;
  options: {
    label: string;
    prices: PriceOption[];
  }[];
}

export interface StoreConfig {
  storeName: string;
  whatsapp: string;
  instagram: string;
  telegram: string;
  timezone: string;
  profilePic: string;
  bannerPic: string;
  visitorCount: number;
}

export type ViewState = 'home' | 'pricelist' | 'refund' | 'admin';
