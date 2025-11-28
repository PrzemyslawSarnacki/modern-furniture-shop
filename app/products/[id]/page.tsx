'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { ShoppingCart, Star, Plus, Minus, Check, Truck, Shield } from 'lucide-react'
import { products } from '@/data/products'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/store/cart-store'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'
import { getTranslatedProducts } from '@/data/products-translations'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string
  const { language } = useLanguage()
  const t = getTranslation(language)
  const translatedProducts = getTranslatedProducts(language, products)
  const product = translatedProducts.find(p => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const addItem = useCartStore(state => state.addItem)

  if (!product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.common.productNotFound}</h1>
        <p className="text-gray-600 mb-8">{t.common.productNotFoundDesc}</p>
        <Button onClick={() => router.push('/products')}>{t.common.backToProducts}</Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    // Could add a toast notification here
  }

  const productImages = product.images || [product.image]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden mb-4">
            <Image
              src={productImages[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {productImages.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-full h-24 bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <span className="text-sm text-gray-500 uppercase tracking-wide">
              {(() => {
                const categoryMap: Record<string, string> = {
                  sofas: t.categories.sofas,
                  tables: t.categories.tables,
                  chairs: t.categories.chairs,
                  bedroom: t.categories.bedroom,
                  storage: language === 'pl' ? 'Przechowywanie' : 'Storage',
                }
                return categoryMap[product.category] || product.category
              })()}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          {product.rating && (
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating || 0)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} {t.common.reviews})
              </span>
            </div>
          )}

          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {product.features && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">{t.common.features}</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">{t.common.quantity}</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-2 text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-gray-600">
                {t.common.total} <span className="font-semibold">${(product.price * quantity).toFixed(2)}</span>
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mb-8">
            <Button
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {product.inStock ? t.common.addToCart : t.common.outOfStock}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">{t.features.freeShipping.title}</p>
                <p className="text-sm text-gray-600">{t.features.freeShipping.description}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <p className="font-medium text-gray-900">{t.features.quality.title}</p>
                <p className="text-sm text-gray-600">{t.features.quality.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

