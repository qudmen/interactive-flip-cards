import './CardFront.css';
import type { Card } from '../../types';

type CardFrontProps = {
  card: Card;
  onDetails?: () => void;
  onDeleteCard: (cardId: string) => void;
  onToggleFavorite: (cardId: string) => void;
};

const categoryLabels: Record<Card['category'], string> = {
  fire: 'Огонь',
  water: 'Вода',
  earth: 'Земля',
  air: 'Воздух',
};

function CardFront({ card, onDetails, onDeleteCard, onToggleFavorite }: CardFrontProps) {
  return (
    <div className="card-front">
      <div className="card-image-wrap">
        <img className="card-image" src={card.image} alt={card.title} />
      </div>

      <div className="card-front-body">
        <div className="card-top-row">
          <span className={`category-badge category-${card.category}`}>{categoryLabels[card.category]}</span>
          <div className="card-actions">
            <button
              type="button"
              className={`icon-btn favorite-btn ${card.isFavorite ? 'active' : ''}`}
              onClick={() => onToggleFavorite(card.id)}
              aria-label={card.isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
              aria-pressed={card.isFavorite}
            >
              ★
            </button>
            <button
              type="button"
              className="icon-btn delete-btn"
              onClick={() => {
                const confirmed = window.confirm(`Удалить карточку «${card.title}»?`);

                if (confirmed) {
                  onDeleteCard(card.id);
                }
              }}
              aria-label="Удалить карточку"
            >
              ✕
            </button>
          </div>
        </div>

        <h3 className="card-title">{card.title}</h3>

        <button type="button" className="primary-btn details-btn" onClick={onDetails}>
          Подробнее
        </button>
      </div>
    </div>
  );
}

export default CardFront;

