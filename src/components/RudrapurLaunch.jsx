import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

const RudrapurLaunch = () => {
  return (
    <section className="relative py-24 px-6 bg-light overflow-hidden">
      {/* Decorative Background Text */}
      <div className="sm:block hidden absolute top-10 left-0 text-[11rem] text-primary opacity-[0.07] select-none pointer-events-none whitespace-nowrap">
        RUDRAPUR
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: The Statement */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-secondary rounded-full"
            >
              <MapPin size={16} className="text-secondary" />
              <span className="text-[10px] uppercase font-black tracking-[0.3em] text-secondary">
                Now Open in Rudrapur
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-7xl font-bold text-primary tracking-tighter leading-[0.95] mb-8">
                Professional <br />
                Beauty Education <br />
                <span className="text-secondary">Now in Rudrapur</span>
              </h2>

              <div className="space-y-6 max-w-xl">
                <p className="text-secondary sm:text-lg font-medium leading-relaxed">
                  Students from Rudrapur and nearby areas can now learn
                  professional beauty skills in their own city. Belleza Beauty
                  School Rudrapur brings practical, premium, and career-focused
                  beauty education closer to aspiring artists.
                </p>
                <p className="text-primary font-bold border-l-4 border-primary pl-6 py-2">
                  "You don’t need to move to a bigger city to begin your beauty
                  career. With the right training and guidance, you can start
                  from Rudrapur and grow professionally."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Badge & Image Card */}
          <div className="hidden sm:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] bg-secondary/5 border border-primary overflow-hidden flex items-center justify-center"
            >
              {/* Floating Decorative Elements */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

              <div className="text-center p-12 space-y-6 relative z-10 mb-10">
                <div className="w-20 h-20 bg-primary rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-primary/30 rotate-12 mb-8">
                  <GraduationCap size={40} className="text-accent" />
                </div>
                <h4 className="text-2xl text-primary leading-tight">
                  Premium Training <br /> Standardized for India
                </h4>
              </div>

              {/* Glassmorphism Stat Badge */}
              <div className="absolute bottom-10 right-0 left-0 px-8">
                <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-secondary uppercase tracking-tighter">
                      Availability
                    </p>
                    <p className="text-primary font-bold">Limited Seats</p>
                  </div>
                  <div className="h-8 w-px bg-primary/10" />
                  <div>
                    <p className="text-[10px] text-secondary uppercase tracking-tighter">
                      Next Batch
                    </p>
                    <p className="text-secondary font-bold">Enrolling Now</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RudrapurLaunch;
