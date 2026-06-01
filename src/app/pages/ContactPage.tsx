import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function ContactPage() {
  return (
    <ScrollReveal>
      <div className="min-h-screen pt-16" style={{ backgroundColor: 'var(--pp-bg)' }}>
        <div
          className="py-20 text-center text-white border-b border-white/5 bg-gradient-to-b from-navy-mid to-bg"
        >
          <div className="max-w-[1280px] mx-auto px-6">
            <h1 className="mb-4" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '48px' }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--pp-primary)' }}>
              We're here to help you find your dream home
            </p>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                content: '123 Marine Drive, Mumbai 400020, Maharashtra, India',
              },
              {
                icon: Phone,
                title: 'Call Us',
                content: '+91 98765 43210\n+91 22 1234 5678',
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: 'info@parmarproperties.com\nsales@parmarproperties.com',
              },
              {
                icon: Clock,
                title: 'Working Hours',
                content: 'Mon-Sat: 9:00 AM - 7:00 PM\nSunday: 10:00 AM - 5:00 PM',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="liquid-glass border border-white/5 p-8 rounded-[var(--radius-card)] text-center transition-all hover:border-primary/20 hover:-translate-y-1 duration-300"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--pp-primary-light)' }}
                >
                  <item.icon className="w-8 h-8" style={{ color: 'var(--pp-primary)' }} />
                </div>
                <h3 className="mb-3" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', color: 'var(--pp-text)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--pp-text-muted)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="liquid-glass border border-white/5 rounded-[var(--radius-card)] p-8 shadow-card">
              <h2 className="mb-6" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '24px', color: 'var(--pp-text)' }}>
                Send us a Message
              </h2>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20"
                      style={{ fontSize: '15px' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20"
                      style={{ fontSize: '15px' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20"
                    style={{ fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20"
                    style={{ fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none resize-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20"
                    style={{ fontSize: '15px' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-[var(--radius-btn)] bg-primary text-black flex items-center justify-center gap-2 transition-colors hover:bg-primary-dark btn-gold-shimmer"
                  style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px' }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="rounded-[var(--radius-card)] overflow-hidden border border-white/5" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="w-full h-full min-h-[500px] bg-white/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--pp-text-muted)' }} />
                  <p style={{ fontSize: '15px', color: 'var(--pp-text-muted)' }}>Map placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
