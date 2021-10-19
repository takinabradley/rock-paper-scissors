function computerPlay() {
	let computerSelection = ["rock", "paper", "scissors"];
	computerSelection = computerSelection[Math.floor(Math.random()*computerSelection.length)];
	return computerSelection;
}
/*Creates computerSelection, and assigns a random selection of "rock", 
	"paper", or "scissors"*/

function playRound(e) {
  let playerWin;
  
	let computerSelection = computerPlay();
  roundResults.textContent = `Computer Picked: ${computerSelection}`;
  console.log(`Computer picked: ${computerSelection}`);
  
  let playerSelection = e.target.classList.toString();
  
  if (playerSelection === computerSelection) {
    //console.log(`You picked: ${playerSelection}`);
    //console.log(`Computer picked: ${computerSelection}`);
    playerWin;
    //console.log(playerWin);
    return playerWin;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      //console.log(`You picked: ${playerSelection}`);
      //console.log(`Computer picked: ${computerSelection}`);
      playerWin = 1;
      //console.log(playerWin);
      return playerWin;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      //console.log(`You picked: ${playerSelection}`);
      //console.log(`Computer picked: ${computerSelection}`);
      playerWin = 1;
      //console.log(playerWin);
      return playerWin;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      //console.log(`You picked: ${playerSelection}`);
      //console.log(`Computer picked: ${computerSelection}`);
      playerWin = 1;
      //console.log(playerWin);
      return playerWin;
  } else {
      //console.log(`You picked: ${playerSelection}`);
      //console.log(`Computer picked: ${computerSelection}`);
      playerWin = 0;
      //console.log(playerWin);
      return playerWin;
  }
}
/*finds computerSelection, creates a variable for playerSelection and 
	prompts the player for the value. Decides whether the player wins or 
	loses, and assigns 1 (win) or 0 (lose) to playerWin.*/
	
function game(playerWin) {

    if (playerWin === 1) {
      playerWinCount++;
      console.log(`Player Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
      scoreCard.textContent = `Score: ${playerWinCount} : ${computerWinCount}`;
    } else if (playerWin === 0) {
      computerWinCount++;
      console.log(`Computer Wins! Player: ${playerWinCount} Computer: ${computerWinCount}`);
      scoreCard.textContent = `Score: ${playerWinCount} : ${computerWinCount}`;
    } else {
      console.log(`Draw! Player: ${playerWinCount} Computer: ${computerWinCount}`);
      scoreCard.textContent = `Score: ${playerWinCount} : ${computerWinCount}`;
    }
    
    if (roundCounter === 5) {
      if (playerWinCount === computerWinCount) {
        roundCounter = 0;
        playerWinCount = 0;
        computerWinCount = 0;
        gameResults.textContent = "The Game Ends In A Draw!";
        return console.log("The Game Ends In A Draw!");
      } else if (playerWinCount > computerWinCount) {
        roundCounter = 0;
        playerWinCount = 0;
        computerWinCount = 0;
        gameResults.textContent = "Player Wins!";
        return console.log("Player Wins!");
      } else {
        roundCounter = 0;
        playerWinCount = 0;
        computerWinCount = 0;
        gameResults.textContent = "Computer Wins!";
        return console.log("Computer Wins!");
      }
    }
    
}
/*Creates playerWinCount and computerWinCount. Plays a five-round game that 
	keeps score and adds every playerWin = 1 to playerWinCount and 
	playerWin = 0 to computerWinCount from playRound() on each round. Then
	reports a winner or loser at the end of the game.*/

let playerWinCount = 0;
let computerWinCount = 0;
let playerWin;
let roundCounter = 0;
const output = document.querySelector('.output');

let scoreCard = document.createElement('p');
output.appendChild(scoreCard);

let roundResults = document.createElement('p');
output.appendChild(roundResults);

let gameResults = document.createElement('p');
output.appendChild(gameResults);

const buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
  button.addEventListener('click', (e) => {
    roundCounter += 1;
    if (gameResults.textContent !== '') gameResults.textContent = '';
    playerWin = game(playRound(e));
    
    
    //scoreCard.textContent = `Score: ${playerWinCount} : ${computerWinCount}`;

    //console.log(roundCounter);
  });
});