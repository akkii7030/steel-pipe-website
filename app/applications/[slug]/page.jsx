import { useRouter } from "next/router";

const applicationData = {
  "aerospace": {
    title: "Aerospace",
    description:
      "Our precision-engineered pipes are used in aerospace applications, ensuring safety and performance in extreme conditions.",
    details: "Detailed insights into how steel pipes support aerospace innovations.",
  },
  "construction": {
    title: "Construction",
    description:
      "Steel pipes araejkwjkesnew form the backbone of modern construction, providing structural support and utility conveyance.",
    details: "Detailed insights into steel pipe applications in construction.",
  },
  "chemical-processing": {
    title: "Chemical Processing",
    description:
      "Our corrosion-resistant pipes ensure safe and efficient transport of chemicals in processing facilities worldwide.",
    details: "How chemical-resistant pipes improve safety and efficiency.",
  },
  "power-generation": {
    title: "Power Generation",
    description:
      "From conventional power plants to renewable energy facilities, our pipes play a crucial role in power generation infrastructure.",
    details: "How steel pipes contribute to power generation facilities.",
  },
};

export default function ApplicationDetail() {
  const router = useRouter();
  const { application } = router.query;

  if (!application || !applicationData[application]) {
    return <h1 className="text-center text-red-600 text-2xl">Application Not Found</h1>;
  }

  const { title, description, details } = applicationData[application];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">{title}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-800">{details}</p>
    </div>
  );
}
