const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let Gamerun = 0;
let playerDecision = 0;
let computerDecision = 0;

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", function () {
  playerDecision = 1;
  GameStart();
});
paper.addEventListener("click", function () {
  playerDecision = 2;
  GameStart();
});
scissors.addEventListener("click", function () {
  playerDecision = 3;
  GameStart();
});

function Changeimage1() {
  const img = document.getElementById("P1");
  if (playerDecision == 1) {
    img.src = "./imgs/Rock.png";
  }
  if (playerDecision == 2) {
    img.src = "./imgs/Paper.png";
  }
  if (playerDecision == 3) {
    img.src = "./imgs/Scissors.png";
  }
}

function Changeimage2() {
  const img = document.getElementById("P2");
  if (computerDecision == 1) {
    img.src = "./imgs/Rock.png";
  }
  if (computerDecision == 2) {
    img.src = "./imgs/Paper.png";
  }
  if (computerDecision == 3) {
    img.src = "./imgs/Scissors.png";
  }
}

function GameStart() {
  let displayText = 0;
  const playerWinConditions =
    (playerDecision == 1 && computerDecision == 3) ||
    (playerDecision == 2 && computerDecision == 1) ||
    (playerDecision == 3 && computerDecision == 2);

  computerDecision = Math.floor(Math.random() * 3) + 1;

  if (
    (playerDecision == 1 && computerDecision == 3) ||
    (playerDecision == 2 && computerDecision == 1) ||
    (playerDecision == 3 && computerDecision == 2)
  ) {
    displayText = "Player Won!!";
    playerScore++;
  } else if (playerDecision == computerDecision) {
    displayText = "There was a Draw.";
  } else {
    displayText = "Computer Won!!";
    computerScore++;
  }
  Changeimage1();
  Changeimage2();

  document.getElementById(
    "playerScore"
  ).innerText = `Player Score: ${playerScore}`;
  document.getElementById(
    "computerScore"
  ).innerText = `Computer Score: ${computerScore}`;
  document.getElementById("displayText").innerText = displayText;
}
