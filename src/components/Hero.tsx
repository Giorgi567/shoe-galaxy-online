
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1770&auto=format&fit=crop)'
        }}
      />
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Step Into <span className="text-shoe-primary">Style</span> & <span className="text-shoe-primary">Comfort</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover our collection of premium footwear designed for style, comfort, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/collection" className="btn-primary inline-block text-center">
              Shop Collection
            </Link>
            <Link to="/about" className="btn-secondary inline-block text-center text-gray-900">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
