'use client'

import Link from "next/link"
import { MapPin, Phone, Printer, Mail } from "lucide-react"
import { CenterUnderline, ComesInGoesOutUnderline, GoesOutComesInUnderline } from "@/components/ui/underline-animation"

export function Footer() {
  return (
    <footer className="w-full py-10 md:py-16 bg-white border-t border-zinc-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Information */}
          <div className="mb-6 md:mb-0 col-span-1">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center text-zinc-900">
                <MapPin size={18} className="mr-2 flex-shrink-0" />
                <p className="uppercase text-sm">436 NINTH STREET, SAN FRANCISCO, CA 94103</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-zinc-900">
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <p>415.553.7788</p>
                </div>
                <div className="flex items-center">
                  <Printer size={18} className="mr-2 flex-shrink-0" />
                  <p>F 415.864.7788</p>
                </div>
              </div>
              
              <div className="uppercase text-zinc-900 font-light my-3">
                <p>HIGH QUALITY OFFSET PRINTING</p>
                <p>SINCE 1991</p>
              </div>
              
              <div className="flex items-center text-zinc-900">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <Link href="mailto:bentung@imageprinting.us">
                  <ComesInGoesOutUnderline 
                    label="bentung@imageprinting.us" 
                    direction="right"
                    className="text-[#ff5941]"
                    underlineHeightRatio={0.08}
                  />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Services Column */}
          <div className="col-span-1">
            <p className="text-zinc-900 uppercase mb-4 font-medium">SERVICES</p>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link href="/services#digital-printing">
                  <CenterUnderline 
                    label="Business Cards" 
                    className="text-zinc-900"
                    underlineHeightRatio={0.08}
                  />
                </Link>
              </li>
              <li>
                <Link href="/services#digital-printing">
                  <CenterUnderline 
                    label="Brochures" 
                    className="text-zinc-900"
                    underlineHeightRatio={0.08}
                  />
                </Link>
              </li>
              <li>
                <Link href="/services#digital-printing">
                  <CenterUnderline 
                    label="Flyers" 
                    className="text-zinc-900"
                    underlineHeightRatio={0.08}
                  />
                </Link>
              </li>
              <li>
                <Link href="/services#large-format">
                  <CenterUnderline 
                    label="Banners" 
                    className="text-zinc-900"
                    underlineHeightRatio={0.08}
                  />
                </Link>
              </li>
              <li>
                <Link href="/services#digital-printing">
                  <CenterUnderline 
                    label="Restaurant Menus" 
                    className="text-zinc-900"
                    underlineHeightRatio={0.08}
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <p className="text-zinc-900 uppercase mb-4 font-medium">CONTACT</p>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link href="/contact">
                  <GoesOutComesInUnderline 
                    label="Contact Us" 
                    direction="left"
                    className="text-zinc-900"
                    underlineHeightRatio={0.08}
                  />
                </Link>
              </li>
              <li>
                <Link href="/quote">
                  <GoesOutComesInUnderline 
                    label="Get a Quote" 
                    direction="right"
                    className="text-zinc-900"
                    underlineHeightRatio={0.08}
                  />
                </Link>
              </li>
              <li>
                <Link href="/upload">
                  <GoesOutComesInUnderline 
                    label="Upload Files" 
                    direction="left"
                    className="text-zinc-900"
                    underlineHeightRatio={0.08}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-zinc-100 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Image Printing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 