import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const benefits = [
  "Practical beauty training",
  "Live model sessions",
  "Professional certification",
  "Expert trainer mentorship",
  "Portfolio support",
  "Product and tool knowledge",
  "Hygiene and sanitation training",
  "Career counselling",
  "Freelancing guidance",
  "Client handling practice",
  "Placement assistance",
  "Beginner-friendly classes",
  "Confidence-building sessions",
  "Premium learning setup",
];

const WhatYouGet = () => {
  return (
    <section className="py-24 sm:px-6 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-6 sm:px-6"
          >
            <h4 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Your Career Journey
            </h4>
            <h2 className="text-primary text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              What You Receive at{" "}
              <span className="text-secondary italic font-serif">Belleza</span>
            </h2>

            {/* Benefits Grid (Inside the Left Col) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-secondary font-medium text-sm md:text-base tracking-tight">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-primary text-light px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-accent hover:text-primary transition-all duration-300"
              onClick={() => scrollTo("contact")}
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* Right Side: Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative background accent */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />

            <div className="relative sm:rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dt5azqjuz/image/upload/f_auto,q_auto/2_zdyomb.png"
                alt="Academy Environment"
                className="w-full sm:h-150 object-cover hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Badge */}
              <div className="absolute top-8 left-8 bg-light/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-xl border border-light">
                <div className="text-primary font-bold text-md">
                  Premium Facility
                </div>
                <div className="text-secondary text-xs font-bold uppercase tracking-tighter">
                  Rudrapur, Uttarakhand
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
