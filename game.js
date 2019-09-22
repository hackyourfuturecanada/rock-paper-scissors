// Write all your code here
// Replace the contents of this file with your own code


const list=['Rock', 'Paper', 'Scissors'];
function computerPlay(){
  return list[Math.floor(Math.random()*list.length)];
}
// console.log(computerPlay(list));

let roundResult = "";
function playRound(playerSelection, computerSelection){
  // const playerSelection = prompt("please chose whether Rock, Paper or Scisers");
  if(playerSelection==computerSelection){
    roundResult = "Please play again!";
    return "No Winner";

  }

  if(playerSelection=="Rock" && computerSelection=="Paper") {
    roundResult = " You lose :(";
    return "You lose";
  }
  else if(playerSelection=="Paper" && computerSelection=="Rock") {
    roundResult = "Congratulation You Win :)";
    return " You Win";
  }
  else if(playerSelection=="Rock" && computerSelection=="Scissors") {
    roundResult = "Congratulation You Win :)";
    return "You Win";

  }
  else if(playerSelection=="Scissors" && computerSelection=="Rock") {
    roundResult = " You lose :(";
    return "You lose";

  }
  else if(playerSelection=="Scissors" && computerSelection=="Paper") {
    roundResult = "Congratulation You Win :)"
    return "You Win";

  }
  else if(playerSelection=="Paper" && computerSelection=="Scissors") {
    roundResult = " You lose :(";
    return "You lose";

  }


}

// console.log(playRound(computerPlay()));

//   function game(){
//     var play=[];
//     for( let i=0; i<4; i++){
//     play[i] = playRound(computerPlay());
//     }
// console.log(play);
//     }
// game();
let playerScore = 0;
let computerScore = 0;
function play(playerSelection){
  let round = playRound(playerSelection, computerPlay());

  let result = document.createElement("li");
  result.innerHTML = roundResult;
  document.getElementById("score").appendChild(result);

  if(round === "You lose"){
    computerScore++;
  }
    else if("You Win"){
    playerScore++
  }

  if(playerScore === 5){

    document.getElementById("result").innerHTML = "You Win....:) <br> <a href=''>Start Over</a>";

  }
   else if(computerScore === 5){

    document.getElementById("result").innerHTML = "You lose....:( <br> <a href=''>Start Over</a>"
  }

}
 document.getElementById("rock").addEventListener('click',function() {
  play("Rock");
 });

 document.getElementById("paper").addEventListener('click',function() {
  play("Paper");
  });

 document.getElementById("scissors").addEventListener('click',function() {
  play("Scissors");
  });
