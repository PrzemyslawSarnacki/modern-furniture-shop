'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, Mail, Phone, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function CustomerServicePage() {
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
              {t.customerService.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600"
            >
              {t.customerService.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <Phone className="w-12 h-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.customerService.phone.title}</h3>
                <p className="text-gray-600 mb-4">{t.customerService.phone.description}</p>
                <p className="text-lg font-semibold text-gray-900">{t.customerService.phone.number}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <Mail className="w-12 h-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.customerService.email.title}</h3>
                <p className="text-gray-600 mb-4">{t.customerService.email.description}</p>
                <p className="text-lg font-semibold text-gray-900">{t.customerService.email.address}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 text-white p-8 md:p-12 rounded-lg text-center"
            >
              <MessageCircle className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.customerService.help.title}</h2>
              <p className="text-lg text-gray-300 mb-8">{t.customerService.help.description}</p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  {t.customerService.help.button}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

