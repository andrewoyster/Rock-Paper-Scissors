const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomComputerChoice = Math.floor(Math.random() * choices.length);
  return choices[randomComputerChoice];
}

function getHumanChoice() {
  const userInput = prompt("Select rock, paper, or scissors");
  return userInput;
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

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    alert("You won!");
  } else if (computerScore > humanScore) {
    alert("You lost!");
  } else {
    alert("You tied!");
  }
}

playGame();
