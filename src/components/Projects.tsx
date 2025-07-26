import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      description: "130-unit luxury apartment complex with modern amenities",
      location: "Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=500&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Commercial Office Building",
      description: "15-story commercial building with contemporary design",
      location: "Palakollu, Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d707a?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Luxury Villa Development",
      description: "Premium villa project with custom interior design",
      location: "Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Industrial Complex",
      description: "Large-scale industrial facility with modern infrastructure",
      location: "Palakollu, Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Shopping Mall Renovation",
      description: "Complete renovation and modernization of retail space",
      location: "Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=500&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Residential Township",
      description: "Integrated township with parks and recreational facilities",
      location: "Palakollu, Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=500&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-blue mb-6 font-poppins">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Discover our portfolio of successful construction projects across Telangana and Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-card hover:shadow-button/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-construction-blue mb-3 font-poppins">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-poppins">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-construction-yellow-dark">
                  <span className="font-medium font-poppins">📍 {project.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;