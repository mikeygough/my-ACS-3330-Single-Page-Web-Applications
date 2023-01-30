# FEW 2.3 - Lesson 11

## `useEffect` Hook

`useEffect` is an important but confusing hook to master. You will run into it in the future!

## Why you should know this

`useEffect` is important and needed to handle lifecycle and asynchronous actions. 

`useEffect` also has some pitfalls that can cause hard-to-diagnose problems. Understanding `useEffect` will allow you to spot these problems and know how to solve them. 

## Learning Objectives

- Use `useEffect` in projects
- Describe and explain `useEffect` its purpose and use cases 
- Implement lifecycle updates with `useEffect`

## Quick Review of callbacks

A callback is a function that is passed to another function. 

## Class-based components 

React also supports components written as classes. In the past, this was the only way to create components that used state. Here is an example: 

```JS
import { Component } from 'react'

class Counter extends Component {
	constructor(props) {
		super(props) 
		this.state = { count: 0 } // state! 
	} 

	render() {
		return (
			<button 
				// updates state 
				onClick={() => this.setState({ count: this.state.count + 1 })}
				// Displays state
			>Hello {this.state.count}</button>
		)
	}
}

// Use the component above like any other component
<Counter />
```

This code has lots of dot syntax but is also self documenting. 

The same component as a function: 

```JS
import { useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0)
		return (
			<button 
				// updates state 
				onClick={() => setCount(count + 1)}
				// Displays state
			>Hello {count}</button>
	)
}

// 
<Counter />
```

The second is shorter but maybe it's harder to understand what is happening. 

## Lifecycle methods 

LifeCycle methods are methods that are called during the life of your component. This allows your component to react to situations like when it is created when it is updated when it is added or removed from the DOM. These are important events in the life of a component, just as important as life events like birth, death, and graduation!

In a class-based component lifecycle methods are implemented like this: 

```JS
class Counter extends Component {
	...

	// Lifecycle methods
	componentDidMount() {
		// When the component is added to the DOM
	}

	componentWillUnmount() {
		// Component will be removed from the DOM
	}

	componentDidUpdate() {
		// Each time component renders
	}

	...
}
```

This is very clear and the code is self-documenting. 

## `useEffect` 

Components created with functions don't have lifecycle methods. Instead, we have `useEfect`. `useEffect` can be confusing to follow because the code doesn't have the self-documenting quality of the OOP version! 

```JS
import { useEffect } from 'react'

function Counter() {

	// useEffect takes two arguments
	useEffect(() => {}, []) 
	// The first is a callback
	// The second parameter is an array that lists values that trigger an update
	...
}
```

`useEffect` may return a function. Implementing `useEffect` with all of its features might look like this: 

```JS
useEffect(() => {
	...
	return () => {} // returns a function
}, []) 
// The returned function is called when this component is removed from the DOM. 
```

What does this do for us? With `useEffect` you can run code when a component is added to the DOM, run code when a component updates, and run code when a component is removed from the DOM. 

How do you use `useEffect`? Below are three uses of `useEffect`. You can use `useEffect` more than once in a component!

```JS
import { useEffect } from 'react'

function Counter() {
	// --- Component added to DOM ---
	useEffect(() => {
		// The first parameter is a function that is executed when 
		// this component is mounted
		console.log('1. Component added to DOM')
		// Return a function that is executed when this
		// Component is removed from DOM
		return () => {
		console.log('4. Component removed from DOM')
		}
	}, []) // The second parameter is an array that lists values that trigger an update

	// --- Each update ---
	useEffect(() => {
		console.log('2. Component did update*')
	}) // <- * No array here! So this triggers every update!

	// --- When * count * changes ---
	useEffect(() => {
		console.log('3. Count Updated')
	}, [count]) // Includes count, so only triggers when count is updated

	...
}
```

`useEffect` second argument dependency array. 

```JS
// --- When * count * changes ---
useEffect(() => {
	console.log('3. Count Updated')
}, [count]) // Includes count, so only triggers when count is updated
```

Without the array, the first argument to `useEffect` triggers on each update. When the array (second `useEffect` argument) triggers every update. When the array contains values the first callback only triggers when that value changes! 

## Video Lecture

Follow the video lecture here: 

- https://www.youtube.com/playlist?list=PLoN_ejT35AEhmWcDTI6M--ha_E4lTyAtx

Watch lessons 08 1 - 2

## Additional Resources

1. https://reactjs.org/docs/hooks-intro.html

