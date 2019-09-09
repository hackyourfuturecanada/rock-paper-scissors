# rock-paper-scissors

These instructions were borrowed from [TheOdinProject](https://www.theodinproject.com/).

## Introduction

We're going to make a simple implementation of the grade-school classic "rock paper scissors".  If you don't know what that is, check the [Wikipedia article](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) or [this](https://www.wikihow.com/Play-Rock,-Paper,-Scissors) step-by-step.  

For the moment we're just going to play the game from the browser console. In the future, we'll look at adding a front-end!

### Project files

We'll use JavaScript in the browser for this assignment, so your workflow will be slightly different from how we've used JavaScript previously. 

* **index.html**
  - Blank HTML file that includes an external JavaScript file, `game.js`
  - If you want to learn more about including JavaScript to your page, check out [this link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page)

* **game.js**
  - Add all of your JavaScript code here!

Your game is going to be played completely from the console, so don't worry about putting anything else in `index.html`.

### Working with JavaScript in the browser 

Make changes to `game.js` and save them. I've just added a "Hello, world!" `console.log` statement.

Open up `index.html` in a web browser and then open up the browser’s console by right-clicking on the blank webpage and selecting “Inspect” or “Inspect Element”. 

In the ‘Developer Tools’ pane find and select the ‘Console’ tab, where you should see the output of `game.js`.

## Assignment instructions
1. Your game is going to play against the computer, so begin with a function called `computerPlay` that will randomly return either 'Rock', 'Paper' or 'Scissors'.  We'll use this function in the game to make the computer's play.
2. Write a function that plays a single round of Rock Paper Scissors.  The function should take two parameters - the `playerSelection` and `computerSelection` - and then return a string that declares the winner of the round like so: `"You Lose! Paper beats Rock"`
   1. Make your function case insensitive (so users can input `rock`, `ROCK`, `RocK` or any other variation)

   2. __Important note:__ you want to `return` the results of this function call, _not_ `console.log()` them.  To test this function console.log the results:

      ~~~javascript
      function playRound(playerSelection, computerSelection) {
        // your code here!
      }

      const playerSelection = 'rock'
      const computerSelection = computerPlay()
      console.log(playRound(playerSelection, computerSelection))
      ~~~

      ​
3. Write a NEW function called `game()`. Use the previous function _inside_ of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
   1. At this point you should still just be using `console.log()` to display the results of each round and the winner at the end.
   2. Use `prompt()` to get input from the user. [Read the docs here if you need to.](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
   3. Feel free to re-work your previous functions if you need to.  Specifically, you might want to change the return value to something more useful.
   4. Feel free to create more "helper" functions if you think it would be useful.
   
## Part 2: Now with the DOM!

1. Copy your original code into a new file so you don’t lose it. Alternatively, create a new branch for your changes. Replace `<your_branch_name>` with the name of your branch.
```
git checkout -b <your_branch_name>
```

2. For now, remove the logic that plays exactly five rounds.
3. Create three buttons, one for each selection. Add an event listener to the buttons that calls your `playRound` function with the correct `playerSelection` every time a button is clicked. (you can keep the console.logs for this step)
4. Add a div for displaying results and change all of your console.logs into DOM methods.
5. Display the running score, and announce a winner of the game once one player reaches 5 points.
6. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.
7. Update your CSS and add some style to your game. Have fun with it!
8. When you submit a pull request, make sure you use the branch that you worked on instead of `master`.
