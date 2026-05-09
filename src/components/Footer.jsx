import { Phone, MapPin, Globe } from "lucide-react";
import { scrollTo } from "../utils/scrollTo";
import { openWhatsApp } from "../utils/openWhatsapp";

const Footer = ({ appConfig }) => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "Facebook",
      link: appConfig.facebookLink,
      path: (
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      ),
      hover: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      link: appConfig.instagramLink,
      path: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      ),
      hover: "hover:text-pink-600",
    },
    {
      name: "Gmail",
      link: `mailto:${appConfig.email}`,
      path: (
        <>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </>
      ),
      hover: "hover:text-red-500",
    },
  ];

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
            <div className="flex gap-5 items-center">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target={social.name === "Gmail" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`text-primary bg-light rounded-full p-1.5 transition-all duration-300 transform hover:scale-125 ${social.hover}`}
                  aria-label={`Contact us via ${social.name}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
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
                {appConfig.companyAddress && appConfig.companyAddress[0] && (
                  <p className="text-sm text-light/70 leading-relaxed">
                    {appConfig.companyAddress[0].address}
                  </p>
                )}
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => openWhatsApp(appConfig.phoneNumber)}
              >
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <p className="text-sm text-light/70">
                  +91{" "}
                  {appConfig.phoneNumber?.replace(/(\d{5})(\d{5})/, "$1 $2")}
                </p>
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
