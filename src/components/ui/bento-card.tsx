"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"
import { SlidingNumber } from "@/components/ui/sliding-number"

interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[]
  delay: number
  animated?: boolean
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  delay,
  animated = true
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  }

  const [isMounted, setIsMounted] = useState(false);
  const [targetValue, setTargetValue] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    // If the value is a number, animate to it
    if (typeof value === 'number') {
      setTargetValue(value);
    } else if (typeof value === 'string' && !isNaN(parseFloat(value))) {
      // Try to parse string values like "1.5M+" to get the numeric part
      const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
      setTargetValue(numericValue);
    }
  }, [value]);

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-white dark:bg-zinc-900 rounded-xl shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      suppressHydrationWarning
    >
      {isMounted && (
        <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      )}
      <motion.div
        className="relative z-10 p-3 sm:p-5 md:p-8 text-zinc-900 dark:text-white backdrop-blur-sm"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 
          className="text-sm sm:text-base md:text-lg font-light" 
          variants={item}
        >
          {title}
        </motion.h3>
        
        <motion.div
          className="text-2xl sm:text-4xl md:text-5xl font-light mb-4"
          variants={item}
        >
          {typeof value === 'number' && animated ? (
            <SlidingNumber value={targetValue} className="font-light" />
          ) : typeof value === 'string' && animated && !isNaN(parseFloat(value.replace(/[^\d.-]/g, ''))) ? (
            <div className="flex items-center">
              <SlidingNumber value={targetValue} className="font-light" />
              <span className="ml-1">{value.replace(/[\d.-]/g, '')}</span>
            </div>
          ) : (
            value
          )}
        </motion.div>
        
        {subtitle && (
          <motion.p 
            className="text-sm text-zinc-600 dark:text-zinc-300" 
            variants={item}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}

const BentoPrintingStats = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-6">Print <span className="text-[#ff5941]">Statistics</span></h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl text-center font-medium text-zinc-600 leading-relaxed">
            Our track record of delivering high-quality printing services and customer satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-[800px] md:h-[600px]">
          <div className="md:col-span-2">
            <BentoCard
              title="Print Orders Completed"
              value="10,000+"
              subtitle="Quality prints delivered to happy customers"
              colors={["#ff5941", "#ff8e7a", "#ffb4a8"]}
              delay={0.2}
            />
          </div>
          <BentoCard
            title="Customer Satisfaction"
            value="98%"
            subtitle="Based on verified customer reviews"
            colors={["#ff8e7a", "#ffb4a8", "#ff5941"]}
            delay={0.4}
          />
          <BentoCard
            title="Average Delivery Time"
            value="2 Days"
            subtitle="Fast and reliable service"
            colors={["#ff5941", "#d6380e", "#ff8e7a"]}
            delay={0.6}
          />
          <div className="md:col-span-2">
            <BentoCard
              title="Business Cards Printed"
              value="1.5M+"
              subtitle="Helping businesses make great first impressions"
              colors={["#d6380e", "#ff5941", "#ff8e7a"]}
              delay={0.8}
            />
          </div>
          <div className="md:col-span-3">
            <BentoCard
              title="Our Commitment to Quality"
              value="100%"
              subtitle="We guarantee the quality of our prints, offering reprints if you're not completely satisfied with the results"
              colors={["#ff5941", "#ff8e7a", "#b81c00"]}
              delay={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { BentoCard, BentoPrintingStats } 