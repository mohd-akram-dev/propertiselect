import { Users, AlertTriangle, TrendingUp, CheckCircle, Cpu } from "lucide-react";

export default function AcademySolution() {
  return (
    <section id="academy" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-8">Academy & Solution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
            Comprehensive training and expert guidance to help you succeed in Dubai's dynamic real estate market.
          </p>
          
          {/* Horizontal Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-rotate-1 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-brand-primary mb-3">All-in-One Investor Toolkit</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Get everything you need to invest smartly— academy curriculum, cashflow and ROI tools, portfolio tracker, decision checklists, Dubai Land Department data analysis, and proven frameworks.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:rotate-1 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-brand-primary mb-3">PropNow AI trusted by Top Investors</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Leverage the same Artificial Intelligence Technology used by multi-billion dollar real estate firms to identify high-performing opportunities with confidence.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-rotate-1 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-brand-primary mb-3">Access to Trusted Partners</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Connect with a vetted network of top-tier professionals across legal, mortgage, inspection, and corporate services—everything you need, in one place.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: 3 Components */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-brand-primary mb-12">Biggest Risk</h3>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="border-l-4 border-red-400 bg-red-50 text-gray-800 px-4 py-2 rounded-lg mb-6 font-semibold text-lg">
                The #1 Risk: Making the Wrong Investment Decision and Losing Money
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Buying property that doesn't grow or generate income</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Overpaying or stuck in bad deals from poor due diligence</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Trusting aggressive agents or biased info</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Misunderstanding legal/financial issues causing delays or costs</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Bad timing — wrong area or market moment</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Regret from acting too fast or too late</p>
                </li>
              </ul>
            </div>
            
            <h3 className="text-3xl font-bold text-brand-primary mb-12">Who It's For</h3>
            
            <div className="bg-white p-8 pb-16 rounded-2xl shadow-sm border border-gray-100">
              <div className="border-l-4 border-brand-secondary bg-green-50 text-gray-800 px-4 py-2 rounded-lg mb-6 font-semibold text-lg">
                The academy is for aspiring and growth-focused property investors who:
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Want to invest but feel overwhelmed or unsure where to start</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Tired of conflicting advice and looking for a clear, proven roadmap</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Have capital but need a smart strategy</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Aim to build long-term wealth and passive income</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">Ready to buy their first high-performing property or grow beyond just owning a home</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Column: The Solution */}
          <div>
            <h3 className="text-3xl font-bold text-brand-primary mb-12">The Solution</h3>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-2xl font-semibold text-brand-secondary mb-8">PropertiSelect Value Proposition</h4>
              
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Luxury Dubai real estate development" 
                className="w-full h-64 object-cover rounded-xl mb-8" 
              />
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-start space-x-4 mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-secondary mt-1 flex-shrink-0" />
                    <h5 className="text-xl font-semibold text-brand-primary">Expert-Led Education & Tools</h5>
                  </div>
                  <p className="text-gray-700 leading-relaxed ml-10">Master the full investment journey and get 6 months access to our guided curriculum, and 12 month access to PropNow AI-powered deal analysis, ROI tools, and portfolio tracker trusted by billion-dollar firms.</p>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-secondary mt-1 flex-shrink-0" />
                    <h5 className="text-xl font-semibold text-brand-primary">Real Market Intelligence</h5>
                  </div>
                  <p className="text-gray-700 leading-relaxed ml-10">Access exclusive Dubai Land Department data and weekly insights to spot high-ROI opportunities and avoid bad deals.</p>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-secondary mt-1 flex-shrink-0" />
                    <h5 className="text-xl font-semibold text-brand-primary">Investor Readiness & Risk Management</h5>
                  </div>
                  <p className="text-gray-700 leading-relaxed ml-10">Get clarity on strategy, finances, and legal setup. Use proven checklists and playbooks to avoid common mistakes and execute with confidence.</p>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-secondary mt-1 flex-shrink-0" />
                    <h5 className="text-xl font-semibold text-brand-primary">Network & Ongoing Support</h5>
                  </div>
                  <p className="text-gray-700 leading-relaxed ml-10">Join live sessions, connect with vetted experts, and tap into a community of active investors.</p>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-secondary mt-1 flex-shrink-0" />
                    <h5 className="text-xl font-semibold text-brand-primary">Scalable Strategies for Growth</h5>
                  </div>
                  <p className="text-gray-700 leading-relaxed ml-10">Learn how to grow and optimize your portfolio through refinancing, capital recycling, and strategic exits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
