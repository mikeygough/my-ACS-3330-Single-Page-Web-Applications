# FEW 2.3 Final Assessment

Your goal is to create a React application with the components and features described below.

The steps below are presented in order of complexity. Doing them in order should be easier. 

Complete each step to the best of your ability. Do as much of each step as you can I will award partial credit for the work that you do completely.

Submit your completed work on GradeScope.

The goal of the assignment is to make a React interface for the Star Wars API. 

## Redux (extra credit)

For extra credit, you can solve the problems below using Redux. This is not required and the problems are explained as if you aren't using Redux. If you want to solve these with Redux you should have the same functionality but may solve the problem differently from the description. 

## Getting started - 1

Your final assessment is a React Project.

Create a React Project and name it with 'final' your first and last name:

`FEW 2.3 final-<first>-<last>`

I should be able to run this project with `yarn start` or `npm start`

## Home Components - 2

Create a **Home** component that displays your name and the name of this class. 

This component should display your name. 

## Components Patterns - 3

Create a new **StarWars** component that has a _text input_, and a _button_. Use the controlled component pattern and state to store the value entered in the input. The value will be the id of a Star Wars character.

The goal of this component is allow us to enter a number and submit that number with a a button.

**Extra Credit:** Validate your input. 

SWAPI only allows numbers between 1 and 83, 17 is missing. Solve this stretch challenge by only allowing the numbers 1 to 16 and 18 to 83. 

### Async JS - 4 

Use fetch to load a Star Wars character's data from the SWAPI API. Use the id entered in the input you created in the last step. 

The SWAPI uses this endpoint: 

`https://swapi.dev/api/people/<number>/`

The Star Wars API is a simple API that takes a number and returns a JSON object describing a character from one of the Star Wars movies. 

For example, the URL below fetches character 1:

`https://swapi.dev/api/people/1/`

The URL above returns the following JSON: 

```JSON
{
 "name": "Luke Skywalker", 
 "height": "172", 
 "mass": "77", 
 "hair_color": "blond", 
 "skin_color": "fair", 
 "eye_color": "blue", 
 "birth_year": "19BBY", 
 "gender": "male", 
 "homeworld": "https://swapi.dev/api/planets/1/", 
 "films": [
 "https://swapi.dev/api/films/2/", 
 "https://swapi.dev/api/films/6/", 
 "https://swapi.dev/api/films/3/", 
 "https://swapi.dev/api/films/1/", 
 "https://swapi.dev/api/films/7/"
 ], 
 "species": [
 "https://swapi.dev/api/species/1/"
 ], 
 "vehicles": [
 "https://swapi.dev/api/vehicles/14/", 
 "https://swapi.dev/api/vehicles/30/"
 ], 
 "starships": [
 "https://swapi.dev/api/starships/12/", 
 "https://swapi.dev/api/starships/22/"
 ], 
 "created": "2014-12-09T13:50:51.644000Z", 
 "edited": "2014-12-20T21:17:56.891000Z", 
 "url": "https://swapi.dev/api/people/1/"
}
```

Load the data for the id entered and display the name of the character. 

The goal here is the get the number entered and make a request to swapi.dev and display the results.

### Displaying more information - 5

After you have displayed the name expand your component to display more of the information provided by the Star Wars API. 

Besides the name, display any four elements from the data. For example: 

- Height
- Mass 
- Hair Color
- Eye Color

The goal here is traverse and parse the JSON repsonse and display more information in you component. 

## Saving characters - 6

Your next goal is to create a Save button. Clicking this will save the current character to a list. 

You will need to define your list either on state or as part of the Redux store. 

Add a save button. Clicking this will save the character data to a list of characters. Later you'll be displaying the list.

When you add a character to the list you will call the setter function with a new value/list: _you must copy the list!_

Something like this: `setList([...list, newItem])`

The goal here is to save a character's information to a list either in state or in Redux. 

## Display a list of saved characters - 7

Display a list of the saved characters from state. Put the list on the screen beside the search form. 

When you display the list for each item show the character's name at the top and all of its information below.

The goal here is to display the saved characters. 

## Display homeworld - 8

Display the homeworld of a character. 

The challenge here is that the character JSON provides you with the *URL to the homeworld* as part of the character data. Use this URL to fetch the homeworld data. To do this you will need to make another API request using the homeworld URL. 

Display the homeworld along with the character details.

It's probably best to get the homeworld *at the same time* as you are getting the character data. 

You could follow these steps: 

- Use fetch to get the character data
- Get the homeworld from character data
- Use fetch to get the homeworld 
- Set state and include the homeworld

The goal here is get the homeworld data which requires a second fetch request.

## Add Some CSS styles - 9

Style your work. This is an open-ended challenge. You just need to show that you can apply styles to components. Try these ideas: 

- Arrange the elements on the screen
- Set the font styles and colors
- Style the headings
- Style the form elements input and button

The goal here is to make things display well.

## Get the list of films - 10

Every character comes with a list of films. This is a list of URLs that return JSON describing a film the character appeared in. Your goal is to display the film title for each film a character appeared in. 

To do this you need to load each URL in the list using fetch. Here is some code to help you out. `Promise.all()` takes a list of promises and resolves them all at the same time. 

Here I mapped the list of films to an array of reposnses. When `Promise.all()` resolves these the next step maps these responses to an arrray of JSON objects. 

```JS
// Get an array of Promises, these are the responses
const filmsRes = await Promise.all(json.films.map(film => fetch(film)))

// Resolve the responses to JSON
const filmsJSON = await Promise.all(filmsRes.map(res => res.json()))

// From here you have a list of JSON objects to work with
```



You can also use `.then()` if you like: 

```JS
// Get an array of Promises, these are the responses
Promise.all(json.films.map(film => fetch(film))).then(resArray => {
 // Resolve the responses to JSON
 return Promise.all(resArray)
}).then(filmsJSON => {
 // do something with filmsJSON here
})
```

`Promise.all()` takes an array of promises and returns a list of the values those responses resolved to. 

For example, here the array of promises `[p1, p2, p3]` resolves to an array of values: `[v1, v2, v3]`

```JS
const values = await Promise.all([p1, p2, p3])
// values: [v1, v2, v3]
```

Or with `.then()` like this: 

```JS
Promise.all([p1, p2, p3]).then(values => {
 // values: [v1, v2, v3]
})
```

### Stretch Goals 

Try these stretch goals to see how far your skills go! You can 
do these in any order. 

- Use Redux. Implement the app with Redux. Use Redux Thunk to handle async actions. 
- Add a Delete button to remove items from the saved list. 
- Handle errors. Character 17 is missing. Try to seach for character 17. What happens? Allow your app to handle this gracefully. 

### Submit your work

Submit your work on Gradescope. 