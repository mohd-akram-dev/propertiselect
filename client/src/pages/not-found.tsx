import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import logo from "@assets/image_1752939467469.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="PropertiSelect" className="h-8 w-8" />
              <h1 className="text-2xl font-bold text-brand-primary">PropertiSelect</h1>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main 404 Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="text-center">
          <div className="text-[120px] md:text-[160px] font-bold text-brand-primary/8 leading-none select-none text-center mb-8">
            404
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-brand-primary mb-8">Page Not Found</h1>
            <Button 
              variant="outline" 
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>


    </div>
  );
}
