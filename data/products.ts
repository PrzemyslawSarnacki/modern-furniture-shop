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
]

export const categories = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'sofas', name: 'Sofas', slug: 'sofas' },
  { id: 'tables', name: 'Tables', slug: 'tables' },
  { id: 'chairs', name: 'Chairs', slug: 'chairs' },
  { id: 'bedroom', name: 'Bedroom', slug: 'bedroom' },
  { id: 'storage', name: 'Storage', slug: 'storage' },
]

