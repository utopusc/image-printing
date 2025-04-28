'use client';

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-light text-center mb-6">
        About <span className="text-[#ff5941]">Us</span>
      </h1>
      
      <div className="prose mx-auto lg:prose-lg">
        <p className="lead text-xl text-gray-700 mb-6">
          At Image Printing Service, we transform your cherished moments into stunning physical prints that last a lifetime.
        </p>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p>
            Founded in 2018 by a team of photography enthusiasts, we noticed a gap in the market for premium quality photo printing services that truly honor your memories. What started as a small operation has grown into a trusted name in the photo printing industry, serving thousands of happy customers nationwide.
          </p>
          <p className="mt-4">
            Our passion for preserving memories drives everything we do. We believe that in today&apos;s digital world, physical prints hold a special place — they connect us to our past in a tangible way that digital images simply cannot.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p>
            We&apos;re committed to providing the highest quality printing services using state-of-the-art technology and premium materials. Every order is handled with care, from the moment you upload your photos to the final delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold mb-2">Quality</h3>
              <p className="text-sm">We use professional-grade printers and premium papers to ensure exceptional results every time.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold mb-2">Sustainability</h3>
              <p className="text-sm">Our packaging is eco-friendly, and we continuously work to reduce our environmental impact.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold mb-2">Security</h3>
              <p className="text-sm">Your photos are handled with the utmost care and privacy. We never share or use your images without permission.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p>
            Our dedicated team consists of photographers, print specialists, and customer service professionals who share a common goal: to help you preserve your most precious memories.
          </p>
          <p className="mt-4">
            From helping you select the right printing options to carefully packaging your order, every team member is committed to providing an exceptional experience.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="text-[#ff5941] hover:underline inline-block"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
} 