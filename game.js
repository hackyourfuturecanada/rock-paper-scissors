// Write all your code here
// Replace the contents of this file with your own code
const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  console.log('Player chose:' + playerSelection);
console.log('Computer chose:' + computerSelection);

if (playerSelection === computerSelection) {
return 'You made the same choice! Try Again';
} else if ((playerSelection === 'paper' && computerSelection === 'rock') ||
   (playerSelection === 'rock' && computerSelection === 'scissors') ||
   (playerSelection === 'scissors' && computerSelection === 'paper')) {
       return 'You win!';
   }
  else{ return 'Computer win!';
}
}

function game() {
  let rounds= 0;
while (rounds < 5) {
const playerSelection = prompt('Choose one: rock, paper, scissors!');
const result = playRound(playerSelection, computerPlay());
console.log(result);
rounds++;
  }
}

game();
