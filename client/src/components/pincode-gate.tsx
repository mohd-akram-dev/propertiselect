import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

interface PincodeGateProps {
  onSuccess: () => void;
}

export default function PincodeGate({ onSuccess }: PincodeGateProps) {
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const correctPin = "1996";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a brief loading state for better UX
    setTimeout(() => {
      if (pincode === correctPin) {
        onSuccess();
      } else {
        setError("Invalid access code. Please try again.");
        setPincode("");
      }
      setIsLoading(false);
    }, 800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 4) {
      setPincode(value);
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-brand-primary mb-2">PropertiSelect Academy</h1>
          <p className="text-gray-600">Enter access code to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
              Access Code
            </label>
            <div className="relative">
              <input
                type={showPin ? "text" : "password"}
                id="pincode"
                value={pincode}
                onChange={handleInputChange}
                placeholder="Enter 4-digit code"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all duration-200 text-center text-lg font-mono tracking-widest"
                maxLength={4}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brand-primary transition-colors duration-200"
                disabled={isLoading}
              >
                {showPin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={pincode.length !== 4 || isLoading}
            className="w-full bg-brand-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-brand-primary/90 focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Verifying...</span>
              </div>
            ) : (
              "Access Website"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">Secure access to PropertiSelect Academy platform</p>
        </div>
      </div>
    </div>
  );
}