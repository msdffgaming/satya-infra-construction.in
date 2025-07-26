import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="text-center md:text-left">
            <img
              src="/lovable-uploads/edd78d70-1524-40be-8362-2bc6851aab65.png"
              alt="Satya Infra Logo"
              className="h-16 w-auto mx-auto md:mx-0 mb-4 filter brightness-0 invert"
            />
            <p className="text-white/80 font-poppins">
              Building Your Vision with Strength & Style
            </p>
          </div>

          {/* Quick Contact */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-construction-yellow font-poppins">
              Quick Contact
            </h4>
            <div className="space-y-2 text-white/80 font-poppins">
              <p>📞 80191 89847</p>
              <p>📧 satyainfraconstructions@gmail.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-construction-yellow font-poppins">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-construction-yellow hover:text-construction-blue transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-construction-yellow hover:text-construction-blue transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 font-poppins">
            © 2025 Satya Infra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;