import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useState } from "react";

export default function ConsultationForm() {
  const [hoveredButton, setHoveredButton] = useState(false);

  const openCalendly = () => {
    window.open("https://calendly.com/consult-propertiselect", "_blank");
  };

  return (
    <section id="consultation" className="py-24 bg-brand-primary text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">Book Consultation</h2>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">Apply now to see if you qualify for a consultation.</p>
          <Button 
            onClick={openCalendly}
            className="group relative bg-brand-secondary text-white px-12 py-6 rounded-xl text-xl font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2 inline-flex items-center space-x-4"
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-brand-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Calendar className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Book Consultation</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
