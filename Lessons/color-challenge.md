# Color Challenge

I found this challenge on Client.dev they provide interview type questions for front end developers. 

## Challenge

Your goal is to display three random color swatches as 100px by 100px squares. Below you will show the hex color of one of these swatches. When a swatch is clicked display a message "correct" if the color of the swatch matches the hex color displayed, or incorrect if it does not match. Last add a button to reset/play the game again. 

![Color Challenge](color-challenge.gif)

You can't see the cursor in this gif. Imagine that I'm clicking one of the color switches then the text "correct" or "icorrect is displayed. 

## Discussion 

- How do you ghenerate a hex color? 
- How to apply the color to a component? 
- How much state do you need? 

## Planning and strategy

To solve this problen you need a plan. You dont have to see a path to a complete solution from the begging. Some answers will come to you as you solve others. Choosing what solve first will you move forward.

Here is a suggested path. 

1. Create the interface
2. Generate the random colors
3. Handle the interaction and logic

Try to stay focussed on each step without being distracted by the others until that step is complete. 

Break ech of the steps above into smaller peices and solve them. 

### Create the interface

> Your goal is to display **three random color swatches as 100px by 100px squares**. Below you will **show the hex color** of one of these swatches. When a swatch is clicked **display a message "correct"** if the color of the swatch matches the hex color displayed, or incorrect if it does not match. Last **add a button to reset/play** the game again. 

1. Create the react application
2. Create three 100px by 100px. (Pro tip: Put a border or background color on these so you can see them)
3. Arrange the squares in a row
4. Show the hex color, us a placeholder for the random value for now. 
5. Add the text "correct/incorrect" as a placeholder. 
6. Add the "reset/play" button. 
7. Arrange everything in a column. 
8. Stretch goal put it all in the center of the page. 

All of these things rely on basic React, HTML, and CSS skills. If you're doing something else at this stage you're getting distracted and off topic! 

### Generate Random Colors

Your goal is to display **three random color** swatches as 100px by 100px squares. Below you will show the **hex color** of one of these swatches. When a swatch is clicked display a message "correct" if the color of the swatch matches the hex color displayed, or incorrect if it does not match. Last add a button to reset/play the game again. 

Understand what a color is and then formulate how to generate that. The problem asks for a hex color. Hex colors look like this: `#AABBCC`. Without the # you have three numbers: `AA`, `BB`, `CC`. These are base 16 and have a range of 0 - 255. That means you need to start with a random number between 0 and 255 and then convert it to base 16. 

Clue: Look up `Number.toString()` pay attention to the "radix".

1. Write a function that generates a random integer. Bonus: Write your function to take the max number as an argument and return a random number from 0 to the max value. 
2. Write another function that generates generates a random color by calling the first function three times. Combine the three numbers together starting with # to create a hex color string. 
3. Generate three random colors in your React component using state. 
4. Set the background-color of each of the color swatches using the randomly generated colors. You can set CSS propertys by using the `style` attribute. Look up: React inline styles. 
5. Test and debug
	- Console log your random numbers
	- Console log your random colors
	- Console log the style object used for the color swtaches
	- Inspect elements in the browser and look for the styles you applied

### Handle the interaction and logic

Your goal is to display three random color swatches as 100px by 100px squares. Below you will **show the hex color of one of these swatches**. **When a swatch is clicked display a message "correct" if the color of the swatch matches the hex color displayed, or incorrect if it does not match**. Last add a button to **reset/play the game again**.

Identify what you can interact with. Looks like you can click each of the three swatches, and the button. 

You need to be able to indentify one of the swatches as the "correct" color. Decide how you will do that. 

1. Add an `onClick` to each of the swatches. Use a console.log to log the color of that swatch. 
2. Decide how you will determine which of the three random colors is correct. Store that "answer" in state. 
3. Display the correct random color. 
4. Update the `onClick` functions in swatches to determine if the answer is correct or not. You might need to use a new state variable for this. 
5. Display the text "correct" or "incorrect" after the answer is set using some conditional rendering. You might think about state for this as three values: no answer, correct, and incorrect.
6. The last step is to reset the game. To do this you need to:
	- Choose three random colors
	- Choose which of the three colors is correct
	- Set the answer to it's neutral no answer state

### Stretch Goals 



## Conclusion 

Good luck with this challenge! Do your best and complete as much of the challenge as you can. 
