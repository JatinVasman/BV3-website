import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogs } from '@/data/content';

export const metadata: Metadata = {
  title: 'Blog | Business Volunteers',
  description: 'Insights and strategies for digital marketing, social media, and brand growth.',
};

export default function BlogPage() {
  return (
    <div className="pb-20 pt-40 bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, strategies, and industry trends to help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass rounded-xl overflow-hidden hover:shadow-gold-glow transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 bg-linear-to-br from-gold/20 to-gold-dark/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gold font-playfair text-5xl opacity-20">✍️</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gold text-xs font-dm font-semibold uppercase tracking-wider mb-2">
                  {post.category}
                </p>
                <h2 className="text-xl font-playfair font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{post.date}</span>
                  <span className="text-gold group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
