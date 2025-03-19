## **Lesson 4: Advanced React State Management and Data Transformation**

---

### **Overview**  

This lesson builds on previous topics by introducing **advanced state management techniques** and deeper applications of **functional programming** with React’s rendering model.  

You will learn how to:
- Manage **complex state** with multiple `useState` variables.
- Use **derived state** to optimize React re-renders.
- Apply **memoization** (`useMemo`) for performance improvements.
- Enhance component logic using **map, filter, and reduce** dynamically.  

By the end of this lesson, you’ll create an interactive **shopping cart** system that applies these concepts.

---

## **Learning Objectives**  

By the end of this lesson, you will be able to:  
✅ Use **multiple pieces of state** effectively in React.  
✅ Apply **derived state** to avoid unnecessary re-renders.  
✅ Use **useMemo** to optimize performance.  
✅ Dynamically **transform lists** with `map`, `filter`, and `reduce` to manage data efficiently.  

---

## **Review: Key Concepts So Far**  

### 🔹 **State & Props Recap**
- **State** is local to a component and can change.  
- **Props** are passed **from parent to child** and **cannot be modified** by the child.  

🔹 **Functional Programming Recap**  
- **`map()`** → Transforms an array into a new array.  
- **`filter()`** → Returns a subset of an array.  
- **`reduce()`** → Accumulates array values into a single value.  

---

# **Part 1: Managing Multiple State Variables**  

### **1.1 Using Multiple `useState` Variables**  
In more complex components, state often needs to track **multiple** independent values.  

📝 **Example: Shopping Cart**
```jsx
import { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total: ${total - discount}</p>
    </div>
  );
}
```

📌 **AI Prompt:** *"Would using one object for state be better than multiple `useState` calls? Why?"*  

---

# **Part 2: Derived State in React**  

### **2.1 What is Derived State?**
Sometimes, a piece of **state can be computed from existing state** instead of storing it separately.  

📝 **Example: Total Price Calculation Without Extra State**
```jsx
function ShoppingCart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return <p>Total Price: ${total}</p>;
}
```

📌 **AI Prompt:** *"What are the pros and cons of derived state vs. storing extra state?"*  

🛠 **Try This:** Modify the cart so the **total only updates when items change**, not on every re-render.

---

# **Part 3: Optimizing Performance with `useMemo`**  

### **3.1 Avoiding Expensive Recalculations**
By default, React **recalculates everything** when a component re-renders. `useMemo` **remembers** calculations and **only updates them when dependencies change**.

📝 **Example: Memoizing Total Price**
```jsx
import { useMemo } from 'react';

function ShoppingCart({ items }) {
  const total = useMemo(() => {
    console.log("Calculating total...");
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <p>Total Price: ${total}</p>;
}
```

📌 **AI Prompt:** *"How does `useMemo` improve performance in React?"*  

🛠 **Try This:** Add a **button that triggers a re-render** but does not affect the `items` array. **Does the total price recalculate?**

---

# **Part 4: Dynamic List Transformations (`map`, `filter`, `reduce`)**  

### **4.1 Rendering Items with `map`**
Instead of hardcoding UI elements, use `map` to **dynamically create components**.

📝 **Example: Displaying Shopping Cart Items**
```jsx
function ShoppingCart({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name} - ${item.price}</li>
      ))}
    </ul>
  );
}
```

📌 **AI Prompt:** *"What happens if we don’t provide a `key` in `.map()`? Why is it important?"*  

---

### **4.2 Filtering Items with `filter`**
We can allow users to **remove items** using `filter()`.

📝 **Example: Removing an Item**
```jsx
function ShoppingCart({ items, setItems }) {
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
```

📌 **AI Prompt:** *"What happens if we use `.splice()` instead of `.filter()`? Why might it not work?"*  

---

### **4.3 Summing Up with `reduce`**
Instead of keeping a **separate `total` state**, calculate it **dynamically** using `reduce()`.

📝 **Example: Calculating Total Price**
```jsx
const total = items.reduce((sum, item) => sum + item.price, 0);
```

📌 **AI Prompt:** *"How would you modify this to calculate total **after discount**?"*  

---

# **Part 5: Stretch Challenges**

### **💡 Challenge 1: Add a Quantity Feature**
Modify the shopping cart so each item has a **quantity**, and the total price accounts for it.

### **💡 Challenge 2: Add a Discount Code Input**
- Users should be able to enter a **discount code** that applies a percentage discount.

### **💡 Challenge 3: Save Cart to Local Storage**
- Store cart contents in **localStorage** so they persist when the page reloads.

📌 **AI Stretch Prompt:** *"How can I store state across page reloads in React?"*

---

## **Final Thoughts**
- **Use multiple pieces of state where necessary, but prefer derived state when possible.**
- **Optimize performance with `useMemo` for expensive calculations.**
- **Master `map`, `filter`, and `reduce` to transform lists dynamically.**
- **React’s re-render model means efficient state management is key to performance.**

📌 **AI Final Reflection Prompt:** *"Explain React state management in your own words. Ask AI for feedback!"*

---

## **After Class**

- Review **React’s useMemo Docs**: [useMemo Docs](https://react.dev/reference/react/useMemo)
