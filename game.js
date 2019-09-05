// Write all your code here
// Replace the contents of this file with your own code
var array1 = ['Paper', 'Scissors', 'Rock']

function computerPlay() {
  const index = Math.floor(Math.random()*array1.length);
  return index;
}

console.log(computerPlay());
let result = computerPlay();
console.log(result)

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))

function game() {
  
}
