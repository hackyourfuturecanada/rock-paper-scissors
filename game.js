let options=['rock', 'scissor', 'paper'];

function results (user,computer) {
	let x = user;
	let y = computer;
	user=user.toLowerCase();
	computer=computer.toLowerCase();
let winner="";

	if(user=='rock' && computer=='paper')
		winner="computer";
	else if((user=='paper') && (computer=='rock'))
	winner="user";
	else if(user==y)
	winner="Tie";
	else if (user=='rock' && computer=='scissor')
	winner="user";
	else if (user=='scissor' && computer=='ock')
	winner="computer";
	else if (user=='paper' && computer=='scissor')
	winner="computer";
	else if (user=='scissor' && computer=='paper')
	winner="user";
	return winner;
	}


// computer's choice
function computerSelection(){
let random = Math.floor(Math.random()*3);
	return options[random];

}

document.getElementById("rock").addEventListener("click", function(){
  let user1= "rock"; 
  results(user1, computerSelection());
  let storeResult = results(user1, computerSelection());
  document.getElementById("result").innerHTML = storeResult;
});



document.getElementById("paper").addEventListener("click", function(){
let user2= "paper";
 results(user2, computerSelection());
 let storeResult = results(user2, computerSelection());
document.getElementById("result").innerHTML = storeResult;
});


document.getElementById("scissor").addEventListener("click", function(){
  let user3= "scissor";
  results(user3, computerSelection());
  let storeResult = results(user3, computerSelection());
  document.getElementById("result").innerHTML = storeResult;
});

/*function game() {
	for(let i=0; i<5;i++){
	

		let user = prompt("Enter a value");
		let win = results(user,computerSelection());
		console.log(win);
	}
};*/

