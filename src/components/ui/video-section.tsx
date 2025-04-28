"use client"

import React from "react"

type Video = {
  title: string
  description: string
  videoUrl: string
  id: string
}

const VIDEOS: Video[] = [
  {
    title: 'Printing Process',
    description: 'See our professional printing machines in action',
    videoUrl: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'printing-process',
  },
  {
    title: 'Finished Products',
    description: 'High-quality printed materials for your business',
    videoUrl: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'finished-products',
  },
]

function VideoPlayer({ src, title }: { src: string; title: string }) {
  return (
    <div className="rounded-xl shadow-md overflow-hidden">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="aspect-video w-full rounded-xl"
      />
    </div>
  )
}

function VideoSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-6">Our Printing <span className="text-[#ff5941]">Process</span></h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl text-center font-medium text-zinc-600 leading-relaxed">
            Watch how we transform your designs into high-quality printed materials using state-of-the-art technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {VIDEOS.map((video) => (
            <div key={video.id} className="space-y-4">
              <VideoPlayer src={video.videoUrl} title={video.title} />
              <div className="px-1">
                <h3 className="text-2xl font-light">{video.title}</h3>
                <p className="text-base sm:text-lg text-zinc-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { VideoSection } 