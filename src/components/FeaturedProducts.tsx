
import React from 'react';
import ProductCard from './ProductCard';

// Sample product data
const featuredProducts = [
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
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Our most popular styles customers love</p>
          </div>
          <a href="/collection" className="text-shoe-primary hover:text-shoe-dark font-medium hidden md:block">
            View All →
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center md:hidden">
          <a href="/collection" className="text-shoe-primary hover:text-shoe-dark font-medium">
            View All Products →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
