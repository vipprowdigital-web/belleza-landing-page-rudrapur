import { motion } from "framer-motion";
import {
  Briefcase,
  Camera,
  Scissors,
  Sparkles,
  Store,
  Globe,
} from "lucide-react";

const careerPaths = [
  {
    title: "Makeup & Bridal",
    roles: [
      "Bridal Makeup Artist",
      "Freelance Makeup Artist",
      "Salon Makeup Expert",
    ],
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "Hair & Styling",
    roles: ["Professional Hair Stylist", "Bridal Hair Artist"],
    icon: <Scissors className="w-5 h-5" />,
  },
  {
    title: "Skin & Nails",
    roles: ["Nail Technician", "Beauty Therapist", "Nail Artist"],
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Digital & Creative",
    roles: ["Beauty Content Creator", "Freelance Artist"],
    icon: <Camera className="w-5 h-5" />,
  },
  {
    title: "Entrepreneurship",
    roles: ["Beauty Business Owner", "Beauty Studio Owner"],
    icon: <Store className="w-5 h-5" />,
  },
  {
    title: "Specialized Roles",
    roles: ["Cosmetologist", "Fashion Stylist", "Beauty Consultant"],
    icon: <Globe className="w-5 h-5" />,
  },
];

const CareerOpportunities = () => {
  return (
    <section className="pt-15 sm:py-15 px-4 sm:px-6 bg-light" id="career">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="sm:text-center mb-7 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary text-3xl md:text-5xl font-bold tracking-tight mb-2"
          >
            What Can You Become{" "}
            <span className="text-secondary ">After Training?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-secondary tracking-tighter leading-tight font-semibold max-w-2xl mx-auto text-md"
          >
            After completing your course from Belleza Rudrapur, you can start
            your journey as
          </motion.p>
        </div>

        {/* Career Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {careerPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className="bg-accent px-3 py-5 sm:p-8 rounded-2xl sm:rounded-4xl border border-secondary hover:shadow-2xl hover:shadow-primary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary text-accent rounded-2xl flex items-center justify-center mb-2 sm:mb-6 shadow-lg shadow-primary/10">
                {path.icon}
              </div>
              <h3 className="text-primary tracking-tight leading-tight text-md sm:text-xl font-bold mb-1 sm:mb-2">
                {path.title}
              </h3>
              <ul className="space-y-1">
                {path.roles.map((role, i) => (
                  <li
                    key={i}
                    className="text-secondary font-semibold tracking-tight text-sm flex items-center justify-start gap-2"
                  >
                    <div className="sm:block hidden w-1.5 h-1.5 bg-primary rounded-full" />
                    <p className="leading-tight">{role}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Work Environments Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 md:p-12 bg-primary rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
                Infinite Possibilities
              </h4>
              <p className="text-light text-sm sm:text-lg md:text-xl max-w-xl leading-relaxed tracking-tight">
                Belleza helps students learn skills that can create income
                opportunities through{" "}
                <span className="text-accent font-semibold">
                  freelancing, salons, bridal work, events,
                </span>{" "}
                and personal beauty businesses.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
