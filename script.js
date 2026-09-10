const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomComputerChoice = Math.floor(Math.random() * choices.length);
  return choices[randomComputerChoice];
}

function getHumanChoice() {
  const userInput = prompt("Select rock, paper, or scissors");
  return userInput;
}

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

playRound(getHumanChoice(), getComputerChoice());
