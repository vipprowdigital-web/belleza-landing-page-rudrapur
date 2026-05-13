import { motion } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  Sparkles,
  Briefcase,
  Camera,
} from "lucide-react";

const features = [
  {
    title: "Training That Matches Industry Needs",
    description:
      "Our courses are designed to prepare students for real salon work, bridal bookings, freelance clients, and beauty business opportunities.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Practical Learning Environment",
    description:
      "Students practice regularly and learn how to deliver professional services with proper technique and confidence.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Live Model Experience",
    description:
      "Working on live models helps students understand real client expectations, different face shapes, skin types, hair textures, and service timing.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Expert Mentor Support",
    description:
      "Our trainers guide students personally, correct mistakes, and help them improve their work quality step by step.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Portfolio Building Support",
    description:
      "Students get opportunities to create makeup looks, hairstyles, nail work, and beauty services that can be used for portfolios and social media.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Certification & Career Guidance",
    description:
      "Students receive professional certification and career support for freelancing, salon jobs, client handling, and personal branding.",
    icon: <Camera className="w-6 h-6" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 sm:py-24 px-6 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="sm:text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-xs"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-primary text-3xl md:text-5xl font-bold mt-4 tracking-tight"
          >
            Why Belleza{" "}
            <span className="text-secondary">Beauty School Rudrapur?</span>
          </motion.h2>
          <div className="w-24 h-1 bg-secondary sm:mx-auto sm:mt-6 mt-3 rounded-full opacity-50" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-5 sm:p-8 rounded-4xl shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 border border-secondary"
            >
              <div className="w-8 h-8 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary text-secondary transition-colors duration-300 bg-secondary-30">
                {item.icon}
              </div>

              <h3 className="text-primary text-xl font-bold  sm:mb-2 mb-1 group-hover:text-accent transition-colors">
                {item.title}
              </h3>

              <p className="text-secondary font-semibold leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
