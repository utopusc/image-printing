"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ConfirmationPage() {
  const [orderNumber, setOrderNumber] = useState<string>("")
  
  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString()
    setOrderNumber(randomOrderNumber)
  }, [])
  
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-xl w-full"
      >
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg 
              className="w-10 h-10 text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. We've received your printing request and are working on it.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-gray-600">Order Number:</p>
          <p className="text-xl font-mono font-bold">{orderNumber}</p>
        </div>
        
        <div className="text-left mb-8">
          <h2 className="font-semibold mb-2">What happens next?</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Our team will process your photos</li>
            <li>Your prints will be carefully prepared and packaged</li>
            <li>You'll receive a shipping confirmation with tracking details</li>
            <li>Your beautiful prints will arrive at your doorstep</li>
          </ol>
        </div>
        
        <div className="space-y-3">
          <Link 
            href="/" 
            className="bg-[#0015ff] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors block"
          >
            Return to Home
          </Link>
          
          <Link 
            href="/gallery" 
            className="text-[#0015ff] hover:underline block"
          >
            Browse More Photo Collections
          </Link>
        </div>
      </motion.div>
    </main>
  )
} 