let computerSelection;
let playerSelection;
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
}

function getPlayerChoice(){
  playerSelection = prompt("What do you pick?", "rock | paper | scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper" 
    || playerSelection === "rock" && computerSelection === "scissors"){
        return `You won!`;
    }

    else if(playerSelection === "rock" && computerSelection ==="paper" 
    || playerSelection === "scissors" && computerSelection === "rock"
    || playerSelection === "paper" && computerSelection === "scissors"){
        return `You lost!`;
    }

    else{
        return `It's a tie!`;
    }
};
