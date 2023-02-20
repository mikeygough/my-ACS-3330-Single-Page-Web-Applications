# Motion With React

Motion can make your apps look more polished. It can also captivate the interest of your user base. 

## Animation in react 

React's virtual DOM creates some problems for elements that animated. If a DOM node is updated in the middle of an animation the motion would abruptly stop. This would not be the user experience you were looking for. 

React provided a solution to this with the `ReactTransitionGroup` and `ReactCSSTransitionGroup` components. The react team moved these to `react-transition-group` which is a community maintained package, go open source! 

https://reactjs.org/docs/animation.html

There are also several other libraries. Here is a list of what was available in 2022. 

- [Framer Motion](https://www.framer.com/motion/) 
- [React Spring](https://www.react-spring.dev)
- [Remotion](https://www.remotion.dev)
- [React-Motion](https://github.com/chenglou/react-motion)
- [React Move](https://react-move-docs.netlify.app/#/)
- [react-anime](https://github.com/plus1tv/react-anime/blob/HEAD/documentation.md)
- [React Awesome Reveal](https://react-awesome-reveal.morello.dev)

https://www.syncfusion.com/blogs/post/top-7-react-animation-libraries-in-2022.aspx

## Framer Motion

I'll review Framer Motion here. Feel free to check out the others. Framer Motion seemed easy top work with and had great docs. 

Check the Framer motion docs here: 

https://www.framer.com/motion/

Take a few minutes to read the docs. 

Check out the getting started page, and open the Sandbox/playground. 

https://www.framer.com/motion/introduction/

Framer motion provides special motion components that you use in place of standard components. 

For example: 

- motion.div
- motion.h1
- motion.p
- motion.li
- etc. 

When you need to animate an element you'll use one of the motion elements in place of the standard element. Like this

```JS
import { motion } from 'framer-motion'
// This
<div></div>
// Becomes
<motion.div></motion.div>
```

This new `motion.div` will now move. Move the element by adding the animate prop. This Prop takes an object with properties and values that will be animated. 

```JS
<motion.div
	animate={{ x: 100, y: 100, opacity: 0.5 }}
></motion.div>
```

Try these values in the sandbox. 

You can animate just about any CSS property. Try these: 

```JS
<motion.div
	animate={{ 
		x: 100, 
		y: 100, 
		opacity: 0.5 
		borderRadius: 0
	}}
></motion.div>
```

Often you will want an element to end at it's default value, this would be where it would have been normally. This means you need to start the animation with some different initial values. 

```JS
<motion.div
  initial={{ opacity: 0, x: -500 }}
  animate={{
    opacity: 1.0,
    x: 0,
    y: 0,
    borderRadius: 0
  }}
></motion.div>
```

Notice the initial values place the object 500 pixels to the left and the opacity to 0. The animate values move the object onto the screen and make it opaque. 

To control the duration of an animation and other features of the motion such easing use the `transition` prop. 

```JS
<motion.div
  initial={{ opacity: 0, x: -500 }}
  animate={{
    opacity: 1.0,
    x: 0,
    y: 0,
    borderRadius: 0
  }}
  transition={{ duration: 3 }}
></motion.div>
```

Here the animation takes 3 seconds. 

### Exit

Often you will have components that are mounted and unmounted and you'll want to animate these. 

The `animate` motion is applied when a component appears. Use `exit` to define motion applied to something that is leaving. 

### AnimatePresence

The `AnimatePresence` component is to mange groups of motion components that entering and exiting the DOM. 

Here is an example using the Redux Timers app. 

```JS
import React from 'react'
import { useSelector } from 'react-redux'
import TimerView from './TimerView'

import { motion, AnimatePresence } from "framer-motion"

export default function ListTimers() {
	const timers = useSelector(state => state.timers.value)
	
	const init = {opacity: 0}         // set initial values
	const intro = {opacity: 1}        // values to animate in
	const exit = {opacity: 0}         // values to animate out
  const transition = {duration: 2}  // transition properties

	return (
    <div>
    <AnimatePresence>
        {timers.map((timer, i) => (
          <motion.div
            key={`timer-${timer.id}`}
            initial={init}
            animate={intro}
            exit={exit}
            transition={transition}
          >
            <TimerView index={i} {...timer} />
          </motion.div>
        ))}
    </AnimatePresence>
    </div>
	)
}
```

Important! This does not work if the `motion` elements do not have a key! Since the example uses an array we need to know which elements are updated. This requires a unique key! 

