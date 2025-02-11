import React from 'react';
import './cato.css'
const products = [
  {
    title: 'Vegetable Burger',
    price: 25,
    originalPrice: 28.30,
    rating: 2.5,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop'
  },
  {
    title: 'Meat Burger',
    price: 28,
    originalPrice: 32.50,
    rating: 2.5,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=300&fit=crop'
  },
  {
    title: 'Cheese Burger',
    price: 32,
    originalPrice: 36.30,
    rating: 2.5,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=300&fit=crop'
  }
];

const ProductCard = ({ title, price, originalPrice, rating, image }) => {
  return (
    <div className="procontainer">
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <div className="price-container">
          <span className="current-price">${price}</span>
          <span className="original-price">${originalPrice}</span>
          <div className="rating">⭐ {rating}</div>
        </div>
        <div className="action-buttons">
          <button className="wishlist-btn">Wishlist</button>
          <button className="order-btn">Order Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

// export default ProductList;
