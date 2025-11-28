import type { Product } from '@/types'

export const productTranslations = {
  pl: {
    '1': {
      name: 'Nowoczesna Sofa',
      description: 'Wygodna i stylowa nowoczesna sofa idealna do każdego salonu',
      features: ['Materiały premium', 'Łatwy montaż', '1 rok gwarancji']
    },
    '2': {
      name: 'Drewniany Stół',
      description: 'Elegancki drewniany stół jadalniany, który wygodnie pomieści 6 osób',
      features: ['Konstrukcja z litego drewna', 'Odporny na zarysowania', 'Łatwy w czyszczeniu']
    },
    '3': {
      name: 'Krzesło Ergonomiczne',
      description: 'Profesjonalne krzesło ergonomiczne zaprojektowane do długich godzin pracy',
      features: ['Wsparcie lędźwiowe', 'Regulowana wysokość', 'Kółka w zestawie']
    },
    '4': {
      name: 'Stolik Kawowy',
      description: 'Współczesny stolik kawowy z przestrzenią do przechowywania',
      features: ['Szafka', 'Nowoczesny design', 'Solidna konstrukcja']
    },
    '5': {
      name: 'Komplet Sypialniany',
      description: 'Kompletny komplet sypialniany zawierający ramę łóżka, stoliki nocne i komodę',
      features: ['Pełny zestaw', 'Premium finish', '5 lat gwarancji']
    },
    '6': {
      name: 'Regał na Książki',
      description: 'Wysoki regał na książki z 5 półkami dla maksymalnej pojemności',
      features: ['5 półek', 'Regulowana wysokość', 'Łatwy montaż']
    }
  },
  en: {
    '1': {
      name: 'Modern Sofa',
      description: 'Comfortable and stylish modern sofa perfect for any living room',
      features: ['Premium materials', 'Easy assembly', '1 year warranty']
    },
    '2': {
      name: 'Wooden Dining Table',
      description: 'Elegant wooden dining table that seats 6 people comfortably',
      features: ['Solid wood construction', 'Scratch resistant', 'Easy to clean']
    },
    '3': {
      name: 'Ergonomic Office Chair',
      description: 'Professional ergonomic chair designed for long working hours',
      features: ['Lumbar support', 'Adjustable height', 'Wheels included']
    },
    '4': {
      name: 'Coffee Table',
      description: 'Contemporary coffee table with storage space',
      features: ['Storage drawer', 'Modern design', 'Sturdy construction']
    },
    '5': {
      name: 'Bedroom Set',
      description: 'Complete bedroom set including bed frame, nightstands, and dresser',
      features: ['Complete set', 'Premium finish', '5 year warranty']
    },
    '6': {
      name: 'Bookshelf',
      description: 'Tall bookshelf with 5 shelves for maximum storage',
      features: ['5 shelves', 'Adjustable height', 'Easy assembly']
    }
  }
}

export function getTranslatedProducts(language: 'pl' | 'en', baseProducts: Product[]): Product[] {
  const translations = productTranslations[language]
  
  return baseProducts.map(product => {
    const translation = translations[product.id as keyof typeof translations]
    if (translation) {
      return {
        ...product,
        name: translation.name,
        description: translation.description,
        features: translation.features || product.features
      }
    }
    return product
  })
}

