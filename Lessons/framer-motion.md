# Motion With React

Motion can make your apps look more polished. It can also captivate the interest of your user base. 

## Why use animation? 

In many cases animation may not be a good choice. Things that move can be distracting and impossible to use or figure out for some of your audience. On the other hand if you have a solid website a little motion can make it that much more polished and inviting for your visitors. A little bit of motion can also make interactions more understandable and engaging. 

Take a look at some these sites to see what people are doing with animation on the web: 
- https://blog.hubspot.com/website/website-animation-examples
- https://codepen.io/tag/transitions
- https://htmlburger.com/blog/web-transitions/

Discuss with your group:
- Q: Which of these animations do you like?
- Q: Which are not that great?
- Q: Which of these animations do you think qould enhance a web site?
- Q: Which of these would you implment on a site that you were creating?
- Q: What properties are animated? 

## Animation in React 

React's virtual DOM creates some problems for elements that are animated. If a DOM node is updated in the middle of an animation the motion would abruptly stop or restart. This would not be the user experience you were looking for. 

React provided a solution to this with the `ReactTransitionGroup` and `ReactCSSTransitionGroup` components. The react team moved these to `react-transition-group` which is a community-maintained package, go open source! 

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

I'll review Framer Motion here. Feel free to check out the others. Framer Motion seemed easy to work with and had great docs. 

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

## Quick Start 

Import `framer-motion`

```
npm install framer-motion
```

When you need to animate an element you'll use one of the motion elements in place of the standard element. Like this

```JS
import { motion } from 'framer-motion'
// This
<div></div>
// Becomes
<motion.div></motion.div>
```

This new `motion.div` will now move. Move the element by adding the animated prop. This Prop takes an object with properties and values that will be animated. 

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

### What can you animate: 

Just about any CSS property. Some of the properties have been renamed most use the standard CSS property names. 

- x: The horizontal position
- y: The vertical position

Other properties use the JS CSS property name (this is the standard CSS property name in camel case)

- border
- borderRadius
- color
- margin
- padding
- etc. 

### Values 

Framer supports a wide range of values. You can use numbers and strings. A number by itself is most often represents pixels. A number as a string should include a unit, like regular CSS. 

Colors in the form of RGB, HEX, and HSLA are supported. 

Some CSS properties use multiple values. For example `border: 1px solid black`. Framer supports these also. 

- boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"

https://www.framer.com/motion/component/#supported-values

### Initial, Animate, and Exit

Often you will want an element to end at its default value, this would be where it would have been normally. To animate into this position you need to start the animation with some offset values.

Framer uses the `animate` prop for where you want the element to end, and the `initial` prop as the starting values offset. 

```JS
<motion.div
  initial={{ opacity: 0, x: -500 }}
  animate={{ opacity: 1, x: 0 }}
></motion.div>
```

Notice the initial values place the object 500 pixels to the left (-500) and the opacity to 0. The animate values move the object onto the screen to its "default" position and opaque.

### Transition properties

To control the duration of the animation and other features of the motion such as easing, use of the `transition` prop. 

```JS
<motion.div
  initial={{ opacity: 0, x: -500 }}
  animate={{ opacity: 1.0, x: 0 }}
  transition={{ duration: 3 }}
></motion.div>
```

Now the animation takes 3 seconds (duration: 3). 

Imagine the `transition` properties determine how the CSS properties get from one value to another. 

Here are a few useful transition properties. 

- `delay`: the number of seconds to delay before beginning motion
- `type`: easing type, can be ease in, ease out, spring etc.
- `repeat`:
- `staggerChildren`:
- and more!

https://www.framer.com/motion/transition/

### Exit

Often you will have components that are mounted and unmounted and you'll want to animate these. 

The `animate` motion is applied when a component appears. Use `exit` to define motion applied to something that is leaving. 

Use the AnimatePresence component animate components that created or removed dynamically. 

### AnimatePresence

The `AnimatePresence` component is used to manage groups of motion components that are entering and exiting the DOM. Imagine a dynamic app that adds new elements and removes old elements, `AnimatePresence` would be used to animate new elements into view and animate elements out of view using exit. 

Here is an example using the Redux Timers app. 

```JS
...
import { motion, AnimatePresence } from "framer-motion"

export default function ListTimers() {
  const timers = useSelector(state => state.timers.value)
  
  const initial = {opacity: 0, x: -100} // start 100px to the left
  const animate = {opacity: 1, x: 0}    // end at the default position
  const exit = {opacity: 0, x: 100}     // exit 100 pixels to the right
  const transition = {duration: 2}      // takes 2 secs

  return (
    <div>
      <AnimatePresence>
        {timers.map((timer, i) => (
          <motion.div
            key={`timer-${timer.id}`} // Add a unique key!
            initial={initial}
            animate={animate}
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

**Important!** motion elements used with AnimatePresence must have a unique key! Without a unique key, Framer Motion can not tell which elements are new and which are current. 

The example above was taken from the Timers tutorial. To make this work update the timer objects with unique id values using the `uniqid` package. I used this id as the key for each motion element. 

https://www.framer.com/motion/animate-presence/

## Challenge!

Use Framer Motion to add some motion to the Redux tutorial. 

Start by animating a a button or other interaction. Use the gestures: 

https://www.framer.com/motion/gestures/

**Chellenge 2**

Use the AnimatePresence component to animate elements in and out as they are added an removed. 
