import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Elite Sports Club</h3>
            <p className="text-gray-400 mb-6">
              Premier destination for badminton and indoor cricket, offering world-class facilities and coaching for players of all levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#badminton" className="text-gray-400 hover:text-white transition-colors">Badminton</a></li>
              <li><a href="#cricket" className="text-gray-400 hover:text-white transition-colors">Cricket</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Membership</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-white transition-colors">Booking</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">123 Sports Street, Sportsville, SP 12345, United States</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">info@elitesportsclub.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>
            <table className="w-full text-gray-400">
              <tbody>
                <tr>
                  <td className="py-2">Monday - Friday</td>
                  <td className="py-2 text-right">6 AM - 11 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Saturday</td>
                  <td className="py-2 text-right">7 AM - 10 PM</td>
                </tr>
                <tr>
                  <td className="py-2">Sunday</td>
                  <td className="py-2 text-right">7 AM - 9 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Elite Sports Club. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;