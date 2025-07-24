import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Terms() {
  const [, setLocation] = useLocation();

  const goBack = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Button
            onClick={goBack}
            variant="ghost"
            className="mb-4 text-brand-primary hover:text-white hover:bg-brand-secondary flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-brand-primary">Terms & Conditions</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="prose prose-lg max-w-none">
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">OUR COMMITMENT</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This page represents a legal document and contains the terms and conditions governing your use of our website, www.propertiselect.com (our "Website"). By using our Website, you agree to fully comply with and be bound by the following terms and conditions each time you use our Website, and these terms and conditions constitute a binding agreement between you and us (the "Agreement"). Please review the following terms carefully.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">OUR SERVICES</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Company, PropertiSelect, offers real estate investment education, coaching content, and related services and tools (referred to herein as "Services").
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">DEFINITIONS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The terms "us" or "we" or "our" refers to PropertiSelect, the owner of this Website. A "User" is someone that merely browses our Website or who has logged into our Website to obtain, use or just learn more about our Services. All text, information, graphics, design, and data offered through our Website are collectively known as our "Content".
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">ACCEPTANCE OF AGREEMENT</h2>
              <div className="border-l-4 border-brand-secondary bg-green-50 text-gray-800 p-4 mb-4 rounded-lg">
                <p className="font-semibold">
                  THIS AGREEMENT CONTAINS WARRANTY DISCLAIMERS AND OTHER PROVISIONS THAT LIMIT OUR LIABILITY TO YOU. PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY AND IN THEIR ENTIRETY, AS USING, ACCESSING AND/OR BROWSING OUR WEBSITE CONSTITUTES ACCEPTANCE OF THESE TERMS AND CONDITIONS. IF YOU DO NOT AGREE TO BE BOUND TO EACH AND EVERY TERM AND CONDITION SET FORTH HEREIN, PLEASE EXIT OUR WEBSITE IMMEDIATELY AND DO NOT USE, ACCESS AND/OR BROWSE IT FURTHER.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Except as otherwise noted, this Agreement constitutes the entire and only Agreement between you and PropertiSelect, and supersedes all other agreements, representations, warranties and understandings with respect to the use of our Website and the subject matter contained herein. However, in order for you to use our Services, you will be required to agree to additional terms and conditions that will govern our provision of, and your payment for, the Services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may amend this Agreement at any time without specific notice to you. The latest Agreement will be posted on our Website, and you should review this Agreement prior to using our Website. After any revisions to this Agreement are posted, you agree to be bound to any changes to this Agreement. Therefore, it is important for you to visit this page periodically to review the Agreement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please read this Agreement carefully and save it. If you do not accept this Agreement, do not access and use our Website. If you have already accessed our Website and do not accept this Agreement, you should immediately discontinue use of our Website and Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">LIMITED LICENSE</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PropertiSelect grants you a non-exclusive, non-transferable, revocable license to access and use our Website strictly in accordance with this Agreement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">LEGAL COMPLIANCE</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to comply with all applicable domestic and international laws, statutes, ordinances and regulations regarding your use of our Website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">OUR RELATIONSHIP TO YOU</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Agreement in no way creates any agency, partnership, joint venture, employee-employer or franchisor-franchisee relationship between you and PropertiSelect.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">OUR INTELLECTUAL PROPERTY</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Website may contain our service marks or trademarks as well as those of our affiliates or other companies, in the form of words, graphics, and logos. Your use of our Website or Services does not constitute any right or license for you to use our service marks or trademarks, without the prior written permission of PropertiSelect. Our Content, as found within our Website and Services, is protected under United Arab Emirates and international copyrights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">COPYRIGHT INFRINGEMENT NOTICE UNDER UAE LAW</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to respecting intellectual property rights and complying with copyright regulations in the United Arab Emirates. Our content is protected under Federal Law No. 38 of 2021 on Copyrights and Neighboring Rights, which governs the use, distribution, and reproduction of creative works in the UAE.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you believe any of your copyrighted material has been used on our Website without appropriate authorization and in a way that constitutes copyright infringement, please notify us with a written notice that includes the following details:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>Your name and contact information (including email, phone number, and physical address)</li>
                <li>A description of the copyrighted work you believe has been infringed</li>
                <li>The specific location (URL or page reference) on our Website where the allegedly infringing material appears</li>
                <li>A statement confirming your good faith belief that the use of the material is not authorized by you, your agent, or the law</li>
                <li>A statement, under penalty of perjury, that the information in your notice is accurate and you are the copyright owner or authorized to act on their behalf</li>
                <li>Your signature (electronic or physical)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once we receive a complete notice, we will review the claim and take appropriate action in accordance with applicable UAE laws and enforcement protocols.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">ELIGIBILITY AND REGISTRATION FOR USERSHIP</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any use of or access to our Website by anyone under 18 is unauthorized, unlicensed and in violation of these Terms and Conditions. By using our Website, you represent and warrant that you are 18 or older and that you agree to and will abide by all of the terms and conditions of this Agreement. PropertiSelect has sole right and discretion to determine whether to accept a User, and may reject a User's registration, with or without explanation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In order to receive communications and other materials from us, you must indicate your consent by affirmatively "opting in" or specifically requesting that we send you a proposal, quote, educational materials, white paper or other documents or materials.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">CONTENT DISCLAIMER</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Content may be changed without notice and is not guaranteed to be complete, correct, timely, current or up-to-date. Similar to any printed materials, the Content may become out-of-date. We undertake no obligation to update any Content on our Website. We reserve the right to make alterations or deletions to the Content at any time without notice.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">ERRORS, CORRECTIONS AND CHANGES</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not represent or otherwise warrant that our Website will be error-free, free from viruses or other harmful components, or that we will correct any errors. We do not represent or otherwise warrant that the information available on or through our Website will be correct, accurate, timely or otherwise reliable. We may make changes to the features, functionality or content of our Website at any time. We reserve the right in our sole discretion to edit or remove any documents, information or other content appearing on our Website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">FINANCIAL, LEGAL AND OTHER ADVICE DISCLAIMER</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg">
                <p className="text-gray-800 font-semibold">
                  You hereby acknowledge that nothing contained in our Website shall constitute financial, investment, legal and/or other professional advice and that no professional relationship of any kind is created between you and PropertiSelect. You hereby agree that you shall not make any financial, investment, legal and/or other decision based in whole or in part on anything contained in our Website.
                </p>
              </div>
            </section>

            <div className="bg-gray-50 border-l-4 border-brand-secondary p-6 rounded-r-lg">
              <p className="text-gray-700 font-medium">
                Still have questions? Contact us at{" "}
                <a 
                  href="mailto:info@propertiselect.com" 
                  className="text-brand-secondary hover:text-brand-primary transition-colors"
                >
                  info@propertiselect.com
                </a>
                {" "}or call us at{" "}
                <a 
                  href="tel:+971523748260" 
                  className="text-brand-secondary hover:text-brand-primary transition-colors"
                >
                  +971523748260
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}