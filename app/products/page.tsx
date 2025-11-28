'use client'

import React, { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProductCard } from '@/components/ProductCard'
import { products, categories } from '@/data/products'
import { Button } from '@/components/ui/Button'
import { Search, Filter } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'
import { getTranslatedProducts } from '@/data/products-translations'

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams?.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [searchQuery, setSearchQuery] = useState('')
  const { language } = useLanguage()
  const t = getTranslation(language)
  const translatedProducts = getTranslatedProducts(language, products)

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    return translatedProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery, translatedProducts])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.products.allProducts}</h1>
        <p className="text-xl text-gray-600">{t.products.pageDescription}</p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t.products.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const getCategoryName = (id: string) => {
              if (id === 'all') return t.common.all
              const categoryMap: Record<string, string> = {
                sofas: t.categories.sofas,
                tables: t.categories.tables,
                chairs: t.categories.chairs,
                bedroom: t.categories.bedroom,
                storage: language === 'pl' ? 'Przechowywanie' : 'Storage',
              }
              return categoryMap[id] || category.name
            }
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {getCategoryName(category.id)}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-4">{t.products.noProductsFound}</p>
          <p className="text-gray-500">{t.products.noProductsDescription}</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-8 text-center text-gray-600">
        {t.products.showing} {filteredProducts.length} {t.products.of} {translatedProducts.length} {t.products.products}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-gray-600">Ładowanie...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}

