import { useState } from 'react';
import { Link } from 'react-router';
import { Grid, List, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { allProperties, amenitiesList, developers } from '../data/mockData';

export function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [filters, setFilters] = useState({
    propertyTypes: [] as string[],
    priceRange: [50, 5000] as [number, number],
    bhk: [] as string[],
    carpetArea: [500, 3000] as [number, number],
    possession: [] as string[],
    amenities: [] as string[],
    developers: [] as string[],
  });

  const [expandedSections, setExpandedSections] = useState({
    propertyType: true,
    priceRange: true,
    bhk: true,
    carpetArea: false,
    possession: false,
    amenities: false,
    developers: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({ ...expandedSections, [section]: !expandedSections[section] });
  };

  const toggleFilter = (filterType: keyof typeof filters, value: string) => {
    const currentValues = filters[filterType] as string[];
    if (currentValues.includes(value)) {
      setFilters({
        ...filters,
        [filterType]: currentValues.filter((v) => v !== value),
      });
    } else {
      setFilters({
        ...filters,
        [filterType]: [...currentValues, value],
      });
    }
  };

  const FilterSection = ({
    title,
    section,
    children,
  }: {
    title: string;
    section: keyof typeof expandedSections;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-[var(--pp-border)] pb-4 mb-4">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between mb-3"
        style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', color: 'var(--pp-text)' }}
      >
        {title}
        {expandedSections[section] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {expandedSections[section] && <div>{children}</div>}
    </div>
  );

  const Checkbox = ({
    label,
    checked,
    onChange,
  }: {
    label: string;
    checked: boolean;
    onChange: () => void;
  }) => (
    <label className="flex items-center gap-2 mb-2 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded accent-[var(--pp-primary)] cursor-pointer"
      />
      <span
        className="group-hover:text-[var(--pp-primary)] transition-colors"
        style={{ fontSize: '14px', color: 'var(--pp-text-muted)' }}
      >
        {label}
      </span>
    </label>
  );

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: 'var(--pp-bg)' }}>
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="mb-6 flex items-center gap-2 text-sm" style={{ color: 'var(--pp-text-muted)' }}>
          <Link to="/" className="hover:text-[var(--pp-primary)]">
            Home
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--pp-text)' }}>Residential Properties</span>
        </div>

        <div className="flex gap-6">
          <aside
            className={`${
              showMobileFilters ? 'fixed inset-0 z-40 bg-white p-6 overflow-y-auto' : 'hidden'
            } lg:block lg:sticky lg:top-24 lg:self-start w-full lg:w-[280px] flex-shrink-0`}
          >
            <div className="lg:hidden flex items-center justify-between mb-6">
              <h3 style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px' }}>Filters</h3>
              <button onClick={() => setShowMobileFilters(false)} className="text-2xl">
                ×
              </button>
            </div>

            <div className="bg-white p-5 rounded-[var(--radius-card)] border border-[var(--pp-border)]">
              <div className="flex items-center justify-between mb-6">
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px' }}>Filters</h3>
                <button
                  className="text-[var(--pp-primary)] hover:underline"
                  style={{ fontSize: '13px', fontWeight: 600 }}
                >
                  Clear All
                </button>
              </div>

              <FilterSection title="Property Type" section="propertyType">
                <Checkbox
                  label="Apartment"
                  checked={filters.propertyTypes.includes('apartment')}
                  onChange={() => toggleFilter('propertyTypes', 'apartment')}
                />
                <Checkbox
                  label="Penthouse"
                  checked={filters.propertyTypes.includes('penthouse')}
                  onChange={() => toggleFilter('propertyTypes', 'penthouse')}
                />
                <Checkbox
                  label="Villa"
                  checked={filters.propertyTypes.includes('villa')}
                  onChange={() => toggleFilter('propertyTypes', 'villa')}
                />
              </FilterSection>

              <FilterSection title="Price Range" section="priceRange">
                <div className="mb-4">
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      setFilters({ ...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value)] })
                    }
                    className="w-full accent-[var(--pp-primary)]"
                  />
                  <div className="flex justify-between mt-2" style={{ fontSize: '13px', color: 'var(--pp-text-muted)' }}>
                    <span>₹50L</span>
                    <span>₹{filters.priceRange[1] / 100} Cr</span>
                  </div>
                </div>
              </FilterSection>

              <FilterSection title="BHK" section="bhk">
                <div className="flex flex-wrap gap-2">
                  {['1', '2', '3', '4', '5+'].map((bhk) => (
                    <button
                      key={bhk}
                      onClick={() => toggleFilter('bhk', bhk)}
                      className={`px-4 py-2 rounded-full transition-all ${
                        filters.bhk.includes(bhk)
                          ? 'bg-[var(--pp-primary)] text-white'
                          : 'bg-[var(--pp-primary-light)] text-[var(--pp-primary-dark)]'
                      }`}
                      style={{ fontSize: '13px', fontWeight: 600 }}
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Carpet Area (sq ft)" section="carpetArea">
                <div className="mb-4">
                  <input
                    type="range"
                    min="500"
                    max="3000"
                    value={filters.carpetArea[1]}
                    onChange={(e) =>
                      setFilters({ ...filters, carpetArea: [filters.carpetArea[0], parseInt(e.target.value)] })
                    }
                    className="w-full accent-[var(--pp-primary)]"
                  />
                  <div className="flex justify-between mt-2" style={{ fontSize: '13px', color: 'var(--pp-text-muted)' }}>
                    <span>500 sq ft</span>
                    <span>{filters.carpetArea[1]} sq ft</span>
                  </div>
                </div>
              </FilterSection>

              <FilterSection title="Possession Status" section="possession">
                <Checkbox
                  label="Ready to Move"
                  checked={filters.possession.includes('ready')}
                  onChange={() => toggleFilter('possession', 'ready')}
                />
                <Checkbox
                  label="Under Construction"
                  checked={filters.possession.includes('construction')}
                  onChange={() => toggleFilter('possession', 'construction')}
                />
              </FilterSection>

              <FilterSection title="Amenities" section="amenities">
                {amenitiesList.slice(0, 7).map((amenity) => (
                  <Checkbox
                    key={amenity}
                    label={amenity}
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => toggleFilter('amenities', amenity)}
                  />
                ))}
              </FilterSection>

              <FilterSection title="Developer" section="developers">
                {developers.slice(0, 6).map((developer) => (
                  <Checkbox
                    key={developer.id}
                    label={developer.name}
                    checked={filters.developers.includes(developer.id)}
                    onChange={() => toggleFilter('developers', developer.id)}
                  />
                ))}
              </FilterSection>
            </div>
          </aside>

          <main className="flex-1">
            <div className="bg-white p-4 rounded-[var(--radius-card)] flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <p style={{ fontSize: '15px', color: 'var(--pp-text-muted)' }}>
                  Showing <span style={{ fontWeight: 600, color: 'var(--pp-text)' }}>{allProperties.length}</span> properties
                </p>
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-[var(--radius-btn)] bg-[var(--pp-primary-light)] text-[var(--pp-primary-dark)]"
                  style={{ fontSize: '14px', fontWeight: 600 }}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none"
                  style={{ fontSize: '14px' }}
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>

                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-[var(--radius-btn)] transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-[var(--pp-primary)] text-white'
                        : 'bg-[var(--pp-bg)] text-[var(--pp-text-muted)]'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-[var(--radius-btn)] transition-colors ${
                      viewMode === 'list'
                        ? 'bg-[var(--pp-primary)] text-white'
                        : 'bg-[var(--pp-bg)] text-[var(--pp-text-muted)]'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
              {allProperties.map((property) => (
                <PropertyCard key={property.id} property={property} variant={viewMode} />
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                className="px-4 py-2 rounded-[var(--radius-btn)] border border-[var(--pp-border)] hover:bg-[var(--pp-bg)]"
                style={{ fontSize: '14px' }}
              >
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-[var(--radius-btn)] transition-colors ${
                    page === 1
                      ? 'bg-[var(--pp-primary)] text-white'
                      : 'bg-white text-[var(--pp-text)] hover:bg-[var(--pp-bg)]'
                  }`}
                  style={{ fontSize: '14px', fontWeight: 600 }}
                >
                  {page}
                </button>
              ))}
              <button
                className="px-4 py-2 rounded-[var(--radius-btn)] border border-[var(--pp-border)] hover:bg-[var(--pp-bg)]"
                style={{ fontSize: '14px' }}
              >
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
