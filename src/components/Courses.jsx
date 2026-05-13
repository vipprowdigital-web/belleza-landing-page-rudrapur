"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";
import { AnimatePresence, motion } from "framer-motion";
import { baseUrl } from "../utils/baseUrl";

export default function Courses() {
  const [active, setActive] = useState("offline");
  // Changed to store the category object or "All"
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const response = await fetch(`${baseUrl}/course`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          setAllCourses(data.data);
        }
      } catch (err) {
        console.error("Error while fetching courses:", err);
      }
    };
    fetchAllCourses();
  }, []);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const filteredCourses = allCourses.filter((course) => {
    const typeMatch = active === "offline";

    const categoryMatch =
      activeSubCategory === "All" ||
      course.category?._id === activeSubCategory._id;

    return typeMatch && categoryMatch;
  });

  const isSlider = filteredCourses.length > cardsPerPage;
  const totalPages = Math.ceil(filteredCourses.length / cardsPerPage);

  const safePage = currentPage >= totalPages ? 0 : currentPage;

  const visibleCourses = isSlider
    ? filteredCourses.slice(
        safePage * cardsPerPage,
        safePage * cardsPerPage + cardsPerPage,
      )
    : filteredCourses;

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="w-full" id="courses">
      <div className="sm:text-center mx-4 mb-5 sm:mb-10 mt-20 sm:mt-30">
        <p className="text-secondary uppercase tracking-widest text-[10px] sm:text-xs font-bold">
          Explore & Enroll
        </p>
        <h2 className="text-primary text-3xl md:text-5xl font-bold sm:mb-4 tracking-tight">
          Featured <span className="text-secondary ">Courses</span>
        </h2>
        <p className="sm:block hidden text-secondary capitalize tracking-tight text-sm sm:text-lg px-3 sm:max-w-2xl text-center mx-auto">
          Our globally recognized curriculum and career-focused approach help
          students master beauty skills and confidently step into the
          professional industry.
        </p>
      </div>

      <div className="border border-primary grid grid-cols-2 mx-auto h-10 font-bold text-primary sm:text-sm text-xs overflow-hidden max-w-md sm:rounded-3xl">
        <button
          className={`${active === "offline" ? "bg-primary text-light" : "bg-transparent"} w-full sm:rounded-l-3xl rounded-none transition-all duration-300`}
          onClick={() => {
            setActive("offline");
            setCurrentPage(0);
          }}
        >
          Offline Courses
        </button>
        <button
          className={`${active === "online" ? "bg-primary text-light" : "bg-transparent"} w-full sm:rounded-r-3xl rounded-none transition-all duration-300`}
          onClick={() => {
            setActive("online");
            setCurrentPage(0);
          }}
        >
          Online Courses
        </button>
      </div>

      <CourseCategories
        activeCategory={activeSubCategory}
        setCategory={(cat) => {
          setActiveSubCategory(cat);
          setCurrentPage(0);
        }}
      />

      <div className="my-10"></div>

      {isSlider && (
        <div className="flex justify-end gap-3 px-2 sm:px-0 sm:mr-30 mr-0 mb-4">
          <button
            onClick={prevPage}
            className="p-2 border border-primary rounded-full hover:bg-primary transition-all group"
          >
            <ChevronLeft
              size={18}
              className="text-primary group-hover:text-light"
            />
          </button>
          <button
            onClick={nextPage}
            className="p-2 border border-primary rounded-full hover:bg-primary transition-all group"
          >
            <ChevronRight
              size={18}
              className="text-primary group-hover:text-light"
            />
          </button>
        </div>
      )}

      <div className="px-2 sm:px-7 lg:px-10 xl:px-30 py-10 w-full">
        {active === "offline" ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-10 place-items-center md:place-items-start gap-10">
            <AnimatePresence mode="wait">
              {visibleCourses.map((course, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={course._id}
                  className="group bg-white flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-secondary h-full w-full"
                >
                  <div className="relative h-64 w-full overflow-hidden group">
                    <img
                      src={course.thumbnail || "/assets/images/bg-img.jpg"}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-5 left-5 px-4 py-1.5 bg-secondary backdrop-blur-md border border-white/30 rounded-full flex flex-row justify-center items-center">
                      <span className="text-light text-[10px] font-bold uppercase tracking-[0.2em]">
                        {course.category?.name}
                      </span>
                    </div>
                    {course.level && (
                      <span
                        className={`absolute bottom-0 right-0 px-5 py-1.5 rounded-tl-full text-xs font-semibold uppercase transition-all duration-500 ease-out opacity-0  translate-y-4 group-hover:opacity-100  group-hover:translate-y-0 ${course.level.toLowerCase() === "beginner" ? "text-green-700 bg-green-100" : course.level.toLowerCase() === "intermediate" ? "text-orange-700 bg-orange-100" : "text-red-700 bg-red-100"} `}
                      >
                        {course.level}
                      </span>
                    )}
                  </div>

                  <div className="w-full flex flex-col grow p-6 lg:px-4">
                    {/* <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={14}
                            className="fill-amber-500 text-amber-500"
                          />
                        ))}
                        <span className="text-xs font-bold text-secondary ml-1">
                          (5.0)
                        </span>
                      </div>
                    </div> */}

                    <div className="space-y-3 mb-3">
                      <h2 className="font-bold text-xl text-primary tracking-tight leading-tight group-hover:text-secondary transition-colors">
                        {course.title}
                      </h2>
                      <p className="text-sm text-secondary/70 leading-relaxed line-clamp-2">
                        {course.short_description}
                      </p>
                    </div>
                    <ul className="space-y-3 mb-3 grow">
                      {course.description
                        .replace(/<\/?(p|strong)>/g, "")
                        .trim()
                        .split(".")
                        .filter((sum) => sum.trim() !== "")
                        .map((sum) => (
                          <li
                            key={sum}
                            className="text-[13px] text-primary font-medium flex items-start gap-3"
                          >
                            <div className="mt-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center shrink-0">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                            </div>
                            {sum}
                          </li>
                        ))}
                    </ul>

                    <div className="w-full space-y-2 mb-3 text-sm text-secondary font-medium mt-auto flex flex-row justify-between items-center">
                      {course.price && (
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-primary">
                            ₹{course.sale_price.toLocaleString()}
                          </span>
                          <span className="line-through text-xs text-secondary/60">
                            ₹{course.price.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {course.duration && (
                        <p className="tracking-[0.2rem] font-bold">
                          {course.duration.toLowerCase().replace("weeks", "")}{" "}
                          weeks
                        </p>
                      )}
                    </div>

                    <button
                      className="relative w-full overflow-hidden bg-primary text-light py-3 rounded-xl font-bold transition-all hover:bg-secondary group/btn"
                      onClick={() => scrollTo("contact")}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Enroll Now{" "}
                        <ArrowRight
                          size={18}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {visibleCourses.length === 0 && (
              <p className="col-span-full mx-auto text-center text-secondary py-10">
                No courses found in this category.
              </p>
            )}
          </div>
        ) : (
          <div className="w-full p-10 flex justify-center items-center">
            <h2 className="text-2xl font-semibold text-primary text-center">
              Online Courses{" "}
              <span className="text-secondary">Coming Soon!</span>
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}

const CourseCategories = ({ activeCategory, setCategory }) => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await fetch(`${baseUrl}/categories/public`);
        if (response.ok) {
          const data = await response.json();
          // Prepend "All" option to the fetched list
          setAllCategories([{ _id: "all", name: "All" }, ...data.data]);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchAllCategories();
  }, []);

  return (
    <section className="w-full h-16 overflow-x-auto no-scrollbar flex justify-start min-[430px]:justify-center items-center gap-2 md:gap-4 px-4 border-b border-primary/10">
      {allCategories.map((cat) => {
        const isActive =
          activeCategory === "All"
            ? cat.name === "All"
            : activeCategory._id === cat._id;

        return (
          <button
            onClick={() => setCategory(cat.name === "All" ? "All" : cat)}
            key={cat._id}
            className={`px-6 py-1 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${
              isActive
                ? "bg-accent text-primary shadow-md"
                : "text-secondary hover:text-primary"
            }`}
          >
            <span className="sm:text-sm text-xs capitalize">{cat.name}</span>
          </button>
        );
      })}
    </section>
  );
};

// import { useState, useEffect } from "react";
// import { courses } from "../seeds/courses";
// import { Star } from "lucide-react";
// import { scrollTo } from "../utils/scrollTo";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import { baseUrl } from "../utils/baseUrl";

// export default function Courses() {
//   const [active, setActive] = useState("offline");
//   const [activeSubCategory, setActiveSubCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(0);
//   const [cardsPerPage, setCardsPerPage] = useState(3);
//   const [allCourses, setAllCourses] = useState([]);

//   useEffect(() => {
//     const fetchAllCourses = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/course`, {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         });
//         console.log("Response: ", response);

//         if (response.ok) {
//           const data = await response.json();
//           console.log("Response DATA: ", data.data);
//           setAllCourses(data.data);
//         } else {
//           console.error("Couldn't fetch courses.");
//         }
//       } catch {
//         console.error("Error while fetching courses.");
//       }
//     };
//     fetchAllCourses();
//   }, []);

//   useEffect(() => {
//     const updateCardsPerPage = () => {
//       if (window.innerWidth < 768) {
//         setCardsPerPage(1);
//       } else if (window.innerWidth < 1024) {
//         setCardsPerPage(2);
//       } else {
//         setCardsPerPage(3);
//       }
//     };

//     updateCardsPerPage();

//     window.addEventListener("resize", updateCardsPerPage);

//     return () => window.removeEventListener("resize", updateCardsPerPage);
//   }, []);

//   const filteredCourses = courses.filter((course) => {
//     const typeMatch = course.type === active;
//     const categoryMatch =
//       activeSubCategory === "All" ||
//       course.category === activeSubCategory.toLowerCase();
//     return typeMatch && categoryMatch;
//   });

//   const isSlider = filteredCourses.length > cardsPerPage;

//   const safePage =
//     currentPage >= Math.ceil(filteredCourses.length / cardsPerPage)
//       ? 0
//       : currentPage;

//   const visibleCourses = isSlider
//     ? filteredCourses.slice(
//         safePage * cardsPerPage,
//         safePage * cardsPerPage + cardsPerPage,
//       )
//     : filteredCourses;

//   const totalPages = Math.ceil(filteredCourses.length / cardsPerPage);

//   const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);

//   const prevPage = () =>
//     setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

//   return (
//     <section className="w-full" id="courses">
//       <div className="sm:text-center mx-4 mb-5 sm:mb-10 mt-20 sm:mt-30">
//         <p className="text-secondary uppercase tracking-widest text-[10px] sm:text-xs font-bold">
//           Explore & Enroll
//         </p>
//         <h2 className="text-primary text-4xl md:text-5xl font-bold sm:mb-4 tracking-tight">
//           Featured <span className="text-secondary ">Courses</span>
//         </h2>

//         <p className="sm:block hidden text-secondary capitalize tracking-tight text-sm sm:text-lg px-3 sm:max-w-2xl text-center mx-auto">
//           Our globally recognized curriculum and career-focused approach help
//           students master beauty skills and confidently step into the
//           professional industry.
//         </p>
//       </div>
//       {/* Toggle Offline/Online */}
//       <div className="border border-primary grid grid-cols-2 mx-auto h-10 font-bold text-primary sm:text-sm text-xs overflow-hidden">
//         <button
//           className={`${active === "offline" ? "bg-primary text-light" : "bg-transparent"} w-full transition-all duration-300`}
//           onClick={() => setActive("offline")}
//         >
//           Offline Courses
//         </button>
//         <button
//           className={`${active === "online" ? "bg-primary text-light" : "bg-transparent"} w-full transition-all duration-300`}
//           onClick={() => setActive("online")}
//         >
//           Online Courses
//         </button>
//       </div>
//       <CourseCategories
//         category={activeSubCategory}
//         fn={setActiveSubCategory}
//       />
//       <div className="my-10"></div>
//       {isSlider && (
//         <div className="flex justify-end gap-3 px-2 sm:px-0 sm:mr-30 mr-0">
//           <button
//             onClick={prevPage}
//             className="p-2 border border-primary rounded-full hover:bg-primary transition-all group"
//           >
//             <ChevronLeft
//               size={18}
//               className="text-primary group-hover:text-light"
//             />
//           </button>

//           <button
//             onClick={nextPage}
//             className="p-2 border border-primary rounded-full hover:bg-primary transition-all group"
//           >
//             <ChevronRight
//               size={18}
//               className="text-primary group-hover:text-light"
//             />
//           </button>
//         </div>
//       )}
//       <div className="px-2 sm:px-7 lg:px-10 xl:px-30 py-10 w-full">
//         {active === "offline" ? (
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-10 place-items-center md:place-items-start gap-10">
//             <AnimatePresence mode="wait">
//               {allCourses.length !== 0 && (
//                 <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-10 place-items-center md:place-items-start gap-10">
//                   <AnimatePresence mode="wait">
//                     {allCourses.map((course, index) => {
//                       return (
//                         <motion.div
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           transition={{
//                             duration: 0.4,
//                             delay: index * 0.1,
//                           }}
//                           key={course.id}
//                           className="group bg-light flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-secondary h-full"
//                         >
//                           <div className="relative h-64 w-full overflow-hidden">
//                             <img
//                               src={
//                                 course.thumbnail || "/assets/images/bg-img.jpg"
//                               }
//                               alt={course.name}
//                               className="w-full h-full object-cover transition-transform rounded-2xl duration-700 group-hover:scale-110"
//                             />
//                             <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-60" />
//                             <div className="absolute top-5 left-5 px-4 py-1 bg-secondary backdrop-blur-md border border-white/30 rounded-full">
//                               <span className="text-light text-[10px] font-bold uppercase tracking-[0.2em]">
//                                 {course.category?.name}
//                               </span>
//                             </div>
//                           </div>
//                           <div className="flex flex-col grow p-6 lg:px-4">
//                             <div className="flex justify-between items-center mb-4">
//                               <div className="flex items-center gap-1">
//                                 {[...Array(5)].map((_, j) => (
//                                   <Star
//                                     key={j}
//                                     size={14}
//                                     className="fill-amber-500 text-accent"
//                                   />
//                                 ))}
//                                 <span className="text-xs font-bold text-secondary ml-1 mt-0.5">
//                                   (5.0)
//                                 </span>
//                               </div>
//                               <div className="flex items-center gap-1.5">
//                                 <span className="relative flex h-2 w-2">
//                                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
//                                   <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
//                                 </span>
//                                 <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
//                                   Trending
//                                 </span>
//                               </div>
//                             </div>
//                             <div className="space-y-3 mb-6">
//                               <h2 className="font-bold text-2xl text-primary tracking-tight leading-tight group-hover:text-secondary transition-colors">
//                                 {course.name}
//                               </h2>
//                               <p className="text-sm text-secondary/70 leading-relaxed line-clamp-2">
//                                 {course.short_description}
//                               </p>
//                             </div>
//                             <ul className="space-y-3 mb-8 grow">
//                               {course.description
//                                 .replace(/<\/?(p|strong)>/g, "")
//                                 .trim()
//                                 .split(".")
//                                 .filter((sum) => sum.trim() !== "")
//                                 .map((sum) => (
//                                   <li
//                                     key={sum}
//                                     className="text-sm text-primary font-medium flex items-start gap-3"
//                                   >
//                                     <div className="mt-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center shrink-0">
//                                       <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
//                                     </div>
//                                     {sum}
//                                   </li>
//                                 ))}
//                             </ul>
//                             <div className="space-y-2 mb-6 text-sm text-secondary font-medium">
//                               <div className="grid grid-cols-2 capitalize">
//                                 <p>Level - {course.level || "Beginner"}</p>
//                                 <p>
//                                   Duration - {course.duration || "12"} weeks
//                                 </p>
//                               </div>
//                               <div className="grid grid-cols-2 capitalize">
//                                 <p>Lessons - {course.lessons_count || 15}</p>
//                                 <p>
//                                   Fees -{" "}
//                                   <span className="line-through">
//                                     ₹{course.price || 80000}
//                                   </span>{" "}
//                                   <span className="text-primary font-bold text-lg">
//                                     ₹{course.sale_price || 59996}
//                                   </span>
//                                 </p>
//                               </div>
//                             </div>
//                             <button
//                               className="relative w-full overflow-hidden bg-primary text-light py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-secondary group/btn shadow-lg shadow-primary/10"
//                               onClick={() => scrollTo("contact")}
//                             >
//                               <span className="relative z-10 flex items-center justify-center gap-2">
//                                 Enroll Now
//                                 <ArrowRight
//                                   size={18}
//                                   className="transition-transform group-hover/btn:translate-x-1"
//                                 />
//                               </span>
//                             </button>
//                           </div>
//                         </motion.div>
//                       );
//                     })}
//                   </AnimatePresence>
//                 </div>
//               )}
//             </AnimatePresence>
//           </div>
//         ) : (
//           <div className="w-full p-10 sm:p-20 flex justify-center items-center">
//             <h2 className="text-2xl sm:text-3xl tracking-tighter font-semibold text-primary text-center">
//               Online Courses{" "}
//               <span className="text-secondary">Coming Soon!</span>
//             </h2>
//           </div>
//         )}
//       </div>

//       {/* FOR COURSES FROM BACKEND  */}
//     </section>
//   );
// }

// const CourseCategories = ({ category, fn }) => {
//   // const courseCategories = [
//   //   "All",
//   //   "Combo",
//   //   "Makeup",
//   //   "Nails",
//   //   "Hair",
//   //   "Beauty",
//   // ];

//   const [allCategories, setAllCategories] = useState([]);
//   const activeCategory = category ?? "All";

//   useEffect(() => {
//     const fetchAllCategories = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/categories/public`, {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         });
//         console.log("Response: ", response);

//         if (response.ok) {
//           const data = await response.json();
//           console.log("Response DATA: ", data.data);
//           setAllCategories(data.data);
//         } else {
//           console.error("Couldn't fetch courses.");
//         }
//       } catch {
//         console.error("Error while fetching courses.");
//       }
//     };
//     fetchAllCategories();
//   }, []);

//   return (
//     <section className="w-full h-16 overflow-x-auto no-scrollbar flex justify-start min-[430px]:justify-center items-center gap-2 md:gap-4 px-4 border-b border-primary/10">
//       {allCategories.map((cat) => {
//         const isActive = activeCategory === cat.name;
//         return (
//           <button
//             onClick={() => fn(cat)}
//             key={cat}
//             className={`px-6 py-1 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${
//               isActive
//                 ? "bg-accent text-primary shadow-md"
//                 : "text-secondary hover:text-primary"
//             }`}
//           >
//             <span className="sm:text-sm text-xs capitalize">{cat.name}</span>
//           </button>
//         );
//       })}
//     </section>
//   );
// };

{
  /* {visibleCourses.map((course, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    key={course.id}
                    className="group bg-light flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-secondary h-full"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <img
                        src={course.image || "/api/placeholder/400/320"}
                        alt={course.name}
                        className="w-full h-full object-cover transition-transform rounded-2xl duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-60" />
                      <div className="absolute top-5 left-5 px-4 py-1 bg-secondary backdrop-blur-md border border-white/30 rounded-full">
                        <span className="text-light text-[10px] font-bold uppercase tracking-[0.2em]">
                          {course.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col grow p-6 lg:px-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={14}
                              className="fill-amber-500 text-accent"
                            />
                          ))}
                          <span className="text-xs font-bold text-secondary ml-1 mt-0.5">
                            (5.0)
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                            Trending
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <h2 className="font-bold text-2xl text-primary tracking-tight leading-tight group-hover:text-secondary transition-colors">
                          {course.name}
                        </h2>
                        <p className="text-sm text-secondary/70 leading-relaxed line-clamp-2">
                          {course.desc}
                        </p>
                      </div>
                      <ul className="space-y-3 mb-8 grow">
                        {course.summary.map((sum) => (
                          <li
                            key={sum}
                            className="text-sm text-primary font-medium flex items-start gap-3"
                          >
                            <div className="mt-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center shrink-0">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                            </div>
                            {sum}
                          </li>
                        ))}
                      </ul>
                      <button
                        className="relative w-full overflow-hidden bg-primary text-light py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-secondary group/btn shadow-lg shadow-primary/10"
                        onClick={() => scrollTo("contact")}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Enroll Now
                          <ArrowRight
                            size={18}
                            className="transition-transform group-hover/btn:translate-x-1"
                          />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                );
              })} */
}
