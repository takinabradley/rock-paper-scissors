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

function computerPlay() {
  let computerSelection = ["rock", "paper", "scissors"];
  computerSelection = computerSelection[Math.floor(Math.random()*computerSelection.length)];
  return computerSelection;
}
/*Creates computerSelection, and assigns a random selection of "rock", 
  "paper", or "scissors"*/


function playRound(e) {
  const computerSelection = computerPlay();
  const playerSelection = e.target.classList.toString();
  let playerWin;
  
  if (playerSelection === computerSelection) {
    console.log(`Draw! Computer picked: ${computerSelection}`);
    document.querySelector('.roundOutput').textContent = `Draw! Computer picked: ${computerSelection}`;
    return playerWin;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log(`Player Wins! Computer picked: ${computerSelection}`);
      document.querySelector('.roundOutput').textContent = `Player Wins! Computer picked: ${computerSelection}`;
      playerWin = 1;
      return playerWin;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log(`Player Wins! Computer picked: ${computerSelection}`);
      document.querySelector('.roundOutput').textContent = `Player Wins! Computer picked: ${computerSelection}`;
      playerWin = 1;
      return playerWin;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log(`Player Wins! Computer picked: ${computerSelection}`);
      document.querySelector('.roundOutput').textContent = `Player Wins! Computer picked: ${computerSelection}`;
      playerWin = 1;
      return playerWin;
  } else {
      console.log(`Computer Wins! Computer picked: ${computerSelection}`);
      document.querySelector('.roundOutput').textContent = `Player Wins! Computer picked: ${computerSelection}`;
      playerWin = 0;
      return playerWin;
  }
}
/*finds computerSelection, creates a variable for playerSelection and 
  prompts the player for the value. Decides whether the player wins or 
  loses, and assigns 1 (win) or 0 (lose) to playerWin.*/
  

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
      
      let playerWin = playRound(e);
      
      if (playerWin === 1) {
        playerWinCount++;
        console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
        document.querySelector('.gameOutput').textContent = `Player: ${playerWinCount} Computer: ${computerWinCount}`;
      } else if (playerWin === 0) {
        computerWinCount++;
        console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
        document.querySelector('.gameOutput').textContent = `Player: ${playerWinCount} Computer: ${computerWinCount}`;
      } else {
        console.log(`Player: ${playerWinCount} Computer: ${computerWinCount}`);
        document.querySelector('.gameOutput').textContent = `Player: ${playerWinCount} Computer: ${computerWinCount}`;
      }
      
      while (round % 5 === 0) {
        if (playerWinCount === computerWinCount) {
          round = 0;
          playerWinCount = 0;
          computerWinCount = 0;
          document.querySelector('.winnerOutput').textContent = `The Game Ends In A Draw!`;
          return console.log("The Game Ends In A Draw!");
        } else if (playerWinCount > computerWinCount) {
          round = 0;
          playerWinCount = 0;
          computerWinCount = 0;
          document.querySelector('.winnerOutput').textContent = `Player Wins!`;
          return console.log("Player Wins!");
        } else {
          round = 0;
          playerWinCount = 0;
          computerWinCount = 0;
          document.querySelector('.winnerOutput').textContent = `Computer Wins!`;
          return console.log("Computer Wins!");
        }
      }
      //can probably reset round to 0 here, it seems like a nicer way to do it.
      //Next step is creating and pushing DOM outputs to the browser.
    });
  });
}
/*Passes the class of the button pressed to playRound() on every click. so it can determine the playerSelection.
  It then saves the value of playerWin from playRound so the game() function can use it.*/

/*Creates playerWinCount and computerWinCount. Plays a five-round game that 
  keeps score and adds every playerWin = 1 to playerWinCount and 
  playerWin = 0 to computerWinCount from playRound() on each round. Then
  reports a winner or loser at the end of the game.*/
  
game();
