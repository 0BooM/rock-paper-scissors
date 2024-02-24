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
};

function getPlayerChoice(){
  playerSelection = prompt("What do you pick?", "rock | paper | scissors").toLowerCase();
};

function playRound(playerSelection, computerSelection){
    if(playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper" 
    || playerSelection === "rock" && computerSelection === "scissors"){
      console.log(`Your score is: ${++playerScore}`);
        return `You won!`;
    }

    else if(playerSelection === "rock" && computerSelection ==="paper" 
    || playerSelection === "scissors" && computerSelection === "rock"
    || playerSelection === "paper" && computerSelection === "scissors"){
      console.log(`Computer score is: ${++computerScore}`);
        return `You lost!`;
    }

    else{
        return `It's a tie!`;
    }
};

// function game(){
//   for(let i = 0; i < 5; i++){
//     getComputerChoice();
//     console.log(computerSelection);
//     getPlayerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }

//   console.log(`Player score is: ${playerScore} \nComputer score is: ${computerScore}`)

//   if(playerScore > computerScore){
//     console.log(`Player wins!`);
//   }
//   else if(playerScore < computerScore){
//     console.log(`Computer wins!`);
//   }
//   else{
//     console.log(`It's a tie! Do you want to try again?`);
//   }
// }

// game();