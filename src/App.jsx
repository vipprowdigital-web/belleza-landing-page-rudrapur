import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import LeadForm from "./components/LeadForm";
// import { motion } from "framer-motion";
// import { MapPin, Phone } from "lucide-react";
import WhyChooseUs from "./components/WhyChooseUs";
// import ProfessionalCourses from "./components/ProfessionalCourses";
import LearningProcess from "./components/LearningProcess";
import WhatYouGet from "./components/WhatYouGet";
import PortfolioSection from "./components/PortfolioSection";
import CareerOpportunities from "./components/CareerOpportunities";
import EligibilitySection from "./components/EligibilitySection";
import AdmissionsCTA from "./components/AdmissionsCTA";
import StudentExperience from "./components/StudentExperience";
import FAQs from "./components/FAQs";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import FloatingContact from "./components/FloatingContact";
import Courses from "./components/Courses";
import CareerJourney from "./components/CareerJourney";
import RudrapurLaunch from "./components/RudrapurLaunch";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-light">
      <HeroSection />
      <LeadForm />
      <About />
      <CareerJourney />
      <WhyChooseUs />
      {/* <ProfessionalCourses /> */}
      <Courses />
      <LearningProcess />
      <WhatYouGet />
      <PortfolioSection />
      <CareerOpportunities />
      <RudrapurLaunch />
      <EligibilitySection />
      <AdmissionsCTA />
      <StudentExperience />
      <FAQs />
      <FinalCTA />
      <Footer />
      <Navbar />
      {/* <FloatingContact /> */}
      {/* <div className="flex flex-col fixed bottom-5 left-5">
        <motion.div
          className="flex flex-col items-start mt-6 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="flex items-center bg-primary text-light rounded-full overflow-hidden cursor-pointer"
            initial="collapsed"
            whileHover="expanded"
            animate="collapsed"
            variants={{
              collapsed: { width: 45 },
              expanded: { width: 220 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center w-11.25 h-11.25 shrink-0">
              <Phone size={18} />
            </div>

            <motion.span
              className="text-xs whitespace-nowrap pr-5"
              variants={{
                collapsed: { opacity: 0, x: -10 },
                expanded: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              +91 90123 60088
            </motion.span>
          </motion.div>

          <motion.div
            className="flex items-center bg-primary text-light rounded-full overflow-hidden cursor-pointer"
            initial="collapsed"
            whileHover="expanded"
            animate="collapsed"
            variants={{
              collapsed: { width: 45 },
              expanded: { width: 380 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center w-11.25 h-11.25 shrink-0">
              <MapPin size={18} />
            </div>

            <motion.span
              className="text-xs whitespace-nowrap pr-5 mr-5"
              variants={{
                collapsed: { opacity: 0, x: -10 },
                expanded: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              Near Fountain Chowk, Nehru Colony, Dehradun, Uttarakhand
            </motion.span>
          </motion.div>
        </motion.div>
      </div> */}
    </div>
  );
}

export default App;
