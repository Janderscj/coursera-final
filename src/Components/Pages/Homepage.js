import HeroSection from "../Sections/HeroSection";
import SpecialSection from "../Sections/SpecialsSection";
import TestimonialSection from "../Sections/Testimonials";
import AboutSection from "../Sections/AboutSection";
import Footer from "../Footer";

function Homepage() {
  return (
    <>
      <HeroSection />
      <SpecialSection />
      <TestimonialSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Homepage;
