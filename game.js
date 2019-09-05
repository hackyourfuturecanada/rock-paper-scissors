// Write all your code here
// Replace the contents of this file with your own code
// console.log('Hello, world!');

function computerPlay(){
    const selections = ['rock', 'paper', 'scissors'];
    return selections[Math.floor(Math.random()*selections.length)];

}

function playRound(player, computer){

    if(player === computer){
        return `Your selection & Computer Selection are same : ${computer} \nIt's a tie!`;
    } else if(player === "ROCK"){
        return `${computer === "SCISSORS" ?
        `You WIN! \nYour Selection:${player} beats Computer Selection:${computer}` :
        `You Lose! \nComputer Selection:${computer} beats Your Selection:${player}`}`;
    } else if(player === "PAPER"){
        return `${computer === "ROCK" ?
        `You WIN! \nYour Selection:${player} beats Computer Selection:${computer}` :
        `You Lose! \nComputer Selection:${computer} beats Your Selection:${player}`}`;
    } else {
        return `${computer === "PAPER" ?
        `You WIN! \nYour Selection:${player} beats Computer Selection:${computer}` :
        `You Lose! \nComputer Selection:${computer} beats Your Selection:${player}`}`;
    } 
}

function game(){
    let playerWin = 0;
    let computerWin = 0;
    let gameRound = 1;
    while(gameRound <= 5){
        const playerSelection = prompt("Please write your choise").toUpperCase();
        const computerSelection = computerPlay().toUpperCase();
        if(playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS"){
            let result = playRound(playerSelection,computerSelection);
            if(result.includes("WIN")){
                playerWin++;
                gameRound++;
            } else if(result.includes("Lose")) {
                computerWin++;
                gameRound++;
            } else {
                gameRound++;
            }
            console.log(`${result}\nPlayer Win:${playerWin}\nComputer Win:${computerWin}`);
        } else{
            console.log("Come on!!! Please Write only rock or paper or scissors");
        }
    }
    if(playerWin > computerWin){
        console.log("-------------------\nYou WIN! Congratulations\n-------------------");
    } else if(playerWin < computerWin){
        console.log("-------------------\nI am so sorry! Computer WIN!\n-------------------");
    } else {
        console.log("-------------------\nNo one WIN!\n-------------------");
    }
}

game();

