import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import jasonImage from "@assets/jason-image.jpg";
import samuelRubenImage from "@assets/image_1753012203944.png";
import lindaImage from "@assets/linda_1752938508093.jpeg";
import oleImage from "@assets/ole_1752938508093.jpeg";
import vinceImage from "@assets/vince_1752940438915.jpeg";
import benjaminImage from "@assets/image_1753020120296.png";
import matthijsImage from "@assets/image_1753024202288.png";

const testimonials = [
  {
    name: "Jason Baxter",
    title: "CEO, Fostr; Co-founder & ex-CEO, Fort",
    image: jasonImage,
    text: "As someone who's spent years building Fort into a $2.1 billion AUM real estate company, I've seen firsthand how powerful AI can be when applied to investment decisions. At Fort, we used advanced AI technology to streamline acquisition, identify undervalued assets, and manage risk at scale - it was instrumental in how we grew the business.\n\nWhen I turned my focus to building a personal property portfolio in Dubai, I knew the same disciplined, data-driven approach was essential. That's when I started working with Philip.\n\nWhat stood out wasn't just his deep market understanding, but how his personal frameworks, checklists, and strategic insights perfectly complemented the AI systems I'd already trusted at Fort. Philip brought clarity to the Dubai market in a way few others can; translating complex local dynamics into actionable, high-confidence decisions.\n\nThanks to Philip's guidance, I was able to build my Dubai portfolio with the same precision and long-term focus that shaped what we built at Fort.\n\nIf you're serious about real estate investing, especially in a market as dynamic as Dubai, partnering with someone like Philip is a game-changer."
  },
  {
    name: "Ole van Vliet",
    title: "Founder, Hike Footwear",
    image: oleImage,
    text: "We've been actively investing in the property market and, with Philip's guidance, were able to acquire several properties that now form a well-diversified and strategically located portfolio. What really set his approach apart was the use of actual dubai real estate data, combined with in-depth benchmarking across branding, amenities, service levels, layouts, finishes, materials, and views.\n\nThanks to this process, we secured a property that was over 20% undervalued and has immense potential for continued growth. We feel confident about our purchases and look forward to expanding our portfolio even further through a clear and intentional strategy."
  },
  {
    name: "Samuel & Ruben Onuha",
    title: "Founders, ICON",
    image: samuelRubenImage,
    text: "Philip supported us across multiple real estate transactions and played a key role in helping us save hundreds of thousands of dollars in rent by showing us how to navigate the rules and regulations effectively. He understood our goals clearly and presented a curated list of properties that met our exact needs.\n\nAs we aggressively expand our portfolio, working with Philip has given us complete confidence. Together, we've defined a strategy that not only aligns with our vision but also positions us for continued success in future acquisitions. His expertise and commitment have been instrumental throughout our journey."
  },
  {
    name: "Benjamin W.",
    title: "Entrepreneur",
    image: benjaminImage,
    text: "I've worked closely with Philip and can confidently say his approach has been invaluable. With his guidance, I was able to clarify my investment strategy and execute it with precision. Thanks to his frameworks, I acquired multiple properties that aligned perfectly with both my future cashflow goals and long-term appreciation targets.\n\nWhat stood out most was Philip's ability to simplify complex legal and financial structures. He introduced me to a setup that not only protected my assets but also optimized for tax efficiency far beyond what I expected from conventional advisors.\n\nHis combination of insight, integrity, and strategic foresight makes him someone I would recommend to anyone serious about building a high-performing portfolio."
  },
  {
    name: "Matthijs Otterloo",
    title: "Founder & Owner of multiple e-commerce brands",
    image: matthijsImage,
    text: "Philip guided me throughout my real estate journey, helping me secure several properties that aligned perfectly with my investment criteria. We assessed each opportunity together, and his hands-on approach gave me both clarity and the confidence to move forward without hesitation.\n\nOne of the standout investments we made received an offer just a year later that was 20% above its purchase price translating into nearly 100% capital gains today, measured against my actual investment. What I value most is that Philip never oversells; he gives clear, realistic expectations and provides tailored, relevant guidance every step of the way. His support has been instrumental in shaping a well-performing portfolio."
  },
  {
    name: "Linda Troisfontaine",
    title: "Founder and former CEO, KeyBake",
    image: lindaImage,
    text: "Philip didn't just help me build a real estate portfolio in Dubai, he helped me build one that performs. With his guidance, we made strategic shifts based on ROI comparisons between short- and long-term models, and those decisions paid off: I achieved 32% capital gains in just 1.5 years, and I'm earning 8.2% net passive rental income.\n\nA key part of that success came from the renovation strategy he advised on, which directly contributed to the capital appreciation. He also coordinated a complete furniture package and handled the setup of all utilities, making the apartment fully turn-key. This meant I could start generating income from day one without needing to be on the ground or facing any delays.\n\nHe even made what I thought was impossible; opening a Dubai bank account without local residency. Not only possible, but hassle-free. On top of that, he helped me avoid over 5% in hidden currency conversion fees from developers and banks. From snagging inspections and renovation to financial structuring and beyond, Philip provided support on every front and delivered measurable results throughout."
  },
  {
    name: "Vince Nijhof",
    title: "Founder, Dore & Rose; Ecomflow; Hears; OOAK",
    image: vinceImage,
    text: "Working with Philip was a turning point for us. His client-first approach and detailed benchmarking process gave us the clarity we needed to start and grow our real estate portfolio in Dubai. Through his guidance, we were able to identify undervalued opportunities that led to multiple acquisitions and in less than a year, we saw capital gains approaching 60%, with projected returns around 9%.\n\nPhilip didn't just help us purchase property he helped us build a strategy. From navigating legal structures that ensured compliance while maximizing benefits, to securing tailored mortgage solutions and overseeing smooth transfers, his end-to-end support exceeded expectations.\n\nWe couldn't have asked for a more knowledgeable and trusted advisor on this journey."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const moveCarousel = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    } else {
      const newIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(newIndex);
    }
  };

  // Create infinite loop array by duplicating testimonials
  const getVisibleTestimonials = () => {
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
    // Show 3 on mobile (current in center), 5 on desktop (current at index 2)
    const isMobileView = window.innerWidth < 768;
    const visibleCount = isMobileView ? 3 : 5;
    const centerOffset = isMobileView ? 1 : 2; // Center position for mobile is index 1, desktop is index 2
    const startIndex = testimonials.length + currentIndex - centerOffset;
    return extendedTestimonials.slice(startIndex, startIndex + visibleCount).map((testimonial, index) => {
      const originalIndex = (currentIndex - centerOffset + index + testimonials.length) % testimonials.length;
      return { ...testimonial, originalIndex };
    });
  };

  return (
    <section id="testimonials" className="py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600">Built for those committed to making smart decisions and focused on long-term success.</p>
        </div>

        {/* Navigation Buttons Carousel */}
        <div className="relative mb-12 max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={() => moveCarousel('left')}
              className="p-2 rounded-full transition-all duration-300 mr-2 md:mr-4 bg-white hover:bg-gray-50 shadow-md text-gray-600 hover:text-gray-800 flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Testimonial Buttons Container */}
            <div className="overflow-hidden flex-1 max-w-[420px] sm:max-w-[600px] lg:max-w-[1200px]">
              <div className="flex gap-2 md:gap-3 transition-all duration-300">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <button
                    key={`${testimonial.originalIndex}-${index}`}
                    onClick={() => setCurrentIndex(testimonial.originalIndex)}
                    className={`flex flex-col items-center justify-center w-[130px] sm:w-[180px] lg:w-[220px] h-[110px] sm:h-[125px] lg:h-[138px] p-2 sm:p-3 lg:p-4 rounded-xl transition-all duration-300 flex-shrink-0 ${
                      testimonial.originalIndex === currentIndex
                        ? 'bg-brand-secondary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {/* Profile Image */}
                    <div className="relative mb-1 sm:mb-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                        style={
                          testimonial.name === "Benjamin W." 
                            ? { objectPosition: 'center 0%' }
                            : {}
                        }
                      />
                    </div>
                    
                    {/* Name */}
                    <span className={`font-semibold text-xs sm:text-sm text-center leading-tight mb-1 ${
                      testimonial.originalIndex === currentIndex ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </span>
                    
                    {/* Title */}
                    <span className={`text-[10px] sm:text-xs text-center leading-tight ${
                      testimonial.originalIndex === currentIndex ? 'text-white/90' : 'text-gray-500'
                    }`}>
                      {testimonial.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => moveCarousel('right')}
              className="p-2 rounded-full transition-all duration-300 ml-2 md:ml-4 bg-white hover:bg-gray-50 shadow-md text-gray-600 hover:text-gray-800 flex-shrink-0"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 max-w-6xl mx-auto h-[800px] flex flex-col">
          {/* Stars */}
          <div className={`flex justify-center space-x-1 mb-6 ${
            currentTestimonial.name === "Linda Troisfontaine" ? "lg:mt-12" :
            currentTestimonial.name === "Samuel & Ruben Onuha" || 
            currentTestimonial.name === "Benjamin W." || 
            currentTestimonial.name === "Matthijs Otterloo" || 
            currentTestimonial.name === "Ole van Vliet" ? "lg:mt-32" :
            currentTestimonial.name === "Vince Nijhof" ? "lg:mt-24" : ""
          }`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Quote */}
          <div className={`text-center mb-8 flex-1 flex overflow-hidden ${
            currentTestimonial.name === "Jason Baxter" 
              ? "items-start justify-center pt-4" 
              : "items-center justify-center"
          }`}>
            <div className="max-h-full overflow-y-auto">
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                {currentTestimonial.text.split('\n\n').map((paragraph, index) => (
                  <span key={index}>
                    {paragraph}
                    {index < currentTestimonial.text.split('\n\n').length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
              </blockquote>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-center relative -top-8">
            <div className="flex items-center space-x-4">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover object-center"
                style={
                  currentTestimonial.name === "Jason Baxter" 
                    ? { objectPosition: 'center 20%' } 
                    : currentTestimonial.name === "Benjamin W."
                    ? { objectPosition: 'center 0%' }
                    : {}
                }
              />
              <div className="text-left">
                <p className="font-bold text-xl text-brand-primary">{currentTestimonial.name}</p>
                <p className="text-brand-secondary font-medium">{currentTestimonial.title}</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}