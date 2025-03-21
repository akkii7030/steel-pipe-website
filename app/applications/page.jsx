import Image from "next/image"
import Link from "next/link"

export default function ApplicationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Applications</h1>
      <p className="text-gray-600 mb-8 text-lg">Discover how our steel pipes are used across various industries</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <ApplicationCard
          title="Oil & Gas"
          image="/Oil&Gas.jpg"
          description="Our high-pressure pipes are engineered to withstand the demanding conditions of oil and gas extraction, processing, and transportation."
          applications={[
            "Offshore platforms",
            "Refineries",
            "Gas processing plants",
            "Pipeline networks",
            "Storage facilities",
          ]}
        />

        <ApplicationCard
          title="Construction"
          image="/Constructions.jpg"
          description="Steel pipes form the backbone of modern construction, providing structural support and utility conveyance in buildings of all types."
          applications={[
            "Structural columns and supports",
            "Fire sprinkler systems",
            "HVAC systems",
            "Plumbing networks",
            "Electrical conduits",
          ]}
        />

        <ApplicationCard
          title="Chemical Processing"
          image="/Chemical.jpg"
          description="Our corrosion-resistant pipes ensure safe and efficient transport of chemicals in processing facilities worldwide."
          applications={[
            "Chemical transport lines",
            "Processing equipment",
            "Storage tank connections",
            "Heat exchangers",
            "Pressure vessels",
          ]}
        />

        <ApplicationCard
          title="Power Generation"
          image="/Power.jpg"
          description="From conventional power plants to renewable energy facilities, our pipes play a crucial role in power generation infrastructure."
          applications={["Boiler tubes", "Steam lines", "Cooling systems", "Fuel transport", "Exhaust systems"]}
        />
      </div>

      <h2 className="text-3xl font-bold mb-6 text-gray-800">Case Studies</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CaseStudyCard
          title="Middle East Oil Pipeline Project"
          image="/Middle.jpg"
          description="Supplied 250km of high-pressure line pipes for a major cross-country oil transportation project."
          results="Completed ahead of schedule with zero quality incidents, resulting in a 15% cost saving for the client."
        />

        <CaseStudyCard
          title="European Chemical Plant Upgrade"
          image="/European.jpg"
          description="Provided specialized corrosion-resistant piping for a chemical plant modernization project."
          results="Extended equipment lifespan by 40% and reduced maintenance costs by 25% compared to previous installations."
        />

        <CaseStudyCard
          title="High-Rise Construction in Asia"
          image="/High.jpg"
          description="Delivered structural and utility pipes for a 75-story skyscraper in a seismic zone."
          results="Met stringent safety requirements while reducing installation time by 20% through pre-fabricated assemblies."
        />
      </div>
    </div>
  )
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
            <li key={index} className="mb-1">
              {app}
            </li>
          ))}
        </ul>

        <Link
          href={`/applications/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-blue-600 font-medium flex items-center"
        >
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function CaseStudyCard({ title, image, description, results }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>

        <div className="mt-auto">
          <h4 className="font-medium text-gray-700 mb-1">Results:</h4>
          <p className="text-gray-600">{results}</p>
        </div>
      </div>
    </div>
  )
}

