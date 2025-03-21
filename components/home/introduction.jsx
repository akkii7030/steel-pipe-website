"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { CheckCircle, Zap, Briefcase, Globe } from "lucide-react";

export default function Introduction() {
  const { translations } = useLanguage();

  const features = [
    { icon: CheckCircle, text: "Premium Quality" },
    { icon: Zap, text: "Fast Delivery" },
    { icon: Briefcase, text: "Custom Solutions" },
    { icon: Globe, text: "Global Support" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {translations?.introduction?.title || "Leading Manufacturer of Premium Steel Pipes"}
            </h2>
            <p className="text-gray-600 mb-4">
              {translations?.introduction?.description1 || "SteelPipe Pro is a global leader in manufacturing high-quality steel pipes for various industrial applications."}
            </p>
            <p className="text-gray-600 mb-6">
              {translations?.introduction?.description2 || "Our comprehensive range includes seamless pipes, ERW pipes, welded pipes, and specialized solutions for oil & gas, construction, chemical processing, and power generation industries."}
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div className="flex items-center" key={index}>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300 inline-block"
            >
              {translations?.buttons?.learnMore || "Learn More About Us"}
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/Manufacturing_pipes.jpg"
              alt="Steel pipe manufacturing facility"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}