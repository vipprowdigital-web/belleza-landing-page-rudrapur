import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="w-full py-20 px-6 bg-light flex flex-col justify-center items-center"
      id="about"
    >
      <section className="w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative order-2 sm:order-1 h-100 sm:h-full"
            >
              {/* Decorative background element */}
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-accent rounded-full blur-3xl" />

              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/training-sessions.jpg"
                  alt="Belleza Beauty School Training"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 bg-primary px-2 sm:px-4 py-1 sm:py-2 rounded-sm sm:rounded-xl shadow-lg">
                  <p className="text-accent text-sm sm:text-2xl font-bold">
                    100%
                  </p>
                  <p className="text-light text-[8px] sm:text-[10px] uppercase tracking-widest font-semibold">
                    Practical Training
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <div className="flex flex-col space-y-6 order-1 sm:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h4 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-2">
                  Empowering Your Passion
                </h4>
                <h2 className="font-bold tracking-tighter text-primary text-3xl md:text-5xl leading-tight">
                  Professional Beauty Training{" "}
                  <span className="text-secondary">for Ambitious Learners</span>
                </h2>
              </motion.div>

              <motion.div
                className="space-y-4 text-secondary leading-tight text-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <p>
                  Belleza Beauty School Rudrapur is built for students who want
                  to convert their beauty interest into a professional career.
                  Our academy provides structured training in makeup, hair,
                  nails, skin, beauty, and cosmetology with a strong focus on
                  practical learning.
                </p>
                <p className="sm:block hidden">
                  Here, students learn more than techniques. They learn product
                  knowledge, hygiene, client handling, service confidence,
                  portfolio creation, and the professional skills needed to work
                  in the real beauty industry.
                </p>
                <p>
                  Whether you are a beginner, student, homemaker, salon worker,
                  or freelancer, Belleza Rudrapur helps you start and grow with
                  the right training environment.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
