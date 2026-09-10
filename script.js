const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomPCChoice = Math.floor(Math.random() * choices.length);
  return choices[randomPCChoice];
}

function getHumanChoice() {
  const userInput = prompt("Select rock, paper, or scissors");
  return userInput;
}

console.log(getPlayerChoice());
