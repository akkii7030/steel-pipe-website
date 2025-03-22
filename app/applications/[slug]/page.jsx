"use client";

import Image from "next/image";
import React from "react";

const applicationData = [
  {
    title: "Oil and Gas",
    image: "/Oil_Gas.jpg",
    description:
      "Our high-pressure pipes are engineered to withstand the demanding conditions of oil and gas extraction, processing, and transportation.",
    details: [
      "Our pipes are widely used in offshore platforms, refineries, gas processing plants, pipeline networks, and storage facilities. They are known for their high durability and pressure resistance. These pipes provide excellent performance in extreme temperatures and pressures, ensuring safe and efficient fluid transport. Additionally, their corrosion-resistant properties reduce maintenance costs and extend service life, making them a reliable choice for critical oil and gas operations.",
      "In addition to their durability, our pipes are designed to meet international safety and environmental standards. They are rigorously tested to ensure they can withstand the harshest conditions, including high-pressure environments and corrosive substances. This makes them ideal for use in both onshore and offshore oil and gas projects.",
    ],
  },
  {
    title: "Construction",
    image: "/Constructions.jpg",
    description:
      "Steel pipes form the backbone of modern construction, providing structural support and utility conveyance.",
    details: [
      "Our pipes are used for structural columns, fire sprinkler systems, HVAC systems, plumbing networks, and electrical conduits. They meet the highest safety standards for construction projects. With their exceptional strength-to-weight ratio, they provide robust support in high-rise buildings, bridges, and industrial facilities.",
      "Our construction pipes are also designed for ease of installation and maintenance. They are lightweight yet strong, making them ideal for use in large-scale construction projects. Whether it's for residential, commercial, or industrial applications, our pipes deliver unmatched performance and reliability.",
    ],
  },
  {
    title: "Chemical Processing",
    image: "/Chemical.jpg",
    description:
      "Corrosion-resistant pipes ensure safe transport of chemicals in processing facilities.",
    details: [
      "We offer pipes designed to withstand harsh chemical environments, ensuring safety in chemical transport lines, storage tank connections, and pressure vessels. These pipes are manufactured using specialized alloys that resist corrosion, oxidation, and abrasion.",
      "Our chemical processing pipes are also designed for easy cleaning and maintenance, reducing downtime and operational costs. They are ideal for use in industries such as pharmaceuticals, petrochemicals, and food processing, where hygiene and safety are paramount.",
    ],
  },
  {
    title: "Power Generation",
    image: "/Power.jpg",
    description:
      "Our pipes play a crucial role in power generation infrastructure.",
    details: [
      "They are commonly used in boiler tubes, steam lines, cooling systems, and exhaust systems for both conventional and renewable energy plants. These pipes are designed to withstand extreme heat, pressure, and chemical exposure, ensuring reliable performance in power plants.",
      "Our power generation pipes are also engineered for energy efficiency. They help reduce heat loss and improve the overall efficiency of power plants, contributing to a more sustainable energy future. Whether it's for coal, gas, nuclear, or renewable energy plants, our pipes deliver exceptional performance.",
    ],
  },
];

export default function ApplicationDetailsPage({ params }) {
  // Unwrap the `params` object using React.use()
  const { slug } = React.use(params);

  // Convert slug back to title format
  const title = slug.replace(/-/g, " ");

  // Find the matching application
  const app = applicationData.find(
    (item) => item.title.toLowerCase() === title
  );

  if (!app) {
    return <p className="text-center text-red-500 text-2xl">Application not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title and Image Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{app.title}</h1>
        <div className="flex justify-center">
          <Image
            src={app.image}
            alt={app.title}
            width={400}
            height={300}
            className="rounded-lg"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.jpg";
            }}
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Details</h2>
        <div className="space-y-4">
          {app.details.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}