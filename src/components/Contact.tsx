import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent successfully!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "80191 89847",
      href: "tel:8019189847",
      color: "text-green-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 80191 89847",
      href: "https://wa.me/918019189847",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      value: "satyainfraconstructions@gmail.com",
      href: "mailto:satyainfraconstructions@gmail.com",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-blue mb-6 font-poppins">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
            Ready to start your construction project? Get in touch with our expert team today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-construction-blue mb-8 font-poppins">
              Get In Touch
            </h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-button/20 transition-all duration-300">
                <CardContent className="p-6">
                  <a href={method.href} className="flex items-center group">
                    <div className="w-12 h-12 bg-construction-yellow/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-construction-yellow/20 transition-colors">
                      <method.icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-blue font-poppins">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-construction-blue transition-colors font-poppins">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-construction-blue mb-6 font-poppins">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-2 border-border focus:border-construction-blue font-poppins"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-border focus:border-construction-blue font-poppins"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="border-2 border-border focus:border-construction-blue font-poppins"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-construction-blue hover:bg-construction-blue/90 text-white shadow-button font-poppins"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;