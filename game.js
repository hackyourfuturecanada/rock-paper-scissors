const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function userPlay(playAgain){
    let msg = (playAgain) ? "Invalid input ...\n please chose one of : rock, paper or scissors":"Lets Play ...\n chose one of : rock, paper or scissors";
    let player = prompt(msg);
    //check if player submited a good value, if yes return player input or prompt again
    return (!choices.includes(player.toLowerCase())) ? userPlay(1): player.toLowerCase();
}

function playRound() {
    let player = userPlay();
    let computer = computerPlay();
    let result = "";

    if(player === computer){
        return "Deaw..!! Play again";
    }


    let computerWin = "COMPUTER WIN :|";
    let playerWin = "YOU WIN :)";

    if(player === "rock"){
        result = (computer === "scissors")? playerWin:computerWin;
    }else if(player === "scissors"){
        result = (computer === "rock")? computerWin:playerWin;
    }else if(player === "paper"){
        result = (computer === "rock")? playerWin:computerWin;
    }

    let winer = (result === computer)? computer:player;
    let loser = (result === computer)? player:computer;

    result = `${result} \n ${winer} beats ${loser}`;
    return result;
}

function game(rounds = 5){
    let report = {
        rounds:[],
        score:[]
    };

    report.score['player'] = 0;
    report.score['computer'] = 0;

    let i = 0;
    while(i < rounds){
        let round = playRound();
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


console.log(game());
