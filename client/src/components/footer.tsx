import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Calendar } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [hoveredButton, setHoveredButton] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/consult-propertiselect', '_blank');
  };

  return (
    <footer className="bg-brand-primary text-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">PropertySelect Academy</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Expert guidance and comprehensive training for Dubai real estate investment success. Join hundreds of successful investors who trust our proven strategies.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-blue-100 hover:text-brand-secondary cursor-pointer transition-colors duration-300" />
              <Twitter className="w-6 h-6 text-blue-100 hover:text-brand-secondary cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-6 h-6 text-blue-100 hover:text-brand-secondary cursor-pointer transition-colors duration-300" />
              <Instagram className="w-6 h-6 text-blue-100 hover:text-brand-secondary cursor-pointer transition-colors duration-300" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("academy")}
                  className="text-blue-100 hover:text-brand-secondary transition-colors duration-300 text-left"
                >
                  Academy & Solution
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="text-blue-100 hover:text-brand-secondary transition-colors duration-300 text-left"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("team")}
                  className="text-blue-100 hover:text-brand-secondary transition-colors duration-300 text-left"
                >
                  Our Team
                </button>
              </li>
              <li>
                <div
                  className="group relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 inline-block"
                  onMouseEnter={() => setHoveredButton(true)}
                  onMouseLeave={() => setHoveredButton(false)}
                  onClick={openCalendly}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-blue-100 hover:text-brand-secondary transition-colors duration-300 text-left flex items-center gap-2 relative z-10 py-1 px-2 rounded-lg">
                    <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Book Consultation
                  </div>
                </div>
              </li>

            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-blue-100">Investment Strategy</li>
              <li className="text-blue-100">Property Management</li>
              <li className="text-blue-100">Mortgage Advice</li>
              <li className="text-blue-100">Legal Support</li>
              <li className="text-blue-100">Visa Processing</li>
              <li className="text-blue-100">Portfolio Optimization</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-blue-100">
                <MapPin className="w-6 h-6 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span>+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <span>info@propertyselect.ae</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-200 border-opacity-30 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            <p className="text-blue-100">
              © 2025 PropertiSelect FZE LLC. All rights reserved.
            </p>
            <span className="text-blue-200 hidden sm:inline">|</span>
            <a 
              href="/terms"
              className="text-blue-100 hover:text-brand-secondary transition-colors duration-300 underline"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
