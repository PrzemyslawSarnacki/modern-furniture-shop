import type { Product } from '@/types'

// This is a placeholder data structure - replace with your actual product data from the old project
export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Sofa',
    description: 'Comfortable and stylish modern sofa perfect for any living room',
    price: 899.99,
    originalPrice: 1299.99,
    image: '/assets/images/products/sofa-1.jpg',
    category: 'sofas',
    inStock: true,
    rating: 4.5,
    reviews: 23,
    features: ['Premium materials', 'Easy assembly', '1 year warranty']
  },
  {
    id: '2',
    name: 'Wooden Dining Table',
    description: 'Elegant wooden dining table that seats 6 people comfortably',
    price: 599.99,
    image: '/assets/images/products/dining-table-1.jpg',
    category: 'tables',
    inStock: true,
    rating: 4.8,
    reviews: 45,
    features: ['Solid wood construction', 'Scratch resistant', 'Easy to clean']
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description: 'Professional ergonomic chair designed for long working hours',
    price: 349.99,
    image: '/assets/images/products/chair-1.jpg',
    category: 'chairs',
    inStock: true,
    rating: 4.7,
    reviews: 67,
    features: ['Lumbar support', 'Adjustable height', 'Wheels included']
  },
  {
    id: '4',
    name: 'Coffee Table',
    description: 'Contemporary coffee table with storage space',
    price: 249.99,
    image: '/assets/images/products/coffee-table-1.jpg',
    category: 'tables',
    inStock: true,
    rating: 4.3,
    reviews: 34,
    features: ['Storage drawer', 'Modern design', 'Sturdy construction']
  },
  {
    id: '5',
    name: 'Bedroom Set',
    description: 'Complete bedroom set including bed frame, nightstands, and dresser',
    price: 1899.99,
    originalPrice: 2499.99,
    image: '/assets/images/products/bedroom-set-1.jpg',
    category: 'bedroom',
    inStock: true,
    rating: 4.6,
    reviews: 28,
    features: ['Complete set', 'Premium finish', '5 year warranty']
  },
  {
    id: '6',
    name: 'Bookshelf',
    description: 'Tall bookshelf with 5 shelves for maximum storage',
    price: 179.99,
    image: '/assets/images/products/bookshelf-1.jpg',
    category: 'storage',
    inStock: true,
    rating: 4.4,
    reviews: 52,
    features: ['5 shelves', 'Adjustable height', 'Easy assembly']
  },
  // More Sofas
  {
    id: '7',
    name: 'Leather Sectional Sofa',
    description: 'Premium leather sectional sofa with chaise lounge',
    price: 2499.99,
    originalPrice: 3299.99,
    image: '/assets/images/products/sofa-2.jpg',
    category: 'sofas',
    inStock: true,
    rating: 4.9,
    reviews: 87,
    features: ['Genuine leather', 'Reclining seats', '10 year warranty']
  },
  {
    id: '8',
    name: 'Corner Sofa Bed',
    description: 'Spacious corner sofa that converts into a bed',
    price: 1599.99,
    image: '/assets/images/products/sofa-3.jpg',
    category: 'sofas',
    inStock: true,
    rating: 4.6,
    reviews: 42,
    features: ['Sofa bed conversion', 'Storage compartments', 'Removable covers']
  },
  {
    id: '9',
    name: 'Velvet Loveseat',
    description: 'Elegant velvet loveseat in various colors',
    price: 699.99,
    image: '/assets/images/products/sofa-4.jpg',
    category: 'sofas',
    inStock: true,
    rating: 4.7,
    reviews: 31,
    features: ['Premium velvet', 'Compact size', 'Multiple colors']
  },
  // More Tables
  {
    id: '10',
    name: 'Extendable Dining Table',
    description: 'Expandable table seats 4 to 8 people',
    price: 899.99,
    image: '/assets/images/products/table-2.jpg',
    category: 'tables',
    inStock: true,
    rating: 4.8,
    reviews: 56,
    features: ['Extendable design', 'Solid oak wood', 'Seats 4-8 people']
  },
  {
    id: '11',
    name: 'Glass Coffee Table',
    description: 'Modern glass coffee table with metal base',
    price: 449.99,
    image: '/assets/images/products/table-3.jpg',
    category: 'tables',
    inStock: true,
    rating: 4.5,
    reviews: 39,
    features: ['Tempered glass', 'Metal base', 'Easy to clean']
  },
  {
    id: '12',
    name: 'Side Table Set',
    description: 'Set of 2 matching side tables',
    price: 199.99,
    image: '/assets/images/products/table-4.jpg',
    category: 'tables',
    inStock: true,
    rating: 4.4,
    reviews: 28,
    features: ['Set of 2', 'Nested design', 'Metal legs']
  },
  // More Chairs
  {
    id: '13',
    name: 'Dining Chair Set',
    description: 'Set of 4 modern dining chairs',
    price: 449.99,
    image: '/assets/images/products/chair-2.jpg',
    category: 'chairs',
    inStock: true,
    rating: 4.6,
    reviews: 64,
    features: ['Set of 4', 'Upholstered seats', 'Modern design']
  },
  {
    id: '14',
    name: 'Recliner Chair',
    description: 'Comfortable recliner chair with footrest',
    price: 599.99,
    image: '/assets/images/products/chair-3.jpg',
    category: 'chairs',
    inStock: true,
    rating: 4.8,
    reviews: 51,
    features: ['Reclining mechanism', 'Footrest', 'Premium padding']
  },
  {
    id: '15',
    name: 'Rocking Chair',
    description: 'Classic wooden rocking chair',
    price: 349.99,
    image: '/assets/images/products/chair-4.jpg',
    category: 'chairs',
    inStock: true,
    rating: 4.5,
    reviews: 23,
    features: ['Solid wood', 'Smooth rocking', 'Ergonomic design']
  },
  // More Bedroom
  {
    id: '16',
    name: 'Queen Size Bed',
    description: 'Modern queen size bed with headboard',
    price: 1299.99,
    image: '/assets/images/products/bedroom-2.jpg',
    category: 'bedroom',
    inStock: true,
    rating: 4.7,
    reviews: 73,
    features: ['Queen size', 'Upholstered headboard', 'Under bed storage']
  },
  {
    id: '17',
    name: 'Wardrobe',
    description: 'Spacious 3-door wardrobe with mirrors',
    price: 1099.99,
    image: '/assets/images/products/bedroom-3.jpg',
    category: 'bedroom',
    inStock: true,
    rating: 4.6,
    reviews: 48,
    features: ['3 doors', 'Full-length mirror', 'Hanging space']
  },
  {
    id: '18',
    name: 'Dresser with Mirror',
    description: '5-drawer dresser with attached mirror',
    price: 799.99,
    image: '/assets/images/products/bedroom-4.jpg',
    category: 'bedroom',
    inStock: true,
    rating: 4.5,
    reviews: 35,
    features: ['5 drawers', 'Attached mirror', 'Smooth drawer slides']
  },
  // More Storage
  {
    id: '19',
    name: 'TV Stand',
    description: 'Modern TV stand with storage cabinets',
    price: 399.99,
    image: '/assets/images/products/storage-2.jpg',
    category: 'storage',
    inStock: true,
    rating: 4.6,
    reviews: 41,
    features: ['Cable management', 'Storage cabinets', 'Fits up to 65" TV']
  },
  {
    id: '20',
    name: 'Chest of Drawers',
    description: '6-drawer chest of drawers',
    price: 549.99,
    image: '/assets/images/products/storage-3.jpg',
    category: 'storage',
    inStock: true,
    rating: 4.7,
    reviews: 29,
    features: ['6 drawers', 'Solid wood', 'Soft-close mechanism']
  },
]

export const categories = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'sofas', name: 'Sofas', slug: 'sofas' },
  { id: 'tables', name: 'Tables', slug: 'tables' },
  { id: 'chairs', name: 'Chairs', slug: 'chairs' },
  { id: 'bedroom', name: 'Bedroom', slug: 'bedroom' },
  { id: 'storage', name: 'Storage', slug: 'storage' },
]

