import { image } from './images';

export type Product = {
  slug: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  overview: string;
  applications: string[];
};

export const products: Product[] = [
  {
    slug: 'aluminium-extrusion-scrap',
    title: 'Aluminium Extrusion Scrap',
    description: 'Clean extrusion offcuts and profile scrap for industrial recycling and remelting channels.',
    image: image('photo-1518709268805-4e9042af2176', 900),
    gallery: [image('photo-1518709268805-4e9042af2176', 900), image('photo-1504917595217-d4dc5ebe6122', 900)],
    overview: 'Suitable for buyers seeking extrusion scrap streams from industrial or fabrication sources.',
    applications: ['Remelting channels', 'Metal processing units', 'Aluminium recycling facilities'],
  },
  {
    slug: 'aluminium-ubc-scrap',
    title: 'Aluminium UBC / Used Beverage Can Scrap',
    description: 'Used beverage can scrap supply support for recycling-led aluminium recovery.',
    image: image('photo-1591115765373-5207764f72e7', 900),
    gallery: [image('photo-1591115765373-5207764f72e7', 900), image('photo-1611284446314-60a58ac0deb9', 900)],
    overview: 'UBC scrap availability and specifications can vary by current sourcing channels.',
    applications: ['Aluminium recovery', 'Circular material programs', 'Recycling facilities'],
  },
  {
    slug: 'aluminium-wheel-scrap',
    title: 'Aluminium Wheel Scrap',
    description: 'Aluminium wheel scrap for industrial buyers requiring bulk recyclable aluminium material.',
    image: image('photo-1619642751034-765dfdf7c58e', 900),
    gallery: [image('photo-1619642751034-765dfdf7c58e', 900), image('photo-1562141961-5a71f83595ff', 900)],
    overview: 'Wheel scrap is handled for trade and recycling support based on buyer requirements.',
    applications: ['Automotive recycling', 'Casting inputs', 'Metal processing'],
  },
  {
    slug: 'aluminium-sheet-scrap',
    title: 'Aluminium Sheet Scrap',
    description: 'Sheet and plate scrap generated from fabrication, manufacturing and processing activities.',
    image: image('photo-1565793298595-6a879b1d9492', 900),
    gallery: [image('photo-1565793298595-6a879b1d9492', 900), image('photo-1565158701803-556897c4563d', 900)],
    overview: 'Contact Aurexon for current sheet scrap availability and packaging information.',
    applications: ['Sheet recycling', 'Industrial scrap buyers', 'Material recovery'],
  },
  {
    slug: 'aluminium-wire-scrap',
    title: 'Aluminium Wire Scrap',
    description: 'Aluminium wire scrap and related material streams for responsible reuse.',
    image: image('photo-1581091870637-3b115c5c3236', 900),
    gallery: [image('photo-1581091870637-3b115c5c3236', 900), image('photo-1581092580497-e0d23cbdf1dc', 900)],
    overview: 'Wire scrap sourcing is coordinated according to material condition and buyer demand.',
    applications: ['Cable recycling', 'Metal recovery', 'Industrial supply'],
  },
  {
    slug: 'aluminium-casting-scrap',
    title: 'Aluminium Casting Scrap',
    description: 'Casting scrap and recyclable aluminium material for foundry and processing needs.',
    image: image('photo-1581092335878-2d9ff86ca2bf', 900),
    gallery: [image('photo-1581092335878-2d9ff86ca2bf', 900), image('photo-1581092334651-ddf26d9a09d0', 900)],
    overview: 'Casting scrap can be sourced for buyers seeking aluminium recovery and processing support.',
    applications: ['Foundries', 'Casting operations', 'Remelting workflows'],
  },
  {
    slug: 'aluminium-profiles',
    title: 'Aluminium Profiles',
    description: 'Profile and section scrap streams for aluminium processors and trading partners.',
    image: image('photo-1565793298595-6a879b1d9492', 900),
    gallery: [image('photo-1565793298595-6a879b1d9492', 900), image('photo-1504917595217-d4dc5ebe6122', 900)],
    overview: 'Profile scrap enquiries are handled with current specifications confirmed before supply.',
    applications: ['Extrusion processors', 'Manufacturing units', 'Recycling facilities'],
  },
  {
    slug: 'mixed-aluminium-scrap',
    title: 'Mixed Aluminium Scrap',
    description: 'Mixed aluminium scrap lots for buyers with flexible processing requirements.',
    image: image('photo-1504917595217-d4dc5ebe6122', 900),
    gallery: [image('photo-1504917595217-d4dc5ebe6122', 900), image('photo-1516937941344-00b4e0337589', 900)],
    overview: 'Mixed scrap details are shared transparently according to material type and lot condition.',
    applications: ['Scrap sorting', 'Material recovery', 'Bulk trading'],
  },
  {
    slug: 'aluminium-industrial-scrap',
    title: 'Aluminium Industrial Scrap',
    description: 'Industrial aluminium scrap solutions for factories, fabrication units and recyclers.',
    image: image('photo-1581093458791-9d42cc98e1db', 900),
    gallery: [image('photo-1581093458791-9d42cc98e1db', 900), image('photo-1586528116311-ad8dd3c8310d', 900)],
    overview: 'Industrial scrap is managed for collection, sourcing and trading support.',
    applications: ['Manufacturing units', 'Engineering facilities', 'Bulk material supply'],
  },
  {
    slug: 'other-aluminium-scrap',
    title: 'Other Aluminium Scrap',
    description: 'Custom aluminium scrap enquiries for material streams not listed in the catalogue.',
    image: image('photo-1581092160562-40aa08e78837', 900),
    gallery: [image('photo-1581092160562-40aa08e78837', 900), image('photo-1581092918056-0c4c3acd3789', 900)],
    overview: 'Share your material requirement and Aurexon will confirm current sourcing possibilities.',
    applications: ['Custom enquiries', 'Trading partners', 'Recycling support'],
  },
];
