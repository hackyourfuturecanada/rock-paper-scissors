let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-label");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = documnet.getElementById("r");
const paper_div = documnet.getElementById("p");
const scissor_div = documnet.getElementById("s");

function getComputerChoice (){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord (letter){
  if (letter === "r") return "RocK";
  if (letter === "p") return "paper";
  return "Scissors";
}



function win( userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWorld = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerhtml = userScore;
  computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWorld}. You Win!≈`;
    userChoice_div.classList.add('green-glow')
    setTimeOut(() => userChoice_div.classList.remove('green-glow'), 1000)
  }






//setTimeOut(function() {console.log("Hello")}, 3000)

function lose(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWorld = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerhtml = userScore;
  computerScore_span = computerScore;
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} looses to ${convertToWord(computerChoice)}${smallCompWorld}. You Lost!≈`;
  userChoice_div.classList.add('red-glow')
  setTimeOut(() => userChoice_div.classList.remove('red-glow'), 1000)

}

function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWorld = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWorld}. it is a draw!`;
  userChoice_div.classList.add('gray-glow')
  setTimeOut(() => userChoice_div.classList.remove('gray-glow'), 1000)
}

function game (userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
    win(userChoice + computerChoice);
    break;
  case "rp":
  case "ps":
  case "sr":
    lose(userChoice + computerChoice);
    break;
  case "rr":
  case "pp":
  case "ss":
    draw(userChoice + computerChoice);
    break;
  }
}


function main(){
  rock_div.addEventListener('click',() => game("r"));

  paper_div.addEventListener('click',() => game("p"));

  scissor_div.addEventListener('click',() => game("s"));


}

main();
