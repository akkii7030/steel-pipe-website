"use client";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    slug: "seamless-pipes",
    title: "Seamless Pipes",
    image: "/Stainless_Steel_Seamless_pipes.jpg",
    description: "High-performance seamless pipes for critical applications requiring superior strength and durability.",
  },
  {
    slug: "erw-pipes",
    title: "ERW Pipes",
    image: "/ERW_Pipe.jpg",
    description: "Electric Resistance Welded pipes offering excellent uniformity and cost-effectiveness.",
  },
  {
    slug: "welded-pipes",
    title: "Welded Pipes",
    image: "/Welded.jpg",
    description: "Precision-engineered welded pipes for various industrial applications.",
  },
  {
    slug: "duplex-pipes",
    title: "Duplex Pipes",
    image: "/Duplex.jpg",
    description: "Corrosion-resistant duplex steel pipes for demanding environments.",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48">
                <Image src={product.image} alt={product.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-blue-600 mt-4">View Details →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
