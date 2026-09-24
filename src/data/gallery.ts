import { image } from './images';

export type GalleryCategory = 'All' | 'Aluminium Scrap' | 'Materials' | 'Processing' | 'Warehouse' | 'Dispatch';

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Aluminium Scrap',
  'Materials',
  'Processing',
  'Warehouse',
  'Dispatch',
];

export const galleryItems = [
  {
    title: 'Aluminium scrap materials',
    category: 'Aluminium Scrap',
    image: image('photo-1504917595217-d4dc5ebe6122', 1200),
  },
  {
    title: 'Industrial aluminium processing',
    category: 'Processing',
    image: image('photo-1581093458791-9d42cc98e1db', 1200),
  },
  {
    title: 'Metal recycling operations',
    category: 'Processing',
    image: image('photo-1516937941344-00b4e0337589', 1200),
  },
  {
    title: 'Material storage and handling',
    category: 'Warehouse',
    image: image('photo-1586528116311-ad8dd3c8310d', 1200),
  },
  {
    title: 'Aluminium stock preparation',
    category: 'Materials',
    image: image('photo-1565793298595-6a879b1d9492', 1200),
  },
  {
    title: 'Bulk dispatch coordination',
    category: 'Dispatch',
    image: image('photo-1494412685616-a5d310fbb07d', 1200),
  },
  {
    title: 'Industrial material inspection',
    category: 'Materials',
    image: image('photo-1581092918056-0c4c3acd3789', 1200),
  },
  {
    title: 'Manufacturing scrap flow',
    category: 'Aluminium Scrap',
    image: image('photo-1581092334651-ddf26d9a09d0', 1200),
  },
  {
    title: 'Warehouse logistics',
    category: 'Warehouse',
    image: image('photo-1566576912321-d58ddd7a6088', 1200),
  },
];
