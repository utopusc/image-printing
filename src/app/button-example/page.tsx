'use client';

import { HeroButton } from '@/components/ui/hero-button';

export default function ButtonExamplePage() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Button Examples</h1>
      
      <div className="space-y-12 max-w-md mx-auto">
        <section>
          <h2 className="text-2xl font-bold mb-6">Primary Button (Orange)</h2>
          <div className="space-y-6">
            <div>
              <HeroButton href="/upload" variant="primary">
                Upload Photos
              </HeroButton>
            </div>
            <div>
              <HeroButton href="/upload" variant="primary" fullWidth>
                Full Width Button
              </HeroButton>
            </div>
            <div>
              <HeroButton href="/upload" variant="primary" delay={0.5}>
                Upload with Arrow <span className="ml-1">→</span>
              </HeroButton>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Secondary Button (Black)</h2>
          <div className="space-y-6">
            <div>
              <HeroButton href="/pricing" variant="secondary">
                See Pricing
              </HeroButton>
            </div>
            <div>
              <HeroButton href="/pricing" variant="secondary" fullWidth>
                Full Width Button
              </HeroButton>
            </div>
            <div>
              <HeroButton href="/pricing" variant="secondary" delay={0.5}>
                See Pricing <span className="ml-1">→</span>
              </HeroButton>
            </div>
          </div>
        </section>
        
        <div className="text-center mt-12">
          <a href="/" className="text-[#ff5941] hover:underline">
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
} 