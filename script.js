let playerScore = 0;
let computerScore = 0;

function updateScore() {
    document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        updateScore();
        return "You win this round!";
    } else {
        computerScore++;
        updateScore();
        return "Computer wins this round!";
    }
}

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById("result").textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}
