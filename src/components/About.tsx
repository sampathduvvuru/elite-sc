import React from 'react';
import { Users, Clock, Award, Calendar } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-900" />,
      title: "Professional Coaching",
      description: "Learn from our certified professionals with years of experience in training champions."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-900" />,
      title: "Flexible Hours",
      description: "Open 7 days a week from 6 AM to 11 PM to accommodate your busy schedule."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-900" />,
      title: "Top-tier Equipment",
      description: "We provide high-quality equipment that meets international standards."
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-900" />,
      title: "Regular Tournaments",
      description: "Participate in our monthly tournaments and compete with the best players."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose EliteSportsClub?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art facilities and professional services make us the top choice for both amateur and professional players.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gray-50 rounded-xl overflow-hidden shadow-md">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3659883/pexels-photo-3659883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750" 
                alt="Our Facilities" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 mb-6">
                  Founded in 2018, EliteSportsClub was born from a passion for badminton and cricket. We saw a need for a premium venue where enthusiasts could play, train, and compete in world-class facilities.
                </p>
                <p className="text-gray-600 mb-6">
                  Over the years, we've grown to become the preferred destination for sports lovers, hosting numerous tournaments and helping players develop their skills through our coaching programs.
                </p>
                <p className="text-gray-600">
                  Our mission is to provide an exceptional sporting experience in a welcoming environment that caters to players of all skill levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;