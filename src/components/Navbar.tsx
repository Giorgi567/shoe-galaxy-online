
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-shoe-primary">ShoeGalaxy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-shoe-primary transition-colors">Home</Link>
            <Link to="/collection" className="font-medium text-gray-700 hover:text-shoe-primary transition-colors">Collection</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-shoe-primary transition-colors">About Us</Link>
            <Link to="/help" className="font-medium text-gray-700 hover:text-shoe-primary transition-colors">Help</Link>
          </div>

          {/* Shopping Bag Icon */}
          <div className="hidden md:flex items-center">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-shoe-accent text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-60" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 pb-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-shoe-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/collection" 
              className="font-medium text-gray-700 hover:text-shoe-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-700 hover:text-shoe-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/help" 
              className="font-medium text-gray-700 hover:text-shoe-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </Link>
            <div className="pt-2 flex items-center">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-6 w-6 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-shoe-accent text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
