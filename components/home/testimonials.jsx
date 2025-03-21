"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export default function Testimonials() {
  const { translations } = useLanguage()

  const testimonials = [
    {
      name: "John Smith",
      position: "Procurement Manager, Global Oil Co.",
      image: "/john_smith1.jpg",
      quote:
        "SteelPipe Pro has been our trusted supplier for over a decade. Their consistent quality and reliable delivery have made them an invaluable partner for our operations worldwide.",
    },
    {
      name: "Maria Rodriguez",
      position: "Project Director, Construction Innovations",
      image: "/john_smith2.jpg",
      quote:
        "The technical expertise and customer service provided by SteelPipe Pro are exceptional. They've helped us solve complex challenges on multiple high-profile construction projects.",
    },
    {
      name: "Ahmed Hassan",
      position: "Chief Engineer, Middle East Petrochemicals",
      image: "/john_smith3.jpg",
      quote:
        "We've relied on SteelPipe Pro's products for our most demanding applications. Their pipes consistently meet our strict requirements for safety and durability in harsh environments.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our long-standing relationships with clients across various industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>

              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

