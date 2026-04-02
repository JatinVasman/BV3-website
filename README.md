# Business Volunteers - Digital Marketing Agency Website

A modern, high-performance Next.js website for Business Volunteers, a digital marketing agency providing creative solutions for growing businesses.

## 🎨 Design Highlights

- **Luxury Gold & White Theme**: Premium aesthetic with elegant gradients and glass-morphism effects
- **Custom Animations**: Smooth Framer Motion and GSAP animations throughout
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion 12.34.1 & GSAP 3.14.2
- **Icons**: Lucide React 0.574.0
- **Email**: Resend 6.9.2
- **Analytics**: Vercel Analytics
- **Language**: TypeScript 5

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── api/
│   │   └── contact/route.ts     # Contact form API
│   ├── blog/
│   │   ├── page.tsx             # Blog listing
│   │   └── [slug]/page.tsx      # Individual blog post
│   ├── faq/
│   │   └── page.tsx             # FAQ page
│   ├── sitemap.ts               # XML sitemap
│   ├── robots.ts                # Robots.txt
│   └── manifest.json            # PWA manifest
├── components/
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer component
│   ├── FloatingButtons.tsx      # WhatsApp & Instagram buttons
│   ├── HeroSection.tsx          # Hero section
│   ├── AboutSection.tsx         # About section
│   ├── ServicesSection.tsx      # Services overview
│   ├── SocialGallerySection.tsx # Social media portfolio
│   ├── PortfolioSection.tsx     # Website projects
│   ├── CRMSection.tsx           # CRM solutions
│   ├── ProcessSection.tsx       # Our process
│   ├── ResultsSection.tsx       # Stats & results
│   ├── FeaturesSection.tsx      # Why choose us
│   ├── TestimonialsSection.tsx  # Client testimonials
│   ├── ContactSection.tsx       # Contact form
│   ├── FAQCTASection.tsx        # FAQ CTA
│   └── Accordion.tsx            # Accordion component
├── data/
│   └── content.ts               # All site content & data
└── lib/
    └── utils.ts                 # Utility functions
```

## 🎯 Key Features

### 1. **Comprehensive Service Portfolio**
- 12 digital marketing services with detailed descriptions
- Services include social media, web development, design, video editing, CRM, and more

### 2. **Dynamic Content Sections**
- Hero section with video background
- About section with rewritten content
- Services grid with hover animations
- Social media gallery with lightbox
- Website project portfolio
- CRM pipeline with tabbed interface
- Process steps with visual indicators
- Animated statistics counters
- Feature highlights
- Client testimonials grid
- FAQ collection

### 3. **Contact & Conversion Features**
- Contact form with email integration via Resend
- WhatsApp integration for instant messaging
- Form auto-opens WhatsApp with pre-filled details
- Floating social buttons (WhatsApp & Instagram)
- Multiple CTA buttons throughout the site

### 4. **Blog System**
- 6 pre-written blog posts
- Dynamic blog listing page
- Individual blog post pages with related posts
- SEO-optimized metadata for each post

### 5. **FAQ Page**
- 10 comprehensive FAQ items
- Accordion UI for better UX
- Linked to contact page

### 6. **SEO Optimization**
- Structured data (JSON-LD)
- Meta tags and Open Graph data
- Sitemap generation
- Robots.txt configuration
- Mobile-friendly design
- Performance optimized

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ and npm

### Installation Steps

1. **Clone the repository**
   ```bash
   cd d:\BV3-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create `.env.local` with:
   ```
   RESEND_API_KEY=your_resend_api_key
   NEXT_PUBLIC_SITE_URL=https://businessvolunteers.online
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

```bash
npm run build
npm start
```

## 📧 Email Configuration

The contact form uses **Resend** for email delivery:
- Emails are sent to: `contact@businessvolunteers.online` and `contact.businessvolunteers@gmail.com`
- Reply-to is set to the user's email address
- HTML formatted email templates included

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | #c9a84c | Primary accent |
| Gold Light | #e8d48b | Hover states |
| Gold Dark | #a07e2e | Dark accents |
| Dark | #0d0d0d | Primary background |
| Charcoal | #1a1a1a | Secondary background |
| Cream | #fdf8f0 | Light sections |

## 📱 Responsive Design

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+ 
- All sections optimized for touch and click interactions

## 🔗 Important Links

| Page | Route | Description |
|------|-------|-------------|
| Home | / | Main landing page |
| Blog | /blog | Blog listing |
| Blog Post | /blog/[slug] | Individual article |
| FAQ | /faq | Frequently asked questions |
| Contact | /#contact | Contact form |

## 📊 Analytics

- Integrated with Vercel Analytics
- Tracks page views, user interactions, and conversions
- Real-time dashboard available in Vercel console

## 🤝 Support

For issues or questions:
- **Email**: contact@businessvolunteers.online
- **Phone**: +91 85869 89832
- **WhatsApp**: https://wa.me/918586989832

## 📄 License

Private - Business Volunteers

## 🎉 Credits

Designed and developed with ❤️ by Business Volunteers team.
