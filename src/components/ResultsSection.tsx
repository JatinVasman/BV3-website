'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { stats } from '@/data/content';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let currentCount = 0;
        const increment = target / 60;
        const counter = setInterval(() => {
          currentCount += increment;
          if (currentCount >= target) {
            setCount(target);
            clearInterval(counter);
          } else {
            setCount(Math.floor(currentCount));
          }
        }, 30);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function ResultsSection() {
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
            Results
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4">
            Impact by the <span className="text-gradient">Numbers</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8 md:p-12 text-center hover:shadow-gold-glow transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-playfair font-bold text-gradient mb-4">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-playfair font-bold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-400 text-sm">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
