"use client"

import { Home, Menu, ChevronRight, Printer, FileText, Monitor, Layers, HelpCircle, Phone, Settings, Clock, MapPin, Mail } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Settings },
    { name: 'Contact', url: '/contact', icon: Phone },
  ]

  const printingServices = [
    { name: 'Digital Printing', icon: Printer, subcategories: ['Business Cards', 'Flyers', 'Brochures', 'Postcards'] },
    { name: 'Large Format', icon: Monitor, subcategories: ['Posters', 'Banners', 'Canvas Prints', 'Signage'] },
    { name: 'Offset Printing', icon: Layers, subcategories: ['Catalogs', 'Magazines', 'Books', 'Packaging'] },
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="fixed z-50 top-4 left-4 bg-white p-2 rounded-full shadow-lg lg:hidden hover:bg-gray-100 transition-colors"
        aria-label="Toggle sidebar menu"
      >
        <Menu size={24} className="text-gray-700 hover:text-[#ff5941] transition-colors" />
      </button>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && !isDesktop && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <motion.div 
        className={`fixed top-0 left-0 h-full bg-white z-50 rounded-tr-3xl rounded-br-3xl shadow-xl transition-all duration-300 transform ${
          isOpen || isDesktop ? 'translate-x-0' : '-translate-x-full'
        } ${isDesktop ? 'w-64' : 'w-80'}`}
        initial={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
        whileHover={{ 
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo Area */}
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#ff5941] to-[#ff9f41] bg-clip-text text-transparent">
                Image Printing
              </div>
            </Link>
          </div>

          {/* Primary Navigation */}
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href={item.url}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-white text-gray-700 hover:text-[#ff5941] transition-all duration-300 group relative overflow-hidden"
                      >
                        <Icon size={20} className="group-hover:scale-110 transition-transform z-10" />
                        <span className="font-medium z-10">{item.name}</span>
                        <motion.div
                          className="absolute inset-0 bg-orange-50/0"
                          whileHover={{
                            background: "rgba(255, 237, 213, 0.5)",
                            opacity: 1
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Services Section */}
          <div className="p-4 mt-2 bg-gradient-to-b from-white to-gray-50">
            <h3 className="text-xs font-bold uppercase text-gray-500 tracking-wider px-3 mb-3 flex items-center">
              <Printer size={14} className="mr-2" />
              Printing Services
            </h3>
            <ul className="space-y-2">
              {printingServices.map((service, index) => {
                const ServiceIcon = service.icon
                return (
                  <li key={index} className="rounded-xl overflow-hidden">
                    <details className="group">
                      <motion.summary
                        whileHover={{ scale: 1.02 }}
                        className="flex cursor-pointer items-center justify-between p-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white text-gray-700 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <ServiceIcon size={20} className="group-hover:text-[#ff5941] transition-colors" />
                          <span className="group-hover:text-[#ff5941] transition-colors">{service.name}</span>
                        </div>
                        <ChevronRight size={16} className="transform transition-transform group-hover:rotate-90 group-hover:text-[#ff5941]" />
                      </motion.summary>
                      <ul className="mt-1 ml-9 space-y-1 pl-2 border-l-2 border-gray-100">
                        {service.subcategories.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <motion.div
                              whileHover={{ scale: 1.02, x: 3 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Link
                                href={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={() => setIsOpen(false)}
                                className="block p-2 text-sm text-gray-600 hover:text-[#ff5941] hover:bg-orange-50 rounded-lg transition-all"
                              >
                                {sub}
                              </Link>
                            </motion.div>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Business Hours Section */}
          <div className="px-4 pt-4">
            <h3 className="text-xs font-bold uppercase text-gray-500 tracking-wider px-3 mb-3 flex items-center">
              <Clock size={14} className="mr-2" />
              Business Hours
            </h3>
            <div className="bg-gray-50 p-3 rounded-xl">
              <ul className="space-y-2 text-sm">
                {businessHours.map((schedule, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-4 pt-4">
            <h3 className="text-xs font-bold uppercase text-gray-500 tracking-wider px-3 mb-3 flex items-center">
              <Phone size={14} className="mr-2" />
              Contact Info
            </h3>
            <div className="space-y-3 text-sm pl-3">
              <motion.div 
                whileHover={{ scale: 1.05, x: 3 }}
                className="flex items-center gap-2"
              >
                <Phone size={16} className="text-[#ff5941]" />
                <a href="tel:4155537788" className="text-gray-700 hover:text-[#ff5941] transition-colors">415.553.7788</a>
              </motion.div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#ff5941]" />
                <span className="text-gray-700">436 NINTH STREET, SF</span>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05, x: 3 }}
                className="flex items-center gap-2"
              >
                <Mail size={16} className="text-[#ff5941]" />
                <a href="mailto:bentung@imageprinting.us" className="text-gray-700 hover:text-[#ff5941] transition-colors">bentung@imageprinting.us</a>
              </motion.div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-auto p-4 border-t border-gray-100">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle size={18} className="text-[#ff5941]" />
                <h3 className="font-semibold">Need Help?</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">Our experts are here to assist with your printing needs</p>
              <motion.div
                whileHover={{ scale: 1.05, x: 3 }}
                className="flex items-center gap-2 text-[#ff5941] font-medium"
              >
                <Phone size={16} />
                <a href="tel:4155537788" className="hover:underline">415.553.7788</a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Close button for mobile */}
          {!isDesktop && (
            <motion.button 
              onClick={toggleSidebar}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 text-center text-sm text-gray-500 hover:text-gray-700 bg-gray-50"
            >
              Close Menu
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Compact Horizontal Navigation for desktop (if needed) */}
      <div className="hidden fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-3">
            <nav className="flex gap-1 items-center">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={item.url}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-[#ff5941] transition-colors"
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
} 