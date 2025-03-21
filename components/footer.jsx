"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const { translations } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="relative h-10 w-40">
                <Image
                  src="/logo.jpg"
                  alt="SteelPipe Pro Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading manufacturer of high-quality steel pipes for various industrial applications worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Weight Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/seamless-pipes"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Seamless Pipes
                </Link>
              </li>
              <li>
                <Link
                  href="/products/erw-pipes"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  ERW Pipes
                </Link>
              </li>
              <li>
                <Link
                  href="/products/welded-pipes"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Welded Pipes
                </Link>
              </li>
              <li>
                <Link
                  href="/products/duplex-pipes"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Duplex Pipes
                </Link>
              </li>
              <li>
                <Link
                  href="/products/carbon-steel-pipes"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Carbon Steel Pipes
                </Link>
              </li>
              <li>
                <Link
                  href="/products/stainless-steel-pipes"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Stainless Steel Pipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Steel Avenue, Industrial District, New York, NY 10001, USA</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@steelpipepro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SteelPipe Pro. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

