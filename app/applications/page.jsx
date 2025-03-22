"use client";

import Image from "next/image";
import Link from "next/link";

const applicationData = [
  {
    title: "Oil & Gas",
    image: "/Oil&Gas.jpg",
    description:
      "Our high-pressure pipes are engineered to withstand the demanding conditions of oil and gas extraction, processing, and transportation.",
    applications: [
      "Offshore platforms",
      "Refineries",
      "Gas processing plants",
      "Pipeline networks",
      "Storage facilities",
    ],
  },
  {
    title: "Construction",
    image: "/Constructions.jpg",
    description:
      "Steel pipes form the backbone of modern construction, providing structural support and utility conveyance.",
    applications: [
      "Structural columns and supports",
      "Fire sprinkler systems",
      "HVAC systems",
      "Plumbing networks",
      "Electrical conduits",
    ],
  },
  {
    title: "Chemical Processing",
    image: "/Chemical.jpg",
    description:
      "Our corrosion-resistant pipes ensure safe and efficient transport of chemicals in processing facilities worldwide.",
    applications: [
      "Chemical transport lines",
      "Processing equipment",
      "Storage tank connections",
      "Heat exchangers",
      "Pressure vessels",
    ],
  },
  {
    title: "Power Generation",
    image: "/Power.jpg",
    description:
      "From conventional power plants to renewable energy facilities, our pipes play a crucial role in power generation infrastructure.",
    applications: [
      "Boiler tubes",
      "Steam lines",
      "Cooling systems",
      "Fuel transport",
      "Exhaust systems",
    ],
  },
];

export default function ApplicationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Applications</h1>
      <p className="text-gray-600 mb-8 text-lg">
        Discover how our steel pipes are used across various industries
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {applicationData.map((app, index) => (
          <ApplicationCard key={index} {...app} />
        ))}
      </div>
    </div>
  );
}

function ApplicationCard({ title, image, description, applications }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <h3 className="text-lg font-medium mb-2 text-gray-700">Key Applications:</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          {applications.map((app, index) => (
            <li key={index}>{app}</li>
          ))}
        </ul>

        {/* Dynamic Link for Learn More */}
        <Link
          href={`/applications/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-blue-600 font-medium flex items-center"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
