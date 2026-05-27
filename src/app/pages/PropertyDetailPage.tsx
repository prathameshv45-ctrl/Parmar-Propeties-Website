import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Bed, Bath, Maximize2, MapPin, Phone, Share2, Heart, CheckCircle } from 'lucide-react';
import { allProperties, featuredProperties } from '../data/mockData';
import { PropertyCard } from '../components/PropertyCard';

export function PropertyDetailPage() {
  const { id } = useParams();
  const property = allProperties.find((p) => p.id === id) || featuredProperties[0];

  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'location' | 'similar'>('overview');
  const [mainImage, setMainImage] = useState(property.gallery?.[0] || property.image);
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

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: 'var(--pp-bg)' }}>
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="mb-6 flex items-center gap-2 text-sm" style={{ color: 'var(--pp-text-muted)' }}>
          <Link to="/" className="hover:text-[var(--pp-primary)]">
            Home
          </Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-[var(--pp-primary)]">
            Properties
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--pp-text)' }}>{property.title}</span>
        </div>

        <div className="bg-white rounded-[var(--radius-card)] overflow-hidden mb-6" style={{ boxShadow: 'var(--shadow-card)' }}>
          <img src={mainImage} alt={property.title} className="w-full h-[500px] object-cover" />

          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 p-4">
            {(property.gallery || [property.image]).map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${
                  mainImage === img ? 'border-[var(--pp-primary)]' : 'border-transparent'
                }`}
              >
                <img src={img} alt={`View ${index + 1}`} className="w-full h-20 object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[var(--radius-card)] p-6 mb-6" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1
                    className="mb-2"
                    style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '28px', color: 'var(--pp-text)' }}
                  >
                    {property.title}
                  </h1>
                  <p className="flex items-center gap-2 mb-4" style={{ fontSize: '16px', color: 'var(--pp-text-muted)' }}>
                    <MapPin className="w-5 h-5" />
                    {property.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className="p-3 rounded-full border border-[var(--pp-border)] hover:bg-[var(--pp-bg)]"
                  >
                    <Heart
                      className={`w-5 h-5 ${isSaved ? 'fill-[var(--pp-primary)] text-[var(--pp-primary)]' : 'text-[var(--pp-text-muted)]'}`}
                    />
                  </button>
                  <button className="p-3 rounded-full border border-[var(--pp-border)] hover:bg-[var(--pp-bg)]">
                    <Share2 className="w-5 h-5 text-[var(--pp-text-muted)]" />
                  </button>
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <p
                  style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '32px', color: 'var(--pp-primary)' }}
                >
                  {property.priceText}
                </p>
                {property.status === 'Ready to Move' && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--pp-success)]/10">
                    <CheckCircle className="w-4 h-4" style={{ color: 'var(--pp-success)' }} />
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--pp-success)' }}>Verified</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-6 pb-6 border-b border-[var(--pp-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--pp-primary-light)] flex items-center justify-center">
                    <Bed className="w-6 h-6" style={{ color: 'var(--pp-primary)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--pp-text-muted)' }}>Bedrooms</p>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--pp-text)' }}>{property.beds}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--pp-primary-light)] flex items-center justify-center">
                    <Bath className="w-6 h-6" style={{ color: 'var(--pp-primary)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--pp-text-muted)' }}>Bathrooms</p>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--pp-text)' }}>{property.baths}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--pp-primary-light)] flex items-center justify-center">
                    <Maximize2 className="w-6 h-6" style={{ color: 'var(--pp-primary)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--pp-text-muted)' }}>Area</p>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--pp-text)' }}>{property.area} sq ft</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6 border-b border-[var(--pp-border)]">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 px-2 transition-all ${
                      activeTab === tab.id ? 'border-b-2' : ''
                    }`}
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: '15px',
                      color: activeTab === tab.id ? 'var(--pp-primary)' : 'var(--pp-text-muted)',
                      borderBottomColor: activeTab === tab.id ? 'var(--pp-primary)' : 'transparent',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="mb-4">Description</h3>
                    <p className="mb-6" style={{ fontSize: '15px', color: 'var(--pp-text-muted)', lineHeight: 1.7 }}>
                      {property.description}
                    </p>

                    <h3 className="mb-4">Property Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Carpet Area', value: `${property.carpetArea} sq ft` },
                        { label: 'Floor', value: `${property.floor} of ${property.totalFloors}` },
                        { label: 'Possession', value: property.possessionDate },
                        { label: 'Status', value: property.status },
                        { label: 'RERA ID', value: property.reraId },
                        { label: 'Developer', value: property.developer },
                      ].map((detail, index) => (
                        <div key={index} className="p-4 rounded-lg bg-[var(--pp-bg)]">
                          <p style={{ fontSize: '13px', color: 'var(--pp-text-muted)', marginBottom: '4px' }}>
                            {detail.label}
                          </p>
                          <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--pp-text)' }}>{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5" style={{ color: 'var(--pp-success)' }} />
                        <span style={{ fontSize: '15px', color: 'var(--pp-text)' }}>{amenity}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'location' && (
                  <div>
                    <div className="aspect-video bg-[var(--pp-bg)] rounded-lg flex items-center justify-center">
                      <MapPin className="w-12 h-12" style={{ color: 'var(--pp-text-muted)' }} />
                    </div>
                    <p className="mt-4" style={{ fontSize: '15px', color: 'var(--pp-text-muted)' }}>
                      {property.location}
                    </p>
                  </div>
                )}

                {activeTab === 'similar' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {similarProperties.map((prop) => (
                      <PropertyCard key={prop.id} property={prop} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-[var(--radius-card)] p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="mb-6">EMI Calculator</h3>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Loan Amount: ₹{(emiData.loanAmount / 10000000).toFixed(2)} Cr
                  </label>
                  <input
                    type="range"
                    min={property.price * 10000000 * 0.2}
                    max={property.price * 10000000}
                    step={100000}
                    value={emiData.loanAmount}
                    onChange={(e) => setEmiData({ ...emiData, loanAmount: parseInt(e.target.value) })}
                    className="w-full accent-[var(--pp-primary)]"
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Interest Rate: {emiData.interestRate}% p.a.
                  </label>
                  <input
                    type="range"
                    min="6.5"
                    max="12"
                    step="0.1"
                    value={emiData.interestRate}
                    onChange={(e) => setEmiData({ ...emiData, interestRate: parseFloat(e.target.value) })}
                    className="w-full accent-[var(--pp-primary)]"
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Loan Tenure: {emiData.tenure} years
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={emiData.tenure}
                    onChange={(e) => setEmiData({ ...emiData, tenure: parseInt(e.target.value) })}
                    className="w-full accent-[var(--pp-primary)]"
                  />
                </div>

                <div className="p-6 rounded-lg bg-[var(--pp-primary-light)] text-center">
                  <p style={{ fontSize: '14px', color: 'var(--pp-text-muted)', marginBottom: '8px' }}>
                    Monthly EMI
                  </p>
                  <p style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '32px', color: 'var(--pp-primary)' }}>
                    ₹{calculateEMI().toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-[var(--radius-card)] p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="mb-6 text-center">Contact Agent</h3>

              <div className="flex flex-col items-center mb-6">
                <div
                  className="w-20 h-20 rounded-full mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--pp-primary-light)' }}
                >
                  <span style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '24px', color: 'var(--pp-primary)' }}>
                    PP
                  </span>
                </div>
                <p style={{ fontWeight: 600, fontSize: '16px', color: 'var(--pp-text)' }}>Parmar Properties</p>
                <p style={{ fontSize: '14px', color: 'var(--pp-text-muted)' }}>RERA Registered Agent</p>
              </div>

              <div className="flex gap-3 mb-6">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-[var(--radius-btn)] bg-[#25D366] text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{ fontWeight: 600, fontSize: '14px' }}
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex-1 py-3 rounded-[var(--radius-btn)] bg-[var(--pp-primary)] text-white flex items-center justify-center gap-2 transition-colors hover:bg-[var(--pp-primary-dark)]"
                  style={{ fontWeight: 600, fontSize: '14px' }}
                >
                  <Phone className="w-5 h-5" />
                  Call
                </a>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)]"
                  style={{ fontSize: '14px' }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)]"
                  style={{ fontSize: '14px' }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)]"
                  style={{ fontSize: '14px' }}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none resize-none focus:border-[var(--pp-primary)]"
                  style={{ fontSize: '14px' }}
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 rounded-[var(--radius-btn)] bg-[var(--pp-primary)] text-white transition-colors hover:bg-[var(--pp-primary-dark)]"
                  style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px' }}
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
