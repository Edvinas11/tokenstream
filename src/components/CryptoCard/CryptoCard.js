import React from 'react';
import './CryptoCard.css';

const CryptoCard = ({ img, title, grow, price }) => {
  return (
    <div className="crypto-card">
      <img src={img} alt={title} className="crypto-card__image" />
      <div className="crypto-card__content">
        <h3 className="crypto-card__title">{title}</h3>
        <p className="crypto-card__price">${price}</p>
        <p className={`crypto-card__grow ${grow >= 0 ? 'positive' : 'negative'}`}>
          {grow >= 0 ? '+' : ''}{grow}%
        </p>
      </div>
    </div>
  );
};

export default CryptoCard;
