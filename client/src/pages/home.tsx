import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AcademySolution from "@/components/academy-solution";
import Testimonials from "@/components/testimonials";
import TeamShowcase from "@/components/team-showcase";
import ConsultationForm from "@/components/consultation-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AcademySolution />
      <Testimonials />
      <TeamShowcase />
      <ConsultationForm />
      {/* Simple Footer */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="py-8">
            <div className="text-center space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-600 font-medium mb-2">Questions? We're here to help!</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="mailto:info@propertiselect.com" className="flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@propertiselect.com
                  </a>
                  <a href="tel:+971523748260" className="flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +971523748260
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <p className="text-gray-500">© 2025 PropertiSelect FZE LLC. All rights reserved.</p>
                <a 
                  href="/terms"
                  className="text-gray-500 hover:text-brand-secondary transition-colors duration-300 underline"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
