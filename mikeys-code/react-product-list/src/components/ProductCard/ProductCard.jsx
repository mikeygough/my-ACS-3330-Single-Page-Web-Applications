import React from 'react';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="ProductCard">
      <section class="product-list">
        <article class="product">
          <h2>{product.name}</h2>
          <h3>{product.category}</h3>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Description: {product.description}</p>
          <p>Quantity: {product.units}</p>
        </article>
      </section>
    </div>
  );
}
