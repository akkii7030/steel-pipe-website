"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export default function Hero() {
  const { translations } = useLanguage()

  return (
    <div className="relative h-[600px] w-full">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Steel pipes manufacturing"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Premium Steel Pipes for Global Industries
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Delivering high-quality steel pipe solutions with precision engineering and exceptional service for over 35
            years.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300 text-center"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 py-3 px-8 rounded-lg font-medium transition-colors duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

