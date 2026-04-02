'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { socialImages } from '@/data/content';

export function SocialGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % socialImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + socialImages.length) % socialImages.length);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setCurrentIndex(socialImages.indexOf(image));
  };

  return (
    <section id="social" className="section section-dark">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-dm font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4">
            Social Media <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of our social media designs — from branding to campaign visuals — crafted to
            engage audiences and drive results.
          </p>
          <div className="h-1 w-24 bg-linear-to-r from-gold to-gold-light rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {socialImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(image)}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={`Social Media Work ${index + 1}`}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
              />
              <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={socialImages[currentIndex]}
                alt="Lightbox"
                className="w-full rounded-xl"
              />

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gold/30 hover:bg-gold/50 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold/30 hover:bg-gold/50 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-gold/30 hover:bg-gold/50 text-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark/80 px-4 py-2 rounded-full text-white text-sm">
                {currentIndex + 1} / {socialImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
