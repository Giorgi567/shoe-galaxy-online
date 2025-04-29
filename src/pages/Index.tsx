
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <FeaturedProducts />
        
        {/* Categories */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop)"}}>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">Running</h3>
                  <p className="text-gray-600 mb-4">Performance shoes for runners of all levels.</p>
                  <Button variant="outline">Explore</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop)"}}>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">Casual</h3>
                  <p className="text-gray-600 mb-4">Everyday comfort with stylish designs.</p>
                  <Button variant="outline">Explore</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1769&auto=format&fit=crop)"}}>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">Formal</h3>
                  <p className="text-gray-600 mb-4">Elegant footwear for professional settings.</p>
                  <Button variant="outline">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-shoe-dark text-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="text-gray-300 mb-6">Subscribe to get special offers, free giveaways, and new release notifications.</p>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-shoe-primary text-gray-900"
                />
                <Button className="bg-shoe-primary hover:bg-shoe-secondary text-white font-medium py-3 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
