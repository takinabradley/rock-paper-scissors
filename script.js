function createOutputElements () {
  output = document.querySelector('.output');
  
  roundOutput = document.createElement('p');
  roundOutput.classList.add('roundOutput');
  output.appendChild(roundOutput);
  
  gameOutput = document.createElement('p')
  gameOutput.classList.add('gameOutput');
  output.appendChild(gameOutput);
  
  winnerOutput = document.createElement('p')
  winnerOutput.classList.add('winnerOutput');
  output.appendChild(winnerOutput);
}
//Creates DOM elements to push game results to user later.

function computerPlay() {
  let computerSelection = ["rock", "paper", "scissors"];
  computerSelection = computerSelection[Math.floor(Math.random()*computerSelection.length)];
  return computerSelection;
}
//Randomly Selects between rock-paper-scissors and returns the selection for playRound()


function playRound(e) {
  const computerSelection = computerPlay();
  const playerSelection = e.target.classList.toString();
  
  if (playerSelection === computerSelection) {
    console.log(`Draw! Computer picked: ${computerSelection}`);
    document.querySelector('.roundOutput').textContent = `Draw! Computer picked: ${computerSelection}`;
    return "draw";
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "paper" && computerSelection === "rock" ||
             playerSelection === "scissors" && computerSelection === "paper") {
      console.log(`Player Wins! Computer picked: ${computerSelection}`);
      document.querySelector('.roundOutput').textContent = `Player Wins! Computer picked: ${computerSelection}`;
      return "player";
  } else {
      console.log(`Computer Wins! Computer picked: ${computerSelection}`);
      document.querySelector('.roundOutput').textContent = `Computer Wins! Computer picked: ${computerSelection}`;
      return "computer";
  }
}
/*Finds player and user selections, then plays a single round.
  Returns the winner of the round, or "draw" for use by the game() function.*/
  

function game () {
  createOutputElements();
  let round = 0; 
  let playerWinCount = 0;
  let computerWinCount = 0;
  // REMEMBER THIS: This entire function isn't rerun on every click, and that's pretty useful.
  
  const buttons = document.querySelectorAll('button');
  buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
      round++;
      if (document.querySelector('.winnerOutput').textContent !== '') document.querySelector('.winnerOutput').textContent = '';
      
      let roundWinner = playRound(e);
      
      if (roundWinner === "player") {
        playerWinCount++;
        console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
        document.querySelector('.gameOutput').textContent = `Player: ${playerWinCount} Computer: ${computerWinCount}`;
      } else if (roundWinner === "computer") {
        computerWinCount++;
        console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
        document.querySelector('.gameOutput').textContent = `Player: ${playerWinCount} Computer: ${computerWinCount}`;
      } else {
        console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
        document.querySelector('.gameOutput').textContent = `Player: ${playerWinCount} Computer: ${computerWinCount}`;
      }
      
      if (round === 5) {
        round = 0;
        playerWinCount = 0;
        computerWinCount = 0;
        
        if (playerWinCount === computerWinCount) {
          document.querySelector('.winnerOutput').textContent = `The Game Ends In A Draw!`;
          return console.log("The Game Ends In A Draw!");
        } else if (playerWinCount > computerWinCount) {
          document.querySelector('.winnerOutput').textContent = `Player Wins!`;
          return console.log("Player Wins!");
        } else {
          document.querySelector('.winnerOutput').textContent = `Computer Wins!`;
          return console.log("Computer Wins!");
        }
      }
      
    });
  });
}
/*Passes the class of the button presses to playRound() on every click. Keeps
  track of the current round, and determines who wins a five-round game.*/
  
game();
