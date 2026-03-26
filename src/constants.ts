export interface Product {
  id: string;
  name: string;
  category: 'Whole' | 'Ground' | 'Blended';
  price: number;
  image: string;
  description: string;
  usp: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Turmeric Powder',
    category: 'Ground',
    price: 149,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d019cb5?auto=format&fit=crop&q=80&w=800',
    description: 'High-curcumin turmeric sourced from the finest farms of Erode, processed with traditional cold-grinding methods to retain its natural oils and medicinal properties.',
    usp: 'High Curcumin Content (5%+)',
    benefits: ['Anti-inflammatory properties', 'Boosts immunity', 'Natural detoxifier'],
    ingredients: ['100% Pure Turmeric Root'],
    usage: 'Perfect for daily cooking, golden milk, and skincare routines.'
  },
  {
    id: '2',
    name: 'Royal Garam Masala',
    category: 'Blended',
    price: 199,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
    description: 'A secret family recipe passed down through generations. A blend of 15 premium whole spices, roasted to perfection and ground to create an unparalleled aroma.',
    usp: 'Authentic Heritage Blend',
    benefits: ['Rich aroma', 'Balanced heat', 'No artificial fillers'],
    ingredients: ['Cardamom', 'Cinnamon', 'Cloves', 'Black Pepper', 'Cumin', 'Nutmeg', 'Mace'],
    usage: 'Add a pinch at the end of cooking to elevate any curry or stir-fry.'
  },
  {
    id: '3',
    name: 'Kashmiri Red Chilli',
    category: 'Ground',
    price: 175,
    image: 'https://images.unsplash.com/photo-1599143338401-0085882c06ac?auto=format&fit=crop&q=80&w=800',
    description: 'Vibrant red color with a mild heat profile. Sourced directly from the valleys of Kashmir, these chillies are sun-dried and stem-removed before grinding.',
    usp: 'Natural Deep Red Color',
    benefits: ['Rich in Vitamin C', 'Mild spice level', 'Authentic Kashmiri flavor'],
    ingredients: ['100% Kashmiri Chillies'],
    usage: 'Ideal for Tandoori dishes, Rogan Josh, and adding color to any gravy.'
  },
  {
    id: '4',
    name: 'Whole Green Cardamom',
    category: 'Whole',
    price: 450,
    image: 'https://images.unsplash.com/photo-1599143338452-974848a31688?auto=format&fit=crop&q=80&w=800',
    description: 'Bold, 8mm+ sized green cardamom pods from the Idukki hills. Handpicked for their intense aroma and fresh green color.',
    usp: 'Bold 8mm+ Pods',
    benefits: ['Natural mouth freshener', 'Aromatic sweetener', 'Digestive aid'],
    ingredients: ['Whole Green Cardamom'],
    usage: 'Use in tea, desserts, or biryanis for a burst of freshness.'
  }
];
