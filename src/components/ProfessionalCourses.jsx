// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CheckCircle2, Briefcase, GraduationCap } from "lucide-react";
// import courseData from "../seeds/professionalCourses";

// // 1. Reusable Course Card Component
// const CourseCard = ({ title, description, learningPoints, careerOptions }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -20 }}
//       className="bg-light rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 border border-primary flex flex-col md:flex-row"
//     >
//       {/* Visual Banner Side */}
//       <div className="md:w-1/3 bg-primary relative min-h-62.5 flex items-center justify-center p-8">
//         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
//         <div className="relative z-10 text-center">
//           <GraduationCap className="text-accent w-12 h-12 mx-auto mb-4" />
//           <h3 className="text-light text-3xl font-bold tracking-tighter leading-tighter">
//             {title}
//           </h3>
//           <div className="mt-4 inline-block px-4 py-1 rounded-full border border-accent/30 text-accent text-[10px] uppercase tracking-[0.2em]">
//             Professional Track
//           </div>
//         </div>
//       </div>

//       {/* Content Side */}
//       <div className="md:w-2/3 p-8 md:p-12 space-y-8">
//         <div>
//           <p className="text-secondary text-lg leading-relaxed font-semibold">
//             "{description}"
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Learning Points */}
//           <div>
//             <h4 className="text-secondary font-bold flex items-center gap-2 mb-4">
//               <CheckCircle2 className="text-secondary w-5 h-5" />
//               You Will Learn
//             </h4>
//             <ul className="space-y-2">
//               {learningPoints.map((point, i) => (
//                 <li
//                   key={i}
//                   className="text-secondary/70 text-sm flex gap-2 items-center justify-start"
//                 >
//                   <div className="w-2 h-2 bg-secondary rounded-full"></div>
//                   {/* <span className="text-secondary mt-1">•</span>  */}
//                   <span className="text-secondary font-semibold tracking-tight">
//                     {point}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Career Section */}
//           <div className="bg-light px-6 py-3 rounded-2xl border border-secondary">
//             <h4 className="text-primary font-bold flex items-center gap-2 mb-4 tracking-tight">
//               <Briefcase className="text-primary  w-5 h-5" />
//               Career Options
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {careerOptions.map((option, i) => (
//                 <span
//                   key={i}
//                   className="bg-accent px-3 py-1 rounded-lg text-xs font-medium text-primary shadow-sm border border-primary tracking-tight"
//                 >
//                   {option}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // 2. Main Courses Section with Tabs
// const ProfessionalCourses = () => {
//   const [activeTab, setActiveTab] = useState("Makeup");

//   return (
//     <section className="py-24 px-6 bg-light">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4">
//             Our Professional Courses
//           </h2>
//           <p className="text-secondary uppercase tracking-widest text-xs font-bold">
//             Select a discipline to explore
//           </p>
//         </div>

//         {/* Custom Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-light p-2 flex gap-2">
//             {Object.keys(courseData).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
//                   activeTab === tab
//                     ? "bg-accent text-primary shadow-md"
//                     : "text-secondary hover:text-primary hover:bg-light"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Animated Course Card Display */}
//         <AnimatePresence mode="wait">
//           <CourseCard
//             key={activeTab}
//             title={`${activeTab} Course`}
//             description={courseData[activeTab].description}
//             learningPoints={courseData[activeTab].learningPoints}
//             careerOptions={courseData[activeTab].careerOptions}
//           />
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default ProfessionalCourses;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Briefcase, GraduationCap } from "lucide-react";
import courseData from "../seeds/professionalCourses";

// Course Card
const CourseCard = ({ title, description, learningPoints, careerOptions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-light rounded-3xl overflow-hidden shadow-xl shadow-primary/5 border border-primary flex flex-col md:flex-row"
    >
      {/* Banner */}
      <div className="w-full md:w-1/3 bg-primary relative min-h-50 sm:min-h-60 flex items-center justify-center p-6 sm:p-8">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="relative z-10 text-center">
          <GraduationCap className="text-accent w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />

          <h3 className="text-light text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            {title}
          </h3>

          <div className="mt-3 sm:mt-4 inline-block px-3 sm:px-4 py-1 rounded-full border border-accent/30 text-accent text-[9px] sm:text-[10px] uppercase tracking-widest">
            Professional Track
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3 p-5 sm:p-6 md:p-10 space-y-6 sm:space-y-8">
        <p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed font-semibold">
          "{description}"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Learning */}
          <div>
            <h4 className="text-secondary font-bold flex items-center gap-2 mb-3 sm:mb-4 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
              You Will Learn
            </h4>

            <ul className="space-y-2">
              {learningPoints.map((point, i) => (
                <li
                  key={i}
                  className="text-secondary/70 text-xs sm:text-sm flex gap-2 items-start"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full mt-1"></div>
                  <span className="text-secondary font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career */}
          <div className="bg-light p-4 sm:px-6 sm:py-4 rounded-2xl border border-secondary">
            <h4 className="text-primary font-bold flex items-center gap-2 mb-3 sm:mb-4 text-sm sm:text-base">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              Career Options
            </h4>

            <div className="flex flex-wrap gap-2">
              {careerOptions.map((option, i) => (
                <span
                  key={i}
                  className="bg-accent px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-medium text-primary border border-primary"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Section
const ProfessionalCourses = () => {
  const [activeTab, setActiveTab] = useState("Makeup");

  return (
    <section
      className="w-full sm:w-3/4 py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-light"
      id="courses"
    >
      <div className="mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
            Our Professional <span className="text-secondary">Courses</span>
          </h2>

          <p className="text-secondary uppercase tracking-widest text-[10px] sm:text-xs font-bold">
            Select a discipline to explore
          </p>
        </div>

        {/* Tabs (Scrollable on Mobile) */}
        <div className="mb-8 sm:mb-12 overflow-x-auto no-scrollbar">
          <div className="flex w-max mx-auto gap-2 p-2">
            {Object.keys(courseData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-accent text-primary shadow-md"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <CourseCard
            key={activeTab}
            title={`${activeTab} Course`}
            description={courseData[activeTab].description}
            learningPoints={courseData[activeTab].learningPoints}
            careerOptions={courseData[activeTab].careerOptions}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProfessionalCourses;
