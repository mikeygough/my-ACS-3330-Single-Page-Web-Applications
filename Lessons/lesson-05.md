# FEW 2.3 - Lesson 4

<!-- > -->

## Conditional Rendering

Conditional rendering is the process of showing one component or another depending on state or possibly showing or not showing a component at all. 

<!-- > -->

## Learning Objectives

1. Identify use cases for conditional rendering
1. Define patterns used for conditional rendering
1. Use conditional rendering

<!-- > -->

## Video

Follow this class in these video lessons:

- https://www.youtube.com/playlist?list=PLoN_ejT35AEhmWcDTI6M--ha_E4lTyAtx

The videos are labeled "lesson 05 x" which corresponds to the class lesson numbers. 

<!-- > -->

##  Review 

- Use the controlled component pattern to create a form
  - Create a new component
  - Use useState to define variables and setters for: 
    - name
    - password 
  - Create a form with two inputs: name and password

<!-- > -->

## Conditional Rendering

Commonly in React, you will need to render different components under different conditions. Here are two patterns you can apply to your work: 

<!-- > -->

**Pattern 1**

The idea is to render one component or another depending on some logic. One method to handle this is with a function:

```JS 
function WeatherData(isLoaded) {
  if (isLoaded) {
    return <Weather />
  }

  return <Loading />
}
```

<small>Here the function returns either the Weather component or the Loading Component depending in weather `isLoaded` is truthy.</small>

<!-- > -->

You might use the example above like this: 

```JS
function App() {
  return (
    <div>
      {WeatherData(false)} // displays <Loading />
    </div>
  )
}
```

<small>You can take the idea above one step further. Since a Component is a function you treat it like a component. **Note! parameters are passed via props!**</small>

<!-- > -->

```JS 
function WeatherData({ isLoaded }) { // Notice the change here!
  if (isLoaded) {
    return <Weather />
  }

  return <Loading />
}
```

This component renders the Weather component or the Loading component. 

<!-- > -->

You might use this in an other component like this: 

```JS
function App() {
  return (
    <div>
      <WeatherData isLoaded={true} /> // displays <Weather />
    </div>
  )
}
```

Notice that the function above returns JSX so it can be used like any other component! 

<!-- > -->

**Pattern 2** - Assign a JSX element to a variable and render it. This works for situations where a list of components might be used. 

```JavaScript
function WhatToEat(props) {
  const { time } = props
  let element // declare an empty variable
  if (time === 'morning') {
    element = <Eggs />
  } else if (time === 'lunch') {
    element = <Burrito />
  } else {
    element = <Icecream />
  }

  return (
    <div>
      {element}
    </div>
  )
}
```

Since this function return JSX is can be used as a component! 

```JS
function App() {
  return (
    <div>
      <WhatToEat time="lunch" /> // displays <Burrito />
    </div>
  )
}
```

<!-- > -->

**Pattern 3** Use the && operator. Here you'd render a component or render nothing. This is the standard JS comparison AND operator. If both sides are true then the right side of the && operator is rendered. 

```JS 
<div>
  <h1>Hello!</h1>
  {unreadMessages.length > 0 &&
    <h2>
      You have {unreadMessages.length} unread messages.
    </h2>
  }
</div>
```

<small>`false && 99` evaluates to false, and `true && 99` evaluates to 99. In this example if `unreadMessages.length` is greater than 0 the left side of && is true and the right side is displayed.</small>

To understand this better read about [JS truthy and falsy.](https://javascript.info/logical-operators) 

<!-- > -->

**Pattern 4** The ternary operator is like a single line if else. You can use this anywhere! it also works with React components! 

```JSX
function LoginButton(props) {
  const { isLoggedIn } = props;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton />
        : <LoginButton />
      }
    </div>
  );
}
```

<small>In this example if `isLoggedIn` is true then LogoutButton is displayed. Otherwise LoginButton is displayed.</small>

The ternary operator `condition ? truthy expression : falsey expression` works with three elements: a condition, a truthy expression, and a falsey experssion.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

<!-- > -->

**Pattern 5** In some cases you'll want to show a component or nothing at all. React won't render `null` if it appears in a component. 

```JSX 
function Warning({ show, message }) {
  if (show === false) {
    return null
  }
  return (
    <div>
      Warning: {message}
    </div>
  ) 
}
```

Above the Warning component "short circuits" and returns null if `show` is false. 

```JSX
function App() {
  return (
    <div>
      <Warning show={false}> // displays nothing
      <Warning show={true} message="Look out!"> // displays the message
    </div>
  )
}
```

The first Warning returns null which React ignores without an error. 

The second Warning returns the div with the a message and is displayed. 

### Using Conditional Rendering

This might be good when you want to see the logic at the point where something is rendered. 

Read more about [Conditional Rendering in React](https://react.dev/learn/conditional-rendering)

Conditional Rendering techniques

- A function returns a component
- Element Variables
- Inline if with logical && Operator
- Inline if-else with Conditional Operator (ternary)
- Prevent Component from rendering

https://scotch.io/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications

## In Class 

Start on Assignment 2. In this assignment you will create an app that works with a web API. It will need to load data and display it. To build the app you will make use of conditional rendering.

[Assignment 2](../Assignments/Assignment-02.md)

## After Class

Continue working on [Assignment 2](../Assignments/Assignment-02.md)

## Additional Resources

1. https://reactjs.org/docs/conditional-rendering.html
1. https://reactjs.org/docs/thinking-in-react.html
1. https://reactjs.org/docs/design-principles.html

