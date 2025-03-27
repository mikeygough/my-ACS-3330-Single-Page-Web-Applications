import { useState } from 'react';

import data, { uniqueCategories } from './data.js';

import ProductHeader from './components/ProductHeader/ProductHeader.jsx';
import CategoryButton from './components/CategoryButton/CategoryButton.jsx';
import ShowAllButton from './components/ShowAllButton/ShowAllButton.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';

import './App.css';

function App() {
  const totalProducts = data.length;
  const totalCategories = uniqueCategories.length;

  // state
  const [currentCategory, setCurrentCategory] = useState('');
  // filter by category
  const products = data.filter(
    (product) =>
      !currentCategory || product.category === currentCategory
  );

  // sorted products
  const sortedProducts = [...products].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="App">
      <ProductHeader
        totalProducts={totalProducts}
        totalCategories={totalCategories}
      ></ProductHeader>
      <div className="CategoryButtonsContainer">
        {uniqueCategories.sort().map((category) => {
          return (
            <CategoryButton
              key={category}
              categoryName={category}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            ></CategoryButton>
          );
        })}
        <ShowAllButton
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></ShowAllButton>
      </div>
      <div className="ProductCardsContainer">
        {sortedProducts.sort().map((product) => {
          return <ProductCard product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
}

export default App;
