"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  
  // Filter out the Menu item for navigation items
  const navigationItems = items.filter(item => item.name !== "Menu")
  // Get the Menu item separately
  const menuItem = items.find(item => item.name === "Menu")

  useEffect(() => {
    // Determine the active tab based on current path when page loads
    const currentPath = pathname || "/"
    const matchingItem = items.find(item => 
      item.url === currentPath || 
      (currentPath !== "/" && item.url !== "/" && currentPath.startsWith(item.url))
    )
    setActiveTab(matchingItem ? matchingItem.name : items[0].name)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [pathname, items])

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 md:px-6 rounded-full transition-colors",
                "text-foreground/80 hover:text-[#ff5941]",
                isActive && "bg-muted text-[#ff5941]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#ff5941]/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#ff5941] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#ff5941]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#ff5941]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#ff5941]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        
        {menuItem && (
          <div className="relative" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 md:px-6 rounded-full transition-colors",
                "text-foreground/80 hover:text-[#ff5941]",
                isMenuOpen && "bg-muted text-[#ff5941]",
              )}
            >
              <span className="hidden md:inline">Menu</span>
              <span className="md:hidden">
                <menuItem.icon size={18} strokeWidth={2.5} />
              </span>
            </button>
            
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 bottom-full mb-2 bg-white shadow-xl rounded-xl p-2 min-w-[200px]"
                >
                  <div className="py-1">
                    <Link 
                      href="/about" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                    <Link 
                      href="/faq" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                    <hr className="my-1" />
                    <Link 
                      href="/terms" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Terms & Conditions
                    </Link>
                    <Link 
                      href="/privacy" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
} 