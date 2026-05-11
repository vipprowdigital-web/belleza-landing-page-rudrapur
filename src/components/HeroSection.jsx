import { motion } from "framer-motion";
import { Phone, Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { openWhatsApp } from "../utils/openWhatsapp";
import { scrollTo } from "../utils/scrollTo";

const HeroSection = ({ phone }) => {
  return (
    <section className="w-full relative min-h-[90vh] flex items-center bg-light overflow-hidden pt-30">
      {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-70 -skew-x-24 translate-x-20 z-0" /> */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-accent blur-[120px] rounded-full z-0"
      />

      <div className="mx-auto px-6 w-full md:w-3/4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-10">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl lg:text-6xl font-black sm:text-left text-center text-primary tracking-tighter leading-[0.9] mt-10 md:mt-0"
              >
                Start Your <br />
                Beauty Career <br />
                <span className="text-secondary italic relative">
                  from Rudrapur
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 25 0 50 5 T 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-secondary text-md md:text-lg sm:text-left text-center font-medium max-w-xl leading-relaxed"
              >
                Build your future in the beauty industry with Belleza Beauty
                School Rudrapur. Learn professional{" "}
                <span className="text-primary font-bold italic">
                  Makeup, Hair, Nail, Skin & Cosmetology
                </span>{" "}
                with practical training and expert mentorship.
              </motion.p>
            </div>

            {/* Sub-tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-primary font-bold"
            >
              <Sparkles size={20} className="text-secondary hidden sm:block" />
              <p className="text-sm tracking-tight uppercase text-center sm:text-left">
                Learn skills that help you work, earn, and grow confidently.
              </p>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center sm:justify-start items-center"
            >
              <button
                className="bg-primary text-light px-7 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 group cursor-pointer"
                onClick={() => openWhatsApp(phone)}
              >
                Get Free Counselling
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                className="flex items-center gap-3 px-8 py-5 text-primary font-bold hover:text-accent transition-colors group cursor-pointer"
                onClick={() => scrollTo("courses")}
              >
                <div className="p-3 bg-white border border-primary/10 rounded-full shadow-lg group-hover:bg-primary transition-all">
                  <PlayCircle size={24} />
                </div>
                View Courses
              </button>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-6 w-full"
            >
              <a
                href={`tel:${phone}`}
                className="w-full flex sm:justify-start justify-center items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                  <Phone size={18} className="text-light" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-secondary sm:text-left text-center uppercase tracking-widest leading-none">
                    Admission Desk
                  </p>
                  <p className="text-lg font-black sm:text-left text-center text-primary">
                    +91 {phone?.replace(/(\d{5})(\d{5})/, "$1 $2")}
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Image/Visual Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-4/5 w-full"
            >
              {/* Main Visual Box */}
              <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-[4rem] overflow-hidden shadow-3xl">
                {/* Overlay Texture */}
                {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" /> */}
                <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/makeup-sessions.jpg')]" />

                {/* Content inside Box */}
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-light z-20">
                  <div className="space-y-2 mb-5">
                    <p className="text-light font-black tracking-[0.3em] uppercase text-xs">
                      Practical Training
                    </p>
                    <h3 className="text-3xl text-accent font-bold leading-tight">
                      Live Model <br /> Practice Sessions
                    </h3>
                  </div>
                  <div className="h-1 w-20 bg-light rounded-full" />
                </div>
              </div>

              {/* Floating Success Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 -right-10 bg-white px-4 py-2 rounded-2xl shadow-2xl border border-primary z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-2xl">
                    <Sparkles className="text-secondary" size={25} />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-primary leading-tight">
                      100%
                    </p>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Career Guidance
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Circle */}
              <div className="hidden sm:block absolute bottom-0 -left-20 w-40 h-40 border-20 border-secondary rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
