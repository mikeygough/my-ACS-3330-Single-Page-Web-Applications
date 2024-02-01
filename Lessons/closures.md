# Closures

Closures are part of the JavaScript language. The concept of closure is related to scope. 

## Let's Review Scope

Read this: https://javascript.info/closure

- Scope determins where a variable can be "accessed"
- JS has block scope, function scope, and module scope

Some examples:

### var 

```JS
// var === function scope 
// x is scoped to the global scope
var x = 1 

function foo() {
	var y = 2 // scoped to foo
}

for (var i = 0; i < 5; i += 1) {
	// i is global scope!
} 

function bar() {
	for (var i = 0; i < 5; i += 1) {
		// i scoped to bar!
	} 
}


```

### const and let

```JS
// const and let === block scope 
// 
const x = 1 // global scope 

// A function creates a block
function foo() {
	let y = 2 // scoped to foo
}

// A for loop creates a block
for (let i = 0; i < 4; i += 1) {
	// i scoped to this block (for loop)
}

// An if state creates a block
if (x > 3) {
	let y = x * 7 // scoped to this block 
}

// You can also create a block with the { }
// This is not an object! 

{ // block begins here
	var x = 1 // x is global
	let y = 2 // scoped to block
	const z = 3 // Scoped to block
} // block ends here
```

## closure (lexical environment)

When a function runs the JS runtime creates a copy of all of the variables in the scope that contains that function. 

The function might need these values to do it's work! This allows the function use the variables that exist in that scope.

A new lexical environment is created each time a function is created!

### Example 1

```JS
function makeCounter() {
	let count = 0

	return () => {
		count += 1
		return count
	}
}

const c1 = makeCounter() // make counter 1
const c2 = makeCounter() // make counter 2

console.log('Counter 1:', c1()) // 1
console.log('Counter 1:', c1()) // 2
console.log('Counter 1:', c1()) // 3

console.log('Counter 2:', c2()) // 1
console.log('Counter 2:', c2()) // 2
```

Here `makeCounter` returns a function. The functrion retured captures the variable `count` as part of it's "closure". 

When we make counter 1 it captures a variable `count` and when we make counter 2 it captures another new and unique variable `count`. 

Notice that when we call `c1()` it increments and returns a count. When we call `c2()` it returns a different count. Each of these functions has captured a different variable! 

### Example 2

```JS
const fruit = ['Apple', 'Banana', 'Cantaloupe']
const things = ['Fork', 'Shoe']

function iterate(arr) {
	let index = -1
	return () => {
		index += 1
		if (index === arr.length) {
			return null
		}
		return arr[index] 
	}
}

const iterateFruit = iterate(fruit)
const iterateThings = iterate(things)

console.log(iterateFruit())
console.log(iterateFruit())
console.log(iterateFruit())
console.log(iterateFruit())

console.log(iterateThings())
console.log(iterateThings())
console.log(iterateThings())
```

### Example 3 

```js
function countManager() {
	let count = 0
	const next = () => {
		count += 1
		return count
	}
	const reset = () => {
		count = 0
		return count
	}

	return [next, reset]
}

const [count, resetCount] = countManager()

console.log('Count Man:', count())
console.log('Count Man:', count())
console.log('Count Man:', count())
console.log('Count Man:', resetCount())
console.log('Count Man:', count())
console.log('Count Man:', count())
```

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	
	<script>
		const arr = ['Apple', 'Banana', 'Cantaloupe', 'Durian']
		for (let i = 0; i < arr.length; i += 1) {
			const button = document.createElement('button')
			button.innerHTML = 'Fruit'
			button.addEventListener('click', (e) => {
				console.log(arr[i])
			})
			document.body.append(button)
		}

	</script>

</body>
</html>
```

Examine the examples and explain what is happening in each. Where is a closure created and what does it "capture"?

You create your own code block that makes use of a closure. 

## Stale Closure

Why is are closures important? 

- They are part of the language and how it works
- They explain why some things happen
- The can be used for fun and profit! 
- Closure can also create situations that don't work as expected! 

In react projects you can get stale closures. These are closures that capture a value when a function is created but before the function is used the value is updated. You function now uses an out dated value! 

Most often this happens with `useEffect`! Use effect takes a function as an argument and returns a function. When these functions are created a closure is created! 

Here is an example from this article: https://dmitripavlutin.com/react-hooks-stale-closures/

```JS 
import { useState, useEffect } from "react";

function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(function() {
    setInterval(function log() {
      console.log(`Count is: ${count}`);
    }, 2000);
  }, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1) }>
        Increase
      </button>

      <p>Open the Console. This component has created a timer that logs the 
        value of count to the console. But the value is not updating when 
        state changes. This is do to a stale closure! 
      </p>
    </div>
  );
}

export default WatchCount
```

Solve the stale closure so that this component logs the updated value of count. 


