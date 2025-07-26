import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      state: "Telangana",
      city: "Hyderabad",
      description: "Our primary hub serving the greater Hyderabad metropolitan area"
    },
    {
      state: "Andhra Pradesh", 
      city: "Palakollu",
      description: "Expanding our services to serve the coastal Andhra region"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-blue mb-6 font-poppins">
            Our Locations
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Strategically positioned to serve clients across Telangana and Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-card hover:shadow-button/20"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-construction-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-construction-yellow/20 transition-colors">
                  <MapPin className="w-8 h-8 text-construction-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-construction-blue mb-2 font-poppins">
                  {location.city}
                </h3>
                <p className="text-construction-yellow-dark font-medium mb-4 font-poppins">
                  {location.state}
                </p>
                <p className="text-muted-foreground font-poppins">
                  {location.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;