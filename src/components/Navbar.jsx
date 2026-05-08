import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#courses" },
    { name: "Career", href: "#career" },
    { name: "Experience", href: "#testimony" },
    { name: "FAQ", href: "#faqs" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-500 ${
        scrolled
          ? "bg-primary backdrop-blur-lg shadow-lg py-3"
          : "bg-primary py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div>
          <img
            src="/assets/images/logos/belleza_logo.svg"
            alt="Belleza Logo"
            className="w-25 object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold text-sm uppercase tracking-widest transition-colors relative group ${scrolled ? "text-accent" : "text-accent"}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className={`px-6 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-primary hover:bg-secondary transition-all ${scrolled ? "bg-accent text-primary" : "bg-accent text-primary"}`}
            onClick={() => scrollTo("contact")}
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden text-primary p-2 ${scrolled ? "text-accent" : "text-accent"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-primary z-99 lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-light uppercase text-xl font-semibold hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8 flex flex-col items-center gap-6">
              {/* <a
                href="tel:9012360088"
                className="text-accent text-xl font-bold flex items-center gap-2"
              >
                <Phone /> 90123 60088
              </a> */}
              <button
                className="bg-accent text-primary px-10 py-4 rounded-full font-black text-lg"
                onClick={() => {
                  scrollTo("contact");
                  setIsOpen(false);
                }}
              >
                APPLY NOW
              </button>
            </div>
            <div
              className="absolute top-10 right-10"
              onClick={() => setIsOpen(false)}
            >
              <X className="text-accent font-bold" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
