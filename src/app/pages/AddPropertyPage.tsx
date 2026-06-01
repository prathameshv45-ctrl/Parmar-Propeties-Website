import { useState } from 'react';
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';

export function AddPropertyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    type: '',
    status: '',
    beds: '',
    baths: '',
    area: '',
    carpetArea: '',
    floor: '',
    totalFloors: '',
    developer: '',
    amenities: [] as string[],
    description: '',
    price: '',
    possessionDate: '',
    reraId: '',
  });

  const steps = [
    { number: 1, label: 'Basic Info' },
    { number: 2, label: 'Property Details' },
    { number: 3, label: 'Photos & Video' },
    { number: 4, label: 'Pricing' },
    { number: 5, label: 'Review' },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submit property:', formData);
  };

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: 'var(--pp-bg)' }}>
      <div className="max-w-[900px] mx-auto px-6 py-8">
        <h1 className="mb-8 text-center" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', color: 'var(--pp-text)' }}>
          Add New Property
        </h1>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step) => (
              <div key={step.number} className="flex-1 flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    step.number <= currentStep
                      ? 'bg-primary text-black font-bold shadow-md shadow-primary/20'
                      : 'liquid-glass border border-white/10 text-white/50'
                  }`}
                  style={{ fontWeight: 600, fontSize: '16px' }}
                >
                  {step.number}
                </div>
                {step.number < totalSteps && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step.number < currentStep ? 'bg-primary' : 'bg-white/10'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {steps.map((step) => (
              <p
                key={step.number}
                className={`text-center flex-1 ${
                  step.number === currentStep ? 'text-primary font-semibold' : 'text-text-muted'
                }`}
                style={{ fontSize: '13px' }}
              >
                {step.label}
              </p>
            ))}
          </div>
        </div>

        <div className="liquid-glass border border-white/5 rounded-[var(--radius-card)] p-8 mb-6 shadow-card">
          {currentStep === 1 && (
            <div className="space-y-5">
              <h2 className="mb-6" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px' }}>
                Basic Information
              </h2>

              <div>
                <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  Property Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Monte South"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                  style={{ fontSize: '15px' }}
                />
              </div>

              <div>
                <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  Location *
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans cursor-pointer"
                  style={{ fontSize: '15px' }}
                >
                  <option value="" className="bg-[#0B0B0F]">Select Location</option>
                  <option value="Byculla" className="bg-[#0B0B0F]">Byculla, South Mumbai</option>
                  <option value="Parel" className="bg-[#0B0B0F]">Parel, South Mumbai</option>
                  <option value="Lalbaug" className="bg-[#0B0B0F]">Lalbaug, South Mumbai</option>
                  <option value="Prabhadevi" className="bg-[#0B0B0F]">Prabhadevi, South Mumbai</option>
                  <option value="NM Joshi" className="bg-[#0B0B0F]">NM Joshi Marg, South Mumbai</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Property Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans cursor-pointer"
                    style={{ fontSize: '15px' }}
                  >
                    <option value="" className="bg-[#0B0B0F]">Select Type</option>
                    <option value="Apartment" className="bg-[#0B0B0F]">Apartment</option>
                    <option value="Penthouse" className="bg-[#0B0B0F]">Penthouse</option>
                    <option value="Villa" className="bg-[#0B0B0F]">Villa</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Status *
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans cursor-pointer"
                    style={{ fontSize: '15px' }}
                  >
                    <option value="" className="bg-[#0B0B0F]">Select Status</option>
                    <option value="Ready to Move" className="bg-[#0B0B0F]">Ready to Move</option>
                    <option value="Under Construction" className="bg-[#0B0B0F]">Under Construction</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  Developer *
                </label>
                <input
                  type="text"
                  value={formData.developer}
                  onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                  placeholder="e.g., Lodha Group"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                  style={{ fontSize: '15px' }}
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-5">
              <h2 className="mb-6" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px' }}>
                Property Details
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Bedrooms *
                  </label>
                  <input
                    type="number"
                    value={formData.beds}
                    onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                    placeholder="3"
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                    style={{ fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Bathrooms *
                  </label>
                  <input
                    type="number"
                    value={formData.baths}
                    onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
                    placeholder="3"
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                    style={{ fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Total Area (sq ft) *
                  </label>
                  <input
                    type="number"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    placeholder="1450"
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                    style={{ fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Carpet Area (sq ft) *
                  </label>
                  <input
                    type="number"
                    value={formData.carpetArea}
                    onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
                    placeholder="1350"
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                    style={{ fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Floor *
                  </label>
                  <input
                    type="number"
                    value={formData.floor}
                    onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                    placeholder="12"
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                    style={{ fontSize: '15px' }}
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                    Total Floors *
                  </label>
                  <input
                    type="number"
                    value={formData.totalFloors}
                    onChange={(e) => setFormData({ ...formData, totalFloors: e.target.value })}
                    placeholder="25"
                    className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                    style={{ fontSize: '15px' }}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your property..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none resize-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                  style={{ fontSize: '15px' }}
                ></textarea>
              </div>

              <div>
                <label className="block mb-3" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  Amenities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Swimming Pool', 'Gym', 'Clubhouse', 'Garden', 'Security', 'Parking'].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(amenity)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, amenities: [...formData.amenities, amenity] });
                          } else {
                            setFormData({ ...formData, amenities: formData.amenities.filter((a) => a !== amenity) });
                          }
                        }}
                        className="w-4 h-4 rounded accent-primary cursor-pointer"
                      />
                      <span className="font-sans text-sm text-white group-hover:text-primary transition-colors">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-5">
              <h2 className="mb-6" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px' }}>
                Photos & Video
              </h2>

              <div className="border-2 border-dashed border-white/10 rounded-[var(--radius-card)] p-12 text-center bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all">
                <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="mb-2" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  Drag & drop property images here
                </p>
                <p className="mb-4" style={{ fontSize: '14px', color: 'var(--pp-text-muted)' }}>
                  or click to browse (JPG, PNG up to 10MB each)
                </p>
                <button
                  type="button"
                  className="px-6 py-3 rounded-[var(--radius-btn)] bg-primary text-black font-semibold hover:bg-primary-dark btn-gold-shimmer transition-all cursor-pointer"
                  style={{ fontFamily: 'Poppins', fontSize: '15px' }}
                >
                  Choose Files
                </button>
              </div>

              <div>
                <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  YouTube Video URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                  style={{ fontSize: '15px' }}
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-5">
              <h2 className="mb-6" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px' }}>
                Pricing Details
              </h2>

              <div>
                <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  Property Price (in Crores) *
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="3.5"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                  style={{ fontSize: '15px' }}
                />
              </div>

              <div>
                <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  Possession Date *
                </label>
                <input
                  type="text"
                  value={formData.possessionDate}
                  onChange={(e) => setFormData({ ...formData, possessionDate: e.target.value })}
                  placeholder="Immediate or Month Year"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                  style={{ fontSize: '15px' }}
                />
              </div>

              <div>
                <label className="block mb-2" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                  RERA ID *
                </label>
                <input
                  type="text"
                  value={formData.reraId}
                  onChange={(e) => setFormData({ ...formData, reraId: e.target.value })}
                  placeholder="P51900001234"
                  className="w-full px-4 py-3 rounded-[var(--radius-btn)] border border-white/5 outline-none focus:border-[var(--pp-primary)] bg-white/5 focus:bg-white/10 text-white placeholder-white/30 transition-all focus:ring-1 focus:ring-primary/20 font-sans"
                  style={{ fontSize: '15px' }}
                />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-5">
              <h2 className="mb-6" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px' }}>
                Review & Submit
              </h2>

              <div className="p-6 rounded-lg bg-white/5 border border-white/5">
                <h3 className="mb-4 font-display font-semibold">Property Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--pp-text-muted)', marginBottom: '4px' }}>Title</p>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--pp-text)' }}>{formData.title || 'Not set'}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--pp-text-muted)', marginBottom: '4px' }}>Location</p>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--pp-text)' }}>{formData.location || 'Not set'}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--pp-text-muted)', marginBottom: '4px' }}>Price</p>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--pp-primary)' }}>
                      {formData.price ? `₹${formData.price} Cr` : 'Not set'}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--pp-text-muted)', marginBottom: '4px' }}>Configuration</p>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--pp-text)' }}>
                      {formData.beds && formData.baths ? `${formData.beds} BHK, ${formData.baths} Bath` : 'Not set'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-primary/20 bg-primary-light">
                <p style={{ fontSize: '14px', color: 'var(--pp-text)' }}>
                  By submitting this property, you agree to our terms and confirm that all information provided is accurate and verified.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-[var(--radius-btn)] flex items-center gap-2 transition-colors cursor-pointer ${
              currentStep === 1
                ? 'bg-white/5 text-[var(--pp-text-muted)] cursor-not-allowed border border-white/5'
                : 'liquid-glass text-white hover:bg-white/5 border border-white/10'
            }`}
            style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px' }}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-[var(--radius-btn)] bg-primary text-black flex items-center gap-2 transition-all hover:bg-primary-dark btn-gold-shimmer font-semibold cursor-pointer"
              style={{ fontFamily: 'Poppins', fontSize: '15px' }}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-[var(--radius-btn)] bg-emerald-500 text-white transition-opacity hover:opacity-90 font-semibold cursor-pointer"
              style={{ fontFamily: 'Poppins', fontSize: '15px' }}
            >
              Submit Property
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
