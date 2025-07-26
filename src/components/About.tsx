import { Card, CardContent } from "@/components/ui/card";
import { Building2, Palette, Wrench, Home } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Building2,
      title: "Building Construction",
      description: "Complete construction solutions from foundation to finishing"
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Creative and functional interior design services"
    },
    {
      icon: Wrench,
      title: "Renovations",
      description: "Expert renovation and remodeling services"
    },
    {
      icon: Home,
      title: "Building Services",
      description: "Comprehensive building-related services and maintenance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-blue mb-6 font-poppins">
            About Satya Infra
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-poppins">
            With years of experience in the construction industry, Satya Infra is committed to 
            delivering exceptional building solutions across Telangana and Andhra Pradesh. 
            Our mission is to transform your vision into reality with uncompromising quality, 
            innovative design, and reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-card hover:shadow-button/20"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-construction-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-construction-yellow/20 transition-colors">
                  <service.icon className="w-8 h-8 text-construction-blue" />
                </div>
                <h3 className="text-xl font-semibold text-construction-blue mb-4 font-poppins">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-poppins">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;