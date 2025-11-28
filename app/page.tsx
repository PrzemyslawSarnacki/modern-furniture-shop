'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Truck, Headphones, Sparkles, TrendingUp } from 'lucide-react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'
import { getTranslatedProducts } from '@/data/products-translations'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const translatedProducts = getTranslatedProducts(language, products)
  const featuredProducts = translatedProducts.slice(0, 6)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="Modern furniture"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>

        <div className="relative container mx-auto z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white w-full py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-center"
            >
              {t.hero.title}
              <span className="block mt-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-gradient text-center">
                {t.hero.titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-16 md:mb-20 text-gray-300 max-w-2xl mx-auto leading-relaxed text-center"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mt-8 mb-16 md:mb-20"
            >
              <Link href="/products">
                <Button variant="gradient" size="lg" className="group">
                  <span>{t.hero.shopCollection}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm">
                  {t.hero.exploreCategories}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <AnimatedSection className="pt-32 pb-32 md:pt-40 md:pb-40 lg:pt-56 lg:pb-56 bg-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              {
                icon: Truck,
                title: t.features.freeShipping.title,
                description: t.features.freeShipping.description,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Shield,
                title: t.features.quality.title,
                description: t.features.quality.description,
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Headphones,
                title: t.features.support.title,
                description: t.features.support.description,
                color: 'from-purple-500 to-pink-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center group cursor-pointer p-6 md:p-8"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Featured Products */}
      <AnimatedSection className="pt-64 pb-64 md:pt-80 md:pb-80 lg:pt-112 lg:pb-112 bg-gradient-to-b from-white to-gray-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 pt-8 md:pt-12 lg:pt-16 pb-8 w-full flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 mb-0">
              <TrendingUp className="w-6 h-6 text-gray-900" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{t.products.featured}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 mt-8 md:mt-10 lg:mt-12 text-center">
              {t.products.handpicked}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                {t.products.favorites}
              </span>
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-xl text-gray-600 max-w-2xl text-center px-4">
                {t.products.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 py-4"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16 pt-8 pb-8 md:pb-12 lg:pb-16"
          >
            <Link href="/products">
              <Button variant="outline" size="lg" className="group">
                {t.products.viewAll}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Categories Section */}
      <AnimatedSection className="pt-160 pb-0 md:pt-192 md:pb-0 lg:pt-240 lg:pb-0 bg-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 pb-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {t.categories.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                {t.categories.titleHighlight}
              </span>
            </h2>
            <div className="w-full flex justify-center">
              <p className="text-xl text-gray-600 max-w-2xl text-center px-4">
                {t.categories.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 py-4 mb-32 md:mb-48 lg:mb-64"
          >
            {[
              { name: t.categories.sofas, image: '/assets/images/categories/sofas.jpg', href: '/categories/sofas', gradient: 'from-gray-900 to-gray-800' },
              { name: t.categories.tables, image: '/assets/images/categories/tables.jpg', href: '/categories/tables', gradient: 'from-slate-900 to-slate-800' },
              { name: t.categories.chairs, image: '/assets/images/categories/chairs.jpg', href: '/categories/chairs', gradient: 'from-gray-800 to-black' },
              { name: t.categories.bedroom, image: '/assets/images/categories/bedroom.jpg', href: '/categories/bedroom', gradient: 'from-slate-800 to-slate-900' },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.h3
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        className="text-white text-2xl font-bold z-10"
                      >
                        {category.name}
                      </motion.h3>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="h-32 md:h-48 lg:h-64 bg-white"></div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="pt-80 pb-80 md:pt-96 md:pb-96 lg:pt-120 lg:pb-120 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative container mx-auto text-center text-white flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold"
            >
              {t.cta.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
                {t.cta.titleHighlight}
              </span>
            </motion.h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-center px-4"
          >
            {t.cta.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/products">
              <Button variant="gradient" size="lg" className="group">
                <span>{t.cta.startShopping}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                {t.nav.about}
              </Button>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}
