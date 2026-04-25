/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Leaf, 
  Droplets, 
  FlaskConical, 
  Globe, 
  Star, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  ShoppingBag,
  ShieldCheck,
  Zap
} from 'lucide-react';

const Products = [
  {
    id: 1,
    name: "Daily Greens Blend",
    desc: "Your daily dose of 23 organic superfoods.",
    price: 39.99,
    badge: "Best Seller",
    rating: 5
  },
  {
    id: 2,
    name: "Calm & Restore Tea",
    desc: "Organic herbs to soothe your nervous system.",
    price: 24.99,
    badge: "New",
    rating: 5
  },
  {
    id: 3,
    name: "Glow Serum",
    desc: "Cold-pressed botanical oils for radiant skin.",
    price: 54.99,
    badge: "Staff Pick",
    rating: 5
  }
];

const Testimonials = [
  {
    name: "Sarah M.",
    location: "Dubai",
    initial: "SM",
    text: "I've tried so many green blends and WALIVE is on another level. My energy is through the roof!"
  },
  {
    name: "James K.",
    location: "London",
    initial: "JK",
    text: "The Calm Tea actually works. I sleep better than I have in years. Absolutely love this brand."
  },
  {
    name: "Amira T.",
    location: "Abu Dhabi",
    initial: "AT",
    text: "WALIVE Glow Serum is the only serum I'll ever use. My skin has never looked better."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
        id={`faq-btn-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="text-lg font-medium text-charcoal">{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-300 h-20 flex items-center ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/5' : 'bg-transparent'
        }`}
        id="main-nav"
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-10">
          <div className="flex flex-col leading-none" id="logo">
            <span className="font-serif text-2xl font-black tracking-tighter text-primary">WALIVE</span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-primary/70 uppercase ml-[2px]">Organics</span>
          </div>

          <div className="hidden space-x-10 lg:flex">
            {['Products', 'Our Story', 'Benefits', 'Testimonials'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-charcoal/80 transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-105 active:scale-95" id="nav-shop-btn">
              Shop Now
            </button>
          </div>

          <button 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white p-6 shadow-xl md:hidden"
            >
              <div className="flex flex-col space-y-4">
                {['Products', 'Our Story', 'Benefits', 'Testimonials', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full rounded-full bg-accent py-3 text-center font-bold text-white uppercase tracking-wider">
                  Shop Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-light-bg">
          <div className="absolute top-10 left-10 w-48 h-48 bg-primary/5 organic-shape -z-10" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 organic-shape -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[100px] border-primary/5 rounded-full -z-20 opacity-30" />
        </div>
        
        <div className="container relative z-10 px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5 text-left"
            >
              <div className="mb-6 px-4 py-1.5 border border-primary/20 rounded-full inline-block w-max text-xs font-semibold uppercase tracking-widest text-primary bg-white/50">
                🌿 100% Certified Organic
              </div>
              <h1 className="text-[54px] leading-[0.95] font-black text-primary md:text-[84px] lg:text-[100px] mb-8 tracking-tight">
                Pure Nature.<br />
                <span className="text-accent italic font-serif font-bold">Powerful Results.</span>
              </h1>
              <p className="max-w-md text-lg text-charcoal/70 md:text-xl leading-relaxed mb-10">
                WALIVE Organics brings you certified natural products — crafted from the earth, for a life fully lived.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="group w-full sm:w-auto rounded-full bg-primary px-10 py-5 text-base font-bold text-secondary shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-2xl">
                  Explore Products
                  <ArrowRight className="inline-ml-2 h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="w-full sm:w-auto rounded-full border-2 border-primary/30 px-10 py-5 text-base font-bold text-primary transition-all hover:bg-primary/5">
                  Learn Our Story
                </button>
              </div>

              <div className="mt-16 flex items-center space-x-8 opacity-40">
                {['Cruelty Free', 'Lab Tested', 'Eco Sourced'].map((badge, idx) => (
                  <React.Fragment key={badge}>
                    <span className="text-[11px] font-bold uppercase tracking-tighter">{badge}</span>
                    {idx < 2 && <div className="h-4 w-px bg-primary/20" />}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-2/5 relative"
            >
              <div className="relative mx-auto w-full max-w-sm bg-white rounded-[40px] shadow-2xl p-8 border border-black/5">
                <div className="w-full aspect-square bg-[#E8F0DC] rounded-[32px] mb-8 relative overflow-hidden flex items-center justify-center">
                  <div className="w-40 h-40 bg-primary/20 organic-shape blur-xl absolute" />
                  <Leaf className="h-24 w-24 text-primary opacity-20" />
                  <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">
                    Best Seller
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-3xl text-primary font-bold tracking-tight">Glow Serum</h3>
                  <span className="text-2xl font-bold text-accent">$54.99</span>
                </div>
                <p className="text-sm text-black/50 mb-6">Cold-pressed botanical oils for radiant, healthy skin.</p>
                <div className="flex items-center space-x-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="text-xs font-bold ml-2 opacity-40 uppercase tracking-tighter">492 REVIEWS</span>
                </div>
                <button className="w-full py-4 bg-primary text-secondary rounded-2xl font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all">
                  Quick Add to Cart
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-primary/30" />
        </motion.div>
      </section>

      {/* Social Proof Marquee */}
      <div className="relative overflow-hidden bg-accent py-4 text-white">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex w-1/2 justify-around items-center space-x-4 px-4 font-medium uppercase tracking-widest text-sm">
              <span>⭐ 4.9/5 Stars — Over 10,000 Happy Customers</span>
              <span>•</span>
              <span>Certified Organic</span>
              <span>•</span>
              <span>Made in Small Batches</span>
              <span>•</span>
              <span>Free Shipping on Orders Over $50</span>
              <span>•</span>
              <span>30-Day Guarantee</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <section id="benefits" className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Why WALIVE?</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Leaf />, title: "100% Natural Ingredients", desc: "No synthetic chemicals, ever." },
              { icon: <FlaskConical />, title: "Third-Party Lab Tested", desc: "Every batch verified for purity." },
              { icon: <Globe />, title: "Sustainably Sourced", desc: "Ethical farming partnerships worldwide." },
              { icon: <ShieldCheck />, title: "Results You'll Feel", desc: "Real wellness, backed by nature's science." },
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="rounded-3xl bg-secondary/50 p-8 text-center transition-shadow hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: 'h-8 w-8' })}
                </div>
                <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="bg-light-bg py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl text-primary tracking-tight">Our Best Sellers</h2>
            <div className="mx-auto mt-4 h-1.5 w-16 bg-accent rounded-full" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {Products.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[40px] bg-white p-6 shadow-sm transition-all hover:shadow-2xl border border-black/5"
              >
                <div className="relative mb-8 aspect-square overflow-hidden rounded-[32px] bg-secondary/30">
                  <div className="flex h-full w-full items-center justify-center text-primary/10">
                    <div className="w-24 h-24 bg-primary/20 organic-shape blur-2xl absolute" />
                    <Leaf className="h-32 w-32 relative z-10" />
                  </div>
                  <div className="absolute top-4 right-4 rounded-full bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter shadow-sm">
                    {product.badge}
                  </div>
                </div>

                <div className="px-2">
                  <div className="flex mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-bold tracking-tight text-primary">{product.name}</h3>
                    <span className="text-xl font-bold text-accent">${product.price}</span>
                  </div>
                  <p className="mb-8 text-sm text-charcoal/60 leading-relaxed">{product.desc}</p>
                  
                  <button className="w-full rounded-2xl bg-primary py-4 text-center text-xs font-bold text-secondary uppercase tracking-widest transition-all group-hover:bg-primary/90">
                    Quick Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Simple Steps to a Natural Life</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
          </div>

          <div className="relative grid gap-12 md:grid-cols-3">
            <div className="absolute top-10 left-0 hidden h-0.5 w-full bg-primary/10 md:block" />
            
            {[
              { icon: <ShoppingBag />, step: 1, title: "Choose Your Products", desc: "Browse our curated organic range" },
              { icon: <Droplets />, step: 2, title: "We Ship Fast & Free", desc: "Orders over $50 ship free, 2-5 days" },
              { icon: <Zap />, step: 3, title: "Feel the Difference", desc: "Real results within 30 days, guaranteed" },
            ].map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center p-4">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-xl">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'h-10 w-10' })}
                </div>
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-center text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-sage py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Real People. Real Results.</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {Testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl bg-white p-10 shadow-sm"
              >
                <div className="mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-8 font-serif text-xl italic leading-relaxed text-charcoal">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full font-bold text-white ${
                    ['bg-primary', 'bg-accent', 'bg-charcoal'][idx]
                  }`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold md:text-5xl">Our Commitment to Quality</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {['USDA Organic', 'Non-GMO Verified', 'Cruelty Free', 'Vegan Certified', 'GMP Certified'].map((cert) => (
              <div key={cert} className="flex flex-col items-center space-y-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/20 text-primary">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <span className="max-w-[120px] text-xs font-bold uppercase tracking-widest text-primary/60">
                  {cert}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-2xl">
            <p className="text-lg leading-relaxed text-gray-600">
              Every WALIVE product goes through rigorous third-party testing before it reaches your hands. 
              We believe you deserve to know exactly what you're putting in and on your body.
            </p>
            <a href="#" className="mt-6 inline-flex items-center font-bold text-accent hover:underline">
              Download Our Lab Reports <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold md:text-5xl">Get 15% Off Your First Order</h2>
            <p className="mt-4 text-lg text-white/80">
              Join the WALIVE family and receive exclusive wellness tips, early access to new products, and a welcome discount — just for you.
            </p>

            <form onSubmit={handleSubmit} className="mt-10">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-full bg-white/10 py-4 px-8 text-lg font-bold"
                >
                  🎉 Welcome to the family! Check your inbox for your 15% discount.
                </motion.div>
              ) : (
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border-none bg-white px-8 py-4 text-charcoal outline-none focus:ring-4 focus:ring-accent md:rounded-r-none"
                    id="email-input"
                  />
                  <button type="submit" className="whitespace-nowrap rounded-full bg-accent px-10 py-4 font-bold text-white shadow-xl transition-all hover:brightness-110 active:scale-95 md:rounded-l-none">
                    Claim My 15% Off
                  </button>
                </div>
              )}
            </form>
            <p className="mt-6 text-sm text-white/50">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Frequently Asked Questions</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-accent" />
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="Are WALIVE products truly 100% organic?" 
              answer="Yes, all products are USDA Organic certified and contain zero synthetic additives. We work closely with our farming partners to ensure the highest standards."
            />
            <FAQItem 
              question="How long until I see results?" 
              answer="Most customers notice a difference within 2–4 weeks of consistent use. Nature's compounds work cumulatively with your body's systems."
            />
            <FAQItem 
              question="Do you ship internationally?" 
              answer="Yes! We ship to over 40 countries including UAE, UK, USA, and Europe. International shipping is calculated live at checkout."
            />
            <FAQItem 
              question="What is your return policy?" 
              answer="We offer a 30-day satisfaction guarantee. If you're not happy with the results, we'll make it right with a full refund or exchange."
            />
            <FAQItem 
              question="Are your products vegan?" 
              answer="All WALIVE products are 100% plant-based and vegan certified. We never use animal byproducts or test on animals."
            />
            <FAQItem 
              question="How are your ingredients sourced?" 
              answer="We partner with small organic farms across 12 countries who share our values. Each farm is chosen for its focus on regenerative agriculture."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary/50 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold md:text-7xl">Ready to Live Naturally?</h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-gray-600">
            Join over 10,000 people who've made WALIVE part of their daily wellness ritual.
          </p>
          <button className="mt-10 rounded-full bg-accent px-12 py-5 text-xl font-bold text-white shadow-2xl transition-all hover:scale-105 active:scale-95">
            Shop All Products
          </button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
            <span>Free shipping over $50</span>
            <span>•</span>
            <span>30-day guarantee</span>
            <span>•</span>
            <span>Secure checkout</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="h-[88px] bg-white border-t border-black/5 flex items-center px-6 lg:px-10 justify-between">
        <div className="flex items-center space-x-12 overflow-x-auto no-scrollbar">
          {[
            { label: "Benefit 01", value: "100% Plant Based" },
            { label: "Benefit 02", value: "Zero Synthetics" },
            { label: "Benefit 03", value: "Ethical Farming" },
          ].map((benefit) => (
            <div key={benefit.label} className="flex flex-col min-w-max">
              <span className="text-[10px] uppercase font-black text-primary/40 leading-none mb-1">{benefit.label}</span>
              <span className="text-sm font-semibold text-primary/80">{benefit.value}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-4">
          {['IG', 'TK', 'PN'].map((social) => (
            <div key={social} className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-[10px] font-bold">{social}</span>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-light-bg pt-24 pb-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid gap-12 pb-16 lg:grid-cols-4">
            <div className="space-y-6">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-3xl font-black tracking-tighter text-primary">WALIVE</span>
                <span className="text-xs font-semibold tracking-[0.2em] text-primary/70 uppercase">Organics</span>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                Premium natural organic products crafted from the earth, for a life fully lived.
              </p>
            </div>

            {[
              { title: "Shop", links: ["All Products", "Best Sellers", "New Arrivals", "Bundles"] },
              { title: "Company", links: ["Our Story", "Sustainability", "Lab Reports", "Careers"] },
              { title: "Support", links: ["FAQ", "Shipping", "Returns", "Contact Us"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-charcoal/70 transition-colors hover:text-primary">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-black/5 pt-8 text-center text-xs text-gray-400">
            <div className="mb-6 flex flex-wrap justify-center gap-6">
              {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((p) => (
                <span key={p} className="rounded border border-black/5 px-3 py-1 font-bold uppercase tracking-tighter text-[9px] opacity-60">
                  {p}
                </span>
              ))}
            </div>
            <p className="mb-4 uppercase tracking-widest text-[9px] font-bold">© 2025 WALIVE Organics. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
