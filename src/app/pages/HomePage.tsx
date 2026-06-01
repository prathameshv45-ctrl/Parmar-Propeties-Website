import { useState } from 'react';
import { Link } from 'react-router';
import { Building2, Shield, CreditCard, MapPin, Phone, Mail, Send, Home, Award, Users, Calendar, Menu, X } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { featuredProperties, developers } from '../data/mockData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { FadeIn } from '../components/FadeIn';
import { ScrollReveal } from '../components/ScrollReveal';
import { CountUp } from '../components/CountUp';
import { motion, AnimatePresence } from 'framer-motion';

export function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* 4a. Video Background Hero */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        />

        {/* Hero Navbar */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-6">
          <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
            <Link to="/" className="text-2xl font-semibold tracking-tight text-white font-display">
              VEX
            </Link>
            
            <div className="hidden md:flex gap-8">
              <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors font-sans font-medium">Story</Link>
              <Link to="/properties" className="text-sm text-white/80 hover:text-white transition-colors font-sans font-medium">Investing</Link>
              <Link to="/developers" className="text-sm text-white/80 hover:text-white transition-colors font-sans font-medium">Building</Link>
              <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors font-sans font-medium">Advisory</Link>
            </div>

            <Link
              to="/contact"
              className="hidden md:block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors font-sans"
            >
              Start a Chat
            </Link>
            
            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-20 left-6 right-6 liquid-glass rounded-xl p-4 flex flex-col gap-4 z-50 md:hidden"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-display font-semibold">Menu</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-white"><X className="w-6 h-6" /></button>
                </div>
                <Link to="/about" className="text-white font-sans">Story</Link>
                <Link to="/properties" className="text-white font-sans">Investing</Link>
                <Link to="/developers" className="text-white font-sans">Building</Link>
                <Link to="/contact" className="text-white font-sans">Advisory</Link>
                <Link to="/contact" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium text-center font-sans">
                  Start a Chat
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hero Content pinned to bottom */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 w-full max-w-[1600px] mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:items-end w-full gap-8">
            {/* Left Column */}
            <div>
              <AnimatedHeading 
                text="Shaping tomorrow&#10;with vision and action." 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white font-display tracking-[-0.04em]" 
              />
              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5 font-sans max-w-xl">
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>
              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="bg-white text-black px-8 py-3 rounded-lg font-medium font-sans hover:bg-gray-100 transition-colors">
                    Start a Chat
                  </Link>
                  <Link to="/properties" className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium font-sans hover:bg-white hover:text-black transition-colors">
                    Explore Now
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column */}
            <div className="hidden lg:flex items-end justify-end">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <span className="text-lg md:text-xl lg:text-2xl font-light text-white font-sans">
                    Investing. Building. Advisory.
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal delay={0}>
        <section className="bg-transparent border-y border-white/5 py-12">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Home, number: 500, suffix: '+', label: 'Properties' },
              { icon: Building2, number: 50, suffix: '+', label: 'Developers' },
              { icon: Users, number: 1000, suffix: '+', label: 'Happy Families' },
              { icon: Calendar, number: 10, suffix: '+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-display font-bold text-3xl text-primary mb-1">
                  <CountUp end={stat.number} duration={2} />{stat.suffix}
                </p>
                <p className="font-sans text-sm text-white">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 6b. Featured Properties */}
      <section className="py-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal delay={0}>
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-display font-semibold text-[32px] text-text">
                Featured Properties
              </h2>
              <Link
                to="/properties"
                className="flex items-center gap-2 transition-colors hover:text-primary-dark font-display font-semibold text-[16px] text-primary"
              >
                View All →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.slice(0, 3).map((property, index) => (
              <ScrollReveal key={property.id} delay={index * 0.12}>
                <PropertyCard property={property} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6e. Property Type Explorer */}
      <section className="py-20 bg-transparent border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal delay={0}>
            <h2 className="font-display font-semibold text-[32px] text-white mb-10">
              Explore by Property Type
            </h2>
          </ScrollReveal>

          <div className="flex overflow-x-auto pb-6 gap-6 snap-x hide-scrollbar">
            {[
              { type: 'Apartment', count: '320+', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80' },
              { type: 'Penthouse', count: '45+', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80' },
              { type: 'Villa', count: '80+', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
              { type: 'Commercial', count: '150+', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
              { type: 'Duplex', count: '60+', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09be1587?w=600&q=80' },
            ].map((pt, i) => (
              <ScrollReveal key={pt.type} delay={i * 0.1}>
                <Link to="/properties" className="block relative min-w-[280px] h-[360px] rounded-card overflow-hidden group snap-center shadow-card">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-mid/95 via-navy/30 to-transparent z-10 transition-colors duration-300 group-hover:from-navy-mid/80" />
                  <motion.img 
                    src={pt.img} 
                    alt={pt.type} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="font-display font-semibold text-2xl text-white mb-1">{pt.type}</h3>
                    <p className="font-sans font-medium text-primary text-sm">{pt.count} Properties</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6c. Developer Spotlight */}
      <section className="py-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal delay={0}>
            <h2 className="text-center font-display font-semibold text-[32px] text-text mb-12">
              Our Trusted Developers
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 overflow-x-auto pb-4 snap-x hide-scrollbar">
              {developers.map((developer) => (
                <Link
                  key={developer.id}
                  to={`/developer/${developer.id}`}
                  className="liquid-glass border border-white/5 p-6 rounded-card flex flex-col items-center justify-center transition-transform hover:-translate-y-1 shadow-card min-w-[160px] snap-center shrink-0"
                >
                  <div className="bg-white/95 p-2 rounded-lg mb-3 w-full h-16 flex items-center justify-center shadow-inner">
                    <img src={developer.logo} alt={developer.name} className="h-12 object-contain" loading="lazy" />
                  </div>
                  <p className="text-center font-sans text-[13px] text-text-muted">
                    {developer.propertyCount} Properties
                  </p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6d. Why Choose Us */}
      <section className="py-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal delay={0}>
            <h2 className="text-center font-display font-semibold text-[32px] text-text mb-12">
              Why Choose Us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Building2,
                title: 'Wide Range of Properties',
                description: 'Access to 500+ verified properties across South Mumbai',
              },
              {
                icon: Shield,
                title: 'Trusted & Verified',
                description: 'All listings are verified and RERA registered for your security',
              },
              {
                icon: CreditCard,
                title: 'Easy Financing',
                description: 'Dedicated support for home loans and EMI calculations',
              },
              {
                icon: Award,
                title: 'Local Expertise',
                description: '10+ years of experience in South Mumbai real estate market',
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="flex gap-5 liquid-glass p-6 rounded-card border border-white/5 hover:shadow-card hover:border-primary/20 transition-all hover:-translate-y-1 duration-300">
                  <div className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-primary-light">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-display font-semibold text-[18px] text-text">{item.title}</h3>
                    <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6f. Contact Strip + Footer */}
      <ScrollReveal delay={0}>
        <section className="py-20 bg-transparent border-t border-white/5">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-8 text-white">
              <h2 className="font-display font-semibold text-[32px]">Get In Touch</h2>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="font-sans text-white/80">123 Marine Drive, Mumbai 400020</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="font-sans text-white/80">+91 98765 43210</p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="font-sans text-white/80">info@parmarproperties.com</p>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-card backdrop-blur-md border border-white/10">
              <h3 className="text-xl font-display font-semibold text-white mb-6">Quick Enquiry</h3>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-btn bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-primary transition-colors font-sans"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-3 rounded-btn bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-primary transition-colors font-sans"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="px-4 py-3 rounded-btn bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none resize-none focus:border-primary transition-colors font-sans"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-btn bg-primary text-black flex items-center justify-center gap-2 transition-colors font-display font-semibold text-[15px] btn-gold-shimmer"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </section>
      </ScrollReveal>

      <footer className="py-12 bg-navy-mid/60 text-white border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="font-display font-bold text-[20px] text-primary">VEX</div>
                <div className="font-display font-semibold text-[20px] ml-1.5">PROPERTIES</div>
              </div>
              <p className="font-sans text-[14px] opacity-80 leading-relaxed">
                Your trusted partner in finding the perfect home in Mumbai.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-3 font-sans text-[14px] opacity-80">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <Link to="/properties" className="hover:text-primary transition-colors">Properties</Link>
                <Link to="/developers" className="hover:text-primary transition-colors">Developers</Link>
                <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Property Types</h4>
              <div className="flex flex-col gap-3 font-sans text-[14px] opacity-80">
                <Link to="/properties" className="hover:text-primary transition-colors">Apartments</Link>
                <Link to="/properties" className="hover:text-primary transition-colors">Penthouses</Link>
                <Link to="/properties" className="hover:text-primary transition-colors">Villas</Link>
                <Link to="/properties" className="hover:text-primary transition-colors">Commercial</Link>
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Newsletter</h4>
              <p className="font-sans text-[14px] opacity-80 mb-4">Subscribe for latest updates.</p>
              <div className="flex">
                <input type="email" placeholder="Email Address" className="px-4 py-2 rounded-l-btn bg-white/10 text-white outline-none w-full border border-white/20 border-r-0 font-sans text-sm focus:border-primary" />
                <button className="bg-primary text-black px-4 rounded-r-btn font-display font-semibold hover:bg-primary-dark transition-colors btn-gold-shimmer">OK</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center font-sans text-[14px] opacity-60">
            © 2026 Parmar Properties. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
