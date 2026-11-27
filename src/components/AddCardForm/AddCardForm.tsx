import { useState, type FormEvent } from 'react';
import './AddCardForm.css';
import type { Card, Category, Rarity } from '../../types';

type AddCardFormProps = {
  onAddCard: (card: Omit<Card, 'id' | 'isFavorite'>) => void;
};

function AddCardForm({ onAddCard }: AddCardFormProps) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category | ''>('');
  const [rarity, setRarity] = useState<Rarity | ''>('');
  const [power, setPower] = useState('');
  const [defense, setDefense] = useState('');
  const [speed, setSpeed] = useState('');
  const [isOpenTitle, setIsOpenTitle] = useState(false);
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenRarity, setIsOpenRarity] = useState(false);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isTitleEmpty = !title.trim();
    const trimmedImage = image.trim();
    const isImageEmpty = !trimmedImage;
    const isImageUrlInvalid = !/^https?:\/\//i.test(trimmedImage);
    const isDescriptionEmpty = !description.trim();
    const isCategoryEmpty = !category;
    const isRarityEmpty = !rarity;

    setIsOpenTitle(isTitleEmpty);
    setIsOpenImage(isImageEmpty || isImageUrlInvalid);
    setIsOpenDescription(isDescriptionEmpty);
    setIsOpenCategory(isCategoryEmpty);
    setIsOpenRarity(isRarityEmpty);
    
    if (isTitleEmpty || isImageEmpty || isImageUrlInvalid || isDescriptionEmpty || isCategoryEmpty || isRarityEmpty) {
      return;
    }
    

    onAddCard({
      title,
      image,
      description,
      category,
      stats: {
        power: Number(power),
        defense: Number(defense),
        speed: Number(speed),
        rarity,
      },
    });

    
    setTitle('');
    setImage('');
    setDescription('');
    setCategory('');
    setRarity('');
    setPower('');
    setDefense('');
    setSpeed('');

    setIsOpenTitle(false);
    setIsOpenImage(false);
    setIsOpenDescription(false);
    setIsOpenCategory(false);
    setIsOpenRarity(false);
  };

  return (
    <form className="add-card-form" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Название</span>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Например, Огненный лис"
          />
          <span className={`field-error ${isOpenTitle ? '' : 'not-open'}`}>Введите название</span>
        </label>

        <label className="field">
          <span>Изображение (URL)</span>
          <input
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="https://example.com/image.jpg"
          />
          <span className={`field-error ${isOpenImage ? '' : 'not-open'}`}>Введите URL изображения</span>
        </label>

        <label className="field field-full">
          <span>Описание</span>
          <textarea
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Короткое описание карточки"
          />
          <span className={`field-error ${isOpenDescription ? '' : 'not-open'}`}>Введите описание</span>
        </label>

        <label className="field">
          <span>Категория</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as Category)}
          >
            <option value="" disabled>
              Выберите категорию
            </option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="earth">earth</option>
            <option value="air">air</option>
          </select>
          <span className={`field-error ${isOpenCategory ? '' : 'not-open'}`}>Выберите категорию</span>
        </label>

        <label className="field">
          <span>Редкость</span>
          <select
            value={rarity}
            onChange={(event) => setRarity(event.target.value as Rarity)}
          >
            <option value="" disabled>
              Выберите редкость
            </option>
            <option value="common">common</option>
            <option value="rare">rare</option>
            <option value="epic">epic</option>
            <option value="legendary">legendary</option>
          </select>
          <span className={`field-error ${isOpenRarity ? '' : 'not-open'}`}>Выберите редкость</span>
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
        </label>

        <label className="field pb-10">
          <span>Скорость (0–100)</span>
          <input
            type="number"
            min={0}
            max={100}
            value={speed}
            onChange={(event) => setSpeed(event.target.value)}
            placeholder="0"
          />
        </label>
      </div>

      <button type="submit" className="primary-btn submit-btn">
        Добавить карточку
      </button>
    </form>
  );
}

export default AddCardForm;

