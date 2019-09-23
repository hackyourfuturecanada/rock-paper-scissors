
const options = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', function(e){
    let round = playRound('rock', computerPlay());
});
document.getElementById('paper').addEventListener('click', function(e){
    let round = playRound('paper', computerPlay());
});
document.getElementById('scissors').addEventListener('click', function(e){
    let round = playRound('scissors', computerPlay());
});

//computer's choice
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function addPointsToUser(){
  points += 1;
  document.getElementById("userScore")[0].innerHTML = points;
}

function addPointsToComp(){
  points += 1;
  document.getElementById("pcScore")[1].innerHTML = points;
}


function playRound(playerSelection, computerSelection) {

if (playerSelection === computerSelection) {
  document.getElementById("p").innerHTML = "You made the same choice! Try Again";

  } else if((playerSelection === 'paper' && computerSelection === 'rock') ||
       (playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'scissors' && computerSelection === 'paper')) {
            document.getElementById("p").innerHTML = "You win! You chose:" + playerSelection;
            addPointsToUser();
          }
          else{  document.getElementById("p").innerHTML = "Computer win!";
          addPointsToComp();
  }
}

 /* function game() {
  let rounds= 0;
while (rounds < 5) {
const result = playRound(playerSelection, computerPlay());
const whoisthewinner = prompt(result);
rounds++;
  }
}
game(); */
