"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const applicationData = [
  {
    title: "Oil & Gas",
    image: "/Oil&Gas.jpg",
    description:
      "Our high-pressure pipes are engineered to withstand the demanding conditions of oil and gas extraction, processing, and transportation.",
    details:
      "Our pipes are widely used in offshore platforms, refineries, gas processing plants, pipeline networks, and storage facilities. They are known for their high durability and pressure resistance. These pipes provide excellent performance in extreme temperatures and pressures, ensuring safe and efficient fluid transport. Additionally, their corrosion-resistant properties reduce maintenance costs and extend service life, making them a reliable choice for critical oil and gas operations. Their seamless construction also minimizes the risk of leaks, contributing to the safety and efficiency of operations in harsh environments.",
  },
  {
    title: "Construction",
    image: "/Constructions.jpg",
    description:
      "Steel pipes form the backbone of modern construction, providing structural support and utility conveyance.",
    details:
      "Our pipes are used for structural columns, fire sprinkler systems, HVAC systems, plumbing networks, and electrical conduits. They meet the highest safety standards for construction projects. With their exceptional strength-to-weight ratio, they provide robust support in high-rise buildings, bridges, and industrial facilities. Their resistance to seismic activity and extreme weather makes them an excellent choice for infrastructure projects in challenging environments. Additionally, their adaptability to prefabrication methods accelerates construction timelines and minimizes waste on-site.",
  },
  {
    title: "Chemical Processing",
    image: "/Chemical.jpg",
    description:
      "Corrosion-resistant pipes ensure safe transport of chemicals in processing facilities.",
    details:
      "We offer pipes designed to withstand harsh chemical environments, ensuring safety in chemical transport lines, storage tank connections, and pressure vessels. These pipes are manufactured using specialized alloys that resist corrosion, oxidation, and abrasion. Their seamless construction eliminates weak points, providing maximum strength for high-pressure applications. Additionally, their long service life reduces downtime and operational costs in chemical processing plants. Advanced testing and quality control processes ensure that our pipes meet stringent industry standards, providing enhanced reliability.",
  },
  {
    title: "Power Generation",
    image: "/Power.jpg",
    description:
      "Our pipes play a crucial role in power generation infrastructure.",
    details:
      "They are commonly used in boiler tubes, steam lines, cooling systems, and exhaust systems for both conventional and renewable energy plants. These pipes are designed to withstand extreme heat, pressure, and chemical exposure, ensuring reliable performance in power plants. Their exceptional thermal conductivity enhances energy efficiency, while their corrosion-resistant properties ensure durability in demanding environments. Our pipes contribute to maintaining continuous and safe power generation operations. We also offer customization options to meet the specific requirements of nuclear, solar, wind, and hydroelectric plants, ensuring optimal performance across diverse energy sectors.",
  },
];

export default function ApplicationDetails() {
  const { slug } = useParams();

  // Clean slug to match special characters like &
  const app = applicationData.find(
    (item) =>
      item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === slug
  );

  if (!app) {
    return <p className="text-center text-red-500">Application not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <Image
          src={app.image}
          alt={app.title}
          width={150}
          height={100}
          className="rounded-lg"
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
