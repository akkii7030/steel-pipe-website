"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export default function Certifications() {
  const { translations } = useLanguage()

  const certifications = [
    { name: "ISO 9001:2015", image: "/ISO.jpg" },
    { name: "API 5L", image: "/API53.jpg" },
    { name: "ASTM A53", image: "/ASTM.jpg" },
    { name: "ISO 14001:2015", image: "/ISO2.jpg" },
    { name: "OHSAS 18001", image: "/OHSAS.jpg" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We adhere to the highest international standards, ensuring quality and reliability in every product we
            deliver.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="relative h-24 w-24 mx-auto mb-3">
                <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
              </div>
              <p className="font-medium text-gray-700">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

