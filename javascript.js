let playerChoice;
let computerChoice;
let thisRoundResult;
let playerWinCounter = 0;
let computerWinCounter = 0;
let drawCounter = 0;

function playRound() {
  computerChoice = (Math.floor(Math.random() * 3 + 1));
  if (computerChoice == playerChoice) {
    thisRoundResult = "Draw!"
    drawCounter++;
  }
  else if ((playerChoice == 2 && computerChoice == 3) || (playerChoice == 1 && computerChoice == 2) || (playerChoice == 3 && computerChoice == 1)) {
    thisRoundResult = "Computer Wins! Rock beat Scissors"
    computerWinCounter++;
  } else {
    thisRoundResult = "Player Wins! Rock beat Scissors"
    playerWinCounter++;
  }
  document.getElementById("playerWinCounter").innerHTML = playerWinCounter;
  document.getElementById("computerWinCounter").innerHTML = computerWinCounter;
  document.getElementById("drawCounter").innerHTML = drawCounter;
  document.getElementById("thisRoundResult").innerHTML = thisRoundResult;

  if (playerWinCounter == 5) {
    document.getElementById("announceWinner").innerHTML = "PLAYER WON THE GAME";
  } else if (computerWinCounter == 5) {
    document.getElementById("announceWinner").innerHTML = "COMPUTER WON THE GAME";
  }
}

const e1 = document.getElementById("rockButton");
e1.addEventListener("click", function () {
  playerChoice = 1;
  playRound();
});

const e2 = document.getElementById("paperButton");
e2.addEventListener("click", function () {
  playerChoice = 2;
  playRound();
});

const e3 = document.getElementById("scissorsButton");
e3.addEventListener("click", function () {
  playerChoice = 3;
  playRound();
});
