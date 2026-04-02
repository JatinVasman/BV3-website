import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogs } from '@/data/content';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Business Volunteers`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-dark">
      {/* Hero */}
      <div className="pt-40 pb-12 container-custom">
        <Link href="/blog" className="text-gold hover:text-gold-light transition-colors mb-6 inline-block">
          ← Back to Blog
        </Link>
        <div className="max-w-3xl">
          <p className="text-gold text-sm font-dm font-semibold uppercase tracking-wider mb-4">
            {post.category}
          </p>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-gray-400 text-lg">
            {post.date}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 container-custom">
        <div className="max-w-3xl">
          {/* Featured Image Placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-gold/10 to-gold-dark/10 rounded-2xl mb-12 flex items-center justify-center">
            <p className="text-gold text-8xl opacity-20">📝</p>
          </div>

          {/* Article Content */}
          <article className="prose prose-invert max-w-none">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-300 text-lg leading-relaxed mb-6 font-dm"
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-16 glass rounded-xl p-8 text-center">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Ready to grow your business?
            </h3>
            <p className="text-gray-400 mb-6">
              Get in touch with us today to discuss your project and see how we can help.
            </p>
            <Link href="/#contact" className="btn-primary">
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="py-20 container-custom border-t border-gold/20">
          <h2 className="text-3xl font-playfair font-bold mb-12">
            Related <span className="text-gradient">Articles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group glass rounded-xl overflow-hidden p-6 hover:shadow-gold-glow transition-all duration-300"
              >
                <p className="text-gold text-xs font-dm font-semibold uppercase mb-2">
                  {relatedPost.category}
                </p>
                <h3 className="text-lg font-playfair font-bold text-white group-hover:text-gold transition-colors mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {relatedPost.excerpt}
                </p>
                <span className="text-gold text-sm">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
