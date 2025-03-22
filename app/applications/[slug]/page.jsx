"use client";

import Image from "next/image";
import React from "react";
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
    details: {
      en: [
        "Our pipes are widely used in offshore platforms, refineries, gas processing plants, pipeline networks, and storage facilities. They are known for their high durability and pressure resistance. These pipes provide excellent performance in extreme temperatures and pressures, ensuring safe and efficient fluid transport. Additionally, their corrosion-resistant properties reduce maintenance costs and extend service life, making them a reliable choice for critical oil and gas operations.",
        "In addition to their durability, our pipes are designed to meet international safety and environmental standards. They are rigorously tested to ensure they can withstand the harshest conditions, including high-pressure environments and corrosive substances. This makes them ideal for use in both onshore and offshore oil and gas projects.",
      ],
      ru: [
        "Наши трубы широко используются на морских платформах, нефтеперерабатывающих заводах, газоперерабатывающих заводах, трубопроводных сетях и хранилищах. Они известны своей высокой прочностью и устойчивостью к давлению. Эти трубы обеспечивают отличную производительность в экстремальных температурах и давлениях, обеспечивая безопасную и эффективную транспортировку жидкостей. Кроме того, их коррозионностойкие свойства снижают затраты на техническое обслуживание и увеличивают срок службы, что делает их надежным выбором для критически важных операций в нефтегазовой отрасли.",
        "Помимо своей долговечности, наши трубы разработаны в соответствии с международными стандартами безопасности и экологии. Они проходят тщательные испытания, чтобы гарантировать их способность выдерживать самые суровые условия, включая высокое давление и коррозионные вещества. Это делает их идеальными для использования как в наземных, так и в морских нефтегазовых проектах.",
      ],
    },
    slug: "oil-and-gas", // Ensure the slug is in the correct format
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
    details: {
      en: [
        "Our pipes are used for structural columns, fire sprinkler systems, HVAC systems, plumbing networks, and electrical conduits. They meet the highest safety standards for construction projects. With their exceptional strength-to-weight ratio, they provide robust support in high-rise buildings, bridges, and industrial facilities.",
        "Our construction pipes are also designed for ease of installation and maintenance. They are lightweight yet strong, making them ideal for use in large-scale construction projects. Whether it's for residential, commercial, or industrial applications, our pipes deliver unmatched performance and reliability.",
      ],
      ru: [
        "Наши трубы используются для строительных колонн, систем пожаротушения, систем отопления, вентиляции и кондиционирования, водопроводных сетей и электрических каналов. Они соответствуют самым высоким стандартам безопасности для строительных проектов. Благодаря их исключительному соотношению прочности и веса, они обеспечивают надежную поддержку в высотных зданиях, мостах и промышленных объектах.",
        "Наши строительные трубы также разработаны для удобства монтажа и обслуживания. Они легкие, но прочные, что делает их идеальными для использования в крупномасштабных строительных проектах. Независимо от того, предназначены ли они для жилых, коммерческих или промышленных применений, наши трубы обеспечивают непревзойденную производительность и надежность.",
      ],
    },
    slug: "construction", // Ensure the slug is in the correct format
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
    details: {
      en: [
        "We offer pipes designed to withstand harsh chemical environments, ensuring safety in chemical transport lines, storage tank connections, and pressure vessels. These pipes are manufactured using specialized alloys that resist corrosion, oxidation, and abrasion.",
        "Our chemical processing pipes are also designed for easy cleaning and maintenance, reducing downtime and operational costs. They are ideal for use in industries such as pharmaceuticals, petrochemicals, and food processing, where hygiene and safety are paramount.",
      ],
      ru: [
        "Мы предлагаем трубы, разработанные для работы в агрессивных химических средах, обеспечивая безопасность в линиях транспортировки химикатов, соединениях резервуаров для хранения и сосудах под давлением. Эти трубы изготавливаются из специализированных сплавов, устойчивых к коррозии, окислению и истиранию.",
        "Наши трубы для химической обработки также разработаны для легкой очистки и обслуживания, что сокращает время простоя и эксплуатационные расходы. Они идеально подходят для использования в таких отраслях, как фармацевтика, нефтехимия и пищевая промышленность, где гигиена и безопасность имеют первостепенное значение.",
      ],
    },
    slug: "chemical-processing", // Ensure the slug is in the correct format
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
    details: {
      en: [
        "They are commonly used in boiler tubes, steam lines, cooling systems, and exhaust systems for both conventional and renewable energy plants. These pipes are designed to withstand extreme heat, pressure, and chemical exposure, ensuring reliable performance in power plants.",
        "Our power generation pipes are also engineered for energy efficiency. They help reduce heat loss and improve the overall efficiency of power plants, contributing to a more sustainable energy future. Whether it's for coal, gas, nuclear, or renewable energy plants, our pipes deliver exceptional performance.",
      ],
      ru: [
        "Они широко используются в котловых трубах, паровых линиях, системах охлаждения и выхлопных системах как для традиционных, так и для возобновляемых электростанций. Эти трубы разработаны для работы в условиях экстремальных температур, давления и химического воздействия, обеспечивая надежную работу электростанций.",
        "Наши трубы для генерации энергии также разработаны для повышения энергоэффективности. Они помогают снизить потери тепла и повысить общую эффективность электростанций, способствуя более устойчивому энергетическому будущему. Независимо от того, предназначены ли они для угольных, газовых, атомных или возобновляемых электростанций, наши трубы обеспечивают исключительную производительность.",
      ],
    },
    slug: "power-generation", // Ensure the slug is in the correct format
  },
];

export default function ApplicationDetailsPage({ params }) {
  const { language } = useLanguage(); // Use the useLanguage hook
  const { slug } = React.use(params);

  console.log("Slug from URL:", slug); // Debug the slug value

  // Find the matching application
  const app = applicationData.find((item) => item.slug === slug);

  if (!app) {
    return <p className="text-center text-red-500 text-2xl">Application not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title and Image Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {app.title[language]}
        </h1>
        <div className="flex justify-center">
          <Image
            src={app.image}
            alt={app.title[language]}
            width={400}
            height={300}
            className="rounded-lg"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.jpg";
            }}
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-gray-600 text-xl">
          {app.description[language]}
        </p>
      </div>

      {/* Details Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          {language === "en" ? "Details" : "Детали"}
        </h2>
        <div className="space-y-4">
          {app.details[language]?.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}