function computerPlay() {
	let computerSelection = ["rock", "paper", "scissors"];
	computerSelection = computerSelection[Math.floor(Math.random()*computerSelection.length)];
	return computerSelection;
}
/*Creates computerSelection, and assigns a random selection of "rock", 
	"paper", or "scissors"*/

function playRound() {
	let computerSelection = computerPlay();
  let playerWin;
	let playerSelection = prompt("Rock, paper, or scissors?", '');
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    console.log(`Computer picked: ${computerSelection}`);
    return playerWin;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log(`Computer picked: ${computerSelection}`);
      playerWin = 1;
      return playerWin;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log(`Computer picked: ${computerSelection}`);
      playerWin = 1;
      return playerWin;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log(`Computer picked: ${computerSelection}`);
      playerWin = 1;
      return playerWin;
  } else {
      console.log(`Computer picked: ${computerSelection}`);
      playerWin = 0;
      return playerWin;
  }
}
/*finds computerSelection, creates a variable for playerSelection and 
	prompts the player for the value. Decides whether the player wins or 
	loses, and assigns 1 (win) or 0 (lose) to playerWin.*/
	
function game() {
  let playerWinCount = 0;
  let computerWinCount = 0;
	
	let playerWin = playRound();
  if (playerWin === 1) {
    playerWinCount++;
    console.log(`Player Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else if (playerWin === 0) {
    computerWinCount++;
    console.log(`Computer Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else {
    console.log(`Draw! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  }
  
  playerWin = playRound();
  if (playerWin === 1) {
    playerWinCount++;
    console.log(`Player Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else if (playerWin === 0) {
    computerWinCount++;
    console.log(`Computer Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else {
    console.log(`Draw! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  }

  playerWin = playRound();
  if (playerWin === 1) {
    playerWinCount++;
    console.log(`Player Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else if (playerWin === 0) {
    computerWinCount++;
    console.log(`Computer Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else {
    console.log(`Draw! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  }

  playerWin = playRound();
  if (playerWin === 1) {
    playerWinCount++;
    console.log(`Player Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else if (playerWin === 0) {
    computerWinCount++;
    console.log(`Computer Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else {
    console.log(`Draw! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  }

  playerWin = playRound();
  if (playerWin === 1) {
    playerWinCount++;
    console.log(`Player Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else if (playerWin === 0) {
    computerWinCount++;
    console.log(`Computer Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
  } else {
    console.log(`Draw! Player: ${playerWinCount} Computer: ${computerWinCount}`);
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
game();