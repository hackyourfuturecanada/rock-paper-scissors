

let choices = ["rock", "paper", "scissors"];


function computerPlay(){
    return choices[Math.floor(Math.random()*3)] ;
}


document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;



function user(){
    var userChoice = this.id;

    document.getElementById('user').innerHTML= "User: " + userChoice
    

    var computerChoice = Math.random();
         if (computerChoice < 0.34) {
             computerChoice = "rock";
          }else if(computerChoice <= 0.67) {
             computerChoice = "paper";
          }else{
             computerChoice = "scissors";
          }; 



          document.getElementById('computer').innerHTML= "Computer: " + computerChoice
    

          document.getElementById('result').innerHTML=compare(userChoice, computerChoice); 

    function compare(choice1, choice2) {
    
		    if (choice1 === choice2) {
            return "The result is a tie!";
        }
 
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "rock wins";
            }else{
                return "paper wins";
            }
				}
 
         if (choice1 === "paper") {
             if (choice2 === "rock") {
                 return "paper wins";
              } else {
                  return "scissors wins";
              }
		     }
		
		     if (choice1 === "scissors") {
             if (choice2 === "rock") {
                 return "rock wins";
             } else {
                 return "scissors wins";
            }
        }
    }
}