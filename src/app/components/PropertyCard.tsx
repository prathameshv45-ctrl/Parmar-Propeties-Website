import { Bed, Bath, Maximize2, MapPin, Heart } from 'lucide-react';
import { Property } from '../data/mockData';
import { useState } from 'react';
import { Link } from 'react-router';

interface PropertyCardProps {
  property: Property;
  variant?: 'grid' | 'list';
}

export function PropertyCard({ property, variant = 'grid' }: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  if (variant === 'list') {
    return (
      <Link to={`/property/${property.id}`} className="block">
        <div className="bg-white rounded-[var(--radius-card)] overflow-hidden flex gap-4 transition-all duration-200 hover:-translate-y-1"
             style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="relative w-80 flex-shrink-0">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 object-cover"
            />
            {property.badge && (
              <div className="absolute top-0 left-0 bg-[var(--pp-primary)] text-white px-3 py-1.5 uppercase tracking-wider"
                   style={{
                     fontSize: '11px',
                     fontWeight: 700,
                     borderBottomRightRadius: 'var(--radius-btn)'
                   }}>
                {property.badge}
              </div>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsSaved(!isSaved);
              }}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center transition-colors hover:bg-[var(--pp-primary-light)]"
            >
              <Heart
                className={`w-5 h-5 ${isSaved ? 'fill-[var(--pp-primary)] text-[var(--pp-primary)]' : 'text-[var(--pp-text-muted)]'}`}
              />
            </button>
          </div>

          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="mb-2">{property.title}</h3>
              <p className="text-[var(--pp-text-muted)] flex items-center gap-1.5 mb-4" style={{ fontSize: '15px' }}>
                <MapPin className="w-4 h-4" />
                {property.location}
              </p>

              <div className="flex gap-6 mb-4">
                <div className="flex items-center gap-2 text-[var(--pp-text-muted)]" style={{ fontSize: '15px' }}>
                  <Bed className="w-5 h-5" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--pp-text-muted)]" style={{ fontSize: '15px' }}>
                  <Bath className="w-5 h-5" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--pp-text-muted)]" style={{ fontSize: '15px' }}>
                  <Maximize2 className="w-5 h-5" />
                  <span>{property.area} sq ft</span>
                </div>
              </div>

              <p className="text-[var(--pp-text-muted)] line-clamp-2" style={{ fontSize: '14px' }}>
                {property.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-[var(--pp-primary)]" style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '22px' }}>
                  {property.priceText}
                </p>
                <p className="text-[var(--pp-text-muted)]" style={{ fontSize: '13px' }}>
                  {property.status}
                </p>
              </div>
              <button className="px-7 py-3 bg-[var(--pp-primary)] text-white rounded-[var(--radius-btn)] transition-colors hover:bg-[var(--pp-primary-dark)]"
                      style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px' }}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/property/${property.id}`} className="block">
      <div className="bg-white rounded-[var(--radius-card)] overflow-hidden transition-all duration-200 hover:-translate-y-1"
           style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-56 object-cover"
          />
          {property.badge && (
            <div className="absolute top-0 left-0 bg-[var(--pp-primary)] text-white px-3 py-1.5 uppercase tracking-wider"
                 style={{
                   fontSize: '11px',
                   fontWeight: 700,
                   borderBottomRightRadius: 'var(--radius-btn)'
                 }}>
              {property.badge}
            </div>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSaved(!isSaved);
            }}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center transition-colors hover:bg-[var(--pp-primary-light)]"
          >
            <Heart
              className={`w-5 h-5 ${isSaved ? 'fill-[var(--pp-primary)] text-[var(--pp-primary)]' : 'text-[var(--pp-text-muted)]'}`}
            />
          </button>
        </div>

        <div className="p-5">
          <h3 className="mb-2">{property.title}</h3>
          <p className="text-[var(--pp-text-muted)] flex items-center gap-1.5 mb-4" style={{ fontSize: '15px' }}>
            <MapPin className="w-4 h-4" />
            {property.location}
          </p>

          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2 text-[var(--pp-text-muted)]" style={{ fontSize: '15px' }}>
              <Bed className="w-5 h-5" />
              <span>{property.beds}</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--pp-text-muted)]" style={{ fontSize: '15px' }}>
              <Bath className="w-5 h-5" />
              <span>{property.baths}</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--pp-text-muted)]" style={{ fontSize: '15px' }}>
              <Maximize2 className="w-5 h-5" />
              <span>{property.area} sq ft</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--pp-border)]">
            <p className="text-[var(--pp-primary)]" style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '22px' }}>
              {property.priceText}
            </p>
            <button className="px-6 py-2.5 bg-[var(--pp-primary)] text-white rounded-[var(--radius-btn)] transition-colors hover:bg-[var(--pp-primary-dark)]"
                    style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px' }}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
