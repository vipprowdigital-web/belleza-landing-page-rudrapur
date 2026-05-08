import { motion } from "framer-motion";
import { Quote, UserCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";

const StudentExperience = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${baseUrl}/testimonial/public`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        // console.log("Response: ", response);

        if (response.ok) {
          const data = await response.json();
          // console.log("Response DATA: ", data.data);
          setTestimonials(data.data);
        } else {
          console.error("Couldn't fetch testimonies.");
        }
      } catch {
        console.error("Error while fetching testimonials.");
      }
    };
    fetchTestimonials();
  }, []);

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
          {testimonials.map((review, index) => (
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
                  {review.description.replace(/<\/?p>/g, "")}
                </p>

                <div className="flex items-center gap-4 border-t border-primary pt-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary/20">
                    <UserCircle2 size={32} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary font-black text-sm uppercase tracking-wider">
                      {review.name}
                    </p>
                    <p className="text-secondary text-[10px] font-bold uppercase tracking-widest">
                      {review.designation}
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
