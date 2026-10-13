import { useState } from "react";
import "./ProductCard.css";

// Компонент карточки товара.
// name, price, image приходят через props.
function ProductCard({ name, price, image }) {
  // useState хранит количество выбранного товара (начальное значение — 0)
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt={name} />
      <h2 className="product-card__name">{name}</h2>
      <p className="product-card__price">{price} ₽</p>

      <button className="product-card__button" onClick={handleAdd}>
        Добавить в корзину
      </button>

      <p className="product-card__count">В корзине: {count} шт.</p>
    </div>
  );
}

export default ProductCard;
