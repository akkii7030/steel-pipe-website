"use client";

import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-lg">Get in touch with our team for inquiries, quotes, or support</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information Section */}
        <div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
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
        </div>

        {/* Contact Form and Map Section */}
        <div>
          {/* Contact Form Section */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Google Maps Live Location Section */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Find Us</h2>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30218.18739496333!2d72.81015111562501!3d18.952796200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3f89e16eb3%3A0x8e1f54efb3adbb6e!2sGirgaon%20Chowpatty!5e0!3m2!1sen!2sin!4v1710923472345"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Location Component
function ContactLocation({ title, address, phone, email, hours }) {
  return (
    <div className="border border-gray-200 bg-gray-50 p-4 rounded-lg shadow-md">
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
  );
}
