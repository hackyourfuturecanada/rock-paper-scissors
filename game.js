







let choices = ["rock", "paper", "scissors"];

function computerPlay(){
	return choices[Math.floor(Math.random()*3)] ;

}



let userScore=0;
const userScoreSpan=document.querySelector("#user-score-s");
const computerScoreSpan=document.querySelector("#comp-score-s");
const result =document.querySelector('#result')

function winner(playerSelection, computerSelection) {
	userScore ++;
	userScoreSpan.textContent=userScore;
	result.textContent= "You win! " + playerSelection +" beats " +computerSelection+"." ;
	
}

let computerScore=0;
function looser(playerSelection, computerSelection) {

	computerScore ++;
	computerScoreSpan.textContent=computerScore;
	result.setAttribute('font-size', '25px');
	result.textContent= "You Lose! " + playerSelection +" beats " +computerSelection+"." ;
}


function tie(playerSelection, computerSelection) {
	
	result.textContent= "Tie";
}






function playRound(playerSelection){
	const computerSelection = computerPlay();
	switch (playerSelection+computerSelection){
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			winner(playerSelection, computerSelection);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			looser(playerSelection, computerSelection);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			tie(playerSelection, computerSelection);
			break;}
	}


	const rock = document.querySelector('#rock');
	const paper = document.querySelector('#paper');
	const scissors = document.querySelector('#scissors');


function game (){

			rock.addEventListener('click',  function(){
				playRound('rock')
			})


			paper.addEventListener('click',  function(){
				playRound('paper')
			})


			scissors.addEventListener('click',  function(){
				playRound('scissors')
			})

}



function fiveRound(){
	for (i=0; i<5; i++){
		let x =game(i);
		return x
	}
}

fiveRound();




