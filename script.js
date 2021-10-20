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
<<<<<<< HEAD
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
=======
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
>>>>>>> new-logic
      playerWin = 1;
      //console.log(playerWin);
      return playerWin;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
<<<<<<< HEAD
      //console.log(`You picked: ${playerSelection}`);
      //console.log(`Computer picked: ${computerSelection}`);
=======
      console.log(`Player Wins! Computer picked: ${computerSelection}`);
      document.querySelector('.roundOutput').textContent = `Player Wins! Computer picked: ${computerSelection}`;
>>>>>>> new-logic
      playerWin = 1;
      //console.log(playerWin);
      return playerWin;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
<<<<<<< HEAD
      //console.log(`You picked: ${playerSelection}`);
      //console.log(`Computer picked: ${computerSelection}`);
=======
      console.log(`Player Wins! Computer picked: ${computerSelection}`);
      document.querySelector('.roundOutput').textContent = `Player Wins! Computer picked: ${computerSelection}`;
>>>>>>> new-logic
      playerWin = 1;
      //console.log(playerWin);
      return playerWin;
  } else {
<<<<<<< HEAD
      //console.log(`You picked: ${playerSelection}`);
      //console.log(`Computer picked: ${computerSelection}`);
=======
      console.log(`Computer Wins! Computer picked: ${computerSelection}`);
      document.querySelector('.roundOutput').textContent = `Player Wins! Computer picked: ${computerSelection}`;
>>>>>>> new-logic
      playerWin = 0;
      //console.log(playerWin);
      return playerWin;
  }
}
/*finds computerSelection, creates a variable for playerSelection and 
<<<<<<< HEAD
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
    
=======
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
>>>>>>> new-logic
}
/*Passes the class of the button pressed to playRound() on every click. so it can determine the playerSelection.
  It then saves the value of playerWin from playRound so the game() function can use it.*/

/*Creates playerWinCount and computerWinCount. Plays a five-round game that 
<<<<<<< HEAD
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

function playerPlay () {
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
}

playerPlay();
=======
  keeps score and adds every playerWin = 1 to playerWinCount and 
  playerWin = 0 to computerWinCount from playRound() on each round. Then
  reports a winner or loser at the end of the game.*/
  
game();
>>>>>>> new-logic
