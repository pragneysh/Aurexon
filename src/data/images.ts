export const image = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&fm=webp&q=78&w=${width}`;

export const images = {
  // Industrial scrap yard and metal handling hero image
  hero: image('photo-1605559424843-9e4c228bf1c2', 1920),
  intro: image('photo-1504917595217-d4dc5ebe6122', 1200),
  sustainability: image('photo-1516937941344-00b4e0337589', 1200),
  about: image('photo-1587293852726-70cdb56c2866', 1200),
  warehouse: image('photo-1586528116311-ad8dd3c8310d', 1200),
  metalStock: image('photo-1565793298595-6a879b1d9492', 1200),

  // 5 Primary Category Feature Images
  categories: {
    aluminium: image('photo-1504917595217-d4dc5ebe6122', 900),
    brass: image('photo-1533090161767-e6ffed986c88', 900),
    ferrous: image('photo-1587293852726-70cdb56c2866', 900),
    copper: image('photo-1544716278-ca5e3f4abd8c', 900),
    stainlessSteel: image('photo-1558346490-a72e53ae2d4f', 900),
  },
};
