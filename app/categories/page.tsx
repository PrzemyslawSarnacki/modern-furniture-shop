'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'
import { categories } from '@/data/products'
import { getTranslatedProducts } from '@/data/products-translations'
import { products } from '@/data/products'
import { Button } from '@/components/ui/Button'

export default function CategoriesPage() {
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
      storage: '/assets/images/categories/sofas.jpg', // fallback
    }
    return imageMap[id] || '/assets/images/categories/sofas.jpg'
  }

  const getCategoryProductCount = (categoryId: string) => {
    if (categoryId === 'all') return translatedProducts.length
    return translatedProducts.filter(p => p.category === categoryId).length
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              {t.categoriesPage.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 mb-4"
            >
              {t.categoriesPage.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              {t.categoriesPage.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {categories.map((category) => {
              const categoryName = getCategoryName(category.id)
              const productCount = getCategoryProductCount(category.id)
              const categoryImage = getCategoryImage(category.id)

              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href={`/categories/${category.id}`}>
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={categoryImage}
                        alt={categoryName}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {categoryName}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mb-4">
                          {productCount} {t.categoriesPage.productsCount}
                        </p>
                        <Button
                          variant="primary"
                          size="md"
                          className="bg-white text-gray-900 hover:bg-gray-100"
                        >
                          {t.categoriesPage.viewProducts}
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

