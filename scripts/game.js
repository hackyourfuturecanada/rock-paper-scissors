// Write all your code here
// Replace the contents of this file with your own code
// console.log('Hello, world!');

// defined first varibles
const selections = ['ROCK', 'PAPER', 'SCISSORS'];
let playerWin = 0;
let computerWin = 0;
let gameCount = 0;
const yourSelection = "";

// Select Score areas
const yourScoreArea = document.querySelector(".your-span");
const computerScoreArea = document.querySelector(".computer-span");

// select Rock, Paper and Scissors icons
const rockIcon = document.querySelector(".fa-hand-rock");
const paperIcon = document.querySelector(".fa-hand-paper");
const scissorsIcon = document.querySelector(".fa-hand-scissors");

// Play game for user. calling game function after click buttons
rockIcon.addEventListener("click", function(){
    this.yourSelection = "ROCK";
    game(this.yourSelection);
});
paperIcon.addEventListener("click", function(){
    this.yourSelection = "PAPER";
    game(this.yourSelection);
});
scissorsIcon.addEventListener("click", function(){
    this.yourSelection = "SCISSORS";
    game(this.yourSelection);
});

//restart game when click restart button 
const restratButton = document.querySelector(".restart-button");
restratButton.addEventListener("click", function(){
    playerWin = 0;
    computerWin = 0;
    gameCount = 0;
    yourScoreArea.innerHTML = 0;
    computerScoreArea.innerHTML = 0;
    restratButton.setAttribute("style","display:none;");
    document.querySelector(".result").innerHTML = "Started new game. Result shows here";
    rockIcon.setAttribute("style","display:inline;");
    paperIcon.setAttribute("style","display:inline;");
    scissorsIcon.setAttribute("style","display:inline;");
    game("newGame");
});

// computer play random selection
function computerPlay(){
    const selections = ['rock', 'paper', 'scissors'];
    return selections[Math.floor(Math.random()*selections.length)];

}
// every round playing here ande return result
function playRound(player, computer){
    gameCount++;
    const winContent = `
    <p style="margin-top:15px;color:#6638f0;">Your Selection --> ${player}</p> beats 
    <p style="color:#72BDA3;">Computer Selection --> ${computer}</p>
    <p style="font-size:1.2em;color:white;background-color:green;padding:20px;margin-top:10px;">You WIN!</p>`;
    const lostContent = `
    <p style="margin-top:15px;color:#72BDA3;">Computer Selection --> ${computer}</p> beats 
    <p style="color:#6638f0;">Your Selection --> ${player}</p>
    <p style="font-size:1.2em;color:white;background-color:red;padding:20px;margin-top:10px;">You Lose!</p>`;
    const tieContent = `
    <p style="margin-top:15px;">Your selection & Computer Selection are same --> ${computer}</p>
    <p style="font-size:1.2em;color:white;background-color:gray;padding:20px;margin-top:10px;">It's a tie!</p>`;
    if(player === computer){
        return `${tieContent}`;
    } else if(player === "ROCK"){
        return `${computer === "SCISSORS" ?
        `${winContent}` :
        `${lostContent}`}`;
    } else if(player === "PAPER"){
        return `${computer === "ROCK" ?
        `${winContent}` :
        `${lostContent}`}`;
    } else {
        return `${computer === "PAPER" ?
        `${winContent}` :
        `${lostContent}`}`;
    } 
}

// first time play game here after call playRound function 
function game(playerSelection){
 
    if(playerSelection !== "newGame" && gameCount < 5){
    const computerSelection = computerPlay().toUpperCase();
    let result = playRound(playerSelection,computerSelection);
    document.querySelector(".result").innerHTML = result;
    if(result.includes("WIN")){
        playerWin++;
        yourScoreArea.innerHTML = playerWin;
    } else if(result.includes("Lose")) {
        computerWin++;
        computerScoreArea.innerHTML = computerWin;
    } else {
    }
    document.querySelector(".result").innerHTML = `${result}`;
    } else if(playerSelection !== "newGame") {
        result();
    }
} 
// shows result of the full game. who win, who lost or tie.
function result(){
    const winResultContent = `<p style="font-size:1.2em;color:white;background-color:green;padding:20px;margin-top:-60px;">You WIN!</p> Congratulations`;
    const lostResultContent = `<p style="font-size:1.2em;color:white;background-color:red;padding:20px;margin-top:-60px;">Computer WIN!</p> I am so sorry!`;
    const tieResultContent = `<p style="font-size:1.2em;color:white;background-color:gray;padding:20px;margin-top:-60px;">TIE!</p>No one WIN!`;
    if(playerWin > computerWin){
        document.querySelector(".result").innerHTML = `${winResultContent}`;
    } else if(playerWin < computerWin){
        document.querySelector(".result").innerHTML = `${lostResultContent}`;
    } else {
        document.querySelector(".result").innerHTML = `${tieResultContent}`;
    }
    // change display attribute inline for show restart button
    restratButton.setAttribute("style","display:inline");
    // hide rock paper and scissors buttons
    rockIcon.setAttribute("style","display:none;");
    paperIcon.setAttribute("style","display:none;");
    scissorsIcon.setAttribute("style","display:none;");

}