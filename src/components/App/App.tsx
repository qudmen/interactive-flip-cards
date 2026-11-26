import { useEffect, useState } from 'react';
import './App.css';
import AddCardForm from '../AddCardForm/AddCardForm';
import CardGrid from '../CardGrid/CardGrid';
import { initialCards } from '../../initialCards';
import type { Card } from '../../types';

function App() {
  const [cards, setCards] = useState<Card[]>(() => {
    const savedCards = localStorage.getItem('cards');

    if (savedCards) {
      return JSON.parse(savedCards) as Card[];
    }

    return initialCards;
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const favoritesCount = cards.filter((card) => card.isFavorite).length;

  const handleAddCard = (newCard: Omit<Card, 'id' | 'isFavorite'>) => {
    const card: Card = {
      ...newCard,
      id: crypto.randomUUID(),
      isFavorite: false,
    };
    setCards((prevCards) => [...prevCards, card]);
  };

  const handleDeleteCard = (cardId: string) => {
    setCards((prevCards) =>
      prevCards.filter((card) => card.id !== cardId)
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Каталог карточек стихий</h1>
          <p className="app-subtitle">Простая витрина карточек с описанием и характеристиками.</p>
        </div>
        <p className="favorites-counter">
          Избранное: {favoritesCount} из {cards.length}
        </p>
      </header>

      <main className="app-main">
        <section className="catalog-section">
          <h2>Карточки</h2>
          <CardGrid cards={cards} onDeleteCard={handleDeleteCard}/>
        </section>

        <section className="form-section">
          <h2>Добавить карточку</h2>
          <AddCardForm onAddCard={handleAddCard} />
        </section>
      </main>
    </div>
  );
}

export default App;

