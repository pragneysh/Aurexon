import {
  BadgeCheck,
  Boxes,
  Factory,
  Handshake,
  PackageCheck,
  Recycle,
  Scale,
  ShieldCheck,
  Truck,
} from 'lucide-react';

export const services = [
  {
    title: 'Aluminium Scrap Sourcing',
    description: 'Focused sourcing support for aluminium scrap requirements across industrial material streams.',
    icon: Recycle,
  },
  {
    title: 'Scrap Trading',
    description: 'Professional B2B trading for aluminium scrap materials with transparent communication.',
    icon: Handshake,
  },
  {
    title: 'Bulk Material Supply',
    description: 'Material supply coordination for buyers with recurring or bulk scrap requirements.',
    icon: Boxes,
  },
  {
    title: 'Scrap Collection',
    description: 'Collection support for industrial aluminium scrap and recyclable metal material.',
    icon: Truck,
  },
  {
    title: 'Recycling Support',
    description: 'Practical support for circular aluminium recovery and responsible material management.',
    icon: PackageCheck,
  },
  {
    title: 'Industrial Scrap Solutions',
    description: 'Tailored scrap solutions for manufacturing units, fabricators and processing facilities.',
    icon: Factory,
  },
];

export const whyChooseUs = [
  { title: 'Reliable Supply', icon: ShieldCheck },
  { title: 'Quality-Focused Materials', icon: BadgeCheck },
  { title: 'Competitive Solutions', icon: Scale },
  { title: 'Responsible Recycling', icon: Recycle },
  { title: 'B2B Support', icon: Handshake },
  { title: 'Transparent Communication', icon: PackageCheck },
];

export const industries = [
  'Aluminium Manufacturing',
  'Automotive',
  'Construction',
  'Engineering',
  'Metal Processing',
  'Manufacturing Units',
  'Recycling Facilities',
];

export const processSteps = [
  'Enquiry',
  'Material Requirement',
  'Sourcing',
  'Quality Check',
  'Supply / Dispatch',
];
