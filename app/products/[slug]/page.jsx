"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";

// Product Data
const products = [
  {
    slug: "seamless-pipes",
    title: "Seamless Pipes",
    image: "/Stainless_Steel_Seamless_pipes.jpg",
    description: "High-performance seamless pipes for critical applications requiring superior strength and durability.",
    details: "Seamless pipes are manufactured using an extrusion process and are ideal for high-pressure environments. They are widely used in oil and gas, chemical processing, and power generation industries due to their ability to withstand extreme temperatures and pressures. Additionally, their smooth interior surface ensures efficient fluid flow, reducing friction and improving overall operational efficiency. These pipes are available in a range of sizes and materials to suit specific application requirements, providing unparalleled reliability and longevity.",
  },
  {
    slug: "erw-pipes",
    title: "ERW Pipes",
    image: "/ERW_Pipe.jpg",
    description: "Electric Resistance Welded pipes offering excellent uniformity and cost-effectiveness.",
    details: "ERW pipes are commonly used in construction and transportation of fluids and gases. They are manufactured using high-frequency electrical currents to weld steel plates together, creating a strong and consistent seam. These pipes are ideal for structural applications such as building frames, scaffolding, and fencing. Additionally, their cost-effective production process makes them a preferred choice for large-scale infrastructure projects, including water pipelines and sewage systems. ERW pipes are available in a variety of thicknesses and diameters to meet diverse project needs.",
  },
  {
    slug: "welded-pipes",
    title: "Welded Pipes",
    image: "/Welded.jpg",
    description: "Precision-engineered welded pipes for various industrial applications.",
    details: "Welded pipes are fabricated using a welding process, ensuring high strength and durability. These pipes are extensively used in industries such as petrochemical, construction, and marine engineering. Their resistance to corrosion and mechanical stress makes them suitable for transporting fluids, gases, and other materials over long distances. Welded pipes are often coated or galvanized for additional protection against environmental factors. Available in both straight and spiral forms, they offer versatility and reliability for a wide range of industrial purposes.",
  },
  {
    slug: "duplex-pipes",
    title: "Duplex Pipes",
    image: "/Duplex.jpg",
    description: "Corrosion-resistant duplex steel pipes for demanding environments.",
    details: "Duplex pipes provide excellent corrosion resistance and high mechanical strength. Composed of a balanced mixture of austenitic and ferritic stainless steel, these pipes are ideal for harsh environments like offshore oil rigs, chemical plants, and desalination facilities. Their superior resistance to stress corrosion cracking, pitting, and crevice corrosion ensures longevity and reliability. Duplex pipes are also known for their higher tensile strength compared to standard stainless steel, reducing material thickness and weight in construction projects. Their cost-effectiveness and durability make them a preferred choice for critical applications.",
  },
];

// Product Details Page Component
export default function ProductDetailPage() {
  const { slug } = useParams();

  // Find the product based on slug
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound(); // Return 404 if no product is found
  }

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={150}
          className="rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-8">{product.title}</h1>
          <p className="text-gray-600 text-xl mb-8">{product.description}</p>
          <p className="text-gray-700 text-2xl leading-relaxed">{product.details}</p>
          <button
            onClick={handleGoBack}
            className="mt-8 px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
