import { useState } from 'react';
import './AddCardForm.css';

function AddCardForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [rarity, setRarity] = useState('');
  const [power, setPower] = useState('');
  const [defense, setDefense] = useState('');
  const [speed, setSpeed] = useState('');

  const addCard = () => {
    console.log('Добавление карточки:', {
      title,
      image,
      description,
      category,
      rarity,
      power,
      defense,
      speed,
    });
  };

  return (
    <form className="add-card-form" noValidate>
      <div className="form-grid">
        <label className="field">
          <span>Название</span>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Например, Огненный лис"
          />
          <span className="field-error"></span>
        </label>

        <label className="field">
          <span>Изображение (URL)</span>
          <input
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="https://example.com/image.jpg"
          />
          <span className="field-error"></span>
        </label>

        <label className="field field-full">
          <span>Описание</span>
          <textarea
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Короткое описание карточки"
          />
          <span className="field-error"></span>
        </label>

        <label className="field">
          <span>Категория</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" disabled>
              Выберите категорию
            </option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="earth">earth</option>
            <option value="air">air</option>
          </select>
          <span className="field-error"></span>
        </label>

        <label className="field">
          <span>Редкость</span>
          <select
            value={rarity}
            onChange={(event) => setRarity(event.target.value)}
          >
            <option value="" disabled>
              Выберите редкость
            </option>
            <option value="common">common</option>
            <option value="rare">rare</option>
            <option value="epic">epic</option>
            <option value="legendary">legendary</option>
          </select>
          <span className="field-error"></span>
        </label>

        <label className="field">
          <span>Сила (0–100)</span>
          <input
            type="number"
            min={0}
            max={100}
            value={power}
            onChange={(event) => setPower(event.target.value)}
            placeholder="0"
          />
          <span className="field-error"></span>
        </label>

        <label className="field">
          <span>Защита (0–100)</span>
          <input
            type="number"
            min={0}
            max={100}
            value={defense}
            onChange={(event) => setDefense(event.target.value)}
            placeholder="0"
          />
          <span className="field-error"></span>
        </label>

        <label className="field">
          <span>Скорость (0–100)</span>
          <input
            type="number"
            min={0}
            max={100}
            value={speed}
            onChange={(event) => setSpeed(event.target.value)}
            placeholder="0"
          />
          <span className="field-error"></span>
        </label>
      </div>

      <button
        type="submit"
        className="primary-btn submit-btn"
        onClick={(event) => {
          event.preventDefault();
          addCard();
        }}
      >
        Добавить карточку
      </button>
    </form>
  );
}

export default AddCardForm;

