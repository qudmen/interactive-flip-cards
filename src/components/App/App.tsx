import './App.css';
import AddCardForm from '../AddCardForm/AddCardForm';
import CardGrid from '../CardGrid/CardGrid';
import { initialCards } from '../../initialCards';

function App() {
  const favoritesCount = initialCards.filter((card) => card.isFavorite).length;

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Каталог карточек стихий</h1>
          <p className="app-subtitle">Простая витрина карточек с описанием и характеристиками.</p>
        </div>
        <p className="favorites-counter">
          Избранное: {favoritesCount} из {initialCards.length}
        </p>
      </header>

      <main className="app-main">
        <section className="catalog-section">
          <h2>Карточки</h2>
          <CardGrid cards={initialCards} />
        </section>

        <section className="form-section">
          <h2>Добавить карточку</h2>
          <AddCardForm />
        </section>
      </main>
    </div>
  );
}

export default App;

