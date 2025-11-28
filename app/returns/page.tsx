'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { RotateCcw, Clock, Package, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function ReturnsPage() {
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
              {t.returns.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600"
            >
              {t.returns.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Returns Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Return Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <RotateCcw className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.returns.policy.title}</h2>
              <p className="text-gray-600 mb-4">{t.returns.policy.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li>• {t.returns.policy.condition1}</li>
                <li>• {t.returns.policy.condition2}</li>
                <li>• {t.returns.policy.condition3}</li>
              </ul>
            </motion.div>

            {/* Return Period */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-lg"
            >
              <Clock className="w-12 h-12 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.returns.period.title}</h2>
              <p className="text-lg text-gray-300">{t.returns.period.description}</p>
            </motion.div>

            {/* Return Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Package className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.returns.process.title}</h2>
              <ol className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">1.</span>
                  {t.returns.process.step1}
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">2.</span>
                  {t.returns.process.step2}
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">3.</span>
                  {t.returns.process.step3}
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">4.</span>
                  {t.returns.process.step4}
                </li>
              </ol>
            </motion.div>

            {/* Refund */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <CheckCircle className="w-12 h-12 text-gray-900 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.returns.refund.title}</h2>
              <p className="text-gray-600">{t.returns.refund.description}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

