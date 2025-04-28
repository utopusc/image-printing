'use client';

import { HeroButton } from "@/components/ui/hero-button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      id: 'digital-printing',
      title: 'Digital Printing',
      imageSrc: '/image/digital.png',
      description: 'High-quality digital printing for business cards, flyers, brochures, and more with quick turnaround times.',
      features: [
        'Full-color printing with exceptional quality',
        'Fast turnaround - same day service available',
        'Variable data printing for personalized materials',
        'Wide range of paper stocks and finishes',
        'Eco-friendly printing options'
      ],
      applications: ['Business Cards', 'Flyers', 'Brochures', 'Postcards', 'Booklets', 'Menus', 'Stickers']
    },
    {
      id: 'large-format',
      title: 'Large Format Printing',
      imageSrc: '/image/largeformatprinting.png',
      description: 'Eye-catching banners, posters, and signage to showcase your brand in large scale exhibitions and events.',
      features: [
        'High-resolution printing up to 1440dpi',
        'Wide format prints up to 60 inches wide',
        'Indoor and outdoor durable materials',
        'Weather-resistant and UV-protected options',
        'Custom sizes and shapes available'
      ],
      applications: ['Posters', 'Banners', 'Canvas Prints', 'Signage', 'Trade Show Displays', 'Window Graphics', 'Vehicle Wraps']
    },
    {
      id: 'offset-printing',
      title: 'Offset Printing',
      imageSrc: '/image/Offset.png',
      description: 'Professional offset printing for catalogs, magazines, books and packaging with exceptional quality and detail.',
      features: [
        'Superior image quality with sharp details',
        'Cost-effective for large volume printing',
        'Pantone color matching available',
        'Special finishes including foil stamping and embossing',
        'Premium paper stocks and binding options'
      ],
      applications: ['Catalogs', 'Magazines', 'Books', 'Packaging', 'Calendars', 'Annual Reports', 'Direct Mail Campaigns']
    }
  ];

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-8">
      <motion.h1 
        className="text-5xl md:text-6xl font-light text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our <span className="text-[#ff5941]">Services</span>
      </motion.h1>
      <motion.p 
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore our comprehensive range of printing services designed to bring your ideas to life with exceptional quality and attention to detail.
      </motion.p>

      {/* Services List */}
      <div className="space-y-24 mb-16">
        {services.map((service, index) => (
          <motion.div 
            key={service.id} 
            id={service.id}
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300`}>
              <div className="lg:w-1/2 flex justify-center">
                <Image 
                  src={service.imageSrc} 
                  alt={service.title}
                  className="w-full max-w-md rounded-xl object-contain h-[300px] md:h-[350px] transition-transform duration-700"
                  width={500}
                  height={350}
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 relative inline-block">
                  {service.title}
                  <div className="absolute h-1 w-full bg-[#ff5941] bottom-0 left-0 -mb-2"></div>
                </h2>
                <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#ff5941] mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <HeroButton href="/contact" variant="primary">
                  Get Started
                </HeroButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to bring your project to life?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Contact our team today for a personalized quote or to discuss your specific printing needs. We&apos;re here to help bring your vision to reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <HeroButton href="/contact" variant="primary">
            Contact Us
          </HeroButton>
          <HeroButton href="/services" variant="secondary">
            Explore Services
          </HeroButton>
        </div>
      </motion.div>
    </div>
  );
} 