import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const FloatingContact = () => {
  // Separate states so they don't both open at the same time
  const [isPhoneExpanded, setIsPhoneExpanded] = useState(false);
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  //   const variants = {
  //     collapsed: { width: 45 },
  //     expanded: { width: "auto", minWidth: 45 }, // "auto" allows it to fit text perfectly
  //   };

  const textVariants = {
    collapsed: { opacity: 0, x: -10, display: "none" },
    expanded: { opacity: 1, x: 0, display: "block" },
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919012360088", "_blank");
  };

  return (
    <div className="flex flex-col fixed bottom-5 left-5 z-100">
      <motion.div
        className="flex flex-col items-start gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {/* Phone Item */}
        <motion.div
          className="flex items-center bg-primary text-light rounded-full overflow-hidden cursor-pointer shadow-lg border border-light"
          initial="collapsed"
          // Hover for desktop, animate based on state for tap
          whileHover="expanded"
          animate={isPhoneExpanded ? "expanded" : "collapsed"}
          onTap={() => setIsPhoneExpanded(!isPhoneExpanded)}
          variants={{
            collapsed: { width: 45 },
            expanded: { width: 220 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={openWhatsApp}
        >
          <div className="flex items-center justify-center w-11.25 h-11.25 shrink-0">
            <Phone size={18} className="text-accent" />
          </div>

          <motion.span
            className="text-xs font-bold whitespace-nowrap pr-6"
            variants={textVariants}
            transition={{ duration: 0.3 }}
          >
            +91 90123 60088
          </motion.span>
        </motion.div>

        {/* Address Item */}
        <motion.div
          className="flex items-center bg-primary text-light rounded-full overflow-hidden cursor-pointer shadow-lg border border-light"
          initial="collapsed"
          whileHover="expanded"
          animate={isMapExpanded ? "expanded" : "collapsed"}
          onTap={() => setIsMapExpanded(!isMapExpanded)}
          variants={{
            collapsed: { width: 45 },
            expanded: { width: 360 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center w-11.25 h-11.25 shrink-0">
            <MapPin size={18} className="text-accent" />
          </div>

          <motion.span
            className="text-xs font-bold whitespace-nowrap pr-6"
            variants={textVariants}
            transition={{ duration: 0.3 }}
          >
            Rudrapur, Uttarakhand
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingContact;
