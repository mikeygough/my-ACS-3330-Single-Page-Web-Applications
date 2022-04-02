# Class - FEW 2.3 - Assignment 2

## Description 

With this project you'll connect to the OpenWeatherMap API and display the weather data. You'll use the controlled component pattern to handle user input. 

- Controlled Controlled Component Pattern. This pattern is used with form elements. 
- Conditional Rendering pattern. This is a collection of coding patterns that render components or not render them based on props or state. 

## Why this assignment?

The controlled pattern component is important since you'll use it every time you use form elements like input fields, check boxes, and radios buttons. All of these are essential to web applications. 

Conditionally rendering components is an important front end development it opens up lots of possiblities to the user interfaces you create with React.

## Getting Started

Make a new react project with: 

`npx create-react-app weather-api`

## Project requirements

Follow the video tutorials here. Start at video: "Single Page Applications - Lesson 03 1"

https://www.youtube.com/playlist?list=PLoN_ejT35AEhmWcDTI6M--ha_E4lTyAtx

Follow the video tutorial to buid the app.

## Challenges 

### Challenge 1: Create a default React app

Create a default react project and test it to make sure everything is working. 

### Challenge 2: Register and get an API key from openweathermap

Go to openweathermap.org, create an account, and generate an API key. 

### Challenge 3: Create a Weather component

Create a component that will fetch and display the weather data. You can call this something like `Weather`. For now your component can just display something like a h1 and "Weather". 

Delete the default code in App.js and import and render your Weather component. 

Test your work!

### Challenge 4: Create a form to enter the zip and unit

You'll need a form to enter the zip code. You'll use the zip code entered to get the weather data for that location. 

Create a form in your Weather component. Add an input tag and use the Controlled component pattern to store the zip code entered in a state variable. Follow the notes here: 

https://github.com/Tech-at-DU/ACS-3330-Single-Page-Web-Applications/blob/master/Lessons/lesson-03.md#controlled-component-pattern

It's a good idea here to use a form tag and place your form elements in the form tag. Something like: 

```JS
<form>
  <input 
    type="text"
  />
</form>
```

Test your work by displaying the zip value in the component. 

Display what you enter into the input to make sure it's working. 

Stretch goal: Add the placeholder attribute and set the placeholder text to something like "enter your zip"

Stretch goal: Use pattern attribute and a regular expressing to limit the input to a zip code pattern. 5 numbers. Here's some more information: 

- https://www.w3schools.com/tags/att_input_pattern.asp
- https://css-tricks.com/html-for-zip-codes/

### Challenge 5: Fetch the weather data for the entered zip code

Fetch the weather data from openweathermap.org using the `fetch()` api.



### Challenge 6: Use components to display the weather data

Display the weather data in another component. Imagine you have a Weather component, this component might use another component to display the weather data rather than doing all of the work to laod and display the data itself. 

Imagine the structure of your app as: 

- Weather (loads the data and handles the form)
  - DisplayWeather (display the data after it's loaded)

You might pass the weather data into the Display Weather component as props! This component then does all of the work of formatting, displaying, and styling the weather data. 

### Challenge 7: Use Conditional Rendering

When the app loads there isn't any weather data. It's also possible that you might get an error from the server in the case of a bad zip code. In these cases we can't display the weather data. Solve this problem with conditional rendering!

Use one of the conditional rendering patterns to display an alternate message when there is no data to display. 

The goal here is to display something in place of the Weather data when the weather data has not yet been loaded. For example 

Check the notes from class: https://github.com/Tech-at-DU/ACS-3330-Single-Page-Web-Applications/blob/master/Lessons/lesson-05.md

For more information: 

[conditional rendering](https://reactjs.org/docs/conditional-rendering.html) to display the data after it is loaded

### Stretch Challenges 

After you have completed the challenges above try these challenges. You can give any or all of these challenges a try and you don't have to do them in any order. 

1. Add some CSS styles to give the project your look at style
1. Expand the data that is displayed. The tutorial shows the temperature, description and feels like values. You can expand this to show:
  - humidity
  - pressure
  - wind speed
  - ...add any other properties...
1. One of the properties included with the weather data is the `icon`. It's located at: `data.weather[0].icon`. This property is a string with a value like: `"04d"`. This value maps to an image for the weather condition! You can check the images against this [page](https://openweathermap.org/weather-conditions). You can display the images by either: 
  - Displaying the OpenWeatherMap icon. Inspect their page to find the urls used. 
  - Map icon code to your own icons or images. Where can you find images?
    - Use google and find images
    - Use icons from an icon set like one of these: 
      - https://erikflowers.github.io/weather-icons/
      - https://fontawesome.com/v5.15/icons?d=gallery&p=1&q=weather
      - https://www.iconfinder.com/weather-icons?price=free

### Due date

Class 6 - June 8, Submit your work on GradeScope

### Resources

This video playlist covers all of the material from class. The material for this assignment starts at video lesson 3. 

- https://www.youtube.com/playlist?list=PLoN_ejT35AEhmWcDTI6M--ha_E4lTyAtx

## Assessing the assignment

| - | **Does not meet expectations** | **Meets expectations** | **Exceeds expectations** |
|:-------------|:---------------------------|:-------------------------|:---------------------|
| **Completed** | Did not complete | Completed challenges 1-3 | Completed challenges 4+ |
| **Functional** | Is not functional | Displays the weather data and handles errors | Displays the temp in F and C along description and atmospheric conditions and has some CSS styles |
| **Code quality** | Indentation and spacing is _inconsistent_ | Uses _consistent indentation and spacing_ | Well written and well commented, variable and function names are self commenting |
| **Code Architecture and Structure** | All code is in App.js | Uses 3 components | Uses 5 or more components, components are specialized and perform formatting and display of data based on props |
| **Work Ethic** | Did not commit when working on project | Initial commit at class and commit while working | Commits show 3 hours and clearly documents process | 
