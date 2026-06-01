import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Bed, Bath, Maximize2, MapPin, Phone, Share2, Heart, CheckCircle, ArrowLeft } from 'lucide-react';
import { allProperties, featuredProperties } from '../data/mockData';
import { PropertyCard } from '../components/PropertyCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

export function PropertyDetailPage() {
  const { id } = useParams();
  const property = allProperties.find((p) => p.id === id) || featuredProperties[0];

  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'location' | 'similar'>('overview');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const [emiData, setEmiData] = useState({
    loanAmount: property.price * 10000000 * 0.8,
    interestRate: 8.5,
    tenure: 20,
  });

  const calculateEMI = () => {
    const P = emiData.loanAmount;
    const r = emiData.interestRate / 12 / 100;
    const n = emiData.tenure * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi;
  };

  const tabs = [
    { id: 'overview' as const, label: 'Overview' },
    { id: 'amenities' as const, label: 'Amenities' },
    { id: 'location' as const, label: 'Location Map' },
    { id: 'similar' as const, label: 'Similar Properties' },
  ];

  const similarProperties = featuredProperties.filter((p) => p.id !== property.id).slice(0, 3);
  const gallery = property.gallery || [property.image];

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-bg pb-20">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <ScrollReveal>
          <div className="mb-6 flex items-center gap-2 font-sans text-sm text-text-muted">
            <Link to="/properties" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back to Properties
            </Link>
          </div>
        </ScrollReveal>

        {/* Masonry Image Gallery */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 h-[600px] rounded-[2rem] overflow-hidden">
            <div className="md:col-span-3 h-full cursor-pointer relative group" onClick={() => setSelectedImage(gallery[0])}>
              <img src={gallery[0]} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-4 h-full">
              {gallery.slice(1, 3).map((img, idx) => (
                <div key={idx} className="h-full cursor-pointer relative group" onClick={() => setSelectedImage(img)}>
                  <img src={img} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  {idx === 1 && gallery.length > 3 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-display font-semibold text-2xl">+{gallery.length - 3}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            <ScrollReveal delay={0.2}>
              <div className="liquid-glass rounded-[2rem] p-8 shadow-card border border-white/5">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-sans text-xs font-bold uppercase tracking-wider">
                        {property.status}
                      </span>
                      {property.status === 'Ready to Move' && (
                        <span className="flex items-center gap-1 text-success font-sans text-sm font-semibold">
                          <CheckCircle className="w-4 h-4" /> Verified
                        </span>
                      )}
                    </div>
                    <h1 className="font-display font-semibold text-3xl md:text-4xl text-text mb-3">
                      {property.title}
                    </h1>
                    <p className="flex items-center gap-2 font-sans text-base text-text-muted">
                      <MapPin className="w-5 h-5" />
                      {property.location}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsSaved(!isSaved)}
                      className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <Heart
                        className={`w-5 h-5 ${isSaved ? 'fill-primary text-primary' : 'text-text-muted'}`}
                      />
                    </button>
                    <button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
                      <Share2 className="w-5 h-5 text-text-muted" />
                    </button>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-8">
                  <p className="font-display font-bold text-4xl text-primary">
                    {property.priceText}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                      <Bed className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-text-muted uppercase tracking-wider font-semibold">Bedrooms</p>
                      <p className="font-display font-semibold text-xl text-text">{property.beds}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                      <Bath className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-text-muted uppercase tracking-wider font-semibold">Bathrooms</p>
                      <p className="font-display font-semibold text-xl text-text">{property.baths}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                      <Maximize2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-text-muted uppercase tracking-wider font-semibold">Carpet Area</p>
                      <p className="font-display font-semibold text-xl text-text">{property.area} sqft</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="liquid-glass rounded-[2rem] p-8 shadow-card border border-white/5">
                <div className="flex gap-6 border-b border-white/5 mb-8 overflow-x-auto hide-scrollbar">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 relative font-display font-semibold text-base transition-colors whitespace-nowrap ${
                        activeTab === tab.id ? 'text-primary' : 'text-text-muted hover:text-text'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                      )}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'overview' && (
                      <div>
                        <h3 className="font-display font-semibold text-xl text-text mb-4">Description</h3>
                        <p className="font-sans text-base text-text-muted leading-relaxed mb-8">
                          {property.description}
                        </p>

                        <h3 className="font-display font-semibold text-xl text-text mb-4">Property Details</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {[
                            { label: 'Carpet Area', value: `${property.carpetArea} sq ft` },
                            { label: 'Floor', value: `${property.floor} of ${property.totalFloors}` },
                            { label: 'Possession', value: property.possessionDate },
                            { label: 'Status', value: property.status },
                            { label: 'RERA ID', value: property.reraId },
                            { label: 'Developer', value: property.developer },
                          ].map((detail, index) => (
                            <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                              <p className="font-sans text-xs text-text-muted uppercase tracking-wider font-semibold mb-1">
                                {detail.label}
                              </p>
                              <p className="font-sans font-semibold text-text">{detail.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'amenities' && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {property.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                              <CheckCircle className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-sans text-base text-text">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'location' && (
                      <div>
                        <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center border border-white/5 mb-4">
                          <MapPin className="w-12 h-12 text-text-muted/50" />
                          <span className="ml-4 font-sans font-medium text-text-muted">Map View Placeholder</span>
                        </div>
                        <p className="font-sans text-base text-text-muted">
                          {property.location}
                        </p>
                      </div>
                    )}

                    {activeTab === 'similar' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {similarProperties.map((prop) => (
                          <PropertyCard key={prop.id} property={prop} />
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </ScrollReveal>

            {/* EMI Calculator */}
            <ScrollReveal delay={0.4}>
              <div className="liquid-glass rounded-[2rem] p-8 shadow-card border border-white/5">
                <h3 className="font-display font-semibold text-2xl text-text mb-8">EMI Calculator</h3>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="font-sans text-sm font-semibold text-text">Loan Amount</label>
                        <span className="font-display font-semibold text-primary">₹{(emiData.loanAmount / 10000000).toFixed(2)} Cr</span>
                      </div>
                      <input
                        type="range"
                        min={property.price * 10000000 * 0.2}
                        max={property.price * 10000000}
                        step={100000}
                        value={emiData.loanAmount}
                        onChange={(e) => setEmiData({ ...emiData, loanAmount: parseInt(e.target.value) })}
                        className="w-full accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="font-sans text-sm font-semibold text-text">Interest Rate</label>
                        <span className="font-display font-semibold text-primary">{emiData.interestRate}% p.a.</span>
                      </div>
                      <input
                        type="range"
                        min="6.5"
                        max="12"
                        step="0.1"
                        value={emiData.interestRate}
                        onChange={(e) => setEmiData({ ...emiData, interestRate: parseFloat(e.target.value) })}
                        className="w-full accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <label className="font-sans text-sm font-semibold text-text">Loan Tenure</label>
                        <span className="font-display font-semibold text-primary">{emiData.tenure} Years</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        value={emiData.tenure}
                        onChange={(e) => setEmiData({ ...emiData, tenure: parseInt(e.target.value) })}
                        className="w-full accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="p-8 w-full rounded-2xl bg-gradient-to-br from-primary-light to-white/5 border border-primary/20 text-center shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -ml-16 -mb-16" />
                      
                      <p className="font-sans text-sm font-semibold uppercase tracking-wider text-text-muted mb-4 relative z-10">
                        Estimated Monthly EMI
                      </p>
                      <p className="font-display font-bold text-4xl text-primary relative z-10">
                        ₹{calculateEMI().toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </p>
                      <p className="font-sans text-xs text-text-muted mt-4 relative z-10">
                        *Indicative figures based on current market rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <ScrollReveal delay={0.5}>
              <div className="sticky top-28 liquid-glass rounded-[2rem] p-8 shadow-card border border-white/5">
                <h3 className="font-display font-semibold text-xl text-center text-text mb-6">Contact Agent</h3>

                <div className="flex flex-col items-center mb-8">
                  <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br from-primary-light to-primary-light/30 border-4 border-white/10 shadow-md">
                    <span className="font-display font-bold text-3xl text-primary">VEX</span>
                  </div>
                  <p className="font-display font-semibold text-lg text-text">VEX Properties</p>
                  <p className="font-sans text-sm text-text-muted">RERA Registered Agent</p>
                </div>

                <div className="flex flex-col gap-3 mb-8">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-btn bg-[#25D366] text-white flex items-center justify-center gap-2 font-sans font-semibold hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="w-full py-3.5 rounded-btn bg-primary text-black flex items-center justify-center gap-2 font-sans font-semibold hover:bg-primary-dark transition-colors shadow-sm btn-gold-shimmer"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>

                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5" /></div>
                  <div className="relative flex justify-center"><span className="bg-transparent px-4 font-sans text-xs text-text-muted uppercase tracking-wider font-semibold">Or Request Callback</span></div>
                </div>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-btn bg-white/5 border border-white/5 outline-none focus:border-primary transition-colors font-sans text-sm text-white placeholder-white/30 focus:bg-white/10"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3.5 rounded-btn bg-white/5 border border-white/5 outline-none focus:border-primary transition-colors font-sans text-sm text-white placeholder-white/30 focus:bg-white/10"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3.5 rounded-btn bg-white/5 border border-white/5 outline-none focus:border-primary transition-colors font-sans text-sm text-white placeholder-white/30 focus:bg-white/10"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-btn bg-primary text-black font-display font-semibold text-base transition-colors hover:bg-primary-dark btn-gold-shimmer"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col backdrop-blur-md"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setSelectedImage(null)} className="text-white/70 hover:text-white transition-colors">
                <Maximize2 className="w-8 h-8 rotate-45" />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Gallery Preview"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            <div className="p-6 overflow-x-auto hide-scrollbar flex gap-4 justify-center">
              {gallery.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 shrink-0 rounded-xl overflow-hidden transition-all ${
                    selectedImage === img ? 'ring-2 ring-primary scale-110 opacity-100' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
