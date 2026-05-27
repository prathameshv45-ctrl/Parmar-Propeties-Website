import { useState } from 'react';
import { Link } from 'react-router';
import { Grid, List, ChevronDown, ChevronUp, SlidersHorizontal, X } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { allProperties, amenitiesList, developers } from '../data/mockData';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="border-b border-border/50 pb-4 mb-4">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between mb-3 font-display font-semibold text-sm text-text"
      >
        {title}
        {expandedSections[section] ? <ChevronUp className="w-5 h-5 text-text-muted" /> : <ChevronDown className="w-5 h-5 text-text-muted" />}
      </button>
      <AnimatePresence initial={false}>
        {expandedSections[section] && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <label className="flex items-center gap-3 mb-3 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded border-border text-primary accent-primary cursor-pointer focus:ring-primary focus:ring-offset-1"
      />
      <span className="font-sans text-sm text-text-muted group-hover:text-primary transition-colors">
        {label}
      </span>
    </label>
  );

  const FilterContent = () => (
    <>
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50 hidden lg:flex">
        <h3 className="font-display font-semibold text-lg text-text">Filters</h3>
        <button className="text-primary hover:text-primary-dark font-semibold text-sm transition-colors">
          Clear All
        </button>
      </div>

      <FilterSection title="Property Type" section="propertyType">
        <Checkbox label="Apartment" checked={filters.propertyTypes.includes('apartment')} onChange={() => toggleFilter('propertyTypes', 'apartment')} />
        <Checkbox label="Penthouse" checked={filters.propertyTypes.includes('penthouse')} onChange={() => toggleFilter('propertyTypes', 'penthouse')} />
        <Checkbox label="Villa" checked={filters.propertyTypes.includes('villa')} onChange={() => toggleFilter('propertyTypes', 'villa')} />
      </FilterSection>

      <FilterSection title="Price Range" section="priceRange">
        <div className="mb-4">
          <input
            type="range"
            min="50"
            max="5000"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({ ...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value)] })}
            className="w-full accent-primary"
          />
          <div className="flex justify-between mt-2 font-sans text-xs text-text-muted font-medium">
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
              className={`px-4 py-2 rounded-full transition-all font-sans text-xs font-semibold ${
                filters.bhk.includes(bhk)
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-bg text-text-muted hover:bg-primary-light hover:text-primary-dark'
              }`}
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
            onChange={(e) => setFilters({ ...filters, carpetArea: [filters.carpetArea[0], parseInt(e.target.value)] })}
            className="w-full accent-primary"
          />
          <div className="flex justify-between mt-2 font-sans text-xs text-text-muted font-medium">
            <span>500 sq ft</span>
            <span>{filters.carpetArea[1]} sq ft</span>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Possession Status" section="possession">
        <Checkbox label="Ready to Move" checked={filters.possession.includes('ready')} onChange={() => toggleFilter('possession', 'ready')} />
        <Checkbox label="Under Construction" checked={filters.possession.includes('construction')} onChange={() => toggleFilter('possession', 'construction')} />
      </FilterSection>

      <FilterSection title="Amenities" section="amenities">
        {amenitiesList.slice(0, 7).map((amenity) => (
          <Checkbox key={amenity} label={amenity} checked={filters.amenities.includes(amenity)} onChange={() => toggleFilter('amenities', amenity)} />
        ))}
      </FilterSection>

      <FilterSection title="Developer" section="developers">
        {developers.slice(0, 6).map((developer) => (
          <Checkbox key={developer.id} label={developer.name} checked={filters.developers.includes(developer.id)} onChange={() => toggleFilter('developers', developer.id)} />
        ))}
      </FilterSection>
    </>
  );

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-bg pb-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="mb-8 flex items-center gap-2 font-sans text-sm text-text-muted">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text font-medium">Residential Properties</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Sidebar Filter */}
          <aside className="hidden lg:block w-80 shrink-0 sticky top-28 self-start h-[calc(100vh-8rem)] overflow-y-auto hide-scrollbar rounded-xl bg-white p-6 shadow-card border border-border/50">
            <FilterContent />
          </aside>

          {/* Mobile Bottom Sheet Drawer Filter */}
          <AnimatePresence>
            {showMobileFilters && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowMobileFilters(false)}
                  className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
                />
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  className="fixed bottom-0 left-0 right-0 h-[85vh] bg-white rounded-t-3xl z-50 lg:hidden flex flex-col shadow-2xl"
                >
                  <div className="flex items-center justify-between p-6 border-b border-border/50">
                    <h3 className="font-display font-semibold text-xl text-text">Filters</h3>
                    <div className="flex items-center gap-4">
                      <button className="text-primary font-semibold text-sm">Clear All</button>
                      <button onClick={() => setShowMobileFilters(false)} className="p-2 bg-bg rounded-full text-text-muted hover:text-text transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6 hide-scrollbar">
                    <FilterContent />
                  </div>
                  <div className="p-6 border-t border-border/50">
                    <button onClick={() => setShowMobileFilters(false)} className="w-full py-4 rounded-btn bg-primary text-white font-display font-semibold text-base transition-colors hover:bg-primary-dark shadow-md">
                      Show Results ({allProperties.length})
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <p className="font-sans text-base text-text-muted">
                  Showing <span className="font-semibold text-text">{allProperties.length}</span> properties
                </p>
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-border/50 text-text font-medium text-sm hover:shadow-md transition-shadow"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
              </div>

              <div className="flex items-center gap-4 self-end md:self-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 rounded-btn bg-white border border-border/50 outline-none font-sans text-sm text-text font-medium hover:border-primary transition-colors cursor-pointer shadow-sm"
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>

                <div className="hidden sm:flex gap-1 bg-white p-1 rounded-btn border border-border/50 shadow-sm">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'grid'
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-transparent text-text-muted hover:text-text hover:bg-bg'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'list'
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-transparent text-text-muted hover:text-text hover:bg-bg'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
              {allProperties.map((property, index) => (
                <ScrollReveal key={property.id} delay={index * 0.1}>
                  <PropertyCard property={property} variant={viewMode} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="flex justify-center items-center gap-2 mt-12">
                <button className="px-5 py-2.5 rounded-btn bg-white border border-border/50 font-sans text-sm font-medium text-text hover:bg-bg transition-colors shadow-sm">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-btn font-sans text-sm font-semibold transition-all shadow-sm ${
                      page === 1
                        ? 'bg-primary text-white'
                        : 'bg-white text-text border border-border/50 hover:bg-bg hover:border-primary/30'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-5 py-2.5 rounded-btn bg-white border border-border/50 font-sans text-sm font-medium text-text hover:bg-bg transition-colors shadow-sm">
                  Next
                </button>
              </div>
            </ScrollReveal>
          </main>
        </div>
      </div>
    </div>
  );
}
