import { Bed, Bath, Maximize2, MapPin, Heart } from 'lucide-react';
import { Property } from '../data/mockData';
import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
  variant?: 'grid' | 'list';
}

export function PropertyCard({ property, variant = 'grid' }: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  // The rewrite in §9 focuses on a unified polished card look.
  // We'll primarily focus on the requested styling, using framer-motion for hover.

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="liquid-glass rounded-card overflow-hidden shadow-card property-card-hover group flex flex-col border border-white/5"
    >
      <Link to={`/property/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {property.badge && (
          <div 
            className="absolute top-3 left-3 bg-primary text-black px-3 py-1 uppercase rounded-tag shadow-md font-semibold"
            style={{ fontFamily: 'Inter', fontSize: '11px', letterSpacing: '0.08em' }}
          >
            {property.badge}
          </div>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSaved(!isSaved);
          }}
          className="absolute top-3 right-3 w-10 h-10 rounded-full liquid-glass flex items-center justify-center transition-transform hover:scale-110 z-10"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isSaved ? 'fill-primary text-primary' : 'text-white'
            }`}
          />
        </button>
      </Link>

      <Link to={`/property/${property.id}`} className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-semibold text-[18px] text-white truncate mb-1">
            {property.title}
          </h3>
          <p className="font-sans text-[14px] text-text-muted flex items-center gap-1.5 mb-3">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {property.location}
          </p>

          <div className="flex gap-4 mb-3">
            <div className="flex items-center gap-1.5 font-sans text-[13px] text-white/70">
              <Bed className="w-4 h-4 text-primary" />
              <span>{property.beds} BHK</span>
            </div>
            <div className="flex items-center gap-1.5 font-sans text-[13px] text-white/70">
              <Bath className="w-4 h-4 text-primary" />
              <span>{property.baths} Bath</span>
            </div>
            <div className="flex items-center gap-1.5 font-sans text-[13px] text-white/70">
              <Maximize2 className="w-4 h-4 text-primary" />
              <span>{property.area} sqft</span>
            </div>
          </div>

          <p className="font-display font-bold text-[22px] text-primary mb-3">
            {property.priceText}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="font-sans text-[13px] text-text-muted truncate pr-2">
            By {property.developer || 'VEX'}
          </span>
          <button 
            className="px-4 py-2 bg-primary text-black rounded-btn transition-colors hover:bg-primary-dark font-display font-semibold text-sm shrink-0 btn-gold-shimmer"
            onClick={(e) => { e.preventDefault(); /* Enquire logic */ }}
          >
            Enquire
          </button>
        </div>
      </Link>
    </motion.div>
  );
}
