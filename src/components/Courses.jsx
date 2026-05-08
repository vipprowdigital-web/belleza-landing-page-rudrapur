"use client";

import { useState } from "react";
import { courses } from "../seeds/courses";
import { Star } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";
import { ArrowRight } from "lucide-react";

export default function Courses() {
  const [active, setActive] = useState("offline");
  const [activeSubCategory, setActiveSubCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const typeMatch = course.type === active;
    const categoryMatch =
      activeSubCategory === "All" ||
      course.category === activeSubCategory.toLowerCase();
    return typeMatch && categoryMatch;
  });

  return (
    <section className="w-full" id="courses">
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
      <div className="text-center mb-10">
        <p className="text-secondary uppercase tracking-widest text-[10px] sm:text-xs font-bold">
          Explore & Enroll
        </p>
        <h2 className="text-primary text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
          Featured{" "}
          <span className="text-secondary italic font-serif">Courses</span>
        </h2>

        <p className="text-secondary capitalize tracking-tight text-sm sm:text-lg px-3 sm:max-w-2xl text-center mx-auto">
          Our globally recognized curriculum and career-focused approach help
          students master beauty skills and confidently step into the
          professional industry.
        </p>
      </div>
      <div className="px-2 sm:px-7 lg:px-10 xl:px-30 py-10 w-full">
        {active === "offline" ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-10 place-items-center md:place-items-start gap-10">
            {filteredCourses.map((course) => {
              return (
                <div
                  key={course.id}
                  className="group bg-white flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-secondary h-full"
                >
                  {/* Image Section */}
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

                  {/* Content Section */}
                  <div className="flex flex-col grow p-6 lg:px-4">
                    {/* Rating & Status */}
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
                </div>
              );
            })}
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
