// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Quote } from "lucide-react";

// const testimonials = [
//   {
//     text: "Belleza Beauty School gave me the confidence to start my beauty career. The training is practical, the environment is friendly, and the trainers guide every student properly.",
//     author: "Belleza Graduate",
//     // tag: "Makeup Artist",
//   },
//   {
//     text: "Before joining Belleza, I was a beginner. Now I feel confident in makeup, hair, and client handling because of regular practice and trainer support.",
//     author: "Belleza Graduate",
//     // tag: "Professional Stylist",
//   },
//   {
//     text: "Live model practice and portfolio support helped me understand real client work. Belleza is a great place for students who want to become professionals.",
//     author: "Belleza Graduate",
//     // tag: "Beauty Expert",
//   },
// ];

// const StudentExperience = () => {
//   const [index, setIndex] = useState(0);

//   // Auto-change logic every 6 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section
//       className="w-full sm:w-1/2 py-20 px-6 bg-primary relative overflow-hidden sm:min-h-120 flex items-center"
//       id="testimony"
//     >
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full -mr-20 -mt-20" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full -ml-20 -mb-20" />

//       <div className="max-w-5xl mx-auto w-full relative z-10">
//         {/* Section Header */}
//         <div className="flex flex-col items-center mb-12 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
//           >
//             Student Experience
//           </motion.div>
//           <h2 className="text-light text-3xl md:text-5xl font-bold tracking-tight">
//             Voices of{" "}
//             <span className="italic font-serif text-accent">Confidence</span>
//           </h2>
//         </div>

//         <div className="relative h-80 md:h-75">
//           {/* Huge Background Quote Mark */}
//           <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10">
//             <Quote className="w-40 h-40 md:w-64 md:h-64 text-accent fill-accent" />
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 1.05, y: -20 }}
//               transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//               className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-20"
//             >
//               <p className="text-light text-md md:text-xl font-medium leading-relaxed mb-8 italic">
//                 "{testimonials[index].text}"
//               </p>

//               <div className="flex flex-col items-center">
//                 <span className="text-accent font-bold tracking-widest uppercase text-sm mb-1">
//                   — {testimonials[index].author}
//                 </span>
//                 {/* <span className="text-light text-sm uppercase tracking-tighter">
//                   {testimonials[index].tag}
//                 </span> */}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Custom Progress/Auto-Change Indicators */}
//         <div className="flex justify-center items-center gap-4 mt-18">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className="relative h-1 transition-all duration-500 rounded-full overflow-hidden"
//               style={{ width: i === index ? "48px" : "16px" }}
//             >
//               {/* Background of the dot/bar */}
//               <div className="absolute inset-0 bg-light" />

//               {/* Active Fill with animation */}
//               {i === index && (
//                 <motion.div
//                   initial={{ x: "-100%" }}
//                   animate={{ x: "0%" }}
//                   transition={{ duration: 6, ease: "linear" }}
//                   className="absolute inset-0 bg-secondary"
//                 />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudentExperience;

import { motion } from "framer-motion";
import { Quote, UserCircle2 } from "lucide-react";

const StudentExperience = () => {
  const reviews = [
    {
      text: "“Belleza helped me learn makeup and beauty skills in a practical way. The trainers explain everything clearly and guide us during practice.”",
    },
    {
      text: "“I joined as a beginner, but now I feel confident because of regular practice, live model sessions, and trainer support.”",
    },
    {
      text: "“The academy helped me understand not only makeup techniques but also client handling and portfolio building.”",
    },
  ];

  return (
    <section className="sm:py-24 px-6 bg-light" id="testimony">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">
              Student <span className="text-secondary italic">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-primary mt-4" />
          </motion.div>

          <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">
            Real Stories from our Rudrapur Center
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group h-full"
            >
              <div className="absolute -top-4 -left-2 z-10 p-3 bg-accent rounded-xl shadow-lg group-hover:-rotate-12 transition-transform duration-300">
                <Quote size={20} className="text-primary fill-primary" />
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-primary shadow-sm hover:shadow-2xl hover:shadow-primary transition-all duration-500 h-full flex flex-col justify-between">
                <p className="text-primary font-medium leading-relaxed italic mb-8">
                  {review.text}
                </p>

                <div className="flex items-center gap-4 border-t border-primary pt-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary/20">
                    <UserCircle2 size={32} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary font-black text-sm uppercase tracking-wider">
                      Verified Student
                    </p>
                    <p className="text-secondary text-[10px] font-bold uppercase tracking-widest">
                      Belleza Alumni
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentExperience;
