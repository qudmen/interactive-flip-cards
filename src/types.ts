export type Card = {
  id: string;
  title: string;
  image: string;
  description: string;
  category: Category;
  stats: CardStats;
  isFavorite: boolean;
}
export type Category = 'fire' | 'water' | 'earth' | 'air';

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

export type CardStats = {
  power: number;
  defense: number;
  speed: number;
  rarity: Rarity;
}