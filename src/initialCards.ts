import type { Card } from './types';

export const initialCards: Card[] = [
  {
    id: 'card-1',
    title: 'Ember Spirit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2-58pSeYQ27KAJg6o57ElO2eEk4_nFtrB6AgJE43UzfJNJYFx-YYNW_B&s=10',
    description:
      'Дух огня, рождающийся из пепла. Его пламя согревает союзников и отпугивает врагов.',
    category: 'fire',
    stats: { power: 88, defense: 42, speed: 76, rarity: 'legendary' },
    isFavorite: true,
  },
  {
    id: 'card-2',
    title: 'Morphling',
    image:
      'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/social/morphling.jpg',
    description:
      'Хранитель морских глубин. Спокоен с виду, но способен смыть любую преграду.',
    category: 'water',
    stats: { power: 64, defense: 70, speed: 58, rarity: 'epic' },
    isFavorite: false,
  },
  {
    id: 'card-3',
    title: 'Tiny',
    image:
      'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/social/tiny.jpg',
    description:
      'Древний голем горных вершин. Медлителен, но его защита почти непробиваема.',
    category: 'earth',
    stats: { power: 72, defense: 95, speed: 24, rarity: 'rare' },
    isFavorite: false,
  },
  {
    id: 'card-4',
    title: 'Windranger',
    image:
      'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/social/windrunner.jpg',
    description:
      'Лёгкий воздушный дух, скользящий между облаков. Быстрее любого ветра в каньоне.',
    category: 'air',
    stats: { power: 54, defense: 38, speed: 92, rarity: 'epic' },
    isFavorite: false,
  },
  {
    id: 'card-5',
    title: 'Earth Spirit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4RURs9HeY_49SGXJ6VOTwEhg8bC7_WwEysWrQSR_i_LaxbzqelmpOMcy&s=10',
    description:
      'Молодой дух земли, пробивающийся сквозь камни. Неброский, но очень выносливый.',
    category: 'earth',
    stats: { power: 40, defense: 55, speed: 35, rarity: 'common' },
    isFavorite: false,
  },
];
