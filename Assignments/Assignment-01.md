# ACS 3330 - Assignment 1: React Product List

## Overview
This assignment introduces **React components**, **functional programming with `map`, `filter`, and `reduce`**, and **state management**. You will create a product listing app that displays categories and products dynamically. As you progress, you will modularize your code, handle interactions, and practice writing reusable components.

---

## Learning Objectives
- Use `map`, `filter`, and `reduce` for data transformations.
- Render collections of React components dynamically.
- Pass and manage props to create reusable components.
- Manage state to create interactive UI.
- Use `import` and `export` to manage modules.

---

## **Setup: Creating Your React Project**
1. **Ensure you have Node.js installed.** If not, download it from [nodejs.org](https://nodejs.org/).
2. **Create your React app:**
   ```sh
   npx create-react-app react-product-list
   cd react-product-list
   npm start
   ```
3. **Copy the [`data.json`](https://raw.githubusercontent.com/Make-School-Courses/FEW-2.3-Single-Page-Web-Applications/master/Assignments/data.json) file into your `src` directory.**
4. **Create a new module named `data.js`** in `src`. This will be used to process and export your product data.
5. **Import the JSON data into your module:**
   ```js
   import data from './data.json';
   export default data;
   ```

---

## **Part 1: Understanding Functional Programming with Arrays**
### **1.1 Using `map` to Extract Categories**
Transform the product data into an array of category names.
```js
const categories = data.map(product => product.category);
```
🔹 **AI Review Prompt:** _"Does my `map` function efficiently extract categories? Are there any better approaches?"_

### **1.2 Filtering Unique Categories**
Ensure each category appears only once.
```js
const uniqueCategories = Array.from(new Set(categories));
```
🔹 **AI Review Prompt:** _"Is using `Set` the best way to filter unique values? What other methods could I use?"_

### **1.3 Counting Products per Category with `reduce`**
Create an object that maps each category to the number of products in it.
```js
const categoryCounts = data.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});
```
🔹 **AI Review Prompt:** _"Is my `reduce` function well-structured? Can it be optimized?"_

---

## **Part 2: Creating React Components**
### **2.1 Create a `CategoryButton` Component**
Each category should be displayed as a button.
```jsx
function CategoryButton({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```
Export this component from `CategoryButton.js` and import it into `App.js`.

🔹 **AI Review Prompt:** _"Does my component follow best practices? Should I use memoization for performance?"_

### **2.2 Create a `ProductCard` Component**
Each product should display its **name, category, price, and rating**.
```jsx
function ProductCard({ name, category, price }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{category}</p>
      <p>${price}</p>
    </div>
  );
}
```

---

## **Part 3: Managing State and Interactivity**
### **3.1 Store the Selected Category in State**
In `App.js`, create a state variable to track the selected category.
```jsx
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    ...
  );
}
```

### **3.2 Filter Products Based on Selected Category**
```js
const filteredProducts = data.filter(
  product => selectedCategory === 'All' || product.category === selectedCategory
);
```

🔹 **AI Review Prompt:** _"Does my filter logic account for all edge cases? Should I handle case sensitivity?"_

---

## **Part 4: Rendering the UI**
### **4.1 Render Category Buttons**
```jsx
{['All', ...uniqueCategories].map(category => (
  <CategoryButton key={category} label={category} onClick={() => setSelectedCategory(category)} />
))}
```

### **4.2 Render Products**
```jsx
{filteredProducts.map(product => (
  <ProductCard key={product.id} {...product} />
))}
```

---

## **Part 5: Enhancing User Experience**
### **5.1 Highlight the Active Category**
```jsx
<CategoryButton
  key={category}
  label={category}
  onClick={() => setSelectedCategory(category)}
  className={category === selectedCategory ? 'active' : ''}
/>
```
🔹 **AI Review Prompt:** _"Is there a better way to manage the active category styling?"_

### **5.2 Show Total Product Count**
Display the total number of filtered products above the product list.
```jsx
<p>Showing {filteredProducts.length} products</p>
```

🔹 **AI Review Prompt:** _"What’s a good way to handle an empty product list scenario?"_

---

## **Stretch Challenges**
### **🔹 Select Multiple Categories**
Modify `selectedCategory` to be an array, allowing users to filter by multiple categories at once.

### **🔹 Add a Search Feature**
Allow users to search for a product by name.

### **🔹 Sort Products by Price or Rating**
Add a dropdown to sort products by price (low to high) or rating (high to low).

### **🔹 Improve Styling**
Make the UI visually appealing using CSS Grid and Flexbox.

---

## **Submission**
Upload your project to GitHub and submit the link.

### **Assessment Criteria**
| **Criteria** | **Does Not Meet** | **Meets Expectations** | **Exceeds Expectations** |
|-------------|------------------|----------------------|----------------------|
| Components & Props | Uses only `App.js` | Uses `CategoryButton` and `ProductCard` | Uses additional reusable components |
| State & Interactivity | No interactivity | Can select categories | Allows multi-category selection and sorting |
| Functional Programming | No use of `map`, `filter`, or `reduce` | Uses them correctly | Implements optimizations |
| UI & Styling | No styling | Basic layout with Flexbox/Grid | Fully styled with responsive design |
| Code Structure | Messy, no imports | Uses modules properly | Well-structured, DRY code |


