
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-shoe-primary">ShoeGalaxy</h3>
            <p className="text-gray-300">
              Your destination for premium footwear. Find the perfect pair for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-shoe-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-shoe-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-shoe-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-shoe-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/collection" className="text-gray-300 hover:text-shoe-primary transition-colors">Collection</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-shoe-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-shoe-primary transition-colors">Help</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-shoe-primary transition-colors">Running</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-shoe-primary transition-colors">Casual</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-shoe-primary transition-colors">Athletic</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-shoe-primary transition-colors">Formal</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-shoe-primary transition-colors">Sandals</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-shoe-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Shoe Lane, Footwear City, FC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-shoe-primary flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-shoe-primary flex-shrink-0" />
                <span className="text-gray-300">contact@shoegalaxy.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} ShoeGalaxy. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-shoe-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-shoe-primary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
