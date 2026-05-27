import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Building2, Shield, CreditCard, MapPin, Phone, Mail, Send, Home, Award, Users, Calendar } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { featuredProperties, developers } from '../data/mockData';

export function HomePage() {
  const [searchData, setSearchData] = useState({
    city: '',
    type: '',
    budget: '',
    bhk: '',
  });

  const quickFilters = ['2 BHK', 'Ready to Move', 'New Projects', 'Under ₹1 Cr'];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,26,46,0.65)' }}></div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <h1
            className="text-center mb-4"
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: 1.2,
              color: 'white',
            }}
          >
            Find Your Dream Home in Mumbai
          </h1>
          <p
            className="text-center mb-12"
            style={{
              fontFamily: 'Inter',
              fontSize: '18px',
              color: 'var(--pp-primary-light)',
            }}
          >
            South Mumbai's Most Trusted Property Portal
          </p>

          <div
            className="bg-white p-2 mx-auto max-w-5xl flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center"
            style={{
              borderRadius: 'var(--radius-pill)',
              boxShadow: 'var(--shadow-hero)',
            }}
          >
            <select
              value={searchData.city}
              onChange={(e) => setSearchData({ ...searchData, city: e.target.value })}
              className="flex-1 px-4 py-3 rounded-full outline-none"
              style={{ fontSize: '15px', color: 'var(--pp-text)', minWidth: '150px' }}
            >
              <option value="">Select City</option>
              <option value="byculla">Byculla</option>
              <option value="parel">Parel</option>
              <option value="lalbaug">Lalbaug</option>
              <option value="prabhadevi">Prabhadevi</option>
              <option value="nm-joshi">NM Joshi Marg</option>
            </select>

            <div className="h-8 w-px bg-[var(--pp-border)] hidden md:block"></div>

            <select
              value={searchData.type}
              onChange={(e) => setSearchData({ ...searchData, type: e.target.value })}
              className="flex-1 px-4 py-3 rounded-full outline-none"
              style={{ fontSize: '15px', color: 'var(--pp-text)', minWidth: '150px' }}
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="villa">Villa</option>
            </select>

            <div className="h-8 w-px bg-[var(--pp-border)] hidden md:block"></div>

            <select
              value={searchData.budget}
              onChange={(e) => setSearchData({ ...searchData, budget: e.target.value })}
              className="flex-1 px-4 py-3 rounded-full outline-none"
              style={{ fontSize: '15px', color: 'var(--pp-text)', minWidth: '150px' }}
            >
              <option value="">Budget</option>
              <option value="0-1">Under ₹1 Cr</option>
              <option value="1-3">₹1-3 Cr</option>
              <option value="3-5">₹3-5 Cr</option>
              <option value="5+">₹5 Cr+</option>
            </select>

            <div className="h-8 w-px bg-[var(--pp-border)] hidden md:block"></div>

            <select
              value={searchData.bhk}
              onChange={(e) => setSearchData({ ...searchData, bhk: e.target.value })}
              className="flex-1 px-4 py-3 rounded-full outline-none"
              style={{ fontSize: '15px', color: 'var(--pp-text)', minWidth: '130px' }}
            >
              <option value="">BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
              <option value="5+">5+ BHK</option>
            </select>

            <Link
              to="/properties"
              className="px-8 py-3 rounded-full bg-[var(--pp-primary)] text-white flex items-center gap-2 transition-colors hover:bg-[var(--pp-primary-dark)] w-full md:w-auto justify-center"
              style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px' }}
            >
              <Search className="w-5 h-5" />
              Search
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {quickFilters.map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full transition-colors hover:bg-[var(--pp-primary)]"
                style={{
                  backgroundColor: 'var(--pp-primary-light)',
                  color: 'var(--pp-primary-dark)',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-8"
        style={{ backgroundColor: 'var(--pp-navy)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Home, number: '500+', label: 'Properties' },
            { icon: Building2, number: '50+', label: 'Developers' },
            { icon: Users, number: '1000+', label: 'Happy Families' },
            { icon: Calendar, number: '10+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--pp-primary)' }} />
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: '32px',
                  color: 'var(--pp-primary)',
                  marginBottom: '4px',
                }}
              >
                {stat.number}
              </p>
              <p style={{ fontSize: '14px', color: 'white' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', color: 'var(--pp-text)' }}>
              Featured Properties
            </h2>
            <Link
              to="/properties"
              className="flex items-center gap-2 transition-colors hover:opacity-80"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '16px',
                color: 'var(--pp-primary)',
              }}
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--pp-bg)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', color: 'var(--pp-text)' }}
          >
            Our Trusted Developers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {developers.map((developer) => (
              <Link
                key={developer.id}
                to={`/developer/${developer.id}`}
                className="bg-white p-6 rounded-[var(--radius-card)] flex flex-col items-center justify-center transition-all hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <img src={developer.logo} alt={developer.name} className="mb-3 h-12" />
                <p
                  className="text-center"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '13px',
                    color: 'var(--pp-text-muted)',
                  }}
                >
                  {developer.propertyCount} Properties
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', color: 'var(--pp-text)' }}
          >
            Why Choose Parmar Properties
          </h2>

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
              <div key={index} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--pp-primary-light)' }}
                >
                  <item.icon className="w-8 h-8" style={{ color: 'var(--pp-primary)' }} />
                </div>
                <div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--pp-text-muted)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16"
        style={{ backgroundColor: 'var(--pp-navy)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <h2
            className="text-center mb-12"
            style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', color: 'white' }}
          >
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 mb-3" style={{ color: 'var(--pp-primary)' }} />
              <p style={{ fontSize: '15px', color: 'white' }}>
                123 Marine Drive, Mumbai 400020
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="w-8 h-8 mb-3" style={{ color: 'var(--pp-primary)' }} />
              <p style={{ fontSize: '15px', color: 'white' }}>
                +91 98765 43210
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="w-8 h-8 mb-3" style={{ color: 'var(--pp-primary)' }} />
              <p style={{ fontSize: '15px', color: 'white' }}>
                info@parmarproperties.com
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-[var(--radius-card)] backdrop-blur-sm">
            <h3 className="text-center mb-6" style={{ color: 'white' }}>
              Quick Enquiry
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-[var(--radius-btn)] bg-white/20 text-white placeholder-white/60 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 rounded-[var(--radius-btn)] bg-white/20 text-white placeholder-white/60 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="md:col-span-2 px-4 py-3 rounded-[var(--radius-btn)] bg-white/20 text-white placeholder-white/60 outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 px-6 py-3 rounded-[var(--radius-btn)] bg-[var(--pp-primary)] text-white flex items-center justify-center gap-2 transition-colors hover:bg-[var(--pp-primary-dark)]"
                style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px' }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer
        className="py-12"
        style={{ backgroundColor: 'var(--pp-navy-mid)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '20px', color: 'var(--pp-primary)' }}>
                  PARMAR
                </div>
                <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px', color: 'white', marginLeft: '6px' }}>
                  PROPERTIES
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'white', opacity: 0.8 }}>
                Your trusted partner in finding the perfect home in Mumbai.
              </p>
            </div>

            <div>
              <h4 className="mb-4" style={{ color: 'white' }}>Quick Links</h4>
              <div className="flex flex-col gap-2">
                {['Home', 'Properties', 'Developers', 'About', 'Contact'].map((link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className="transition-colors hover:text-[var(--pp-primary)]"
                    style={{ fontSize: '14px', color: 'white', opacity: 0.8 }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4" style={{ color: 'white' }}>Property Types</h4>
              <div className="flex flex-col gap-2">
                {['Apartments', 'Penthouses', 'Villas', 'Commercial', 'Land'].map((type) => (
                  <Link
                    key={type}
                    to="/properties"
                    className="transition-colors hover:text-[var(--pp-primary)]"
                    style={{ fontSize: '14px', color: 'white', opacity: 0.8 }}
                  >
                    {type}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4" style={{ color: 'white' }}>Contact Info</h4>
              <div className="flex flex-col gap-2" style={{ fontSize: '14px', color: 'white', opacity: 0.8 }}>
                <p>123 Marine Drive</p>
                <p>Mumbai 400020</p>
                <p>+91 98765 43210</p>
                <p>info@parmarproperties.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p style={{ fontSize: '14px', color: 'white', opacity: 0.8 }}>
              © 2026 Parmar Properties. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
