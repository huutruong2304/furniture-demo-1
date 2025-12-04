interface HeroData {
  title: string;
  subtitle?: string;
  description: string;
  src: string;
  alt: string;
  buttonText: string;
  buttonLink: string;
}

interface InspirationData {
  title: string;
  description: string;
  src: string;
  alt: string;
  buttonLink?: string;
}

interface PromotionBannerData {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
}

interface FilterItem {
  value: string;
  title: string;
  count?: number;
}

// product
interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number; // 1 to 5
  date: string;
  content: string;
  helpfulCount: number;
}

interface ProductCard {
  id: string;
  href: string;
  name: string;
  imageUrl: string;
  alt: string;
  price: number;
  oldPrice?: number;
  category?: string;
  isNew?: boolean;
  stock?: number;
}

// cart
interface CartItem {
  id: string;
  name: string;
  alt: string;
  src: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  subtotal: number;
}
