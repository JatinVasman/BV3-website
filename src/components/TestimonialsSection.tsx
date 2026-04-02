'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/content';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section section-dark">
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
            Client Success
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4">
            What <span className="text-gradient">Our Clients Say</span>
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-gold to-gold-light rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:shadow-gold-glow transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.stars)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm mb-6 grow leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gold/20 pt-4">
                <p className="font-playfair font-bold text-white text-sm">
                  {testimonial.name}
                </p>
                <p className="text-gold text-xs font-dm">
                  {testimonial.role}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {testimonial.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
