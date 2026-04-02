'use client';

import { motion } from 'framer-motion';
import { steps } from '@/data/content';

export function ProcessSection() {
  return (
    <section className="section section-dark">
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
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 md:p-8 text-center relative group hover:shadow-gold-glow transition-all duration-300"
            >
              {/* Step Number Circle */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-playfair font-bold text-dark">
                {step.number}
              </div>

              <div className="text-3xl mb-4 mt-4">{step.emoji}</div>
              <h3 className="text-xl font-playfair font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gold to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
