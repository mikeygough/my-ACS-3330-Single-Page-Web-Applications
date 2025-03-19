# **ACS 3330 - Lesson 5: Conditional Rendering in React**

## **Overview**
Conditional rendering allows React components to **display different UI elements based on state or props**. This lesson covers:
- **Conditional rendering patterns** in React.
- **Higher-order components** for conditional logic.
- **Using logical operators (`&&`, ternary `? :`, and `if/else`).**

By the end, you'll build components that dynamically show and hide content.

---

## **Learning Objectives**
By the end of this lesson, you will be able to:
✅ Identify **when and why** to use conditional rendering.  
✅ Implement **multiple conditional rendering patterns**.  
✅ Apply **React's logical operators** to control rendering.  
✅ Use **higher-order components (HOCs)** to wrap components dynamically.  

---

## **Review: React Forms and State**
Before we begin, take a few minutes to answer:

🔹 **Pop Quiz**
- What is the **controlled component pattern** in forms?  
- How does **lifting state** improve data flow in React?  
- What are **derived state values** and why are they useful?

🔹 **Checking Progress**
- Where are you on the **API-powered app project**?  
- What blockers have you encountered?  

---

# **Part 1: Introduction to Conditional Rendering**

### **1.1 What is Conditional Rendering?**
Conditional rendering **determines which UI elements should be displayed based on state or props**.

📝 **Example: Rendering Based on Loading State**
```jsx
function Weather({ isLoaded }) {
  return isLoaded ? <WeatherData /> : <LoadingSpinner />;
}
```

📌 **AI Prompt:** *"What are some real-world examples where conditional rendering is useful?"*

---

# **Part 2: Five Conditional Rendering Patterns in React**

Remember **a component is a function that returns a block of JSX.** All of these conditional rendering patterns use that idea in different ways. 

## **Pattern 1: `if/else` Statements**
Use `if/else` inside functions to **return different components**.

📝 **Example: Displaying Weather Data When Loaded**
```jsx
function Weather({ isLoaded }) {
  if (isLoaded) {
    return <WeatherData />;
  }
  return <LoadingSpinner />;
}
```

✅ **Use Case:** When rendering **one component or another**.

📌 **AI Prompt:** *"Why might `if/else` be a better choice than `&&` in some cases?"*

---

## **Pattern 2: Element Variables**
Store JSX elements in a **variable** and return it.

📝 **Example: Showing Different Meals Based on Time of Day**
```jsx
function WhatToEat({ time }) {
  let element;
  if (time === "morning") {
    element = <Eggs />;
  } else if (time === "lunch") {
    element = <Burrito />;
  } else {
    element = <IceCream />;
  }

  return <div>{element}</div>;
}
```

✅ **Use Case:** When **more than two options** need rendering.

📌 **AI Prompt:** *"How can you refactor this using an object lookup instead of `if/else`?"*

---

## **Pattern 3: `&&` Logical Operator**
Render **a component only if a condition is true**.

📝 **Example: Showing Unread Messages Notification**
```jsx
<div>
  <h1>Welcome!</h1>
  {unreadMessages.length > 0 && (
    <h2>You have {unreadMessages.length} unread messages.</h2>
  )}
</div>
```

✅ **Use Case:** When rendering **something or nothing**.

📌 **AI Debugging Prompt:** *"What happens if `unreadMessages` is `undefined`? How can we prevent errors?"*

---

## **Pattern 4: Ternary (`? :`) Operator**
Ternary operators provide a **one-line `if/else` statement**.

📝 **Example: Toggling Between Login and Logout Buttons**
```jsx
function LoginButton({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
```

✅ **Use Case:** When rendering **one of two components** inline.

📌 **AI Prompt:** *"How can I improve readability when using multiple ternary conditions?"*

---

## **Pattern 5: Preventing Component Rendering with `null`**
Returning `null` prevents React from rendering a component.

📝 **Example: Warning Message That Can Be Hidden**
```jsx
function Warning({ show, message }) {
  if (!show) {
    return null;
  }
  return <div>Warning: {message}</div>;
}
```

✅ **Use Case:** When a component **should disappear without breaking layout**.

📌 **AI Debugging Prompt:** *"Why is returning `null` better than using `display: none` in CSS?"*

---

# **Part 3: Higher-Order Components (HOCs) for Conditional Rendering**

### **3.1 What is a Higher-Order Component (HOC)?**
A HOC **wraps another component** and adds extra functionality.

📝 **Example: HOC for Showing/Hiding Components**
```jsx
function withVisibility(Component) {
  return function WrappedComponent({ isVisible, ...props }) {
    return isVisible ? <Component {...props} /> : null;
  };
}

const Fizz = withVisibility(() => <p>Fizz</p>);
const Buzz = withVisibility(() => <p>Buzz</p>);
```

