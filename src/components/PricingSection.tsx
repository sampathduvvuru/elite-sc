import React, { useState } from 'react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const pricingOptions = [
    {
      title: "Prices will be updated soon — stay tuned!"
    },
//     {
//       title: "Pay & Play",
//       price: isAnnual ? "$99" : "$12",
//       period: isAnnual ? "/year" : "/session",
//       features: [
//         "Single court/net session",
//         "Basic equipment rental",
//         "Access to changing rooms",
//         "Online booking",
//         "No membership required"
//       ],
//       cta: "Book Now",
//       popular: false,
//       badminton: true,
//       cricket: true
//     },
//     {
//       title: "Silver Membership",
//       price: isAnnual ? "$599" : "$59",
//       period: isAnnual ? "/year" : "/month",
//       features: [
//         "2 free sessions per week",
//         "10% off additional sessions",
//         "Free equipment rental",
//         "Access to fitness area",
//         "Member-only events"
//       ],
//       cta: "Get Started",
//       popular: true,
//       badminton: true,
//       cricket: true
//     },
//     {
//       title: "Gold Membership",
//       price: isAnnual ? "$999" : "$99",
//       period: isAnnual ? "/year" : "/month",
//       features: [
//         "Unlimited sessions",
//         "Premium equipment provided",
//         "1 coaching session per month",
//         "Full facility access",
//         "Priority booking & VIP events"
//       ],
//       cta: "Go Premium",
//       popular: false,
//       badminton: true,
//       cricket: true
//     },
//     {
//       title: "Badminton Pro",
//       price: isAnnual ? "$799" : "$79",
//       period: isAnnual ? "/year" : "/month",
//       features: [
//         "Unlimited badminton sessions",
//         "Pro-grade rackets available",
//         "Video analysis monthly",
//         "Dedicated court time slots",
//         "Badminton tournaments entry"
//       ],
//       cta: "Choose Plan",
//       popular: false,
//       badminton: true,
//       cricket: false
//     },
//     {
//       title: "Cricket Pro",
//       price: isAnnual ? "$799" : "$79",
//       period: isAnnual ? "/year" : "/month",
//       features: [
//         "Unlimited cricket net sessions",
//         "Bowling machine access",
//         "Performance tracking",
//         "Reserved net time slots",
//         "Cricket league participation"
//       ],
//       cta: "Choose Plan",
//       popular: false,
//       badminton: false,
//       cricket: true
//     }
//   ];

//   return (
//     <section id="pricing" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Membership & Pricing</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
//             Choose from our flexible pricing options to find the perfect plan for your sporting needs.
//           </p>
          
//           <div className="inline-flex items-center p-1 bg-gray-200 rounded-lg mb-8">
//             <button
//               className={`px-4 py-2 rounded-md text-sm font-medium ${
//                 !isAnnual 
//                   ? 'bg-white text-gray-900 shadow-sm' 
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//               onClick={() => setIsAnnual(false)}
//             >
//               Monthly
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md text-sm font-medium ${
//                 isAnnual 
//                   ? 'bg-white text-gray-900 shadow-sm' 
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//               onClick={() => setIsAnnual(true)}
//             >
//               Annual <span className="text-green-600 text-xs font-bold ml-1">Save 20%</span>
//             </button>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {pricingOptions.slice(0, 3).map((option, index) => (
//             <div 
//               key={index} 
//               className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
//                 option.popular ? 'ring-2 ring-blue-500 relative' : ''
//               }`}
//             >
//               {option.popular && (
//                 <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-1/2 rotate-45">
//                   Popular
//                 </div>
//               )}
//               <div className="p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-gray-900">{option.price}</span>
//                   <span className="text-gray-600">{option.period}</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {option.features.map((feature, fIndex) => (
//                     <li key={fIndex} className="flex items-start">
//                       <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <a 
//                   href="#booking" 
//                   className={`block text-center px-6 py-3 rounded-md text-white font-medium transition-colors ${
//                     option.popular 
//                       ? 'bg-blue-600 hover:bg-blue-700' 
//                       : 'bg-gray-800 hover:bg-gray-900'
//                   }`}
//                 >
//                   {option.cta}
//                 </a>
//               </div>
//               <div className="px-8 py-4 bg-gray-50 flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   {option.badminton && (
//                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                       Badminton
//                     </span>
//                   )}
//                   {option.cricket && (
//                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                       Cricket
//                     </span>
//                   )}
//                 </div>
//                 <span className="text-xs text-gray-500">
//                   {isAnnual ? 'Billed annually' : 'Billed monthly'}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//           {pricingOptions.slice(3).map((option, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
//             >
//               <div className="p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-gray-900">{option.price}</span>
//                   <span className="text-gray-600">{option.period}</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {option.features.map((feature, fIndex) => (
//                     <li key={fIndex} className="flex items-start">
//                       <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <a 
//                   href="#booking" 
//                   className="block text-center px-6 py-3 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors"
//                 >
//                   {option.cta}
//                 </a>
//               </div>
//               <div className="px-8 py-4 bg-gray-50 flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   {option.badminton && (
//                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                       Badminton
//                     </span>
//                   )}
//                   {option.cricket && (
//                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                       Cricket
//                     </span>
//                   )}
//                 </div>
//                 <span className="text-xs text-gray-500">
//                   {isAnnual ? 'Billed annually' : 'Billed monthly'}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-12 text-center">
//           <p className="text-gray-600 mb-4">Need a custom plan for your team or organization?</p>
//           <a 
//             href="#contact" 
//             className="inline-block px-6 py-3 bg-transparent border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors text-lg font-medium"
//           >
//             Contact Us for Custom Quotes
//           </a>
//         </div>
//       </div>
//     </section>
//   );
};

export default PricingSection;