import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <CompanyOverview />
      <Facilities />
      <QualityAssurance />
    </div>
  );
}

function CompanyOverview() {
  return (
    <section className="mb-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">About SteelPipe Pro</h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 1985, SteelPipe Pro has grown from a small local manufacturer to a global leader in steel pipe
            production. With over 35 years of experience, we've established ourselves as a trusted partner for
            industries worldwide.
          </p>
          <p className="text-gray-600 mb-4">
            Our commitment to quality, innovation, and customer satisfaction has driven our success and expansion into
            new markets.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide high-quality steel pipe solutions that exceed industry standards and customer expectations,
              while maintaining sustainable practices and fostering innovation.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in steel pipe manufacturing, recognized for excellence, reliability, and
              innovation in every product we deliver.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-100 p-4">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/Manufacturing_pipes.jpg"
              alt="Steel pipe manufacturing facility"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Manufacturing Facilities</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {FacilityCard("/Production.jpg", "Production Plant", "State-of-the-art production lines with advanced technology for precision manufacturing.")}
        {FacilityCard("/Laboratory.jpg", "Quality Control Lab", "Equipped with cutting-edge testing equipment to ensure every product meets our high standards.")}
        {FacilityCard("/Werehouse.jpg", "Warehouse & Logistics", "Efficient storage and distribution systems to ensure timely delivery to our global customers.")}
      </div>

      <p className="text-gray-600">
        Our facilities span over 500,000 square feet across three continents, employing more than 2,000 skilled
        professionals. We continuously invest in upgrading our equipment and training our workforce to maintain our
        position at the forefront of the industry.
      </p>
    </section>
  );
}

function FacilityCard(imageSrc, title, description) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-gray-100 p-4">
      <div className="relative h-64">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 bg-white rounded-lg mt-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function QualityAssurance() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Certifications & Quality Assurance</h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {CertificationCard("/ISO.jpg", "ISO 9001:2015")}
            {CertificationCard("/API-Certificate.png", "API 5L")}
            {CertificationCard("/ASTMC.jpg", "ASTM A53")}
            {CertificationCard("/ISO14001.jpg", "ISO 14001:2015")}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Our Commitment to Quality</h3>
          <p className="text-gray-600 mb-4">
            At SteelPipe Pro, quality is not just a department—it's a mindset that permeates every aspect of our operations.
            Our comprehensive quality management system ensures that each product meets or exceeds industry standards.
          </p>
          <p className="text-gray-600 mb-4">
            We hold numerous international certifications that validate our commitment to quality, safety, and environmental responsibility.
            Our testing procedures include ultrasonic testing, hydrostatic testing, and mechanical property verification.
          </p>
          <p className="text-gray-600">
            Every pipe we manufacture undergoes rigorous inspection before it leaves our facility, giving our customers confidence
            in the reliability and durability of our products.
          </p>
        </div>
      </div>
    </section>
  );
}

function CertificationCard(imageSrc, certificationName) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
      <div className="relative h-20 w-20 mb-3">
        <Image src={imageSrc} alt={certificationName} fill className="object-contain" />
      </div>
      <span className="text-center font-medium">{certificationName}</span>
    </div>
  );
}
