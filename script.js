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
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
    }
}

function playGame() {
    while (true) {
        let playerSelection = prompt("Make a choice.");
        if (playerSelection == null) break;

        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
    }
}

playGame();