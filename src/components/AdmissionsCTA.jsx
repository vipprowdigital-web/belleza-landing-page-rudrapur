import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const AdmissionsCTA = () => {
  return (
    <section className="relative py-24 px-6 bg-light overflow-hidden flex flex-col items-center justify-center">
      {/* Large Background Decorative Text */}
      <div className="sm:block hidden absolute top-30 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <h2 className="text-[7rem] md:text-[9rem] font-bold text-secondary opacity-10 whitespace-nowrap uppercase tracking-tighter">
          Rudrapur
        </h2>
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em]">
            Limited Seats Available
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary text-3xl md:text-5xl font-bold tracking-tighter mb-5 leading-[1.1]"
        >
          Admissions Open for
          <br />
          <span className="text-secondary ">Rudrapur Branch</span>
        </motion.h2>

        {/* Description Body */}
        <div className="space-y-4 mb-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary tracking-tighter text-lg md:text-2xl font-medium leading-tight max-w-3xl mx-auto"
          >
            Your career in the beauty industry can begin with one decision. Join
            Belleza Beauty School Rudrapur and learn professional beauty skills
            with practical training, live model practice, certification, and
            career guidance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary tracking-tight font-semibold text-lg sm:leading-relaxed max-w-2xl mx-auto"
          >
            New batches are open. Limited seats available.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-3 bg-primary text-light rounded-full font-semibold tracking-tight text-md shadow-2xl shadow-primary flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-secondary"
            onClick={() => scrollTo("contact")}
          >
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-2.5 bg-accent text-primary border-2 border-secondary rounded-full font-semibold tracking-tight text-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-light"
            onClick={() => scrollTo("contact")}
          >
            <MessageCircle className="w-5 h-5" />
            Talk to Counsellor
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;
