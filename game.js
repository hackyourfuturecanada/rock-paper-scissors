// Write all your code here
// Replace the contents of this file with your own code

const list=['Rock', 'Paper', 'Scissors'];
function computerPlay(){
  return list[Math.floor(Math.random()*list.length)];
}
console.log(computerPlay(list));

function playRound(playerSelection, computerSelection){
  if(playerSelection==computerSelection){
    return "No Winner, Please Play again";
  }

  else if(playerSelection=="Rock" && computerSelection=="Paper") {
    return "You lose, Paper beats Rock";
  }
  else if(playerSelection=="Paper" && computerSelection=="Rock") {
    return " You Win, Paper beats Rock";
  }
  else if(playerSelection=="Rock" && computerSelection=="Scissors") {
    return "You Win, Rock beats Scissors";
  }
  else if(playerSelection=="Scissors" && computerSelection=="Rock") {
    return "You lose, Rock beats Scissors";
  }
  else if(playerSelection=="Scissors" && computerSelection=="Paper") {
    return "You Win, Paper beats Scissors";
  }
  else if(playeSelection=="Paper" && computerSelection=="scissors") {
    return "You lose, Paper beats Scissors"
  }
}
const playerSelection ='Rock';
const computerSelection= computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game(){
  var play=[];
  for( let i=0, i<4, i++){
  play[i]=playRound;

  }
  console.log(playRound(playerSelection, computerSelection));

}
}
