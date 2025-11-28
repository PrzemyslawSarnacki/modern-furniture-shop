'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function WarrantyPage() {
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
              {t.warranty.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600"
            >
              {t.warranty.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Warranty Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Warranty Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-lg"
            >
              <Shield className="w-12 h-12 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.warranty.coverage.title}</h2>
              <p className="text-lg text-gray-300 mb-4">{t.warranty.coverage.description}</p>
              <ul className="space-y-2 text-gray-300">
                <li>• {t.warranty.coverage.item1}</li>
                <li>• {t.warranty.coverage.item2}</li>
                <li>• {t.warranty.coverage.item3}</li>
              </ul>
            </motion.div>

            {/* Warranty Period */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Clock className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.warranty.period.title}</h2>
              <p className="text-gray-600">{t.warranty.period.description}</p>
            </motion.div>

            {/* What's Covered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <CheckCircle className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.warranty.covered.title}</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• {t.warranty.covered.item1}</li>
                <li>• {t.warranty.covered.item2}</li>
                <li>• {t.warranty.covered.item3}</li>
                <li>• {t.warranty.covered.item4}</li>
              </ul>
            </motion.div>

            {/* What's Not Covered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <AlertCircle className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.warranty.notCovered.title}</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• {t.warranty.notCovered.item1}</li>
                <li>• {t.warranty.notCovered.item2}</li>
                <li>• {t.warranty.notCovered.item3}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

