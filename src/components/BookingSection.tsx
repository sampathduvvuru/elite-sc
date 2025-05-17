import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const BookingSection = () => {
  return (
    <section id="booking" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Opening Soon!</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            We're excited to announce that Elite Sports Club will be opening its doors in July 2025. 
            Get ready to experience our world-class badminton courts and cricket lanes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-blue-800 to-green-700 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Facility Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Opening Hours (From July 2025)</h4>
                    <p className="text-blue-200">Monday - Friday: 6 AM - 11 PM</p>
                    <p className="text-blue-200">Saturday - Sunday: 7 AM - 10 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Facilities</h4>
                    <p className="text-blue-200">4 Professional Badminton Courts</p>
                    <p className="text-blue-200">4 Indoor Cricket Lanes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Pre-Opening Enquiries</h4>
                    <p className="text-blue-200">
                      For membership and booking inquiries, please contact us using the form below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Register Your Interest</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="interest">
                    I'm interested in:
                  </label>
                  <select 
                    id="interest" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="badminton">Badminton</option>
                    <option value="cricket">Cricket</option>
                    <option value="both">Both Sports</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Any specific questions or requirements?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-700 to-green-600 text-white font-medium rounded-md hover:from-blue-800 hover:to-green-700 transition-colors"
                >
                  Submit Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;