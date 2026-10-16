export type OfficeLocation = {
  id: string;
  country: string;
  officeType: string;
  displayName: string;
  fullAddress: string;
  mapUrl: string;
};

export const locations: OfficeLocation[] = [
  {
    id: 'india-head-office',
    country: 'India',
    officeType: 'Main Office — India',
    displayName: 'Head Office — Ahmedabad, India',
    fullAddress: 'Shop No 518, Golden Plaza, Amar Jawan Circle, Nikol, Ahmedabad, Ahmedabad, Gujarat, India, 382350',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Shop No 518, Golden Plaza, Amar Jawan Circle, Nikol, Ahmedabad, Ahmedabad, Gujarat, India, 382350'),
  },
  {
    id: 'turkey-branch',
    country: 'Turkey',
    officeType: 'Second Branch — Turkey',
    displayName: 'Turkey Branch — Darıca, Kocaeli',
    fullAddress: 'Daire 6, Bina No 7, 1657/2 Sk, Sırasöğütler Mah., Darıca, Kocaeli, Turkey',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Daire 6, Bina No 7, 1657/2 Sk, Sırasöğütler Mah., Darıca, Kocaeli, Turkey'),
  },
];

export const metalCategories = [
  'Aluminium Scrap',
  'Brass Scrap',
  'Ferrous Scrap',
  'Copper Scrap',
  'Stainless Steel Scrap',
] as const;

export type MetalCategory = typeof metalCategories[number];

export const company = {
  name: 'Aurexon International LLP',
  shortName: 'Aurexon',
  logo: '/logo/aurexon-logo.png',
  industry: 'Metal Scrap Trading, Sourcing & Recycling Solutions',
  headline: 'Your Trusted Partner in Global Metal Scrap Trading',
  tagline: 'Giving Metal Scrap a New Life Through Responsible Trading & Recycling.',
  description:
    'Aurexon International LLP provides metal scrap sourcing and trading solutions across a diverse range of ferrous and non-ferrous materials, connecting businesses with opportunities for responsible material reuse.',
  locations,
  address: locations[0].fullAddress,
  phone: '[ADD PHONE NUMBER]',
  email: '[ADD EMAIL ADDRESS]',
  whatsapp: '[ADD WHATSAPP NUMBER]',
  businessHours: 'Monday – Saturday: Business Hours (IST / TRT)',
  seo: {
    title: 'Aurexon International LLP | Global Metal Scrap Trading & Sourcing',
    description:
      'Aurexon International LLP provides metal scrap sourcing and trading solutions across aluminium, copper, brass, ferrous, and stainless steel materials with offices in India and Turkey.',
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact' },
];

export const values = [
  'Integrity',
  'Reliability',
  'Quality-Conscious Approach',
  'Sustainability & Circular Economy',
  'Clear & Transparent Communication',
  'Long-Term Partnerships',
];
