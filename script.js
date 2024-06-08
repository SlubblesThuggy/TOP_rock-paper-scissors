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

function playRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const computerChoice = getComputerChoice();

    let result;

    if (playerChoice === computerChoice) {
        result = "It was a tie.";
    } else if (
        playerChoice === "rock" && computerChoice === "scissors"
     || playerChoice === "paper" && computerChoice === "rock"
     || playerChoice === "scissors" && computerChoice === "paper"
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    console.log(result);
}

const selectRockButton = document.querySelector("#select-rock");
const selectPaperButton = document.querySelector("#select-paper");
const selectScissorsButton = document.querySelector("#select-scissors");

selectRockButton.addEventListener("click", () => playRound("rock"));
selectPaperButton.addEventListener("click", () => playRound("paper"));
selectScissorsButton.addEventListener("click", () => playRound("scissors"));