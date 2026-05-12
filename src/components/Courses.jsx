"use client";

import { useState, useEffect } from "react";
import { courses } from "../seeds/courses";
import { Star } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
// import { baseUrl } from "../utils/baseUrl";

export default function Courses() {
  const [active, setActive] = useState("offline");
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  // const [allCourses, setAllCourses] = useState([]);

  // useEffect(() => {
  //   const fetchAllCourses = async () => {
  //     try {
  //       const response = await fetch(`${baseUrl}/course`, {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       console.log("Response: ", response);

  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log("Response DATA: ", data.data);
  //         setAllCourses(data.data);
  //       } else {
  //         console.error("Couldn't fetch courses.");
  //       }
  //     } catch {
  //       console.error("Error while fetching courses.");
  //     }
  //   };
  //   fetchAllCourses();
  // }, []);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();

    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const filteredCourses = courses.filter((course) => {
    const typeMatch = course.type === active;
    const categoryMatch =
      activeSubCategory === "All" ||
      course.category === activeSubCategory.toLowerCase();
    return typeMatch && categoryMatch;
  });

  const isSlider = filteredCourses.length > cardsPerPage;

  const safePage =
    currentPage >= Math.ceil(filteredCourses.length / cardsPerPage)
      ? 0
      : currentPage;

  const visibleCourses = isSlider
    ? filteredCourses.slice(
        safePage * cardsPerPage,
        safePage * cardsPerPage + cardsPerPage,
      )
    : filteredCourses;

  const totalPages = Math.ceil(filteredCourses.length / cardsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);

  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="w-full" id="courses">
      <div className="sm:text-center mx-4 mb-5 sm:mb-10 mt-20 sm:mt-30">
        <p className="text-secondary uppercase tracking-widest text-[10px] sm:text-xs font-bold">
          Explore & Enroll
        </p>
        <h2 className="text-primary text-4xl md:text-5xl font-bold sm:mb-4 tracking-tight">
          Featured <span className="text-secondary ">Courses</span>
        </h2>

        <p className="sm:block hidden text-secondary capitalize tracking-tight text-sm sm:text-lg px-3 sm:max-w-2xl text-center mx-auto">
          Our globally recognized curriculum and career-focused approach help
          students master beauty skills and confidently step into the
          professional industry.
        </p>
      </div>
      {/* Toggle Offline/Online */}
      <div className="border border-primary grid grid-cols-2 mx-auto h-10 font-bold text-primary sm:text-sm text-xs overflow-hidden">
        <button
          className={`${active === "offline" ? "bg-primary text-light" : "bg-transparent"} w-full transition-all duration-300`}
          onClick={() => setActive("offline")}
        >
          Offline Courses
        </button>
        <button
          className={`${active === "online" ? "bg-primary text-light" : "bg-transparent"} w-full transition-all duration-300`}
          onClick={() => setActive("online")}
        >
          Online Courses
        </button>
      </div>
      <CourseCategories
        category={activeSubCategory}
        fn={setActiveSubCategory}
      />
      <div className="my-10"></div>
      {isSlider && (
        <div className="flex justify-end gap-3 px-2 sm:px-0 sm:mr-30 mr-0">
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
              {visibleCourses.map((course, index) => {
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
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="w-full p-10 sm:p-20 flex justify-center items-center">
            <h2 className="text-2xl sm:text-3xl tracking-tighter font-semibold text-primary text-center">
              Online Courses{" "}
              <span className="text-secondary">Coming Soon!</span>
            </h2>
          </div>
        )}
      </div>

      {/* FOR COURSES FROM BACKEND  */}
      {/* {allCourses.length !== 0 && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-10 place-items-center md:place-items-start gap-10">
          <AnimatePresence mode="wait">
            {allCourses.map((course, index) => {
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
                      src={course.thumbnail || "/assets/images/bg-img.jpg"}
                      alt={course.name}
                      className="w-full h-full object-cover transition-transform rounded-2xl duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-60" />
                    <div className="absolute top-5 left-5 px-4 py-1 bg-secondary backdrop-blur-md border border-white/30 rounded-full">
                      <span className="text-light text-[10px] font-bold uppercase tracking-[0.2em]">
                        {course.category?.name}
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
                        {course.short_description}
                      </p>
                    </div>
                    <ul className="space-y-3 mb-8 grow">
                      {course.description
                        .replace(/<\/?(p|strong)>/g, "")
                        .trim()
                        .split(".")
                        .filter((sum) => sum.trim() !== "")
                        .map((sum) => (
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
                    <div className="space-y-2 mb-6 text-sm text-secondary font-medium">
                      <div className="grid grid-cols-2 capitalize">
                        <p>Level - {course.level || "Beginner"}</p>
                        <p>Duration - {course.duration || "12"} weeks</p>
                      </div>
                      <div className="grid grid-cols-2 capitalize">
                        <p>Lessons - {course.lessons_count || 15}</p>
                        <p>
                          Fees -{" "}
                          <span className="line-through">
                            ₹{course.price || 80000}
                          </span>{" "}
                          <span className="text-primary font-bold text-lg">
                            ₹{course.sale_price || 59996}
                          </span>
                        </p>
                      </div>
                    </div>
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
            })}
          </AnimatePresence>
        </div>
      )} */}
    </section>
  );
}

const CourseCategories = ({ category, fn }) => {
  const courseCategories = [
    "All",
    "Combo",
    "Makeup",
    "Nails",
    "Hair",
    "Beauty",
  ];
  const activeCategory = category ?? "All";

  return (
    <section className="w-full h-16 overflow-x-auto no-scrollbar flex justify-start min-[430px]:justify-center items-center gap-2 md:gap-4 px-4 border-b border-primary/10">
      {courseCategories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            onClick={() => fn(cat)}
            key={cat}
            className={`px-6 py-1 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${
              isActive
                ? "bg-accent text-primary shadow-md"
                : "text-secondary hover:text-primary"
            }`}
          >
            <span className="sm:text-sm text-xs">{cat}</span>
          </button>
        );
      })}
    </section>
  );
};
