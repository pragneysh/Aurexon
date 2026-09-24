export const image = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&fm=webp&q=78&w=${width}`;

export const images = {
  hero: image('photo-1581093458791-9d42cc98e1db', 1920),
  intro: image('photo-1504917595217-d4dc5ebe6122', 1200),
  sustainability: image('photo-1516937941344-00b4e0337589', 1200),
  about: image('photo-1581092918056-0c4c3acd3789', 1200),
  warehouse: image('photo-1586528116311-ad8dd3c8310d', 1200),
};
