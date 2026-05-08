import { motion } from "framer-motion";
import {
  UserPlus,
  Target,
  Home,
  Star,
  RefreshCw,
  Heart,
  IndianRupee,
  Store,
} from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const TargetAudience = () => {
  const categories = [
    {
      title: "Beginners",
      desc: "Beginners with no previous experience",
      icon: <UserPlus className="text-light" size={24} />,
    },
    {
      title: "Career Seekers",
      desc: "Students looking for career-oriented skills",
      icon: <Target className="text-light" size={24} />,
    },
    {
      title: "Homemakers",
      desc: "Homemakers who want to become financially independent",
      icon: <Home className="text-light" size={24} />,
    },
    {
      title: "Freelancers",
      desc: "Freelancers who want professional certification",
      icon: <Star className="text-light" size={24} />,
    },
    {
      title: "Salon Pros",
      desc: "Salon workers who want to upgrade their skills",
      icon: <RefreshCw className="text-light" size={24} />,
    },
    {
      title: "Beauty Lovers",
      desc: "Makeup lovers who want expert training",
      icon: <Heart className="text-light" size={24} />,
    },
    {
      title: "Aspiring Artists",
      desc: "Girls who want to start earning through beauty skills",
      icon: <IndianRupee className="text-light" size={24} />,
    },
    {
      title: "Entrepreneurs",
      desc: "Anyone planning to open a salon, studio, or beauty business",
      icon: <Store className="text-light" size={24} />,
    },
  ];

  return (
    <section className="sm:py-24 px-6 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-4"
          >
            Who Should Join <br className="sm:hidden" />
            <span className="text-secondary italic">Belleza Rudrapur?</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 rounded-4xl bg-light border border-secondary hover:bg-primary transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent transition-colors duration-500">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-black text-primary tracking-tight group-hover:text-light transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed font-medium group-hover:text-light/70 transition-colors duration-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-primary font-bold text-lg">
            No matter your background, we have a path for you.
          </p>
          <button
            className="mt-6 text-secondary font-bold uppercase tracking-[0.2em] text-xs hover:underline underline-offset-8"
            onClick={() => scrollTo("courses")}
          >
            Find your perfect course →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
