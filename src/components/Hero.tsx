import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080')` 
      }}
    >
      <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white py-2 text-center">
        <p className="text-lg font-semibold">Opening Soon - July 2025</p>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Premier <span className="text-green-400">Badminton</span> & <span className="text-blue-400">Cricket</span> Venue
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Experience world-class facilities for both indoor cricket and badminton, all under one roof.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#about" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors text-lg font-medium"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-white">
          <ChevronDown className="h-10 w-10" />
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;