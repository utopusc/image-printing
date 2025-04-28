'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/magnetic-button';

type HeroButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  fullWidth?: boolean;
  delay?: number;
};

export function HeroButton({
  href,
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
  delay = 0.3,
}: HeroButtonProps) {
  // Define color schemes based on variant
  const colorScheme = {
    primary: 'bg-[#ff5941] hover:bg-[#ff5941]/90 text-white',
    secondary: 'bg-black hover:bg-black/90 text-white',
  };

  return (
    <MagneticButton distance={0.3}>
      <Link href={href} className={fullWidth ? 'w-full block' : ''}>
        <motion.button
          className={`${colorScheme[variant]} transition-colors px-8 py-3 text-base md:text-lg font-medium rounded-full shadow-lg cursor-pointer ${
            fullWidth ? 'w-full' : ''
          } ${className}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay }}
        >
          {children}
        </motion.button>
      </Link>
    </MagneticButton>
  );
} 