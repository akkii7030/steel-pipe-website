
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context"; // Import the useLanguage hook

const applicationData = [
  {
    title: {
      en: "Oil and Gas",
      ru: "Нефть и газ",
    },
    image: "/Oil_Gas.jpg",
    description: {
      en: "Our high-pressure pipes are engineered to withstand the demanding conditions of oil and gas extraction, processing, and transportation.",
      ru: "Наши трубы высокого давления разработаны для работы в сложных условиях добычи, переработки и транспортировки нефти и газа.",
    },
    slug: "oil-and-gas",
  },
  {
    title: {
      en: "Construction",
      ru: "Строительство",
    },
    image: "/Constructions.jpg",
    description: {
      en: "Steel pipes form the backbone of modern construction, providing structural support and utility conveyance.",
      ru: "Стальные трубы являются основой современного строительства, обеспечивая структурную поддержку и транспортировку коммуникаций.",
    },
    slug: "construction",
  },
  {
    title: {
      en: "Chemical Processing",
      ru: "Химическая обработка",
    },
    image: "/Chemical.jpg",
    description: {
      en: "Corrosion-resistant pipes ensure safe transport of chemicals in processing facilities.",
      ru: "Коррозионностойкие трубы обеспечивают безопасную транспортировку химикатов на производственных объектах.",
    },
    slug: "chemical-processing",
  },
  {
    title: {
      en: "Power Generation",
      ru: "Энергогенерация",
    },
    image: "/Power.jpg",
    description: {
      en: "Our pipes play a crucial role in power generation infrastructure.",
      ru: "Наши трубы играют ключевую роль в инфраструктуре генерации энергии.",
    },
    slug: "power-generation",
  },
];

export default function ApplicationsPage() {
  const { language } = useLanguage(); // Use the useLanguage hook

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        {language === "en" ? "Applications" : "Приложения"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {applicationData.map((app, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image with padding, background, and error fallback */}
            <div className="bg-gray-100 p-4 rounded-t-lg">
              <Image
                src={app.image}
                alt={app.title[language]}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.jpg";
                }}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {app.title[language]}
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                {app.description[language]}
              </p>
              {/* Learn More Button */}
              <Link href={`/applications/${app.slug}`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  {language === "en" ? "Learn More" : "Подробнее"}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
