import React from 'react';

const CricketSection = () => {
  const facilities = [
    "4 Professional indoor cricket lanes",
    "State-of-the-art bowling machines",
    "Specialized cricket pitch and flooring",
    "Digital scoreboards and analytics",
    "Equipment rental available on-site",
    "Protective gear for all players"
  ];

  return (
    <section id="cricket" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="assets/cricket.jpg" 
                alt="Indoor Cricket Facility" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md hidden md:block">
                <p className="text-sm font-semibold text-green-700">Professional Training</p>
                <p className="text-xs text-gray-500">Coming Soon</p>
              </div>
              <div className="absolute -top-6 -left-6 bg-green-100 p-4 rounded-full shadow-md hidden md:flex items-center justify-center">
                <p className="text-lg font-bold text-green-700">4<br />Lanes</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premier Indoor Cricket Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Elevate your cricket game with our indoor cricket lanes and practice facilities. Designed for players of all levels, our venue offers the perfect environment to enhance your batting, bowling, and fielding skills.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Cricket Facilities Feature:</h3>
              <ul className="space-y-3 mb-8">
                {facilities.map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-3 w-3 rounded-full bg-green-600"></span>
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
        </div>
      </div>
    </section>
  );
};

export default CricketSection;