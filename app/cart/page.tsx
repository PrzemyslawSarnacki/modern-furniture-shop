'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/store/cart-store'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()
  const { language } = useLanguage()
  const t = getTranslation(language)

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.cart.empty}</h2>
          <p className="text-gray-600 mb-8">{t.cart.emptyDesc}</p>
          <Link href="/products">
            <Button size="lg">{t.cart.continueShopping}</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.cart.title}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row gap-4"
            >
              <div className="relative w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1">
                <Link href={`/products/${item.product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:underline">
                    {item.product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4">{item.product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-sm text-gray-500">
                        ${item.product.price.toFixed(2)} {t.cart.each}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-4">
            <Button variant="ghost" onClick={clearCart} className="text-red-600 hover:text-red-700">
              {t.cart.clearCart}
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.cart.orderSummary}</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>{t.cart.subtotal}</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>{t.cart.shipping}</span>
                <span className={getTotalPrice() >= 500 ? 'text-green-600' : ''}>
                  {getTotalPrice() >= 500 ? t.cart.free : '$29.99'}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                <span>{t.common.total}</span>
                <span>${(getTotalPrice() + (getTotalPrice() >= 500 ? 0 : 29.99)).toFixed(2)}</span>
              </div>
            </div>

            {getTotalPrice() < 500 && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  {language === 'pl' 
                    ? `Dodaj $${(500 - getTotalPrice()).toFixed(2)} więcej za darmową dostawę!`
                    : `Add $${(500 - getTotalPrice()).toFixed(2)} more for free shipping!`}
                </p>
              </div>
            )}

            <Link href="/checkout" className="block">
              <Button size="lg" className="w-full">
                {t.cart.proceedToCheckout}
              </Button>
            </Link>
            
            <Link href="/products" className="block mt-4">
              <Button variant="outline" size="lg" className="w-full">
                {t.cart.continueShopping}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

