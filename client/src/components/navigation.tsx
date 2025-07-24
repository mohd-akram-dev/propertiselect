import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import logo from "@assets/image_1752939467469.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/consult-propertiselect', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="PropertiSelect" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-brand-primary">PropertiSelect</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <button 
                onClick={() => scrollToSection("academy")}
                className="text-brand-primary hover:text-brand-secondary text-sm font-medium transition-colors duration-300"
              >
                Academy & Solution
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-brand-primary hover:text-brand-secondary text-sm font-medium transition-colors duration-300"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("who-are-we")}
                className="text-brand-primary hover:text-brand-secondary text-sm font-medium transition-colors duration-300"
              >
                Who Are We
              </button>
              <button 
                onClick={() => scrollToSection("partners")}
                className="text-brand-primary hover:text-brand-secondary text-sm font-medium transition-colors duration-300"
              >
                Exclusive Partners
              </button>
              <Button 
                onClick={openCalendly}
                className="bg-brand-secondary text-white hover:bg-opacity-90 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 py-6 space-y-4 bg-white border-t border-gray-100">
              <button 
                onClick={() => scrollToSection("academy")}
                className="block text-brand-primary hover:text-brand-secondary font-medium w-full text-left py-2"
              >
                Academy & Solution
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block text-brand-primary hover:text-brand-secondary font-medium w-full text-left py-2"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("who-are-we")}
                className="block text-brand-primary hover:text-brand-secondary font-medium w-full text-left py-2"
              >
                Who Are We
              </button>
              <button 
                onClick={() => scrollToSection("partners")}
                className="block text-brand-primary hover:text-brand-secondary font-medium w-full text-left py-2"
              >
                Exclusive Partners
              </button>
              <button 
                onClick={openCalendly}
                className="block text-brand-secondary font-semibold w-full text-left py-2 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
