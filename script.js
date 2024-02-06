function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It was a tie.";
    } else if (
        playerSelection === "rock" && computerSelection === "scissors"
     || playerSelection === "paper" && computerSelection === "rock"
     || playerSelection === "scissors" && computerSelection === "paper"
    ) {
        return "Player won.";
    } else {
        return "Computer won.";
    }
}

let playerSelection = prompt("Make a choice.");
let computerSelection = getComputerChoice();

let roundResult = playRound(playerSelection, computerSelection);

console.log(
`ROUND RESULT

player choice: ${playerSelection}
computer choice: ${computerSelection}

${roundResult}`
);