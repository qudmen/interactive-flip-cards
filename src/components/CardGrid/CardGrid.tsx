import './CardGrid.css';
import type { Card } from '../../types';
import FlipCard from '../FlipCard/FlipCard';

type CardGridProps = {
  cards: Card[];
  onDeleteCard: (cardId: string) => void;
};

function CardGrid({ cards, onDeleteCard }: CardGridProps) {
  if (cards.length === 0) {
    return <div className="empty-state">Карточек пока нет. Добавьте первую карточку через форму ниже.</div>;
  }

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <FlipCard key={card.id} card={card} onDeleteCard={onDeleteCard} />
      ))}
    </div>
  );
}

export default CardGrid;
