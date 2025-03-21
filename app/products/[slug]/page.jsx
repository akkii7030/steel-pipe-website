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
    details: "Seamless pipes are manufactured using an extrusion process and are ideal for high-pressure environments.",
  },
  {
    slug: "erw-pipes",
    title: "ERW Pipes",
    image: "/ERW_Pipe.jpg",
    description: "Electric Resistance Welded pipes offering excellent uniformity and cost-effectiveness.",
    details: "ERW pipes are commonly used in construction and transportation of fluids and gases.",
  },
  {
    slug: "welded-pipes",
    title: "Welded Pipes",
    image: "/Welded.jpg",
    description: "Precision-engineered welded pipes for various industrial applications.",
    details: "Welded pipes are fabricated using a welding process, ensuring high strength and durability.",
  },
  {
    slug: "duplex-pipes",
    title: "Duplex Pipes",
    image: "/Duplex.jpg",
    description: "Corrosion-resistant duplex steel pipes for demanding environments.",
    details: "Duplex pipes provide excellent corrosion resistance and high mechanical strength.",
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
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <Image src={product.image} alt={product.title} width={600} height={400} className="rounded-lg mb-8" />
      <p className="text-gray-600 mb-6">{product.description}</p>
      <p className="text-gray-700">{product.details}</p>
      <button
        onClick={handleGoBack}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Go Back
      </button>
    </div>
  );
}
