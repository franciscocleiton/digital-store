import React from 'react';
import PropTypes from 'prop-types';
import '../ProductCard.css';

const ProductCard = ({ image, categoria, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      
      <div className='back-card'>
        {priceDiscount && (
          <div className="discount-badge">
            {`${Math.round(((price - priceDiscount) / price) * 100)}% OFF`}
          </div>
        )}
        <img src={image} alt={name} className="product-image" />
      </div>
      
      <div className="product-info">
        <p className='type'>{categoria}</p>
        <h3 className="product-name">{name}</h3>
        {priceDiscount ? (
          <div className="product-price-discount">
            <span className="product-price-strike">${price}</span>
            <span className="product-price">${priceDiscount}</span>
          </div>
        ) : (
          <span className="product-price">${price}</span>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
};

export default ProductCard;