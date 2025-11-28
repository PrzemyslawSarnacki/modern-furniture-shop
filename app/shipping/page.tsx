'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Package, Clock, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function ShippingPage() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
              {t.shipping.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600"
            >
              {t.shipping.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Shipping Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Free Shipping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-lg"
            >
              <Truck className="w-12 h-12 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.shipping.free.title}</h2>
              <p className="text-lg text-gray-300">{t.shipping.free.description}</p>
            </motion.div>

            {/* Delivery Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Clock className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.shipping.delivery.title}</h2>
              <p className="text-gray-600 mb-4">{t.shipping.delivery.description}</p>
              <ul className="space-y-2 text-gray-600">
                {t.shipping.delivery.local && <li>• {t.shipping.delivery.local}</li>}
                {t.shipping.delivery.regional && <li>• {t.shipping.delivery.regional}</li>}
                {t.shipping.delivery.national && <li>• {t.shipping.delivery.national}</li>}
              </ul>
            </motion.div>

            {/* Delivery Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <MapPin className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.shipping.areas.title}</h2>
              <p className="text-gray-600">{t.shipping.areas.description}</p>
            </motion.div>

            {/* Packaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Package className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.shipping.packaging.title}</h2>
              <p className="text-gray-600">{t.shipping.packaging.description}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

