# FEW 2.3 - Lesson 9

# Redux 

This class will cover Redux which is an application state management tool. Application State represents the data that your app manages and displays. Often it is shared across multiple views and can be updated in complex ways. 

Redux is a JS library based on the Flux pattern that 

<!-- > -->

## Review: Redux

<!-- > -->

What do you remember about the first discussion of redux? 

<!-- > -->

What is an action? 

<!-- > -->

What is a reducer?

<!-- > -->

What is the store?

<!-- > -->

## Install Redux

Start with a new project:

```
npx create-react-app redux-example
```

To use React and redux you'll need to add these dependencies:

```
yarn add redux react-redux
```

(use `npm i redux react-redux` if you like)

Set up your project. Add a folder for actions and reducers. 

Add a simple action. Create `actions/index.js`. 

```JS
export const INCREMENT = 'INCREMENT'

export const increment = () => {
	return {
		type: INCREMENT
	}
}
```

Add a simple reducer. Create: `reducers/counterReducer.js`

```JS
import { INCREMENT } from '../actions'

const counterReducer = (state = 0, action) => {
	switch(action.type) {
		case INCREMENT: 
			return state + 1
		
		default:
			return state
	}
}

export default counterReducer
```

Redux can work with multiple reducers so we combine them. Create: `reducers/index.js`.

```JS
import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

export default combineReducers({
	count: counterReducer
})
```

Next create the store. You can do this in a separate file or in `index.js` or `App.js`. Open `index.js` and make the following modifications: 

```JS
...

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

...
```

Notice the changes! Leave the other code in place and add what is shown above. 

With all of this in place you can start working with Redux!

<!-- > -->

```JS
const export NEW_TODO = 'NEW_TODO'

export const newTodo = (item) => {
  // What goes here?
}
```

<!-- > -->

```JS
import { NEW_TODO } from '../actions'

function todoReducer(state = [], action) {
  // What goes here? 
}
```

Try it out in your app. Make a new component, create: `DisplayCount.js`

```JS
import { useSelector } from 'react-redux'

function DisplayCount() {
	const count = useSelector(state => state.count)
	return (
		<h1>{count}</h1>
	)
}

export default DisplayCount
```

Use this new component in your app. Open `App.js` and replace the component function there with: 

```JS
import './App.css';
import DisplayCount from './DisplayCount';

function App() {
  return (
    <div className="App">
      <DisplayCount />
    </div>
  );
}

export default App;
```

You should see the count displayed on your page! 

Now make a button that increments the count. Create a new file: `IncrementButton.js`. 

```JS
import { useDispatch } from 'react-redux'
import { increment } from './actions'

function IncrementButton() {
	const dispatch = useDispatch()

	return (
		<button
			onClick={() => dispatch(increment())}
		>Add 1</button>
	)
}

export default IncrementButton
```

Add an instance of the `IncrementButton` to `App.js`.

```JS
import './App.css';
import DisplayCount from './DisplayCount';
import IncrementButton from './IncrementButton';

function App() {
  return (
    <div className="App">
      <DisplayCount />
      <IncrementButton />
    </div>
  );
}

export default App;
```

## Challenges!

If you've built the app above try these challenges: 

### Challenge 1 

Add another Button to `App.js`. Note! YOu do not need to make a new component! Just create another instance of `IncrementButton`. 

### Challenge 2 

Create a new button. This one will reset the count to 0. Call it `ResetButton`. To do this: 

- Define a new action named RESET. 
- Define an action creator function reset, that returns an object with type: RESET. 
- Create a new component ResetButton. 
  - Import use dispatch
  - Import your reset action
  - Get the dispacter (see the increment button)
  - Setup an onClick that calls dispatch with the reset action. 
  - Handle the reset action in your counterReducer

<!-- > -->

## Learning Objectives

1. Define Reference and value types
2. Identify references and values in JavaScript
3. Use destructuring to create a shallow copy of objects and arrays

<!-- > -->

## The Final Project

Use this class to get started on your final project!

Your project should include the following: 

- Built-in React
- Uses Redux
- Uses the Controlled component pattern

### Define your application state

Since your project will use Redux you'll need to think about the store. Ask yourself these questions: 

- What data does your project need to store?
- How will the data be organized? 

The store is an object and each key holds a value. The value at each key is assigned by a reducer. 

The keys in the store can be objects, arrays, or other value types. Your project can use more than one reducer but each reducer is responsible for the value at a single key. 

Imagine your store has a list of posts. It might look like this: 

```JS
store = {
  posts: [...]
}
```

This might be defined a posts reducer: 

```JS
function postsReducer(state = [], action) {
  ... // remember this will always return an array! 
}
```

When you set up Redux with `combineReducers` you define the shape of the store: 

```JS
combineReducers({
  posts: postsReducer
})
```

Imagine you have to know which post someone is currently viewing. We need the index of this post. As it is now `postsReducer` can't support this since it has only an array. How would you solve this? 

There are two routes you can take: 

**Solution 1** Make `posts` into an object. 

```JS
function postsReducer(state = { selectedPost: 0, posts: [] }, action) {
  ... // Must return an object with keys: selectedPost, and posts 
}
```

**Solution 2** Add a second reducer! 

The current reducer stays the same. 

```JS
function postsReducer(state = [], action) {
  ... // remember this will always return an array! 
}
```

Then add a new reducer: 

```JS
function selectedPostReducer(state = 0, action) {
  ... // Always returns a number 
}
```

In this case you would add a second key to combine reducers: 

```JS
combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer
})
```

### Define the Application state for the app

What does it look like? What shape or form does this data take? Define your data now. Write an object that looks like the data your app needs to store. 

## Define Actions 

Actions determine the ways your application can make changes to the store. In a Redux application changes to the application, state can only be made with an action. 

- List all of the actions your application can take
- For each action think of what information might be required by that action. 

For example, with the example above, creating a new post might require a title and some text content. The action might be called: ADD_POST. Every action will have a corresponding function. In this case, the function would need to take the title and content as parameters. 

```JS
const ADD_POST = 'ADD_POST'

function addPost(title, content) {
  return {
    type: ADD_POST,
    payload: { content }
  }
}
```

Your reducers would be called with the current state value and the action object returned from `addPost` when the action is issued. 

### Define your actions

Think of all of the ways your application will change its state. Make an action for each state. 

## In Class Challenges 

- Create a new react project if you haven't already
- Add redux to your project
  - Import dependencies
  - Create an actions folder
  - Create a Reducers folder
- Define your actions
  - Define a name
  - Define the function
- Add reducers
  - Define a reducers
  - Combine your reducers

## After Class

The goal for today is to have a React Project with Redux. It doesn't have to be fully functional and may need changes, but it should have redux installed and functional. 

- Install Redux
- Add Actions
- Add Reducers
- Combine Reducers
- Create Store

Submit your work to grade scope. 

## Additional Resources

1. 

