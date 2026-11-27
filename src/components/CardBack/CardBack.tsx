import './CardBack.css';
import type { Card } from '../../types';

type CardBackProps = {
  card: Card;
  onBack?: () => void;
};

const rarityLabels: Record<Card['stats']['rarity'], string> = {
  common: 'Обычная',
  rare: 'Редкая',
  epic: 'Эпическая',
  legendary: 'Легендарная',
};

function CardBack({ card, onBack }: CardBackProps) {
  return (
    <div className="card-back">
      <div className="card-back-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>

        <div className="stats-block">
          <h4>Характеристики</h4>
          <ul className="stats-list">
            <li>
              <span>Сила</span>
              <strong>{card.stats.power}</strong>
            </li>
            <li>
              <span>Защита</span>
              <strong>{card.stats.defense}</strong>
            </li>
            <li>
              <span>Скорость</span>
              <strong>{card.stats.speed}</strong>
            </li>
            <li>
              <span>Редкость</span>
              <strong>{rarityLabels[card.stats.rarity]}</strong>
            </li>
          </ul>
        </div>
      </div>

      <button type="button" className="secondary-btn back-btn" onClick={onBack}>
        Назад
      </button>
    </div>
  );
}

export default CardBack;

