'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/content';

export function PortfolioSection() {
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
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4">
            Website <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Websites that deliver results and leave lasting impressions
          </p>
          <div className="h-1 w-24 bg-linear-to-r from-gold to-gold-light rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-xl gold-glow-hover transition-all duration-300"
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-playfair font-bold text-white mt-3">
                  {project.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
