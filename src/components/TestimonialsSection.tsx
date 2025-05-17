import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Badminton Enthusiast",
//       image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
//       quote: "The badminton courts here are absolutely top-notch. I've been to many venues but EliteSportsClub stands out with its professional setup and friendly staff.",
//       rating: 5
//     },
//     {
//       name: "Michael Chen",
//       role: "Cricket Coach",
//       image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
//       quote: "As a cricket coach, I need quality facilities for my students. EliteSportsClub provides everything we need, from bowling machines to video analysis.",
//       rating: 5
//     },
//     {
//       name: "Priya Patel",
//       role: "Silver Member",
//       image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
//       quote: "I joined as a silver member a year ago and it's been worth every penny. The courts are always well-maintained and the booking system is seamless.",
//       rating: 4
//     },
//     {
//       name: "David Wilson",
//       role: "Weekend Player",
//       image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
//       quote: "I come here with friends on weekends for cricket, and we always have a blast. Great facilities, reasonable pricing, and a fun atmosphere.",
//       rating: 5
//     },
//     {
//       name: "Emma Roberts",
//       role: "Professional Badminton Player",
//       image: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
//       quote: "Training at EliteSportsClub has significantly improved my game. The courts meet international standards, and the coaching staff is exceptional.",
//       rating: 5
//     }
  ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextTestimonial();
//     }, 6000);
    
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 150) {
//       nextTestimonial();
//     }

//     if (touchStart - touchEnd < -150) {
//       prevTestimonial();
//     }
//   };

//   const visibleTestimonials = () => {
//     const items = [];
//     for (let i = 0; i < 3; i++) {
//       const index = (currentIndex + i) % testimonials.length;
//       items.push(testimonials[index]);
//     }
//     return items;
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             What Our Members Say
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Don't just take our word for it - hear from our satisfied members about their experiences at EliteSportsClub.
//           </p>
//         </div>
        
//         <div 
//           className="relative" 
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className="hidden lg:grid grid-cols-3 gap-8">
//             {visibleTestimonials().map((testimonial, index) => (
//               <div 
//                 key={index} 
//                 className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 <div className="flex items-center space-x-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star 
//                       key={i} 
//                       className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
//                 <div className="flex items-center">
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name} 
//                     className="h-12 w-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-500">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="lg:hidden">
//             <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
//               <div className="flex items-center space-x-1 mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <Star 
//                     key={i} 
//                     className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
//                   />
//                 ))}
//               </div>
//               <p className="text-gray-600 mb-6 italic">"{testimonials[currentIndex].quote}"</p>
//               <div className="flex items-center">
//                 <img 
//                   src={testimonials[currentIndex].image} 
//                   alt={testimonials[currentIndex].name} 
//                   className="h-12 w-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
//                   <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-center mt-8 space-x-2 lg:hidden">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 className={`h-2 w-2 rounded-full ${
//                   currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
//                 }`}
//                 onClick={() => setCurrentIndex(index)}
//               />
//             ))}
//           </div>
          
//           <button 
//             className="absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none z-10 hidden lg:block"
//             onClick={prevTestimonial}
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-600" />
//           </button>
          
//           <button 
//             className="absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none z-10 hidden lg:block"
//             onClick={nextTestimonial}
//           >
//             <ChevronRight className="h-6 w-6 text-gray-600" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
};

export default TestimonialsSection;