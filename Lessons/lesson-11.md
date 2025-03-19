# **ACS 3330 - Lesson 11: `useEffect` in a Live Weather Dashboard**  

## **Overview**  
Students will build a **Live Weather Dashboard** that:  
- Fetches weather **when the app mounts**.  
- Updates **when the city changes**.  
- **Polls for new weather data** every 10 seconds.  
- Cleans up effects **when the component unmounts**.  

By the end of this lesson, students will understand **all key uses of `useEffect`**.  

---

## **Step 1: Setting Up the Project**  
Before starting, students should create a **React app**:  
```sh
npx create-react-app live-weather-dashboard
cd live-weather-dashboard
npm start
```  
They’ll install **dotenv** for managing API keys:  
```sh
npm install dotenv
```  
Then, create a `.env` file in the root folder:  
```
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
```

---

# **Part 1: `useEffect` on Mount – Fetch Weather Data When App Loads**  
The first effect **runs only once** when the app loads.  

### **✏️ Add Initial Fetch in `WeatherDashboard.js`**
```jsx
import { useState, useEffect } from "react";

function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("London");

  useEffect(() => {
    console.log("Fetching weather data on mount...");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []); // Runs only once on mount

  return (
    <div>
      {loading ? <p>Loading weather...</p> : <p>Weather: {weather.weather[0].description}</p>}
    </div>
  );
}

export default WeatherDashboard;
```

📌 **AI Debugging Prompt:** *"Why does `useEffect` only run once when the component mounts?"*  

---

# **Part 2: `useEffect` with Dependency – Update Weather When City Changes**  
The next effect **runs when the city changes**.

### **✏️ Modify `useEffect` to Fetch Weather on City Change**
```jsx
useEffect(() => {
  console.log(`Fetching weather for ${city}...`);

  setLoading(true);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setWeather(data);
      setLoading(false);
    })
    .catch(error => console.error("Error fetching data:", error));
}, [city]); // Runs whenever `city` changes
```

📌 **AI Debugging Prompt:** *"How does adding `city` as a dependency affect when `useEffect` runs?"*  

---

# **Part 3: `useEffect` for Updates – Polling for Weather Every 10 Seconds**  
Now, students will **fetch updated weather every 10 seconds**.

### **✏️ Modify `useEffect` for Polling**
```jsx
useEffect(() => {
  console.log("Starting weather update interval...");

  const intervalId = setInterval(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        console.log("Weather updated!");
      })
      .catch(error => console.error("Error fetching data:", error));
  }, 10000); // Runs every 10 seconds

  return () => {
    console.log("Cleaning up interval...");
    clearInterval(intervalId); // Cleanup when component unmounts
  };
}, [city]); // Runs when `city` changes
```

📌 **AI Debugging Prompt:** *"Why do we need `clearInterval(intervalId)`? What happens if we forget it?"*  

---

# **Part 4: `useEffect` on Unmount – Cleanup Side Effects**  
To prevent memory leaks, we’ll **reset the interval when switching cities**.

📌 **Key Concept:** **Every time `city` updates, a new `setInterval` starts. The old one must be removed!**

---

# **Part 5: Dynamic Background Color Based on Weather**
Now, students will change the **background color** dynamically based on the weather condition.

### **✏️ Modify `useEffect` to Change the Background**
```jsx
useEffect(() => {
  if (!weather) return;

  const condition = weather.weather[0].main;
  let bgColor = "white";

  if (condition === "Clear") bgColor = "lightblue";
  if (condition === "Rain") bgColor = "gray";
  if (condition === "Snow") bgColor = "lightgray";

  document.body.style.backgroundColor = bgColor;

  return () => {
    document.body.style.backgroundColor = "white"; // Reset when unmounting
  };
}, [weather]); // Runs when `weather` changes
```

📌 **AI Prompt:** *"How can I improve this background color logic?"*  

---

# **💡 Stretch Challenges (Combine with OpenWeather API Assignment)**  
### **💡 Challenge 1: Allow Users to Enter a City**
- Modify the app to **let users type a city name** instead of hardcoding "London".

### **💡 Challenge 2: Show a "Last Updated" Timestamp**
- Display the **time of the last API request**.

### **💡 Challenge 3: Cache Previous API Requests**
- If a user enters the **same city twice**, **reuse old data** instead of making a new request.

### **💡 Challenge 4: Convert Temperature to Fahrenheit**
- The OpenWeather API returns temperature in **Kelvin**. Convert it to Fahrenheit before displaying.

### **💡 Challenge 5: Add a "Weather History" Feature**
- Store **past 5 weather results** and allow users to click on them.

📌 **AI Stretch Prompt:** *"How can I store the weather history in local storage so it persists across page reloads?"*

---

## **Final Thoughts**
- `useEffect` **controls when side effects happen** in React.  
- Cleanup functions **prevent memory leaks** and improve performance.  
- `useEffect` is essential for **fetching data, event listeners, and background updates**.  

📌 **AI Reflection Prompt:** *"Review my explanation of the useEffect hook. <You explain the useEffect hook in your own words>."* 

---

## **📚 After Class**
- **Complete the Weather project**.  
- Review **React’s Official Docs on `useEffect`**: [React Docs](https://react.dev/reference/react/useEffect).  
