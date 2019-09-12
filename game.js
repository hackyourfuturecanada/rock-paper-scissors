// Write all your code here
// Replace the contents of this file with your own code



function compPlay () {
  const choices= ["rock","paper","scissors"];
  return choices [Math.floor(Math.random()*choices.length)];
}

let choices= ["rock","paper","scissors"];
function results (comp, player) {
  if (comp === player){
  return Tie;
}else if  ((comp === "paper" && player === "scissors")||
(comp === "rock" && player === "paper") ||(comp === "scissors" && player === "rock")){
  return "You win";
}else{
  return "You lose";
  }
}


let choices= ["rock","paper","scissors"];
function game(comp,player) {
  for (let i=0; i<5; i++){
    let player = prompt ("Enter your choice");
    let play = results(compPlay(),player);
    console.log(results);
  }
}
