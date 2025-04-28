'use client';

import { LandingHero } from "@/components/ui/landing-hero";
import { VideoSection } from "@/components/ui/video-section";
import { BentoPrintingStats } from "@/components/ui/bento-card";
import { Footer } from "@/components/ui/footer";
import { HeroButton } from "@/components/ui/hero-button";
import Image from "next/image";

const services = [
  {
    id: 'digital-printing',
    title: 'Digital Printing',
    imageSrc: '/image/digital.png',
    description: 'High-quality digital printing for business cards, flyers, brochures, and more with quick turnaround times.',
    url: '/services#digital-printing'
  },
  {
    id: 'large-format',
    title: 'Large Format Printing',
    imageSrc: '/image/largeformatprinting.png',
    description: 'Eye-catching banners, posters, and signage to showcase your brand in large scale exhibitions and events.',
    url: '/services#large-format'
  },
  {
    id: 'offset-printing',
    title: 'Offset Printing',
    imageSrc: '/image/Offset.png',
    description: 'Professional offset printing for catalogs, magazines, books and packaging with exceptional quality and detail.',
    url: '/services#offset-printing'
  }
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-white">
      <LandingHero />
      <VideoSection />
      
      {/* Featured Services Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light text-center mb-6">
              Featured Products & <span className="text-[#ff5941]">Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={service.imageSrc} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    fill
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-center flex-grow">{service.description}</p>
                  <div className="text-center mt-auto">
                    <HeroButton 
                      href={service.url}
                      variant="secondary"
                      className="text-sm px-6 py-2"
                    >
                      View Details
                    </HeroButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <BentoPrintingStats />
      <Footer />
    </main>
  );
}
