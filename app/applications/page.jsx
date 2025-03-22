"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const applicationData = [
  {
    title: "Aerospace",
    image: "/aerospace.jpg",
    description:
      "Our precision-engineered pipes are used in aerospace applications, ensuring safety and performance in extreme conditions.",
    details:
      "These pipes are extensively used in aircraft hydraulic systems, fuel transportation lines, and structural components. Designed to withstand high pressure, temperature fluctuations, and corrosive environments, they ensure safety and reliability in critical aerospace applications.",
  },
  {
    title: "Construction",
    image: "/constructions.jpg",
    description:
      "Steel pipes form the backbone of modern construction, providing structural support and utility conveyance.",
    details:
      "Our pipes are used for structural columns, fire sprinkler systems, HVAC systems, plumbing networks, and electrical conduits. They meet the highest safety standards for construction projects. With their exceptional strength-to-weight ratio, they provide robust support in high-rise buildings, bridges, and industrial facilities.",
  },
  {
    title: "Chemical Processing",
    image: "/chemical.jpg",
    description:
      "Corrosion-resistant pipes ensure safe transport of chemicals in processing facilities.",
    details:
      "We offer pipes designed to withstand harsh chemical environments, ensuring safety in chemical transport lines, storage tank connections, and pressure vessels. These pipes are manufactured using specialized alloys that resist corrosion, oxidation, and abrasion.",
  },
  {
    title: "Power Generation",
    image: "/power.jpg",
    description:
      "Our pipes play a crucial role in power generation infrastructure.",
    details:
      "They are commonly used in boiler tubes, steam lines, cooling systems, and exhaust systems for both conventional and renewable energy plants. These pipes are designed to withstand extreme heat, pressure, and chemical exposure, ensuring reliable performance in power plants.",
  },
];

export default function ApplicationDetails() {
  const { slug } = useParams();

  const formatSlug = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const app = applicationData.find((item) => formatSlug(item.title) === slug);

  if (!app) {
    return <p className="text-center text-red-500">Application not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <Image
          src={app.image}
          alt={app.title}
          width={300}
          height={200}
          className="rounded-lg"
          onError={(e) => (e.target.src = "/placeholder.jpg")}
        />
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-8 text-gray-800">{app.title}</h1>
          <p className="text-gray-600 text-xl mb-8">{app.description}</p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Details</h2>
          <p className="text-gray-700 text-xl leading-relaxed">{app.details}</p>
        </div>
      </div>
    </div>
  );
}
