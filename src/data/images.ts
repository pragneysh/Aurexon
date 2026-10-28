export const image = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&fm=webp&q=78&w=${width}`;

export const images = {
  // Industrial scrap yard and metal handling hero image - local high-res asset
  hero: '/images/hero-scrap-yard.jpg',
  intro: '/images/category-ferrous.jpg',
  sustainability: image('photo-1516937941344-00b4e0337589', 1200),
  about: '/images/hero-scrap-yard.jpg',
  warehouse: '/images/category-copper.jpg',
  metalStock: '/images/category-stainless.jpg',

  // 5 Primary Category Feature Images - authentic metal scrap photography stored locally
  categories: {
    aluminium: '/images/category-aluminium.jpg',
    brass: '/images/category-brass.jpg',
    ferrous: '/images/category-ferrous.jpg',
    copper: '/images/category-copper.jpg',
    stainlessSteel: '/images/category-stainless.jpg',
  },
};
