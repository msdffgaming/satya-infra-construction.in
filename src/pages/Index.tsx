import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
