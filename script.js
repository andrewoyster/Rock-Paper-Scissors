const choices = ["rock", "paper", "scissors"];

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

function getComputerChoice() {
  const randomComputerChoice = Math.floor(Math.random() * choices.length);
  return choices[randomComputerChoice];
}

function playGame() {
  // Beginning Scores
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("You tied!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("The Human Wins");
      humanScore++;
    } else {
      console.log("Computer Wins");
      computerScore++;
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

playGame();
