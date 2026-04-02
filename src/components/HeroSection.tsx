'use client';

import { motion } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';

export function HeroSection() {
  return (
    <>
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-dark overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight"
            >
              Creative Solutions That{' '}
              <span className="text-gradient">Move Brands Forward</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Affordable excellence for growing businesses. Data-driven strategies that deliver
              measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToElement('social')}
                className="btn-primary"
              >
                View Our Work
              </button>
              <button
                onClick={() => scrollToElement('contact')}
                className="btn-secondary"
              >
                Start a Project
              </button>
            </motion.div>
          </motion.div>

          {/* Featured Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { number: '1200+', label: 'Clients Served' },
              { number: '180+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-playfair font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-dark py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg shadow-gold/10"
          >
            <video
              src="/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
