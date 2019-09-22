const choices = ["ROCK", "SCISSOR", "PAPER"];

function computerPlay() {
	return choices[Math.floor(Math.random() * choices.length)];
}


let counter = {
	computer: 0,
	user: 0,
	tie: 0
};
let btns = document.getElementsByClassName('btns-container')[0];
btns.addEventListener('click', function (e) {
	if (e.target.tagName = 'BUTTON') {
		let playerSelection = e.target.innerHTML;
		let computerSelection = computerPlay();
		let result = playRound(playerSelection, computerSelection);
		winCounter(result, playerSelection, computerSelection);

	}

});


let p = document.getElementById('result');

// track result
function winCounter(result, playerSelection, computerSelection) {
	if (result == 'computer') {
		counter.computer++;
		p.innerHTML = ` You Lose  ${computerSelection} Beats ${playerSelection}`;
	} else if (result == 'user') {
		counter.user++;
		p.innerHTML = ` You  Win ${playerSelection} Beats ${computerSelection}`;
	} else if (result == 'tie') {
		p.innerHTML = ` Tie ! ${playerSelection}  VS ${computerSelection}`;
		counter.tie++;
	}
	console.log("result is " + counter)
	score.innerHTML = "Compter: " + counter.computer;
	score.innerHTML += " | You:" + counter.user;
	score.innerHTML += " Tie:" + counter.tie;
	finalWinner(counter);
}



let score = document.getElementById("score");
// declare the winner who win in five rounds 	
function finalWinner(counter) {
	resetCounter = false;
	if (counter.computer >= 5) {
		console.log('done computer win')
		resetCounter = true;
		p.innerHTML = "Congratulation You Won five rounds"
	} else if (counter.user >= 5) {
		console.log('done user win ')
		resetCounter = true;
		p.innerHTML = "Unfortunately lose in five rounds"
	}

	//reset the counter 
	if (resetCounter) {
		for (let prop in counter)
			counter[prop] = 0;

	}
}





function playRound(playerSelection, computerSelection) {
	//playerSelection = playerSelection.toUpperCase();

	//if( (playerSelection !== "ROCK") && (playerSelection !== "PAPER") && (playerSelection !== "SCISSOR") ){
	//	return "INVALID INPUT";
	//}

	computerWin = false;
	if (playerSelection === computerSelection) {
		return "tie"
	} else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
		computerWin = true;
	} else if (playerSelection == "PAPER" && computerSelection == "SCISSOR") {
		computerWin = true;
	} else if (playerSelection == "SCISSOR" && computerSelection == "ROCK") {
		computerWin = true;
	}

	if (computerWin)
		return 'computer';
	else
		return 'user';

}


//game();