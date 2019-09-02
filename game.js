// Write all your code here
// Replace the contents of this file with your own code
const choices = ["ROCK","SCISSOR","PAPER"];
function computerPlay(){
	return choices[Math.floor(Math.random()*choices.length)] ;
}

function playRound(playerSelection,computerSelection){
	playerSelection = playerSelection.toUpperCase();
	if( (playerSelection !== "ROCK") && (playerSelection !== "PAPER") && (playerSelection !== "SCISSOR") ){
		return "INVALID INPUT";
	}
		computerWin=false;
		if (playerSelection===computerSelection){
			return "Tie !" 
		}
		else if(playerSelection == "ROCK" && computerSelection=="PAPER"){
			computerWin=true;
		} else if(playerSelection == "PAPER" && computerSelection=="SCISSOR"){
			computerWin=true;
		} else if(playerSelection == "SCISSOR" && computerSelection=="ROCK"){
			computerWin=true;
		}

			if(computerWin)
				return `Computer win ! because ${computerSelection} beats ${playerSelection}`;
			else 
				return `You Win because ${playerSelection} beats ${computerSelection}`;

}

	function game (){
	for(let i=0; i<5; i++){
	playerSelection=prompt("Enter your choice");
	let result  = (playRound(playerSelection,computerPlay()));
	alert(result);
	}
}
game();