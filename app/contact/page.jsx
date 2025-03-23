"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-lg">Get in touch with our team for inquiries, quotes, or support</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Offices</h2>

            <div className="space-y-6">
              {/* Updated Location */}
              <ContactLocation
                title="Imperio Railing Systems"
                address="1, Aman Chambers, New Queens Rd, Charni Road, Mumbai, Maharashtra 400004"
                phone="+91 98765 43210"
                email="info@imperiorailing.com"
                hours="Monday - Saturday: 9:00 AM - 7:00 PM"
              />

              {/* Manufacturing Plant */}
              <ContactLocation
                title="Manufacturing Plant"
                address="456 Factory Road, Manufacturing Zone, Houston, TX 77001, USA"
                phone="+1 (555) 987-6543"
                email="production@steelpipepro.com"
                hours="24/7 Operation"
              />

              {/* International Office */}
              <ContactLocation
                title="International Office"
                address="789 Global Street, Business Park, London, EC1A 1BB, UK"
                phone="+44 20 1234 5678"
                email="international@steelpipepro.com"
                hours="Monday - Friday: 9:00 AM - 5:00 PM"
              />
            </div>
          </div>

          {/* Company Image */}
          {isClient && (
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100">
              <Image
                src="/Company.jpg"
                alt="Company headquarters"
                fill
                className="object-cover"
                priority
                onError={(e) => console.error("Failed to load image:", e)}
              />
            </div>
          )}
        </div>

        {/* Contact Form and Map */}
        <div>
          {/* Contact Form */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Google Map with Updated Location */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Find Us</h2>
            {isClient && (
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6740522729833!2d72.8157516150113!3d18.952796200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3f89e16eb3%3A0x8e1f54efb3adbb6e!2sImperio%20Railing%20Systems%2C%20Aman%20Chambers%2C%20New%20Queens%20Rd%2C%20Charni%20Road%2C%20Mumbai%2C%20Maharashtra%20400004!5e0!3m2!1sen!2sin!4v1710923472345"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
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
        {/* Address */}
        <div className="flex items-start cursor-pointer hover:text-blue-600 transition-colors duration-200">
          <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-gray-600">{address}</p>
        </div>

        {/* Phone */}
        <div className="flex items-center cursor-pointer hover:text-blue-600 transition-colors duration-200">
          <Phone className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
          <p className="text-gray-600">{phone}</p>
        </div>

        {/* Email */}
        <div className="flex items-center cursor-pointer hover:text-blue-600 transition-colors duration-200">
          <Mail className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
          <p className="text-gray-600">{email}</p>
        </div>

        {/* Working Hours */}
        <div className="flex items-center cursor-pointer hover:text-blue-600 transition-colors duration-200">
          <Clock className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
          <p className="text-gray-600">{hours}</p>
        </div>
      </div>
    </div>
  );
}
