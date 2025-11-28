'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export default function NotFound() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">{t.cart.pageNotFound}</h2>
      <p className="text-gray-600 mb-8">{t.cart.pageNotFoundDesc}</p>
      <Link href="/">
        <Button size="lg">{t.cart.goHome}</Button>
      </Link>
    </div>
  )
}

