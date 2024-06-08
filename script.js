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

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();

    let result;

    if (playerChoice === computerChoice) {
        result = "It was a tie.";
    } else if (
        playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "scissors" && computerChoice === "paper"
    ) {
        result = "You win!";
        playerScore += 1;
    } else {
        result = "You lose!";
        computerScore += 1;
    }

    roundResultText.textContent = `You chose ${playerChoice}\nThe computer chose ${computerChoice}\n${result}\n\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;

    if (playerScore >= 5) {
        winnerAnnouncementText.textContent = "Player wins! Scores will now be reset.";
        resetScores();
    } else if (computerScore >= 5) {
        winnerAnnouncementText.textContent = "Computer wins! Scores will now be reset.";
        resetScores();
    }
}

const selectRockButton = document.querySelector("#select-rock");
const selectPaperButton = document.querySelector("#select-paper");
const selectScissorsButton = document.querySelector("#select-scissors");

const roundResultText = document.querySelector("#round-result");
const winnerAnnouncementText = document.querySelector("#winner-announcement");

let playerScore = 0;
let computerScore = 0;

selectRockButton.addEventListener("click", () => playRound("rock"));
selectPaperButton.addEventListener("click", () => playRound("paper"));
selectScissorsButton.addEventListener("click", () => playRound("scissors"));