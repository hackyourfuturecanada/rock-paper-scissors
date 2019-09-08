// Write all your code here
// Replace the contents of this file with your own code
let options = ["Rock","Paper","Scissors"]
function computerPlay() {
    return options[Math.floor(Math.random()*options.length)]
}

function playRound (playerSelection, computerSelection) {
   
    if (playerSelection =="Rock" && computerSelection == "Scissors") {
        return ("You Won! Rock beats Scissors")
    } else if (playerSelection =="Rock" && computerSelection == "Paper") {
        return ("You Lose! Paper beats Rock")
    } else if (playerSelection =="Rock" && computerSelection == "Rock") {
        return ("Play again")
    } else if (playerSelection =="Paper" && computerSelection == "Rock") {
        return ("You Won! Paper beats Rock")
    } else if (playerSelection =="Paper" && computerSelection == "Scissors") {
        return ("You Lose! Scissors beats Paper")
    } else if (playerSelection =="Paper" && computerSelection == "Paper") {
        return ("Play again")
    } else if (playerSelection =="Scissors" && computerSelection == "Scissors") {
        return ("Play again")
    } else if (playerSelection =="Scissors" && computerSelection == "Paper") {
        return ( "You Won! Scissors beats Paper")
    } else if (playerSelection =="Scissors" && computerSelection == "Rock") {
        return ("You Lose! Rock beats Scissors")
    } else {
        return ( "Something went terribly wrong, play again!!!")
    }
}


function titleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function game() {
    for (i=0;i<5;i++){
        let playerSelection = titleCase(prompt("Please enter your selection"))
        let computerSelection = computerPlay()
        console.log (playRound (playerSelection, computerSelection))
    } 
}
game()
