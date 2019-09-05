


let choices = ["rock", "paper", "scissors"];

function computerPlay(){
	return choices[Math.floor(Math.random()*3)] ;
}

function playRound(playerSelection,computerSelection){
	
	if( playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors" ){
		return "type a valid value";
	}


		
    compWin=false;

		if (playerSelection===computerSelection){
			return "tie" 
		}
		else if(playerSelection == "rock" && computerSelection=="paper"){
		    	compWin=true;
		} else if(playerSelection == "paper" && computerSelection=="scissors"){
			    compWin=true;
		} else if(playerSelection == "scissors" && computerSelection=="rock"){
			    compWin=true;
		}


			if(compWin)
				return "You loose ! " + computerSelection + " beats " + playerSelection;
			else 
				return "You won!" + playerSelection + "beats" + computerSelection;

}



	function game (){
	for(let i=0; i<5; i++){
	const playerSelection=prompt("Type your choices");
	let result  = (playRound(playerSelection,computerPlay()));
	alert(result);
	}
}
game(); 