const choices = ["rock", "paper", "scissors"];
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const score = document.querySelector(".score");

function getComputerChoice() {
  const randomComputerChoice = Math.floor(Math.random() * choices.length);
  return choices[randomComputerChoice];
}

function playGame() {
  // Beginning Scores
  let humanScore = 0;
  let computerScore = 0;
  let gameOver = false;

  function playRound(humanChoice, computerChoice) {
    if (gameOver) {
      return;
    }
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      results.innerHTML = "You Tied!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      results.innerHTML = "You Won!";
      humanScore++;
    } else {
      results.innerHTML = "The Computer Won!";
      computerScore++;
    }

    score.innerHTML = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
      results.innerHTML = "You Won the Game!";
      gameOver = true;
    } else if (computerScore === 5) {
      results.innerHTML = "The Computer Won the Game!!";
      gameOver = true;
    }
  }

  // Add button eventListeners and call function
  rockButton.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
  });

  paperButton.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
  });

  scissorsButton.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
  });
}

const results = document.querySelector(".results");

playGame();
