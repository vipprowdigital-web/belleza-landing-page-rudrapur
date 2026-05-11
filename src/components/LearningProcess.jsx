import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BookOpen, PenTool, Zap, Users, Trophy } from "lucide-react";

const steps = [
  {
    title: "Learn the Basics",
    description:
      "Start with tools, product knowledge, hygiene, skin theory, hair basics, nail basics, and professional ethics.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Understand the Technique",
    description:
      "Every technique is explained with proper demonstration, so students know what to do and why it matters.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Practice with Supervision",
    description:
      "Students practice under trainer guidance to improve finishing, speed, creativity, and confidence.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Work on Real Models",
    description:
      "Live model practice gives students the confidence to handle real clients and understand service delivery.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Create Your Career Path",
    description:
      "Students receive support for portfolio creation, freelancing, salon job preparation, pricing, and client communication.",
    icon: <Trophy className="w-6 h-6" />,
  },
];

const LearningProcess = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-24 bg-light" ref={containerRef} id="training">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary text-4xl md:text-5xl font-bold tracking-tight">
            How We Help You Become{" "}
            <span className="text-secondary font-serif">
              Career-Ready
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Central Line (Desktop) / Side Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-light rounded-full" />

          {/* Animating Progress Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary origin-top rounded-full z-10"
            style={{ scaleY }}
          />

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Content */}
                <div className="flex-1 w-full md:w-auto pl-12 md:pl-0">
                  <div
                    className={`px-7 py-6 rounded-4xl bg-white border border-secondary hover:bg-white hover:shadow-xl transition-all duration-300 group`}
                  >
                    <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">
                      Step {index + 1}
                    </span>
                    <h3 className="text-primary text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-secondary font-semibold leading-tight text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon/Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 bg-primary border-4 border-white rounded-full z-20 flex items-center justify-center shadow-lg transition-transform duration-500 hover:scale-125">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                </div>

                {/* Spacer for layout balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningProcess;
