function getComputerChoice() {
  let computerChoice = (Math.floor(Math.random() * 3 + 1));
  return computerChoice;
}

let playerChoice = prompt("Enter your choice: 1 for Rock, 2 for Paper, 3 Scissors")
let playerWinCounter = 0;
let computerWinCounter = 0;
let drawCounter = 0;
let i = 1;
let roundCount = 5;

function playGame() {
  while (i <= roundCount) {
    console.log("ROUND", i)
    playRound(playerChoice, getComputerChoice())
    console.log("*******************")
    i++;
  }
}

function playRound(playerChoice, computerChoice) {
  if (computerChoice == playerChoice) {
    console.log("Draw!");
    drawCounter++;
  }
  else if ((computerChoice == 3 && playerChoice == 2) || (computerChoice == 2 && playerChoice == 1) || (computerChoice == 1 && playerChoice == 3)) {
    console.log("Computer Wins! Rock beat Scissors");
    computerWinCounter++;
  } else {
    console.log("Player Wins! Rock beat Scissors");
    playerWinCounter++;
  }
}

playGame(roundCount)

console.log("***** RESULTS *****")
console.log("Player win counter:", playerWinCounter)
console.log("Computer win counter:", computerWinCounter)
console.log("Draw counter:", drawCounter)

