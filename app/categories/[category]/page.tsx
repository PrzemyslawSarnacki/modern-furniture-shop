'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'
import { getTranslatedProducts } from '@/data/products-translations'
import { products } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params?.category as string
  const { language } = useLanguage()
  const t = getTranslation(language)
  const translatedProducts = getTranslatedProducts(language, products)

  const getCategoryName = (id: string) => {
    const categoryMap: Record<string, string> = {
      sofas: t.categories.sofas,
      tables: t.categories.tables,
      chairs: t.categories.chairs,
      bedroom: t.categories.bedroom,
      storage: language === 'pl' ? 'Przechowywanie' : 'Storage',
    }
    return categoryMap[id] || id
  }

  const getCategoryImage = (id: string) => {
    const imageMap: Record<string, string> = {
      sofas: '/assets/images/categories/sofas.jpg',
      tables: '/assets/images/categories/tables.jpg',
      chairs: '/assets/images/categories/chairs.jpg',
      bedroom: '/assets/images/categories/bedroom.jpg',
      storage: '/assets/images/categories/sofas.jpg',
    }
    return imageMap[id] || '/assets/images/categories/sofas.jpg'
  }

  const categoryProducts = translatedProducts.filter(p => p.category === categoryId)
  const categoryName = getCategoryName(categoryId)
  const categoryImage = getCategoryImage(categoryId)

  if (!categoryProducts.length && categoryId !== 'all') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Kategoria nie znaleziona</h1>
          <Link href="/categories">
            <Button variant="primary">Powrót do kategorii</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-64 md:h-96 overflow-hidden"
      >
        <Image
          src={categoryImage}
          alt={categoryName}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8">
          <Link href="/categories" className="mb-4">
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'pl' ? 'Powrót do kategorii' : 'Back to Categories'}
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {categoryName}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {categoryProducts.length} {t.categoriesPage.productsCount}
          </p>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">
                {language === 'pl' ? 'Brak produktów w tej kategorii' : 'No products in this category'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

