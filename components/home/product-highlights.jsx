"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export default function ProductHighlights() {
  const { translations } = useLanguage()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-quality steel pipes designed to meet the diverse needs of various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            title="Seamless Pipes"
            image="/SEAMLESS_PIPE.jpg"
            description="Superior strength and durability for critical applications in oil & gas, chemical, and power industries."
            link="/products/seamless-pipes"
          />

          <ProductCard
            title="ERW Pipes"
            image="/ERW_Pipe.jpg"
            description="Electric Resistance Welded pipes offering excellent uniformity and cost-effectiveness for various applications."
            link="/products/erw-pipes"
          />

          <ProductCard
            title="Stainless Steel Pipes"
            image="/Stainless_Steel.jpg"
            description="Corrosion-resistant pipes ideal for food processing, chemical, and pharmaceutical industries."
            link="/products/stainless-steel-pipes"
          />
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300 inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ title, image, description, link }) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 p-4">
      <div className="relative h-48 rounded-lg overflow-hidden bg-white p-4">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-blue-600 font-medium flex items-center cursor-pointer">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
