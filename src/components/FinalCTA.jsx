import { motion } from "framer-motion";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const FinalCTA = ({ address, phone }) => {
  return (
    <section className="py-20 bg-light relative overflow-hidden">
      <div className="w-full sm:max-w-8xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 px-4 sm:px-8"
          >
            <div>
              <h2 className="text-primary text-3xl md:text-5xl font-bold tracking-tighter leading-tight mb-3">
                Begin Your Beauty Journey with <br />
                <span className="text-secondary ">Belleza Rudrapur</span>
              </h2>
              <p className="text-secondary text-md md:text-lg leading-tight max-w-xl">
                Learn professional beauty skills, practice with expert guidance,
                build your portfolio, and become ready for real career
                opportunities.
              </p>
              <p className="text-primary tracking-tight font-bold mt-4 text-xl">
                Your passion deserves professional training. Start today with
                Belleza Beauty School Rudrapur.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`tel:${phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-2.5 bg-primary text-light rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary transition-all hover:bg-secondary"
              >
                <Phone className="w-5 h-5" />
                Book Free Counselling
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-2.5 bg-light text-primary border-2 border-primary rounded-full font-bold flex items-center justify-center gap-2 hover:bg-light transition-all"
                onClick={() => scrollTo("contact")}
              >
                Get Course Details
                <ArrowRight size={20} />
              </motion.button>
            </div>

            {/* Contact Details */}
            <div className="pt-8 border-t border-secondary/10 space-y-4">
              <div className="flex items-start sm:gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">
                    Phone
                  </p>
                  <p className="text-primary font-bold text-lg leading-none">
                    +91 {phone?.replace(/(\d{5})(\d{5})/, "$1 $2")}
                  </p>
                </div>
              </div>

              <div className="flex items-start sm:gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">
                    Address
                  </p>
                  {address && address[0] && (
                    <p className="text-secondary font-semibold text-sm sm:leading-relaxed max-w-sm">
                      {address[0]?.address}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            {/* Geometric Background Element */}
            <div className="absolute -inset-4 translate-x-4 translate-y-4 -z-10" />

            <div className="w-full aspect-3/3 overflow-hidden relative group sm:rounded-none rounded-3xl">
              <img
                src="/assets/images/image-6.jpeg"
                alt="Professional Beauty Training"
                className="w-full h-full object-contain grayscale-70 group-hover:grayscale-0 transition-all duration-700 sm:rounded-none rounded-3xl group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-60" />

              {/* Floating Badge */}
              {/* <div className="absolute bottom-8 left-8  backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20">
                <p className="text-accent font-bold text-sm">Enrollment Open</p>
                <p className="text-light text-[10px] font-bold uppercase tracking-tight">
                  Rudrapur Academy
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
