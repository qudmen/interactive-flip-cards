import { useState } from 'react';
import './FlipCard.css';
import type { Card } from '../../types';
import CardBack from '../CardBack/CardBack';
import CardFront from '../CardFront/CardFront';

type FlipCardProps = {
  card: Card;
  onDeleteCard: (cardId: string) => void;
};

function FlipCard({ card, onDeleteCard }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-face flip-card-front" aria-hidden={isFlipped} inert={isFlipped}>
          <CardFront card={card} onDetails={() => setIsFlipped(true)} onDeleteCard={onDeleteCard} />
        </div>
        <div className="flip-card-face flip-card-back" aria-hidden={!isFlipped} inert={!isFlipped}>
          <CardBack card={card} onBack={() => setIsFlipped(false)} />
        </div>
      </div>
    </article>
  );
}

export default FlipCard;

