import React from 'react';
import './ProductHeader.css';

export default function ProductHeader({
  totalProducts,
  totalCategories,
}) {
  return (
    <header className="ProductHeader">
      <h3 className="ProductHeader__Item">
        Total Producsts: {totalProducts}
      </h3>
      <h3 className="ProductHeader__Item">
        Unique Categories: {totalCategories}
      </h3>
    </header>
  );
}
