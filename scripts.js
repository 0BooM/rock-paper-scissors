let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    switch(randomNumber){
        case 1:
          return computerSelection = "rock"
        case 2:
          return computerSelection = "paper"
        case 3:
          return computerSelection = "scissors";
    };
};

function getPlayerChoice(){
  playerSelection = prompt("What do you pick?", "rock | paper | scissors").toLowerCase();
};

function playRound(playerSelection, computerSelection){
  console.log(playerSelection);
    if(playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper" 
    || playerSelection === "rock" && computerSelection === "scissors"){
      resultDiv.textContent = `You won, your score is: ${++playerScore} Computer score is: ${computerScore}, Computer chose ${computerSelection}`;
    }

    else if(playerSelection === "rock" && computerSelection ==="paper" 
    || playerSelection === "scissors" && computerSelection === "rock"
    || playerSelection === "paper" && computerSelection === "scissors"){
      resultDiv.textContent = `You lost, your score is: ${playerScore} Computer score is: ${++computerScore}, Computer chose ${computerSelection}`;
    }

    else{
      resultDiv.textContent = `It's a tie, your score is: ${playerScore} Computer score is: ${computerScore}, Computer chose ${computerSelection}`;
    }
    if(playerScore == 5 || computerScore == 5)
    {
        if(playerScore == 5){
          winnerDiv.textContent = `Player won`;
        }
        else if( computerScore == 5){
          winnerDiv.textContent = `Computer won`;
        }
        disableButtons();
    };
  }

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

let resultDiv = document.querySelector("#result");
let winnerDiv = document.querySelector("#winner");


rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()))
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

function disableButtons(){
  rockBtn.disabled = true;
  paper.disabled = true;
  scissorsBtn.disabled = true;
}