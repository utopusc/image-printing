"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { motion, useSpring, useTransform, useScroll } from "framer-motion"

import { cn } from "@/lib/utils"

interface FloatingProps {
  children: ReactNode
  className?: string
  sensitivity?: number
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  depth?: number
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "custom"
  scrollSpeed?: number
}

const Floating = ({
  children,
  className,
  sensitivity = 1,
}: FloatingProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate normalized values from -0.5 to 0.5
    const normalizedX = ((e.clientX - centerX) / rect.width) * sensitivity
    const normalizedY = ((e.clientY - centerY) / rect.height) * sensitivity

    setMousePosition({ x: normalizedX, y: normalizedY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      {children}
    </div>
  )
}

// Export the FloatingElement component
const FloatingElement = ({
  children,
  className,
  depth = 1,
  position = "custom",
  scrollSpeed = 1,
}: FloatingElementProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const elementRef = useRef<HTMLDivElement>(null)
  const [scrollDestination, setScrollDestination] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  
  const springConfig = { damping: 30, stiffness: 200 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)
  
  // Get scroll progress
  const { scrollYProgress } = useScroll({
    // Use the entire page as the scroll container
    offset: ["start", "end"]
  })

  useEffect(() => {
    setIsMounted(true)
    
    // Calculate scroll-based movement based on position
    const getScrollDestination = () => {
      if (typeof window === "undefined") return { x: 0, y: 0 }
      
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      
      // Define corner movement distances
      // Values represent how far the element should move when scrolling
      switch (position) {
        case "top-left":
          return { x: -windowWidth * 0.5 * scrollSpeed, y: -windowHeight * 0.5 * scrollSpeed }
        case "top-right":
          return { x: windowWidth * 0.5 * scrollSpeed, y: -windowHeight * 0.5 * scrollSpeed }
        case "bottom-left":
          // Make bottom images move more downward toward the video section
          return { x: -windowWidth * 0.3 * scrollSpeed, y: windowHeight * 0.9 * scrollSpeed }
        case "bottom-right":
          // Make bottom images move more downward toward the video section
          return { x: windowWidth * 0.3 * scrollSpeed, y: windowHeight * 0.9 * scrollSpeed }
        default:
          // Determine position from className
          if (className?.includes("left") && className?.includes("top")) {
            return { x: -windowWidth * 0.6 * scrollSpeed, y: -windowHeight * 0.6 * scrollSpeed }
          } else if (className?.includes("right") && className?.includes("top")) {
            return { x: windowWidth * 0.6 * scrollSpeed, y: -windowHeight * 0.6 * scrollSpeed }
          } else if (className?.includes("left") && className?.includes("bottom")) {
            // Make bottom images move more downward toward the video section
            return { x: -windowWidth * 0.4 * scrollSpeed, y: windowHeight * 0.9 * scrollSpeed }
          } else if (className?.includes("right") && className?.includes("bottom")) {
            // Make bottom images move more downward toward the video section
            return { x: windowWidth * 0.4 * scrollSpeed, y: windowHeight * 0.9 * scrollSpeed }
          }
          // Fall back to move outward from the element's position
          return { x: depth * 300 * scrollSpeed * (Math.random() > 0.5 ? 1 : -1), y: depth * 300 * scrollSpeed * (Math.random() > 0.5 ? 1 : -1) }
      }
    }
    
    setScrollDestination(getScrollDestination())
  }, [position, depth, className, scrollSpeed])

  // Create scroll-based transforms with spring animation for smoothness
  const scrollX = useTransform(
    scrollYProgress, 
    [0, 0.4], 
    [0, scrollDestination.x]
  )
  
  const scrollY = useTransform(
    scrollYProgress, 
    [0, 0.4], 
    [0, scrollDestination.y]
  )

  useEffect(() => {
    if (typeof window === "undefined") return
    
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      
      // Calculate normalized values from -0.5 to 0.5
      const normalizedX = (e.clientX / windowWidth - 0.5) * depth * 100
      const normalizedY = (e.clientY / windowHeight - 0.5) * depth * 100
      
      setMousePosition({ x: normalizedX, y: normalizedY })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [depth])
  
  useEffect(() => {
    x.set(mousePosition.x)
    y.set(mousePosition.y)
  }, [mousePosition, x, y])

  if (!isMounted) {
    return null
  }

  return (
    <motion.div
      ref={elementRef}
      className={cn("absolute", className)}
      style={{ 
        x: x, 
        y: y,
        translateX: scrollX,
        translateY: scrollY,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    >
      {children}
    </motion.div>
  )
}

export { FloatingElement }
export default Floating
