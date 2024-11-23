import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PawPrint, Menu, X } from 'lucide-react';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/shop');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <PawPrint className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PetAgora</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-emerald-600">Features</a>
            <a href="#setup" className="text-gray-600 hover:text-emerald-600">Setup</a>
            <a href="#pricing" className="text-gray-600 hover:text-emerald-600">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-emerald-600">Testimonials</a>
            <button 
              onClick={() => {
                console.log('Button clicked');
                navigate('/shop');
              }}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Shop Now
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-emerald-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Features</a>
            <a href="#setup" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Setup</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Pricing</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">Testimonials</a>
            <button 
              onClick={handleShopNow}
              className="w-full text-left px-3 py-2 text-gray-600 hover:text-emerald-600"
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}