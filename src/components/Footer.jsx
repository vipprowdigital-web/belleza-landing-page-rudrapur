import { Phone, MapPin, Globe } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";
import { openWhatsApp } from "../utils/openWhatsapp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-light pt-16 pb-8 sm:px-20 px-6">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter">
                Belleza{" "}
                <span className="text-accent italic">Beauty School</span>
              </h3>
              <p className="text-accent/60 text-[10px] uppercase tracking-[0.3em] font-bold mt-1">
                Rudrapur Branch
              </p>
            </div>
            <p className="text-light text-sm leading-relaxed max-w-xs">
              Professional Beauty Academy for Makeup, Hair, Nail, Skin &
              Cosmetology Courses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
                Academy
              </h4>
              <ul className="space-y-2 text-sm text-light/60">
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("about")}
                >
                  About Us
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("courses")}
                >
                  Courses
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("training")}
                >
                  Training Timeline
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("contact")}
                >
                  Contact
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
                Student Life
              </h4>
              <ul className="space-y-2 text-sm text-light/60">
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("career")}
                >
                  Career Opportunities
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("portfolio")}
                >
                  Portfolio
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("testimony")}
                >
                  Testimonials
                </li>
                <li
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => scrollTo("faqs")}
                >
                  FAQs
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-accent font-bold text-sm uppercase tracking-widest">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-light/70 leading-relaxed">
                  Rudrapur, Uttarakhand
                </p>
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={openWhatsApp}
              >
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <p className="text-sm text-light/70">+91 90123 60088</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="https://bellezaschool.com"
                  className="text-sm text-light/70 underline underline-offset-4 decoration-accent/30 hover:text-accent cursor-pointer"
                >
                  www.bellezaschool.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-light/40 font-bold">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Belleza Beauty School. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="https://vipprow.com"
              className="hover:text-accent cursor-pointer"
            >
              Developed by Vipprow
            </a>
            {/* <span className="hover:text-accent cursor-pointer">
              Terms of Service
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
