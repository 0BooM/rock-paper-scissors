let computerSelection;

function getComputerSelection(){
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    console.log(randomNumber);

    switch(randomNumber){
        case 1:
            computerSelection = "rock"
            break;
        case 2:
            computerSelection = "paper"
            break;
        case 3:
            computerSelection = "scissors";
            break;
    };
    console.log(computerSelection);
}
getComputerSelection();

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("What do you pick?", "rock | paper | scissors").toLowerCase();
    console.log(playerSelection);

    switch(playerSelection, computerSelection){
        case playerSelection === "rock" && computerSelection === "paper":
            console.log("You lose! Paper beats Rock");
    }
};

playRound();