✅ **Use Case:** When **multiple components** need similar conditional logic.

📌 **AI Prompt:** *"How do HOCs compare to hooks for conditional logic?"*

---

# **Part 4: Stretch Challenges**

### **💡 Challenge 1: Expand the `WhatToEat` Component**
- Modify `WhatToEat` to **include more meal times**.

### **💡 Challenge 2: Create a "Dark Mode" Toggle**
- Add a **toggle switch** that **conditionally applies dark mode styling**.

### **💡 Challenge 3: Make a Reusable HOC for Authentication**
- Create an HOC that **hides components unless a user is authenticated**.

📌 **AI Stretch Prompt:** *"How can HOCs be used to enforce user authentication?"*

---

# **Part 4: Stretch Challenges (OpenWeather API Edition 🌦️)**  

### **💡 Challenge 4: Display an Error Message When the API Fails**  
- Modify your OpenWeather API request to **detect errors** (e.g., invalid ZIP codes).  
- Use **conditional rendering** to **show an error message** when a request fails.  

📝 **Example: Show Error Message If API Request Fails**
```jsx
{error && <p className="error">⚠️ Error: {error.message}</p>}
```

📌 **AI Debugging Prompt:** *"How do I check for errors in an API response before rendering data?"*

---

### **💡 Challenge 5: Show a Loading Spinner While Fetching Weather Data**  
- Add a **loading state** when fetching data.  
- Use **conditional rendering** to display **a spinner or “Loading…” message** before the API response returns.  

📝 **Example: Display a Loading Message While Fetching Data**
```jsx
{loading ? <p>Loading weather data...</p> : <WeatherDisplay data={weather} />}
```

📌 **AI Prompt:** *"What are the benefits of showing a loading state in API-driven apps?"*

---

### **💡 Challenge 6: Show a "Last Updated" Timestamp**  
- Use **state** to store the **last updated time** for the weather data.  
- Conditionally render the timestamp **only when fresh data is available**.  

📝 **Example: Displaying Last Updated Time**
```jsx
{weather && <p>Last updated: {new Date(lastUpdated).toLocaleTimeString()}</p>}
```

📌 **AI Debugging Prompt:** *"How can I format the timestamp for better readability?"*

---

### **💡 Challenge 7: Change Background Based on Weather Conditions**  
- Use **conditional rendering** to apply **different background colors or images** based on the current weather.  

📝 **Example: Setting the Background Dynamically**
```jsx
const background = weather?.main === "Rain" ? "rainy-bg" : "sunny-bg";
return <div className={background}>{weather.main}</div>;
```

📌 **AI Stretch Prompt:** *"How can I use CSS classes dynamically in React for theming?"*

---

### **💡 Challenge 8: Display a Weather Icon Instead of Text**  
- Use **conditional rendering** to **display weather icons** from OpenWeatherMap instead of just text descriptions.  

📝 **Example: Rendering an Icon Based on API Data**
```jsx
{weather && <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />}
```

📌 **AI Prompt:** *"What’s the best way to handle images dynamically in React?"*

---

### **💡 Challenge 9: Suggest an Outfit Based on the Temperature**  
- Use **conditional logic** to **display outfit suggestions** based on the weather.  
  - 🌡️ **Below 40°F** → "Wear a warm coat and gloves!"  
  - ☀️ **Above 70°F** → "A T-shirt and shorts should be fine!"  

📝 **Example: Dynamic Outfit Suggestions**
```jsx
const outfitSuggestion =
  temperature < 40 ? "Wear a warm coat!" :
  temperature > 70 ? "T-shirt and shorts!" :
  "A light jacket should be fine.";
  
return <p>{outfitSuggestion}</p>;
```

📌 **AI Stretch Prompt:** *"How can I make these suggestions more personalized?"*

---

## **Final Thoughts**
- These **stretch challenges** encourage applying **conditional rendering** in **real-world API-driven apps**.  
- They also introduce **UI enhancements**, **error handling**, and **dynamic styling**.  

📌 **AI Final Reflection Prompt:** *"How does conditional rendering improve the user experience in an API-based app?"*

---

# **Final Thoughts**
- **Use `if/else` for clear branching logic.**
- **Use `&&` when rendering something or nothing.**
- **Use ternary `? :` when choosing between two components.**
- **Use higher-order components (HOCs) to wrap multiple components with shared logic.**

📌 **AI Reflection Prompt:** *"How would you explain conditional rendering to a beginner? Get AI feedback on your explanation!"*

---

## **After Class**  
- Review **React’s Conditional Rendering Docs**: [React Docs](https://react.dev/learn/conditional-rendering).
- Apply these **stretch challenges** in **Assignment 2: OpenWeather API App**.  
- Explore **React’s official docs on Conditional Rendering**: [React Docs](https://react.dev/learn/conditional-rendering).  
