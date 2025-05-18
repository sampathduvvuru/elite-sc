import React from 'react';

const BadmintonSection = () => {
  const facilities = [
    "4 Professional-grade courts with maple wood flooring",
    "International standard lighting system",
    "High-quality Yonex nets and posts",
    "Spacious viewing area for spectators",
    // "Video analysis equipment for training sessions",
    "Climate-controlled environment"
  ];

  return (
    <section id="badminton" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                World-Class Badminton Courts
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience the thrill of playing on professional-grade badminton courts designed to international standards. Whether you're a beginner or a seasoned player, our courts provide the perfect playing conditions.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Facilities Include:</h3>
              <ul className="space-y-3 mb-8">
                {facilities.map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-3 w-3 rounded-full bg-blue-600"></span>
                    </span>
                    <span className="text-gray-600">{facility}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-gray-600 italic mb-6">
                Opening Soon - July 2025
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750" 
                alt="Badminton Courts" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md hidden md:block">
                <p className="text-sm font-semibold text-blue-900">Professional coaching available</p>
                <p className="text-xs text-gray-500">For all skill levels</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-blue-100 p-4 rounded-full shadow-md hidden md:flex items-center justify-center">
                <p className="text-lg font-bold text-blue-900">4<br />Courts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadmintonSection;