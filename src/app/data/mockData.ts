export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceText: string;
  beds: number;
  baths: number;
  area: number;
  type: string;
  status: string;
  badge?: string;
  isFeatured: boolean;
  image: string;
  gallery?: string[];
  developer: string;
  description: string;
  amenities: string[];
  possessionDate: string;
  reraId: string;
  floor: string;
  totalFloors: string;
  carpetArea: number;
  videoUrl?: string;
}

export interface Developer {
  id: string;
  name: string;
  logo: string;
  propertyCount: number;
  description: string;
}

export const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Monte South",
    location: "Byculla, South Mumbai",
    price: 3.5,
    priceText: "₹3.5 Cr",
    beds: 3,
    baths: 3,
    area: 1450,
    type: "Apartment",
    status: "Ready to Move",
    badge: "Featured",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    ],
    developer: "Lodha",
    description: "Luxurious 3BHK apartment in the heart of Byculla with modern amenities and stunning city views.",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Garden", "Security", "Parking", "Kids Play Area"],
    possessionDate: "Immediate",
    reraId: "P51900001234",
    floor: "12",
    totalFloors: "25",
    carpetArea: 1450,
  },
  {
    id: "2",
    title: "Darshan Promesa",
    location: "Parel, South Mumbai",
    price: 4.2,
    priceText: "₹4.2 Cr",
    beds: 4,
    baths: 4,
    area: 1850,
    type: "Apartment",
    status: "Under Construction",
    badge: "New",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    developer: "Darshan",
    description: "Premium 4BHK residence with world-class amenities in the vibrant locality of Parel.",
    amenities: ["Swimming Pool", "Gym", "Spa", "Clubhouse", "Garden", "Security", "Parking", "Concierge"],
    possessionDate: "Dec 2026",
    reraId: "P51900002345",
    floor: "18",
    totalFloors: "32",
    carpetArea: 1850,
  },
  {
    id: "3",
    title: "Ruparel Vivanza",
    location: "Lalbaug, South Mumbai",
    price: 2.8,
    priceText: "₹2.8 Cr",
    beds: 2,
    baths: 2,
    area: 1100,
    type: "Apartment",
    status: "Ready to Move",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    ],
    developer: "Ruparel",
    description: "Cozy 2BHK apartment perfect for small families in the peaceful area of Lalbaug.",
    amenities: ["Gym", "Garden", "Security", "Parking", "Power Backup"],
    possessionDate: "Immediate",
    reraId: "P51900003456",
    floor: "8",
    totalFloors: "15",
    carpetArea: 1100,
  },
  {
    id: "4",
    title: "Rustomjee Crown",
    location: "Prabhadevi, South Mumbai",
    price: 5.5,
    priceText: "₹5.5 Cr",
    beds: 4,
    baths: 5,
    area: 2200,
    type: "Penthouse",
    status: "Ready to Move",
    badge: "Featured",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
    developer: "Rustomjee",
    description: "Luxurious penthouse with panoramic views of the Arabian Sea and Mumbai skyline.",
    amenities: ["Private Pool", "Gym", "Spa", "Clubhouse", "Terrace Garden", "Security", "Valet Parking"],
    possessionDate: "Immediate",
    reraId: "P51900004567",
    floor: "28",
    totalFloors: "28",
    carpetArea: 2200,
  },
  {
    id: "5",
    title: "Prestige Jasdan Classic",
    location: "NM Joshi Marg, South Mumbai",
    price: 3.2,
    priceText: "₹3.2 Cr",
    beds: 3,
    baths: 3,
    area: 1350,
    type: "Apartment",
    status: "Ready to Move",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80",
    ],
    developer: "Prestige",
    description: "Well-designed 3BHK apartment with modern interiors and excellent connectivity.",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Garden", "Security", "Parking"],
    possessionDate: "Immediate",
    reraId: "P51900005678",
    floor: "10",
    totalFloors: "20",
    carpetArea: 1350,
  },
  {
    id: "6",
    title: "Bhoomi Simana",
    location: "Byculla, South Mumbai",
    price: 2.5,
    priceText: "₹2.5 Cr",
    beds: 2,
    baths: 2,
    area: 950,
    type: "Apartment",
    status: "Under Construction",
    badge: "New",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    ],
    developer: "Bhoomi",
    description: "Affordable 2BHK apartment with great amenities in the developing locality of Byculla.",
    amenities: ["Gym", "Garden", "Security", "Parking", "Community Hall"],
    possessionDate: "Mar 2027",
    reraId: "P51900006789",
    floor: "5",
    totalFloors: "12",
    carpetArea: 950,
  },
];

