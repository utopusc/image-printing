"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
  category: string
}

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("all")
  
  const faqItems: FAQItem[] = [
    {
      question: "How long does printing and shipping take?",
      answer: "Standard orders are typically processed within 1-2 business days. Shipping time depends on your location and selected shipping method. Standard shipping usually takes 3-5 business days, while expedited shipping can take 1-2 business days.",
      category: "orders"
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept most common image formats including JPEG, PNG, TIFF, and HEIC. For best quality, we recommend high-resolution files with at least 300 DPI.",
      category: "technical"
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "You can cancel or modify your order within 2 hours of placing it by contacting our customer support. Once your order enters production, we cannot cancel or modify it.",
      category: "orders"
    },
    {
      question: "What print sizes do you offer?",
      answer: "We offer a wide range of print sizes including 4×6, 5×7, 8×10, 11×14, and 16×20 inches. Custom sizes are also available upon request.",
      category: "products"
    },
    {
      question: "Do you offer framing services?",
      answer: "Yes, we offer high-quality frames in various styles and materials. You can select framing options during checkout or order frames separately.",
      category: "products"
    },
    {
      question: "How should I prepare my images for best print quality?",
      answer: "For optimal print quality, use high-resolution images (300 DPI or higher), ensure proper lighting and color balance, and avoid heavy cropping or over-filtering. If you're unsure, our team can provide a free quality assessment before printing.",
      category: "technical"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay. Payment information is securely processed and we never store your full credit card details.",
      category: "payment"
    },
    {
      question: "Can I return my order if I'm not satisfied?",
      answer: "Yes, we offer a 100% satisfaction guarantee. If you're not completely satisfied with your prints, please contact us within 14 days of receiving your order for a replacement or refund.",
      category: "returns"
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can view estimated costs and delivery times during checkout.",
      category: "shipping"
    },
    {
      question: "What paper types do you offer?",
      answer: "We offer several paper options including glossy, matte, pearl, metallic, and fine art papers. Each has unique characteristics that enhance different types of photography.",
      category: "products"
    },
  ]
  
  const categories = ["all", "orders", "products", "technical", "payment", "shipping", "returns"]
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Find answers to common questions about our printing services, ordering process, and more.
      </p>
      
      {/* Search and Filter */}
      <div className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeCategory === category
                  ? "bg-[#0015ff] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* FAQ Items */}
      <div className="space-y-4 mb-12">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 pt-0 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No questions found matching your search.</p>
            <button 
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("all")
              }}
              className="mt-2 text-[#0015ff] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Contact CTA */}
      <div className="bg-gray-50 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
        <p className="mb-4">We&apos;re here to help with any questions you may have.</p>
        <Link 
          href="/contact" 
          className="inline-block bg-[#0015ff] text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </Link>
      </div>
      
      <div className="text-center mt-12">
        <Link href="/" className="text-[#0015ff] hover:underline">
          ← Back to home
        </Link>
      </div>
    </main>
  )
} 