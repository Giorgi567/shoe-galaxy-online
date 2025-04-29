
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-lg md:text-xl text-gray-300">
                Discover the journey behind ShoeGalaxy and our commitment to quality footwear
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Mission */}
        <section className="py-12 md:py-20">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1912&auto=format&fit=crop" 
                  alt="Our mission" 
                  className="rounded-lg shadow-lg object-cover h-full w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At ShoeGalaxy, we believe that everyone deserves to step into shoes that not only look good but feel amazing. Our mission is to provide high-quality, comfortable, and stylish footwear that empowers you to walk confidently through life.
                </p>
                <p className="text-gray-700">
                  We combine innovative design with traditional craftsmanship to create shoes that stand the test of time. Every pair is carefully made with attention to detail, ensuring durability and comfort with each step you take.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our History Timeline */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-shoe-primary"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {/* 2010 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="font-bold text-xl mb-2">2010</h3>
                    <h4 className="text-shoe-primary font-semibold mb-2">The Beginning</h4>
                    <p className="text-gray-700">ShoeGalaxy was founded with a simple goal: to create comfortable shoes without sacrificing style.</p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block">
                    <div className="bg-white rounded-lg shadow-md p-4 w-16 h-16 flex items-center justify-center -ml-8 z-10 relative">
                      <div className="bg-shoe-primary rounded-full w-8 h-8"></div>
                    </div>
                  </div>
                </div>
                
                {/* 2015 */}
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                    <h3 className="font-bold text-xl mb-2">2015</h3>
                    <h4 className="text-shoe-primary font-semibold mb-2">Expanding Our Reach</h4>
                    <p className="text-gray-700">We opened our first flagship store and expanded our online presence to reach customers worldwide.</p>
                  </div>
                  <div className="md:w-1/2 md:pr-12 hidden md:block">
                    <div className="bg-white rounded-lg shadow-md p-4 w-16 h-16 flex items-center justify-center -mr-8 float-right z-10 relative">
                      <div className="bg-shoe-primary rounded-full w-8 h-8"></div>
                    </div>
                  </div>
                </div>
                
                {/* 2020 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="font-bold text-xl mb-2">2020</h3>
                    <h4 className="text-shoe-primary font-semibold mb-2">Sustainable Innovation</h4>
                    <p className="text-gray-700">We launched our eco-friendly line, using sustainable materials and responsible manufacturing processes.</p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block">
                    <div className="bg-white rounded-lg shadow-md p-4 w-16 h-16 flex items-center justify-center -ml-8 z-10 relative">
                      <div className="bg-shoe-primary rounded-full w-8 h-8"></div>
                    </div>
                  </div>
                </div>
                
                {/* Today */}
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="font-bold text-xl mb-2">Today</h3>
                    <h4 className="text-shoe-primary font-semibold mb-2">Looking Forward</h4>
                    <p className="text-gray-700">We continue to grow while staying true to our roots: creating comfortable, high-quality shoes for every occasion.</p>
                  </div>
                  <div className="md:w-1/2 md:pr-12 hidden md:block">
                    <div className="bg-white rounded-lg shadow-md p-4 w-16 h-16 flex items-center justify-center -mr-8 float-right z-10 relative">
                      <div className="bg-shoe-primary rounded-full w-8 h-8"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-12 md:py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-4 relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">Alex Morgan</h3>
                <p className="text-shoe-primary font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Alex brings 15 years of footwear industry experience and a passion for innovative design.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-4 relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
                    alt="Design Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">Sara Johnson</h3>
                <p className="text-shoe-primary font-medium mb-2">Design Director</p>
                <p className="text-gray-600 text-sm">
                  Sara leads our design team with her creative vision and eye for emerging trends.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-4 relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1770&auto=format&fit=crop"
                    alt="Head of Manufacturing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">James Wilson</h3>
                <p className="text-shoe-primary font-medium mb-2">Head of Manufacturing</p>
                <p className="text-gray-600 text-sm">
                  James ensures our shoes meet the highest standards of quality and durability.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="mb-4 relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                    alt="Customer Experience Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">Emily Chen</h3>
                <p className="text-shoe-primary font-medium mb-2">Customer Experience</p>
                <p className="text-gray-600 text-sm">
                  Emily works tirelessly to ensure every customer has an exceptional shopping experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-12 md:py-20 bg-shoe-dark text-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-shoe-primary">Quality First</h3>
                <p className="text-gray-300">
                  We never compromise on the quality of our materials or craftsmanship. Every pair of shoes is built to last.
                </p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-shoe-primary">Sustainable Practices</h3>
                <p className="text-gray-300">
                  We're committed to reducing our environmental impact through responsible sourcing and manufacturing processes.
                </p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-shoe-primary">Customer Satisfaction</h3>
                <p className="text-gray-300">
                  Your comfort and satisfaction are our top priorities. We stand behind every product we sell.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
