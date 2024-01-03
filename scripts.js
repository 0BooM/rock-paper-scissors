let computerSelection;

function getComputerSelection(){
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    switch(randomNumber){
        case 1:
            computerSelection = "rock"
            break;
        case 2:
            computerSelection = "paper"
            break;
        case 3:
            computerSelection = "scissors";
    };
    return computerSelection;
}

getComputerSelection();
console.log(`Computer chose: ${computerSelection}`);

let playerSelection = prompt("What do you pick?", "rock | paper | scissors").toLowerCase();
console.log(`Player chose: ${playerSelection}`)
function playRound(playerSelection, computerSelection){

    if(playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper" 
    || playerSelection === "rock" && computerSelection === "scissors"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }

    else if(playerSelection === "rock" && computerSelection ==="paper" 
    || playerSelection === "scissors" && computerSelection === "rock"
    || playerSelection === "paper" && computerSelection === "scissors"){
        console.log(`You lose ${computerSelection} beats ${playerSelection}.`);
    }

    else{
        console.log(`It's a tie!`);
    }
};

playRound(playerSelection, computerSelection);