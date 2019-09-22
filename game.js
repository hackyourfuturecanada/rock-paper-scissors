const arr = ['rock', 'paper', 'scissors'];

const computerPlay = () => arr[Math.floor(Math.random() * 3)];
let theParent = document.querySelector('#buttons');
const whoIsTheWinner = (result, playerSelection, computerSelection) => {
  if (result === true) {
    return (
      'Player => ' +
      playerSelection +
      '; Computer => ' +
      computerSelection +
      '. You win! ' +
      playerSelection +
      ' beats ' +
      computerSelection
    );
  } else if (result === false) {
    return (
      'Player => ' +
      playerSelection +
      '; Computer => ' +
      computerSelection +
      '. You lose! ' +
      computerSelection +
      ' beats ' +
      playerSelection
    );
  }
  return (
    'Player => ' +
    playerSelection +
    '; Computer => ' +
    computerSelection +
    '. No winner!'
  );
};

//higher index wins except case of 0
// in case of 0<1<2<0
// true => win
// false => fail
const playRound = (player, computer) => {
  let playerSelectionIndex = arr.indexOf(player);
  let computerSelectionIndex = arr.indexOf(computer);

  if (playerSelectionIndex === computerSelectionIndex) {
    return null;
  } else if (playerSelectionIndex > 0 && computerSelectionIndex > 0) {
    if (playerSelectionIndex > computerSelectionIndex) {
      return true;
    }
    return false;
  } else if (playerSelectionIndex + computerSelectionIndex === 2) {
    return computerSelectionIndex > playerSelectionIndex; // 2 fails, 0 wins
  } else if (playerSelectionIndex + computerSelectionIndex === 1) {
    return playerSelectionIndex > computerSelectionIndex; // 0 fails, 1 wins
  }
};

//

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  // let numberOfGames = 5;
  let computerSelection = computerPlay();
  let playerSelection;

  theParent.addEventListener('click', e => {
    let clickedItem;
    if (e.target !== e.currentTarget) {
      clickedItem = e.target.id;
    }
    playerSelection = clickedItem;
    e.stopPropagation;
  });

  // console.log(playerSelection);

  // if (!(playerScore === 5 || computerScore === 5)) {
  let result = playRound(playerSelection, computerSelection);
  if (result === true) {
    playerScore++;
    console.log(whoIsTheWinner(result, playerSelection, computerSelection));
  } else if (result === false) {
    computerScore++;
    console.log(whoIsTheWinner(result, playerSelection, computerSelection));
  } else {
    console.log(whoIsTheWinner(result, playerSelection, computerSelection));

    // numberOfGames--;
  }

  if (playerScore === computerScore) {
    return (
      'No winner: Your score: ' +
      playerScore +
      "; Computer's score: " +
      computerScore
    );
  } else if (playerScore > computerScore) {
    return (
      'You won: Your score: ' +
      playerScore +
      "; Computer's score: " +
      computerScore
    );
  } else {
    return (
      'You are a loser: Your score: ' +
      playerScore +
      "; Computer's score: " +
      computerScore
    );
  }
};

console.log(game());
