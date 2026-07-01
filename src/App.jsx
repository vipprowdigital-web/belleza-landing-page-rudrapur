// import "./App.css";
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
import Courses from "./components/Courses";
import CareerJourney from "./components/CareerJourney";
import RudrapurLaunch from "./components/RudrapurLaunch";
import { baseUrl } from "./utils/baseUrl";
import { useEffect, useState } from "react";

function App() {
  const [appConfig, setAppConfig] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchAppConfig = async () => {
      try {
        const response = await fetch(`${baseUrl}/app-config/public`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        // console.log("Response: ", response);

        if (response.ok) {
          const data = await response.json();
          // console.log("Response DATA: ", data.data);
          setAppConfig(data.data);
        } else {
          console.error("Couldn't fetch testimonies.");
        }
      } catch {
        console.error("Error while fetching testimonials.");
      }
    };
    fetchAppConfig();
  }, []);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch(`${baseUrl}/gallery/active`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        // console.log("Response: ", response);

        if (response.ok) {
          const data = await response.json();
          // console.log("Response DATA: ", data.data);
          setGallery(data.data);
        } else {
          console.error("Couldn't fetch gallery images.");
        }
      } catch {
        console.error("Error while fetching gallery images.");
      }
    };
    fetchGalleryImages();
  }, []);

  const hero = gallery.find((gal) => gal.category === "hero-section");
  const about = gallery.find((gal) => gal.category === "about-section");
  // const whatYouGet = gallery.find(
  //   (gal) => gal.category === "what-you-get-section",
  // );
  // const portfolio = gallery.find((gal) => gal.category === "portfolio-section");
  const finalCta = gallery.find((gal) => gal.category === "final-cta-section");

  return (
    <div className="flex flex-col justify-center items-center bg-light">
      <Navbar />
      <HeroSection phone={appConfig.phoneNumber} hero={hero} />
      <Courses />
      <LeadForm
        address={appConfig.companyAddress}
        phone={appConfig.phoneNumber}
      />
      <About about={about} />
      <LearningProcess />
      <CareerJourney />
      <WhyChooseUs />
      {/* <ProfessionalCourses /> */}
      <WhatYouGet />
      <PortfolioSection />
      <CareerOpportunities />
      <RudrapurLaunch />
      <EligibilitySection />
      <AdmissionsCTA />
      <StudentExperience />
      <FAQs />
      <FinalCTA
        address={appConfig.companyAddress}
        phone={appConfig.phoneNumber}
        finalCta={finalCta}
      />
      <Footer appConfig={appConfig} />
    </div>
  );
}

export default App;
