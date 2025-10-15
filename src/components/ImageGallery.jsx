'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

export function ImageGallery({ images, className = '' }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  // Convert images to lightbox format
  const lightboxImages = images.map((image) => ({
    src: image.src.src || image.src, // Handle Next.js image imports
    alt: image.alt,
    title: image.caption,
  }))

  const openLightbox = (imageIndex) => {
    setIndex(imageIndex)
    setOpen(true)
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
        {images.map((image, imageIndex) => (
          <motion.div
            key={imageIndex}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-neutral-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openLightbox(imageIndex)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={lightboxImages}
        plugins={[Thumbnails, Zoom, Fullscreen]}
        thumbnails={{
          position: 'bottom',
          width: 120,
          height: 80,
          border: 2,
          borderRadius: 4,
          padding: 4,
          gap: 16,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
        }}
        carousel={{
          finite: false,
          preload: 2,
          padding: '16px',
          spacing: '30%',
          imageFit: 'contain',
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
          slide: { padding: '20px' },
        }}
      />
    </>
  )
}
