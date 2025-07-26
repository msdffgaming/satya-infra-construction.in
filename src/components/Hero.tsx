import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-10 top-1/4 w-96 h-96 opacity-50">
          <img
            src="/lovable-uploads/edd78d70-1524-40be-8362-2bc6851aab65.png"
            alt="Satya Infra Background"
            className="w-full h-full object-contain filter grayscale"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/lovable-uploads/edd78d70-1524-40be-8362-2bc6851aab65.png"
              alt="Satya Infra Logo"
              className="h-32 md:h-40 w-auto mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Building Your Vision with
            <span className="block text-construction-yellow">
              Strength & Style
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-poppins font-light">
            Professional construction services across Telangana and Andhra Pradesh
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-construction-yellow hover:bg-construction-yellow-dark text-construction-blue font-semibold px-8 py-4 text-lg shadow-button font-poppins"
            >
              Explore Our Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-construction-blue px-8 py-4 text-lg font-poppins"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;