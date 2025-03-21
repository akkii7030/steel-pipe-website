import Image from "next/image"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-lg">Get in touch with our team for inquiries, quotes, or support</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Offices</h2>

            <div className="space-y-6">
              <ContactLocation
                title="Headquarters"
                address="123 Steel Avenue, Industrial District, New York, NY 10001, USA"
                phone="+1 (555) 123-4567"
                email="info@steelpipepro.com"
                hours="Monday - Friday: 8:00 AM - 6:00 PM"
              />

              <ContactLocation
                title="Manufacturing Plant"
                address="456 Factory Road, Manufacturing Zone, Houston, TX 77001, USA"
                phone="+1 (555) 987-6543"
                email="production@steelpipepro.com"
                hours="24/7 Operation"
              />

              <ContactLocation
                title="International Office"
                address="789 Global Street, Business Park, London, EC1A 1BB, UK"
                phone="+44 20 1234 5678"
                email="international@steelpipepro.com"
                hours="Monday - Friday: 9:00 AM - 5:00 PM"
              />
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Company.jpg"
              alt="Company headquarters"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Find Us</h2>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          {/* This would be replaced with an actual Google Maps integration */}
          <Image src="/Map.jpg" alt="Map location" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

function ContactLocation({ title, address, phone, email, hours }) {
  return (
    <div className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
      <h3 className="font-semibold text-lg mb-3 text-gray-800">{title}</h3>

      <div className="space-y-2">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-gray-600">{address}</p>
        </div>

        <div className="flex items-center">
          <Phone className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
          <p className="text-gray-600">{phone}</p>
        </div>

        <div className="flex items-center">
          <Mail className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
          <p className="text-gray-600">{email}</p>
        </div>

        <div className="flex items-center">
          <Clock className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
          <p className="text-gray-600">{hours}</p>
        </div>
      </div>
    </div>
  )
}

