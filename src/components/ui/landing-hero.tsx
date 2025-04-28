"use client"

import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { SparklesText } from "@/components/ui/sparkles-text"
import Link from "next/link"
import { MagneticButton } from "@/components/ui/magnetic-button"

// #Örnek resim verileri - Farklı fotoğraf çeşitlerini göstermek için
const exampleImages = [
  {
    url: "/image/hero/logo.png",
    title: "Professional logo printing",
  },
  {
    url: "/image/hero/banner.png",
    title: "Banner printing",
  },
  {
    url: "/image/hero/businesscard.png",
    title: "Business card printing",
  },
  {
    url: "/image/hero/menu.png",
    title: "Menu printing",
  },
  {
    url: "/image/hero/menu2.png",
    title: "Custom menu design",
  },
]

function LandingHero() {
  return (
    <>
      <section className="w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center relative">
        {/* #Floating bileşeni, resimler için parallax efekti sağlar. sensitivity parametresi efektin duyarlılığını belirler */}
        <Floating sensitivity={-0.1} className="absolute inset-0 pointer-events-none hidden md:block z-30">
          {/* #Sol üst resim - Logo (küçük boyut) */}
          <FloatingElement
            depth={0.8}
            className="top-[15%] left-[10%]"
            position="top-left"
            scrollSpeed={1.2}
          >
            <motion.div className="rounded-xl overflow-hidden bg-white p-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <motion.img
                src={exampleImages[0].url}
                alt={exampleImages[0].title}
                className="w-32 md:w-48 lg:w-56 max-h-40 md:max-h-48 lg:max-h-56 object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
          </FloatingElement>

          {/* #Sol üst banner (büyük boyut) */}
          <FloatingElement
            depth={1.2}
            className="top-[5%] left-[22%] md:left-[26%] lg:left-[28%]"
            position="top-left"
            scrollSpeed={1.5}
          >
            <motion.div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm -rotate-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <motion.img
                src={exampleImages[1].url}
                alt={exampleImages[1].title}
                className="w-64 md:w-96 lg:w-[500px] max-h-60 md:max-h-72 lg:max-h-80 object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
            </motion.div>
          </FloatingElement>

          {/* #Sol alt kartvizit */}
          <FloatingElement
            depth={0.7}
            className="bottom-[20%] left-[15%] md:bottom-[15%] lg:bottom-[12%]"
            position="bottom-left"
            scrollSpeed={0.8}
          >
            <motion.div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm -rotate-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <motion.img
                src={exampleImages[2].url}
                alt={exampleImages[2].title}
                className="w-40 md:w-64 lg:w-80 max-h-56 md:max-h-72 lg:max-h-80 object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
          </FloatingElement>

          {/* #Sağ üst menü */}
          <FloatingElement
            depth={1}
            className="top-[8%] right-[15%] md:right-[18%] lg:right-[20%]"
            position="top-right"
            scrollSpeed={1.3}
          >
            <motion.div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm rotate-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <motion.img
                src={exampleImages[3].url}
                alt={exampleImages[3].title}
                className="w-44 md:w-64 lg:w-72 max-h-72 md:max-h-96 lg:max-h-[28rem] object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
            </motion.div>
          </FloatingElement>

          {/* #Sağ alt menü alternatif */}
          <FloatingElement
            depth={0.6}
            className="bottom-[7%] right-[-23%] md:bottom-[10%] md:right-[22%] lg:right-[15%]"
            position="bottom-right"
            scrollSpeed={1}
          >
            <motion.div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm rotate-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <motion.img
                src={exampleImages[4].url}
                alt={exampleImages[4].title}
                className="w-48 md:w-64 lg:w-72 max-h-72 md:max-h-96 lg:max-h-[28rem] object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              />
            </motion.div>
          </FloatingElement>
        </Floating>

        {/* #Ana içerik bölümü - Metin ve butonların bulunduğu alan */}
        <div className="flex flex-col justify-center items-center max-w-3xl z-20 px-4 py-8 md:py-12">
          {/* #Başlık ve slogan */}
          <div className="w-full text-2xl sm:text-3xl md:text-5xl flex flex-col items-center justify-center font-sans font-light overflow-hidden p-4 sm:p-10 md:p-16">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-light leading-tight tracking-tight"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="block mb-6 font-light text-1xl flex items-center justify-center">
                <SparklesText 
                  text="We Print" 
                  sparklesCount={10} 
                  colors={{ first: "#ff5941", second: "#ff8e7a" }}
                />
              </span>
              <LayoutGroup>
                <motion.div className="flex whitespace-pre justify-center" layout>
                  <motion.span
                    className="pt-0.5 sm:pt-1 md:pt-2"
                    layout
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  >
                    your{" "}
                  </motion.span>
                  <TextRotate
                    texts={[
                      "Vision",
                      "Photos",
                      "Memories",
                      "Logos",
                      "Banners",
                      "Cards",
                      "Dreams",
                      "Ideas",
                      "Designs",
                      "Identity",
                      "Artwork",
                      "Branding",
                    ]}
                    mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />
                </motion.div>
              </LayoutGroup>
            </motion.h1>
          </div>

          {/* #Alt başlık */}
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-md text-center font-medium mt-2 font-sans leading-relaxed"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            Premium quality photo printing services for your most precious moments.
            Fast delivery, exceptional results.
          </motion.p>

          {/* #Butonlar bölümü - Sadece mobil için yeniden konumlandırılmış */}
          <div className="mt-12 flex flex-col md:hidden space-y-4 z-50 w-full px-6">
            <MagneticButton distance={0.3}>
              <Link href="/pricing" className="w-full">
                <motion.button
                  className="w-full bg-black hover:bg-black/90 transition-colors px-8 py-3 text-base text-white font-medium rounded-full shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
                >
                  See pricing <span className="ml-1">→</span>
                </motion.button>
              </Link>
            </MagneticButton>
            
            <MagneticButton distance={0.3}>
              <Link href="/contact" className="w-full">
                <motion.button
                  className="w-full bg-[#ff5941] hover:bg-[#ff5941]/90 transition-colors px-8 py-3 text-base text-white font-medium rounded-full shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* #Butonlar bölümü - Sadece masaüstü için, orijinal */}
        <div className="hidden md:flex absolute bottom-44 flex-row space-x-6 z-50">
          <MagneticButton distance={0.3}>
            <Link href="/pricing">
              <motion.button
                className="bg-black hover:bg-black/90 transition-colors px-10 py-4 text-lg text-white font-medium rounded-full shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
              >
                See pricing <span className="ml-1">→</span>
              </motion.button>
            </Link>
          </MagneticButton>
          
          <MagneticButton distance={0.3}>
            <Link href="/contact">
              <motion.button
                className="bg-[#ff5941] hover:bg-[#ff5941]/90 transition-colors px-10 py-4 text-lg text-white font-medium rounded-full shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </MagneticButton>
        </div>
      </section>
    </>
  )
}

export { LandingHero } 