export const allProperties: Property[] = [
  ...featuredProperties,
  {
    id: "7",
    title: "Oberoi Sky City",
    location: "Parel, South Mumbai",
    price: 6.8,
    priceText: "₹6.8 Cr",
    beds: 4,
    baths: 5,
    area: 2500,
    type: "Apartment",
    status: "Ready to Move",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    developer: "Oberoi",
    description: "Ultra-luxurious 4BHK with state-of-the-art amenities.",
    amenities: ["Swimming Pool", "Gym", "Spa", "Theater", "Garden", "Security", "Valet Parking"],
    possessionDate: "Immediate",
    reraId: "P51900007890",
    floor: "22",
    totalFloors: "30",
    carpetArea: 2500,
  },
  {
    id: "8",
    title: "Godrej Urban Park",
    location: "Lalbaug, South Mumbai",
    price: 1.9,
    priceText: "₹1.9 Cr",
    beds: 2,
    baths: 2,
    area: 850,
    type: "Apartment",
    status: "Under Construction",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    developer: "Godrej",
    description: "Compact 2BHK ideal for first-time homebuyers.",
    amenities: ["Gym", "Garden", "Security", "Parking"],
    possessionDate: "Jun 2027",
    reraId: "P51900008901",
    floor: "6",
    totalFloors: "14",
    carpetArea: 850,
  },
];

export const developers: Developer[] = [
  {
    id: "1",
    name: "Godrej Properties",
    logo: "https://via.placeholder.com/150x60/C8972B/FFFFFF?text=Godrej",
    propertyCount: 12,
    description: "Leading real estate developer with 25+ years of excellence.",
  },
  {
    id: "2",
    name: "Lodha Group",
    logo: "https://via.placeholder.com/150x60/C8972B/FFFFFF?text=Lodha",
    propertyCount: 18,
    description: "India's premier real estate developer.",
  },
  {
    id: "3",
    name: "Rustomjee",
    logo: "https://via.placeholder.com/150x60/C8972B/FFFFFF?text=Rustomjee",
    propertyCount: 8,
    description: "Trusted name in Mumbai real estate for 70+ years.",
  },
  {
    id: "4",
    name: "Oberoi Realty",
    logo: "https://via.placeholder.com/150x60/C8972B/FFFFFF?text=Oberoi",
    propertyCount: 6,
    description: "Premium luxury developments in prime locations.",
  },
  {
    id: "5",
    name: "Prestige Group",
    logo: "https://via.placeholder.com/150x60/C8972B/FFFFFF?text=Prestige",
    propertyCount: 10,
    description: "Award-winning real estate developer.",
  },
  {
    id: "6",
    name: "Piramal Realty",
    logo: "https://via.placeholder.com/150x60/C8972B/FFFFFF?text=Piramal",
    propertyCount: 5,
    description: "Redefining urban living with innovative designs.",
  },
];

export const amenitiesList = [
  "Swimming Pool",
  "Gym",
  "Clubhouse",
  "Garden",
  "Security",
  "Parking",
  "Kids Play Area",
  "Spa",
  "Concierge",
  "Power Backup",
  "Community Hall",
  "Theater",
  "Valet Parking",
  "Terrace Garden",
  "Private Pool",
];
