import React from 'react';
import './CategoryButton.css';

export default function CategoryButton({
  categoryName,
  currentCategory,
  setCurrentCategory,
}) {
  return (
    <button
      className={`CategoryButton ${
        currentCategory === categoryName
          ? 'CategoryButton__active'
          : ''
      }`}
      onClick={() => setCurrentCategory(categoryName)}
    >
      {categoryName}
    </button>
  );
}
