import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
  const contactItems = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Our Location",
      details: [
        "7625 New Boyd Rd",
        "Suwanee, GA 30024",
        "United States"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone Numbers",
      details: [
        "Main: (678) 678-5678",
        // "Bookings: (555) 987-6543",
        // "Support: (555) 345-6789"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Addresses",
      details: [
        "info@EliteSportsClub.com",
        "bookings@EliteSportsClub.com",
        "support@EliteSportsClub.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Opening Hours",
      details: [
        "OPENING SOON"
        // "Monday - Friday: 6 AM - 11 PM",
        // "Saturday: 7 AM - 10 PM",
        // "Sunday: 7 AM - 9 PM"
      ]
    }
  ];

  const socialMedia = [
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", url: "#" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", url: "#" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need more information about our services? Reach out to us using any of the contact methods below.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-full">
                {/* <iframe 
                  title="Location Map"
                  src="https://www.google.com/maps/place/7625+New+Boyd+Rd,+Suwanee,+GA+30024/@34.0681335,-84.1538084,876m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88f5990533ca4cd1:0xde169c77437f28f4!8m2!3d34.0681335!4d-84.1538084!16s%2Fg%2F11vpz91c6h?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" 
                  className="w-full h-full min-h-[300px]" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe> */}
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <ul className="space-y-1">
                        {item.details.map((detail, dIndex) => (
                          <li key={dIndex} className="text-gray-600">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      className="flex items-center justify-center h-10 w-10 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact-email">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="contact-subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contact-message">
                    Your Message
                  </label>
                  <textarea 
                    id="contact-message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;