//LISTENER ,, to make action when a button clicked
document.getElementById('rock').addEventListener('click', function(e){
    let round = playRound('rock', computerPlay());
});
document.getElementById('paper').addEventListener('click', function(e){
    let round = playRound('paper', computerPlay());
});
document.getElementById('scissors').addEventListener('click', function(e){
    let round = playRound('scissors', computerPlay());
});

//p = player score, c = computer score ,, just to count till 5 and one of them win
let p = 0 , c= 0;
const choices = ['rock', 'paper', 'scissors'];

//add images as the choices of player and computer
function arenaImages(player, computer){
    //show images
    document.getElementById('player-choice').innerHTML = `<img src="images/${player}.png">`;
    document.getElementById('computer-choice').innerHTML = `<img src="images/${computer}.png">`;
}

//get random choice for computer play
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

//start a game and get winner and loser :)
function playRound(player, computer) {
    arenaImages(player, computer)
    //select the score element to change it after this round
    let playerScore = document.querySelector('#player span');
    let computerScore = document.querySelector('#computer span');


    // let player = userPlay();
    // let computer = computerPlay();
    let result = "";

    //check if both player and computer have the same choice
    if(player === computer){
        document.getElementById('result').innerHTML = "Deaw.. 😑 😶 !! Play again";

        //create element to add it to the rounds element
        let roundResult = document.createElement('li');
        roundResult.innerHTML = "Deaw.. 😑 😶 !!";
        document.getElementById('rounds-list').appendChild(roundResult);

        //the retern was for the old version
        return "Deaw.. 😑 😶 !! Play again";
    }

    //defined the content for round result
    let computerWin = "COMPUTER WIN 😡 🤬 <br>";
    let playerWin = "YOU WIN 🤪 💪 <br>";

    //check who win ?
    if(player === "rock"){
        result = (computer === "scissors")? playerWin:computerWin;
    }else if(player === "scissors"){
        result = (computer === "rock")? computerWin:playerWin;
    }else if(player === "paper"){
        result = (computer === "rock")? playerWin:computerWin;
    }

    let winer = (result === computerWin)? computer:player;
    let loser = (result === computerWin)? player:computer;
    (result === playerWin) ? p++:c++;

    //increase the score for winner
    playerScore.textContent = p;
    computerScore.textContent = c;
    if(p === 5 || c === 5){
        //finish the game if computer or player hits score 5
        finishTheGame();
    }

    result = `${result} \n ${winer} beats ${loser}`;
    let roundResult = document.createElement('li');
    roundResult.innerHTML = result;
    document.getElementById('rounds-list').appendChild(roundResult);
    document.getElementById('result').innerHTML = result;
    return result;
}

//delete the buttons and show a link (play again) to restart the game
function finishTheGame() {
    console.log(c);
    console.log(p);
    let text = "LOSER";
    if(p > c){
        text = "winner winner chicken dinner";
    }
    document.querySelector('.buttons').innerHTML = `<h1>${text}</h1><p><a href="">play again</a></p>`;
}




//THIS WORKS WITH THE OLD VERSION ..
/*
function game(rounds = 5){
    let report = {
        rounds:[],
        score:[]
    };

    report.score['player'] = 0;
    report.score['computer'] = 0;

    let i = 0;
    while(i < rounds){
        let round = playRound(userPlay(), computerPlay());
        console.log(round);
        //add this round to the report
        report.rounds.push(round);

        if(round !== "Deaw..!! Play again"){
            if(round.includes("YOU WIN")){
                report.score['player'] = report.score['player'] + 1;
            }else{
                report.score['computer'] = report.score['computer'] + 1;
            }
            i++;
        }
    }
    report.finalResult = (report.score['computer'] > report.score['player'])? `Computer win ${report.score['computer']} of ${rounds}`:`You win ${report.score['player']} of ${rounds}`;
    return report;
    //this will return an pbject ,, includes the result of each game, and the score for both player and computer, and final result (who win)
}


function userPlay(playAgain){
    let msg = (playAgain) ? "Invalid input ...\n please chose one of : rock, paper or scissors":"Lets Play ...\n chose one of : rock, paper or scissors";
    let player = prompt(msg);
    //check if player submited a good value, if yes return player input or prompt again
    return (!choices.includes(player.toLowerCase())) ? userPlay(1): player.toLowerCase();
}

 //console.log(game());
*/
