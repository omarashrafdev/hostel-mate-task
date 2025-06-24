import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Companies from "../components/sections/Companies";
import Services from "../components/sections/Services";
import CTA from "../components/sections/CTA";
import Footer from "../components/sections/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
