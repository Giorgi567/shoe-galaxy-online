
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, SlidersHorizontal, X } from 'lucide-react';

// Sample product data
const products = [
  {
    id: '1',
    name: 'Ultra Boost Running',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1770&auto=format&fit=crop',
    category: 'Running'
  },
  {
    id: '2',
    name: 'Classic Formal Oxford',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1769&auto=format&fit=crop',
    category: 'Formal'
  },
  {
    id: '3',
    name: 'Air Cloud Casual',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1721&auto=format&fit=crop',
    category: 'Casual'
  },
  {
    id: '4',
    name: 'Street Style Sneakers',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop',
    category: 'Urban'
  },
  {
    id: '5',
    name: 'Pro Performance Trainer',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop',
    category: 'Training'
  },
  {
    id: '6',
    name: 'Everyday Comfort Slip-on',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=1770&auto=format&fit=crop',
    category: 'Casual'
  },
  {
    id: '7',
    name: 'Athletic Pro Runner',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop',
    category: 'Running'
  },
  {
    id: '8',
    name: 'Business Casual Loafer',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1770&auto=format&fit=crop',
    category: 'Formal'
  }
];

const Collection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Example for filtering products
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
    product.price >= priceRange[0] && 
    product.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gray-100 py-10">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold">Our Collection</h1>
            <p className="text-gray-600 mt-2">Discover the perfect shoes for every occasion</p>
          </div>
        </div>

        <div className="container-custom py-8">
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shoe-primary"
              />
            </div>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2 md:hidden w-full"
              onClick={() => setFilterOpen(true)}
            >
              <SlidersHorizontal size={18} />
              <span>Filters</span>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filter Panel - Desktop */}
            <div className="w-full md:w-64 hidden md:block">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-4">Filters</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <Slider
                    value={priceRange}
                    min={0}
                    max={300}
                    step={10}
                    onValueChange={(value) => setPriceRange(value)}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {['Running', 'Casual', 'Formal', 'Athletic', 'Urban'].map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox id={`category-${category}`} />
                        <label 
                          htmlFor={`category-${category}`}
                          className="text-sm text-gray-700 ml-2 cursor-pointer"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Sizes</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {['6', '7', '8', '9', '10', '11', '12'].map((size) => (
                      <div 
                        key={size}
                        className="border border-gray-300 rounded text-center py-1 cursor-pointer hover:border-shoe-primary hover:bg-gray-50"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Filter Panel */}
            {filterOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                <div className="bg-white h-full w-4/5 max-w-xs p-6 ml-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={() => setFilterOpen(false)}>
                      <X size={18} />
                    </Button>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <Slider
                      value={priceRange}
                      min={0}
                      max={300}
                      step={10}
                      onValueChange={(value) => setPriceRange(value)}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      {['Running', 'Casual', 'Formal', 'Athletic', 'Urban'].map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox id={`category-mobile-${category}`} />
                          <label 
                            htmlFor={`category-mobile-${category}`}
                            className="text-sm text-gray-700 ml-2 cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Sizes</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {['6', '7', '8', '9', '10', '11', '12'].map((size) => (
                        <div 
                          key={size}
                          className="border border-gray-300 rounded text-center py-1 cursor-pointer hover:border-shoe-primary hover:bg-gray-50"
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full" onClick={() => setFilterOpen(false)}>
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
              
              {filteredProducts.length > 0 && (
                <div className="mt-10 flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collection;
