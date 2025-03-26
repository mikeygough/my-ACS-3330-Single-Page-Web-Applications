import React from 'react';
import './ShowAllButton.css';

export default function ShowAllButton({
  currentCategory,
  setCurrentCategory,
}) {
  return (
    <button
      className={`ShowAllButton ${
        currentCategory === '' ? 'ShowAllButton__active' : ''
      }`}
      onClick={() => setCurrentCategory('')}
    >
      Show All
    </button>
  );
}
