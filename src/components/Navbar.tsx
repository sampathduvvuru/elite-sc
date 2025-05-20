import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className={`font-bold text-2xl ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            Elite Sports Club
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'badminton', 'cricket', 'pricing', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`font-medium capitalize hover:text-blue-500 transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {section}
              </a>
            ))}
            <a
              href="#booking"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu (outside header) */}
      {isOpen && (
        <div className="md:hidden bg-white fixed top-[80px] w-full z-40 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['home', 'badminton', 'cricket', 'pricing', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-800 hover:text-blue-500 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-center"
            >
              Book Now
            </a>

            {/* Contact Info */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">7625 New Boyd Rd, Suwanee GA 30024</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 mt-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (678) 678-5678</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;




















// import React, { useState, useEffect } from 'react';
// import { Menu, X, MapPin, Phone } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md py-6' : 'bg-transparent py-6'  
//       }`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <h1 className={`font-bold text-2xl ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
//             Elite Sports Club
//           </h1>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           <a 
//             href="#home" 
//             className={`font-medium hover:text-blue-500 transition-colors ${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             }`}
//           >
//             Home
//           </a>
//           <a 
//             href="#badminton" 
//             className={`font-medium hover:text-blue-500 transition-colors ${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             }`}
//           >
//             Badminton
//           </a>
//           <a 
//             href="#cricket" 
//             className={`font-medium hover:text-blue-500 transition-colors ${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             }`}
//           >
//             Cricket
//           </a>
//           <a 
//             href="#pricing" 
//             className={`font-medium hover:text-blue-500 transition-colors ${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             }`}
//           >
//             Pricing
//           </a>
//           <a 
//             href="#contact" 
//             className={`font-medium hover:text-blue-500 transition-colors ${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             }`}
//           >
//             Contact
//           </a>
//           <a 
//             href="#booking" 
//             className={`px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors`}
//           >
//             Book Now
//           </a>
//         </nav>

//         {/* Mobile Navigation Button */}
//         <button 
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
//           ) : (
//             <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
//           )}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div 
//           className={`md:hidden bg-white absolute w-full left-0 top-full shadow-lg transition-all duration-300 transform ${
//             isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'  
//         }`}
//       >
//         <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//           <a 
//             href="#home" 
//             className="font-medium text-gray-800 hover:text-blue-500 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </a>
//           <a 
//             href="#badminton" 
//             className="font-medium text-gray-800 hover:text-blue-500 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Badminton
//           </a>
//           <a 
//             href="#cricket" 
//             className="font-medium text-gray-800 hover:text-blue-500 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Cricket
//           </a>
//           <a 
//             href="#pricing" 
//             className="font-medium text-gray-800 hover:text-blue-500 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Pricing
//           </a>
//           <a 
//             href="#contact" 
//             className="font-medium text-gray-800 hover:text-blue-500 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </a>
//           <a 
//             href="#booking" 
//             className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-center"
//             onClick={() => setIsOpen(false)}
//           >
//             Book Now
//           </a>
          
//           {/* Quick Contact Info */}
//           <div className="pt-4 border-t border-gray-200">
//             <div className="flex items-center space-x-2 text-gray-600">
//               <MapPin className="h-4 w-4" />
//               <span className="text-sm">7625 New Boyd Rd, Suwanee GA 30024</span>
//             </div>
//             <div className="flex items-center space-x-2 text-gray-600 mt-2">
//               <Phone className="h-4 w-4" />
//               <span className="text-sm">+1 (678) 678-5678</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;