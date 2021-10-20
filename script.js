function computerPlay() {
	let computerSelection = ["rock", "paper", "scissors"];
	computerSelection = computerSelection[Math.floor(Math.random()*computerSelection.length)];
	return computerSelection;
}
/*Creates computerSelection, and assigns a random selection of "rock", 
	"paper", or "scissors"*/
  
function playerPlay () {
  const buttons = document.querySelectorAll('button');
  buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
      let playerWin = playRound(e);
      game(playerWin);
    });
  });
}
/*Passes the class of the button pressed to playRound(), so it can determine the playerSelection.
  It then saves the value of playerWin from playRound so the game() function can use it.*/

function playRound(e) {
	let computerSelection = computerPlay();
	let playerSelection = e.target.classList.toString();
  let playerWin;
  
  if (playerSelection === computerSelection) {
    console.log(`Draw!`);
    console.log(`Computer picked: ${computerSelection}`);
    return playerWin = null;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log(`Player Wins!`);
      console.log(`Computer picked: ${computerSelection}`);
      playerWin = 1;
      return playerWin;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log(`Player Wins!`);
      console.log(`Computer picked: ${computerSelection}`);
      playerWin = 1;
      return playerWin;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log(`Player Wins!`);
      console.log(`Computer picked: ${computerSelection}`);
      playerWin = 1;
      return playerWin;
  } else {
      console.log(`Computer Wins!`);
      console.log(`Computer picked: ${computerSelection}`);
      playerWin = 0;
      return playerWin = null;
  }
}
/*finds computerSelection, creates a variable for playerSelection and 
	prompts the player for the value. Decides whether the player wins or 
	loses, and assigns 1 (win) or 0 (lose) to playerWin.*/
	

function game(playerWin) {
  let playerWinCount = 0;
  let computerWinCount = 0;
  
  if (playerWin === 1) {
    playerWinCount++;
    console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else if (playerWin === 0) {
    computerWinCount++;
    console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else {
    console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
  }
  
  
  if (playerWinCount === computerWinCount) {
    return console.log("The Game Ends In A Draw!");
  } else if (playerWinCount > computerWinCount) {
    return console.log("Player Wins!");
  } else {
    return console.log("Computer Wins!");
  }
}
/*Creates playerWinCount and computerWinCount. Plays a five-round game that 
	keeps score and adds every playerWin = 1 to playerWinCount and 
	playerWin = 0 to computerWinCount from playRound() on each round. Then
	reports a winner or loser at the end of the game.*/

playerPlay();