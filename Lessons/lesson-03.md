# ACS 3330 - Lesson 3: React and Forms

## Overview

This lesson explores handling forms in React, including:

- Controlled components for form inputs.
- Fetching data from APIs.
- Handling network errors gracefully.
- Using conditional rendering patterns.

By the end, you'll apply these skills in a project that interacts with the OpenWeather API.

## Learning Objectives

By the end of this lesson, you will be able to:

- Implement the Controlled Component Pattern in React forms.
- Use state hooks to manage form data.
- Build an app that integrates a public API.
- Implement conditional rendering to handle different states (loading, errors, empty results).
- Handle network errors effectively.

---

## Review

Before we begin, take a few minutes to answer:

### 🔹 Pop Quiz

- What is .map() used for?
- What does .map() return?
- What parameters does .map() take?

### 🔹 Checking Progress

- Where are you on the Product List project?
- What do you need to do to wrap it up?
- What challenges have you encountered?

---

## Part 1: Using useState for Form Inputs

### 1.1 Import useState
First, import useState in your component.

```jsx
import { useState } from 'react';
```

### 1.2 Create a Controlled Input
Modify your component to manage input state:

```jsx
function MyComponent() {
  const [name, setName] = useState('');

  return (
    <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

**📌 AI Prompt:** *"What is the controlled component pattern in React?"*

**🐞 AI Debugging Prompt:** *"Why does my input field not update when I type?"*

### 1.3 Controlled Checkbox Example
Modify your component to add a checkbox:

```jsx
function MyComponent() {
  const [name, setName] = useState('');
  const [newsletter, setNewsletter] = useState(true);

  return (
    <>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="checkbox"
        checked={newsletter}
        onChange={() => setNewsletter(!newsletter)}
      />
    </>
  );
}
```

**📌 AI Prompt:** *"What’s the difference between controlling a text input vs. a checkbox in React?"*

### 1.4 Why Use Controlled Components?
- **Keeps input values in sync with React state.**
- **Easier to manipulate form data** (e.g., validate before submission).
- **React’s virtual DOM can replace the input component at any time**—storing input values in state prevents loss of data.

---

## Part 2: Handling API Requests with React

Now, let's integrate an API to fetch weather data.

### 2.1 Get an API Key
- Sign up at OpenWeatherMap.
- Go to your profile page → API Keys.
- Copy your API key and store it in a .env file:

```env
REACT_APP_OPENWEATHERMAP_API_KEY=YOUR_API_KEY_HERE
```

**📌 AI Prompt:** *"What are environment variables, and why should we store API keys this way?"*

--- 

## Part 3: Making an API Request

### 3.1 Set Up useEffect to Fetch Data
Modify your App.js file:

```jsx
import { useState, useEffect } from 'react';

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [zip, setZip] = useState('');

  useEffect(() => {
    if (zip.length === 5) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.error("Error fetching data:", error));
    }
  }, [zip]);

  return (
    <div>
      <input 
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        placeholder="Enter ZIP code"
      />
      <button onClick={() => console.log(weather)}>Check Weather</button>
    </div>
  );
}

export default WeatherApp;
```

**📌 AI Prompt:** *"What does useEffect do in this code?"*

**🐞 AI Debugging Prompt:** *"Why does my API call fail when I enter a ZIP code?"*

---

## Part 4: Handling Network Errors Gracefully

### 4.1 Add Error Handling
Modify your fetch request to handle errors:

```jsx
useEffect(() => {
  if (zip.length === 5) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setWeather(data))
      .catch(error => console.error("Failed to fetch weather data:", error));
  }
}, [zip]);
```

**📌 AI Prompt:** *"How does response.ok help in error handling?"*

**🐞 AI Debugging Prompt:** *"Why am I getting a 401 Unauthorized error?"*

---

## Part 5: Conditional Rendering

### 5.1 Display Loading and Error States
Modify your return statement:

```jsx
return (
  <div>
    <input 
      value={zip}
      onChange={(e) => setZip(e.target.value)}
      placeholder="Enter ZIP code"
    />
    
    {weather ? (
      <div>
        <h2>Weather: {weather.weather[0].description}</h2>
        <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
      </div>
    ) : (
      <p>Enter a ZIP code to see the weather.</p>
    )}
  </div>
);
```

**📌 AI Prompt:** *"What is conditional rendering, and why is it useful?"*

---

## 💡 Stretch Challenges

### 🔹 Challenge 1: Add a Loading State

Show "Loading..." while the API request is in progress.

### 🔹 Challenge 2: Improve Error Handling

Display a user-friendly error message instead of logging to the console.

### 🔹 Challenge 3: Add a Search History

Save previous ZIP code searches and display them below the form.

### 🔹 Challenge 4: Allow City Name Input

Modify the API request to accept a city name instead of a ZIP code.

### 🔹 AI Stretch Prompt: "How can I store past searches using local state?"

---

## **Final Thoughts**

- ✅ **The Controlled Component Pattern is used to handle forms in React projects.**
- ✅ **In the controlled component pattern the value displayed by a form element is stored in state.**

📌 **AI Reflection Prompt:** *"Review my explanation of the Controlled Component Pattern in React. <Insert your explanation here>"*

---

## After Class

- Start working on Assignment 3.

## Additional Resources

- [Controlled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
- [Conditional Rendering in React](https://react.dev/learn/conditional-rendering)
