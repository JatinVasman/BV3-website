'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/content';

export function FeaturesSection() {
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
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-gold to-gold-light rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 text-center group hover:shadow-gold-glow transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-gold group-hover:scale-125 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-playfair font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
