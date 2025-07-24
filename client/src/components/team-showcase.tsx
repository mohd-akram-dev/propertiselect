import { Building, Star, Users, Calendar, Home, University, Handshake } from "lucide-react";
import philipImage from "@assets/Philip_1752930599108.jpeg";
import kayImage from "@assets/kay-image.jpeg";
import hannahImage from "@assets/Hannah_1752930599109.jpeg";
import jasonImage from "@assets/Jason_1752930599109.jpg";
import LinkedinIcon from "@assets/LinkedIn_icon.svg_1752942490673.png";

const teamMembers = [
  {
    name: "Philip Iwema",
    title: "Founder",
    image: philipImage,
    hasLinkedIn: true,
    linkedinUrl: "https://www.linkedin.com/in/philip-iwema/"
  },
  {
    name: "Kay",
    title: "COO",
    image: kayImage,
    hasLinkedIn: false
  },
  {
    name: "Hannah Davidian",
    title: "Head of Product",
    image: hannahImage,
    hasLinkedIn: true,
    linkedinUrl: "https://www.linkedin.com/in/hannahdavidian/"
  },
  {
    name: "Jason Baxter",
    title: "Partner - Technology",
    image: jasonImage,
    hasLinkedIn: true,
    linkedinUrl: "https://www.linkedin.com/in/jbax-fortcapital/"
  }
];

const expertiseAreas = [
  {
    icon: Building,
    title: "Tailored Mortgage Advice",
    color: "bg-primary"
  },
  {
    icon: Star,
    title: "Preferred FX Rates",
    color: "bg-accent"
  },
  {
    icon: Users,
    title: "Company Setup & Visas",
    color: "bg-green-500"
  },
  {
    icon: University,
    title: "Property Inspection Service",
    color: "bg-red-500"
  },
  {
    icon: Calendar,
    title: "Legal Ownership Structuring",
    color: "bg-purple-500"
  },
  {
    icon: Home,
    title: "Top Property Advisors",
    color: "bg-orange-500"
  },
  {
    icon: Star,
    title: "Non-resident Bank Account opening",
    color: "bg-blue-500"
  },
  {
    icon: Handshake,
    title: "Short-term rental Management",
    color: "bg-teal-500"
  }
];

export default function TeamShowcase() {
  return (
    <>
      {/* Team Section */}
      <section id="who-are-we" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-8">Who are we</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Meet our industry-leading professionals committed to your success.</p>
          </div>
          
          {/* Featured Team Members */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => {
              // Individual positioning for each team member
              let objectPosition = 'center 20%';
              if (member.name === 'Philip Iwema') {
                objectPosition = 'center top'; // Position Philip's image at the very top to show his full head
              } else if (member.name === 'Hannah Davidian') {
                objectPosition = 'center 10%'; // Zoom out Hannah's image
              } else if (member.name === 'Jason Baxter') {
                objectPosition = 'center 2%'; // Move Jason's image up more to show his full head
              }
              
              return (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 text-center group">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={`${member.name}`} 
                      className="w-full h-48 object-cover object-center" 
                      style={{ objectPosition }}
                    />
                    <div className="absolute inset-0 bg-brand-secondary opacity-25 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                <div className="p-4">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-brand-primary">{member.name}</h3>
                    {member.hasLinkedIn && (
                      <a 
                        href={member.linkedinUrl || "#"} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-secondary hover:text-brand-primary transition-colors duration-200"
                        aria-label={`${member.name} LinkedIn profile`}
                      >
                        <img src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-brand-secondary font-medium text-sm">{member.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Team Members Note */}
          <div className="text-center mb-0">
            <p className="text-gray-600 text-lg">+ 10 more experienced professionals</p>
          </div>
        </div>
      </section>

      {/* Exclusive Partner Access Section - Separate White Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Spacer for better scroll positioning */}
          <div id="partners" className="relative -top-24"></div>
          
          <div className="text-center mb-20">
            <h3 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-8">Exclusive Partner Access</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Access to a trusted network of industry-leading partners*</p>
          </div>
        
          {/* Team Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              const tiltClass = index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1';
              return (
                <div key={index} className={`bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md ${tiltClass} transition-all duration-300 ease-in-out`}>
                  <div className={`w-16 h-16 ${area.color === 'bg-primary' ? 'bg-brand-primary' : area.color === 'bg-accent' ? 'bg-brand-secondary' : area.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-brand-primary">{area.title}</h4>
                </div>
              );
            })}
          </div>
        
          {/* Disclaimer */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">* Third-party fee(s) may apply</p>
          </div>
        </div>
      </section>
    </>
  );
}