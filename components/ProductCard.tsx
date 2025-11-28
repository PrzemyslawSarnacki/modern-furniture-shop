'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, ArrowRight } from 'lucide-react'
import type { Product } from '@/types'
import { Card, CardContent } from './ui/Card'
import { Button } from './ui/Button'
import { useCartStore } from '@/store/cart-store'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore(state => state.addItem)
  const { language } = useLanguage()
  const t = getTranslation(language)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full"
      >
        <Card hover className="h-full flex flex-col group overflow-hidden">
          <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            
            {product.originalPrice && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
              >
                {t.common.sale}
              </motion.span>
            )}
            {!product.inStock && (
              <span className="absolute top-3 right-3 bg-gray-800/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                {t.common.outOfStock}
              </span>
            )}

            {/* Quick view button on hover */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
            >
              <span className="text-white text-sm font-medium bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                {t.products.viewDetails}
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </div>
          
          <CardContent className="flex-1 flex flex-col p-6">
            <div className="mb-2">
              <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">{product.category}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">{product.description}</p>
            
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 0)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            )}

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex items-center gap-2 group/btn"
                >
                  <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  {t.common.add}
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
