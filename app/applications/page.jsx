"use client";

import Image from "next/image";

const applicationData = [
  {
    title: "Oil and Gas",
    image: "/Oil_Gas.jpg",
    description:
      "Our high-pressure pipes are engineered to withstand the demanding conditions of oil and gas extraction, processing, and transportation.",
    details:
      "Our pipes are widely used in offshore platforms, refineries, gas processing plants, pipeline networks, and storage facilities. They are known for their high durability and pressure resistance. These pipes provide excellent performance in extreme temperatures and pressures, ensuring safe and efficient fluid transport. Additionally, their corrosion-resistant properties reduce maintenance costs and extend service life, making them a reliable choice for critical oil and gas operations.",
  },
  {
    title: "Construction",
    image: "/Constructions.jpg",
    description:
      "Steel pipes form the backbone of modern construction, providing structural support and utility conveyance.",
    details:
      "Our pipes are used for structural columns, fire sprinkler systems, HVAC systems, plumbing networks, and electrical conduits. They meet the highest safety standards for construction projects. With their exceptional strength-to-weight ratio, they provide robust support in high-rise buildings, bridges, and industrial facilities.",
  },
  {
    title: "Chemical Processing",
    image: "/Chemical.jpg",
    description:
      "Corrosion-resistant pipes ensure safe transport of chemicals in processing facilities.",
    details:
      "We offer pipes designed to withstand harsh chemical environments, ensuring safety in chemical transport lines, storage tank connections, and pressure vessels. These pipes are manufactured using specialized alloys that resist corrosion, oxidation, and abrasion.",
  },
  {
    title: "Power Generation",
    image: "/Power.jpg",
    description:
      "Our pipes play a crucial role in power generation infrastructure.",
    details:
      "They are commonly used in boiler tubes, steam lines, cooling systems, and exhaust systems for both conventional and renewable energy plants. These pipes are designed to withstand extreme heat, pressure, and chemical exposure, ensuring reliable performance in power plants.",
  },
];

export default function ApplicationDetails() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Applications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {applicationData.map((app, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image with error fallback */}
            <Image
              src={app.image}
              alt={app.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.jpg";
              }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {app.title}
              </h2>
              <p className="text-gray-600 text-lg mb-4">{app.description}</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Details
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {app.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}