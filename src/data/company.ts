export type OfficeLocation = {
  id: string;
  country: string;
  officeType: string;
  displayName: string;
  fullAddress: string;
  mapUrl: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappUrl: string;
  city: string;
  postalCode?: string;
};

export const locations: OfficeLocation[] = [
  {
    id: 'india-head-office',
    country: 'India',
    officeType: 'Main Office — India',
    displayName: 'Head Office — Ahmedabad, India',
    fullAddress: 'Shop No 518, Golden Plaza, Amar Jawan Circle, Nikol, Ahmedabad, Gujarat, India, 382350',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Shop No 518, Golden Plaza, Amar Jawan Circle, Nikol, Ahmedabad, Gujarat, India, 382350'),
    phone: '+91 990 995 13 52',
    phoneRaw: '+919909951352',
    whatsapp: '+91 990 995 13 52',
    whatsappUrl: 'https://wa.me/919909951352',
    city: 'Ahmedabad',
    postalCode: '382350',
  },
  {
    id: 'turkey-branch',
    country: 'Turkey',
    officeType: 'Second Branch — Turkey',
    displayName: 'Turkey Branch — Darıca, Kocaeli',
    fullAddress: 'Daire 6, Bina No 7, 1657/2 Sk, Sırasöğütler Mah., Darıca, Kocaeli, Turkey',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Daire 6, Bina No 7, 1657/2 Sk, Sırasöğütler Mah., Darıca, Kocaeli, Turkey'),
    phone: '+90 543 475 74 77',
    phoneRaw: '+905434757477',
    whatsapp: '+90 543 475 74 77',
    whatsappUrl: 'https://wa.me/905434757477',
    city: 'Darıca, Kocaeli',
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

export type CompanyEmail = {
  address: string;
  label: string;
  description: string;
  primary?: boolean;
};

export type CompanyPhone = {
  country: string;
  label: string;
  number: string;
  phoneRaw: string;
  whatsappUrl: string;
};

export const officialEmails: CompanyEmail[] = [
  {
    address: 'my@aurexoninternational.com',
    label: 'Direct / Management Desk',
    description: 'Executive trading enquiries & direct sourcing requirements',
    primary: true,
  },
  {
    address: 'info@aurexoninternational.com',
    label: 'General Enquiries',
    description: 'Corporate communications, documentation & vendor onboarding',
    primary: false,
  },
];

export const officialPhones: CompanyPhone[] = [
  {
    country: 'India',
    label: 'India Head Office',
    number: '+91 990 995 13 52',
    phoneRaw: '+919909951352',
    whatsappUrl: 'https://wa.me/919909951352',
  },
  {
    country: 'Turkey',
    label: 'Turkey Branch',
    number: '+90 543 475 74 77',
    phoneRaw: '+905434757477',
    whatsappUrl: 'https://wa.me/905434757477',
  },
];

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
  email: officialEmails[0].address,
  secondaryEmail: officialEmails[1].address,
  emails: officialEmails,
  phone: officialPhones[0].number,
  phoneRaw: officialPhones[0].phoneRaw,
  phones: officialPhones,
  whatsapp: officialPhones[0].number,
  whatsappUrl: officialPhones[0].whatsappUrl,
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
