// ==========================================
// Step 1: Global State & Greeting
// ==========================================
console.log("hello, shinobi, dattebayo!");

let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

// DOM Elements
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResultDisplay = document.querySelector("#round-result");

// ==========================================
// Step 2: Get Computer Choice
// ==========================================
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// ==========================================
// Step 3: Play a Single Round
// ==========================================
function playRound(humanChoice) {
    // If someone already reached 5 points, freeze the game
    if (humanScore >= winningScore || computerScore >= winningScore) {
        return;
    }

    const computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();

    // Shinobi Jutsu logs (keeping your console logs if you want them!)
    if (humanChoice === "rock") {
        console.log("Ninpo: Rokku no Jutsu!");
    } else if (humanChoice === "paper") {
        console.log("Ninpo: Kami no Jutsu!");
    } else if (humanChoice === "scissors") {
        console.log("Ninpo: Hasami no Jutsu!");
    } else {
        console.log("Ninpo: Mysterious unknown hand sign...?");
    }

    let message = "";

    // Tie condition
    if (humanChoice === computerChoice) {
        message = "An equilibrium of a battle, just like your current chakra flow! A bow for a worthy opponent. Next time, I will definitely win, dattebayo!";
    } 
    // Human winning conditions
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        message = `Thumbs up for your win! I admit defeat...for now. Your ${humanChoice} triumphs over ${computerChoice}!`;
    } 
    // Computer winning conditions
    else {
        computerScore++;
        message = `Too bad, you lost! The computer's ${computerChoice} defeats your ${humanChoice}. Do not give up! That is the road to become a shinobi!`;
    }

    // Update DOM elements on the webpage
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    roundResultDisplay.textContent = message;

    // Check for 5 points win condition
    if (humanScore === winningScore) {
        roundResultDisplay.textContent = `🎉 You reached 5 points first! Ultimate Victory! You are the new Hokage, dattebayo!`;
    } else if (computerScore === winningScore) {
        roundResultDisplay.textContent = `💀 The computer reached 5 points first. Defeat! Time to train harder at the waterfall!`;
    }
}

// ==========================================
// Step 4: Event Listeners for UI Buttons
// ==========================================
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});