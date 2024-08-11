import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../ProductListing.css';

const ProductListing = ({ products }) => {
  return (
    <div className='product-listing-container'>
      <div className="product-listing">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            categoria={product.categoria}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        ))}
      </div>
    </div>
  );
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceDiscount: PropTypes.number,
    })
  ).isRequired,
};

export default ProductListing;