import Hero from "@/components/home/hero"
import Introduction from "@/components/home/introduction"
import ProductHighlights from "@/components/home/product-highlights"
import Certifications from "@/components/home/certifications"
import Testimonials from "@/components/home/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Introduction />
      <ProductHighlights />
      <Certifications />
      <Testimonials />
    </div>
  )
}

