
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Help = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a backend service
    console.log('Form submitted:', contactForm);
    // Show success toast
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
      duration: 5000,
    });
    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gray-900 text-white py-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Center</h1>
              <p className="text-lg text-gray-300">
                Find answers to common questions or get in touch with our support team
              </p>
            </div>
          </div>
        </div>
        
        {/* Help Content */}
        <div className="container-custom py-12">
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="faq">FAQs</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>
            
            {/* FAQs Tab */}
            <TabsContent value="faq">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg">How do I find my shoe size?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 mb-4">
                        To find your perfect shoe size, follow these steps:
                      </p>
                      <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                        <li>Place a piece of paper on the floor against a wall.</li>
                        <li>Stand on the paper with your heel against the wall.</li>
                        <li>Mark the longest part of your foot on the paper.</li>
                        <li>Measure the distance from the wall to the mark.</li>
                        <li>Use our size chart to find your corresponding shoe size.</li>
                      </ol>
                      <p className="mt-4 text-gray-700">
                        For the most accurate fit, measure both feet and use the larger measurement.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg">What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        We accept various payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are securely processed and your information is never stored on our servers.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg">How do I track my order?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Once your order ships, you'll receive a confirmation email with a tracking number and link. You can also track your order by logging into your account and viewing your order history. Please allow 24-48 hours for tracking information to update after receiving your shipping confirmation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg">Are your shoes true to size?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Most of our shoes fit true to size, but there may be slight variations depending on the style and model. We recommend checking the specific product description for sizing guidance. If you're between sizes, we generally suggest going up a half size for the best fit.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg">Do you ship internationally?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Yes, we ship to most countries worldwide. International shipping rates and delivery times vary based on location. You can see the shipping options and estimated delivery times during checkout. Please note that international orders may be subject to import duties and taxes, which are the responsibility of the recipient.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-lg">How do I care for my shoes?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 mb-4">
                        Proper care will extend the life of your shoes. Here are some general tips:
                      </p>
                      <ul className="list-disc ml-5 space-y-2 text-gray-700">
                        <li>Clean regularly with appropriate cleaning products for the material</li>
                        <li>Allow shoes to air dry naturally, away from direct heat</li>
                        <li>Use shoe trees to help maintain shape when not worn</li>
                        <li>Rotate between different pairs to give each shoe time to rest</li>
                        <li>Apply waterproofing spray to protect against the elements</li>
                      </ul>
                      <p className="mt-4 text-gray-700">
                        Specific care instructions may vary by material. Check the product description or contact us for material-specific advice.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            {/* Shipping & Returns Tab */}
            <TabsContent value="shipping">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Shipping & Returns</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-shoe-dark">Shipping Information</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Domestic Shipping</h4>
                          <p className="text-gray-700">
                            We offer standard shipping (3-5 business days) and express shipping (1-2 business days) options for all domestic orders. Orders over $100 qualify for free standard shipping.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">International Shipping</h4>
                          <p className="text-gray-700">
                            International shipping is available to most countries. Delivery times typically range from 7-14 business days, depending on the destination and customs clearance process.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Processing Time</h4>
                          <p className="text-gray-700">
                            Orders are typically processed within 1-2 business days. During peak seasons or promotions, processing may take an additional 1-2 days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-shoe-dark">Return Policy</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Return Window</h4>
                          <p className="text-gray-700">
                            We offer a 30-day return policy for unworn shoes in their original packaging with all tags attached. Returns initiated after 30 days may be accepted for store credit only.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">How to Return</h4>
                          <p className="text-gray-700">
                            To initiate a return, please log into your account and select the order you wish to return. Follow the prompts to generate a return shipping label. Once we receive and inspect your return, we'll process your refund to the original payment method.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Return Shipping</h4>
                          <p className="text-gray-700">
                            For domestic returns, we provide a prepaid shipping label (the cost of $6.95 will be deducted from your refund). International customers are responsible for return shipping costs and ensuring the package clears customs.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Exchanges</h4>
                          <p className="text-gray-700">
                            We recommend returning the unwanted item for a refund and placing a new order for the desired item to ensure faster processing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Contact Us Tab */}
            <TabsContent value="contact">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                        <Input 
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                        <Input 
                          id="subject"
                          name="subject"
                          value={contactForm.subject}
                          onChange={handleInputChange}
                          placeholder="Subject of your inquiry"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                        <Textarea 
                          id="message"
                          name="message"
                          value={contactForm.message}
                          onChange={handleInputChange}
                          placeholder="How can we help you?"
                          rows={5}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                  </div>
                  
                  <div>
                    <div className="bg-gray-50 p-6 rounded-lg h-full">
                      <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-2 text-shoe-primary">Customer Support</h4>
                          <p className="text-gray-700 mb-1">Email: support@shoegalaxy.com</p>
                          <p className="text-gray-700">Phone: (123) 456-7890</p>
                          <p className="text-gray-600 text-sm mt-2">Available Monday-Friday, 9am-6pm EST</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2 text-shoe-primary">Headquarters</h4>
                          <p className="text-gray-700">
                            123 Shoe Lane<br />
                            Footwear City, FC 12345<br />
                            United States
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2 text-shoe-primary">Follow Us</h4>
                          <p className="text-gray-700">
                            Stay up to date with our latest products, promotions, and footwear tips on our social media channels.
                          </p>
                          <div className="flex space-x-4 mt-3">
                            <a href="#" className="text-gray-600 hover:text-shoe-primary">
                              <span>Facebook</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-shoe-primary">
                              <span>Instagram</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-shoe-primary">
                              <span>Twitter</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
