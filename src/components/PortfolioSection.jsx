import { motion } from "framer-motion";
import { Camera, Briefcase } from "lucide-react";

const PortfolioSection = () => {
  const highlights = [
    { icon: <Camera size={20} />, text: "Professional Look Creation" },
    // { icon: <Instagram size={20} />, text: "Social Media Ready" },
    { icon: <Briefcase size={20} />, text: "Client-Ready Presentation" },
  ];

  return (
    <section
      className="py-24 px-6 bg-primary text-light overflow-hidden"
      id="portfolio"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                Build a Portfolio That <br />
                <span className="text-accent">Opens Opportunities</span>
              </h2>
              <p className="text-light/70 text-lg leading-relaxed max-w-xl font-medium">
                Your portfolio is your proof of skill. At Belleza Beauty School
                Rudrapur, students get the chance to create professional looks
                and service work during training.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-4xl space-y-6"
            >
              <p className="text-accent font-bold leading-relaxed">
                "A strong portfolio helps students approach bridal clients,
                salons, studios, and online audiences with confidence."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase text-light/80"
                  >
                    <div className="p-2 bg-accent/20 rounded-lg text-accent">
                      {item.icon}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-light/50 font-medium"
            >
              From makeup and hair to nails and beauty services, students learn
              to present their work professionally.
            </motion.p>
          </div>

          {/* Right Side: Visual Portfolio Representation */}
          <div className="relative">
            {/* Background Decorative Element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {/* Image 1: Main Focus */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-3/4 rounded-3xl bg-secondary/20 border border-white/10 overflow-hidden relative group"
              >
                {/* <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" /> */}
                {/* <img
                  src="https://res.cloudinary.com/dt5azqjuz/image/upload/f_auto,q_auto/Glam_Look_l1usvm.png"
                  className="rounded-3xl h-full object-cover"
                  alt="Portfolio Image"
                />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    Glam Look
                  </p>
                </div> */}
              </motion.div>

              {/* Stacked Images 2 & 3 */}
              {/* <div className="space-y-4 pt-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="aspect-square rounded-3xl bg-accent border border-white/10 flex items-center justify-center relative overflow-hidden group p-2"
                >
                  <img
                    src="https://res.cloudinary.com/dt5azqjuz/image/upload/f_auto,q_auto/Glam_Look_l1usvm.png"
                    className="rounded-3xl w-full h-full object-contain"
                    alt="Portfolio Image"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="aspect-4/5 rounded-3xl bg-secondary/20 border border-white/10 overflow-hidden"
                >
                  <div className="w-full h-full bg-linear-to-br from-accent/20 to-primary" />
                </motion.div>
              </div> */}
              <div className="space-y-4 pt-12 sm:pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="aspect-square bg-accent rounded-2xl sm:p-6 p-3 sm:w-85 w-54 h-80 sm:h-120 shadow-2xl"
                >
                  <div className="w-full h-full overflow-hidden bg-accent flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dt5azqjuz/image/upload/f_auto,q_auto/Glam_Look_l1usvm.png"
                      alt="Portfolio Image"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="aspect-4/5 rounded-3xl border border-white/10 overflow-hidden"
                >
                  <div className="w-full h-full bg-linear-to-br from-accent/20 to-primary" />
                </motion.div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 md:bottom-0 md:-left-4 bg-accent p-6 rounded-2xl shadow-2xl rotate-[-4deg]"
            >
              <img
                src="https://res.cloudinary.com/dt5azqjuz/image/upload/f_auto,q_auto/eye_makeup_mfwkif.png"
                alt="Portfolio Image"
                loading="lazy"
              />
              <p className="text-primary text-xl leading-tight font-bold pt-2">
                100+ <br />
                <span className="text-sm uppercase tracking-tighter opacity-80 font-bold text-secondary">
                  Looks Created
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

// import { motion } from "framer-motion";
// import { Camera } from "lucide-react";

// const PortfolioSection = () => {
//   // Animation variants for staggering the text
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="relative w-full py-24 px-6 bg-light overflow-hidden flex flex-col items-center justify-center text-center"
//       id="portfolio"
//     >
//       {/* Decorative Background Elements */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-accent/10 rounded-full blur-[100px] -z-10"
//       />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="max-w-4xl"
//       >
//         {/* Floating Icon */}
//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center mb-6"
//         >
//           <div className="relative">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 border-2 border-dashed border-secondary rounded-full scale-150"
//             />
//             <div className="bg-primary p-4 rounded-full shadow-2xl relative z-10">
//               <Camera className="text-accent w-6 h-6" />
//             </div>
//           </div>
//         </motion.div>

//         {/* Title */}
//         <motion.h2
//           variants={itemVariants}
//           className="text-primary text-3xl md:text-5xl font-bold tracking-tighter mb-8 leading-[1.1]"
//         >
//           Build Your <br />
//           <span className="text-secondary ">
//             Professional Portfolio
//           </span>
//         </motion.h2>

//         {/* Description Paragraph 1 */}
//         <motion.p
//           variants={itemVariants}
//           className="text-primary text-md md:text-xl font-medium leading-tight mb-3 tracking-tighter"
//         >
//           A strong portfolio helps every beauty professional show their work
//           confidently. At Belleza Beauty School Rudrapur, students get
//           opportunities to create professional looks during their training.
//         </motion.p>

//         {/* Description Paragraph 2 */}
//         <motion.p
//           variants={itemVariants}
//           className="text-secondary font-semibold text-md max-w-2xl mx-auto leading-tight tracking-tight"
//         >
//           From bridal looks to party makeup, hairstyling, nails, and skin
//           services, students build practical work experience that helps them
//           start freelancing, apply for salon jobs, and promote their services
//           online.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// export default PortfolioSection;
