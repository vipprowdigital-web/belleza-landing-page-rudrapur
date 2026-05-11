import { motion } from "framer-motion";
import { CheckCircle2, Award, Briefcase, TrendingUp } from "lucide-react";

const CareerJourney = () => {
  const steps = [
    {
      title: "Learn Correct Techniques",
      desc: "Students are trained step by step so they understand the right method, product usage, tools, hygiene, and finishing.",
      icon: <CheckCircle2 className="text-accent" size={24} />,
    },
    {
      title: "Practice Regularly",
      desc: "Hands-on sessions help students improve speed, neatness, confidence, and creativity.",
      icon: <Award className="text-accent" size={24} />,
    },
    {
      title: "Build Professional Confidence",
      desc: "Live model practice and trainer guidance prepare students for real client work, freelancing, and salon opportunities.",
      icon: <Briefcase className="text-accent" size={24} />,
    },
    {
      title: "Prepare for Career Growth",
      desc: "Students receive guidance for portfolio building, freelancing, client communication, pricing, and professional presentation.",
      icon: <TrendingUp className="text-accent" size={24} />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-light overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-6"
          >
            From Learning to Earning — <br />
            <span className="text-secondary">
              We Prepare You for Real Work
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-secondary font-medium max-w-2xl mx-auto leading-relaxed"
          >
            At Belleza Beauty School Rudrapur, every course is designed to help
            students become confident, skilled, and career-ready.
          </motion.p>
        </div>

        {/* Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Central Decorative Line (Visible on Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary to-transparent -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-4xl bg-white border border-secondary shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group ${
                index % 2 === 0
                  ? "md:text-right md:items-end"
                  : "md:text-left md:items-start"
              }`}
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:rotate-16 transition-transform duration-300 shadow-lg shadow-primary">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3 tracking-tight">
                {step.title}
              </h3>
              <p
                className={`text-sm text-secondary leading-relaxed font-medium max-w-xs ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                {step.desc}
              </p>

              {/* Decorative Step Number */}
              {/* <span className="absolute top-8 right-8 md:right-auto md:left-auto text-6xl font-black text-primary pointer-events-none group-hover:text-accent transition-colors">
                0{index + 1}
              </span> */}
            </motion.div>
          ))}
        </div>

        {/* Final CTA Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-10 p-1 bg-linear-to-r from-primary via-accent to-primary rounded-3xl"
        >
          <div className="bg-white rounded-[1.4rem] py-10 px-8 text-center">
            <h4 className="text-primary font-bold mb-2 uppercase text-xs tracking-[0.3em]">
              Ready to start your professional career?
            </h4>
            <p className="text-secondary font-medium text-sm">
              Join the 1000+ students already working in top salons across
              India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerJourney;
