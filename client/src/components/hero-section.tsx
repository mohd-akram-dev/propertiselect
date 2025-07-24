import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import { useState } from "react";
import dubaiSkylineImage from "@assets/image_1751887370667.png";

export default function HeroSection() {
  const [hoveredButton, setHoveredButton] = useState(false);

  const openCalendly = () => {
    window.open('https://calendly.com/consult-propertiselect', '_blank');
  };



  

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Hero Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="lg:text-6xl font-bold mb-8 text-brand-primary text-[50px]">Helping Investors Start or Expand Their Dubai Real Estate Portfolio.</h1>
            <p className="text-lg mb-10 text-gray-500 leading-relaxed">Leveraging proven frameworks, market insight, tools, technology & data to avoid overvalued or underperforming investments that risk illiquidity and opportunity cost.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
              <Button 
                onClick={openCalendly}
                className="group relative bg-brand-secondary text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2 flex items-center gap-2"
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Book Consultation</span>
              </Button>
            </div>
          </div>
          
          {/* VSL Section */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-gray-100 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1102476832?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="PropertiSelect"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
