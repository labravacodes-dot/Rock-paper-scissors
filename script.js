// ==========================================
// Step 1: Global State & Greeting
// ==========================================
console.log("hello, shinobi, dattebayo!");

// 1. Grab audio element and control variables at the top of the file
const backgroundMusic = document.getElementById("bgm");
if (backgroundMusic) {
    backgroundMusic.volume = 0.3; // Set volume (30% is a nice background level)
}
let musicStarted = false;

let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

// DOM Elements
const humanScoreDisplay = document.querySelector("#human-score") || document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResultDisplay = document.querySelector("#round-result") || document.querySelector("#results");
const playerChoiceDisplay = document.querySelector("#player-choice-display");
const computerChoiceDisplay = document.querySelector("#computer-choice-display");

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
    // Start background music on the first move
    if (!musicStarted && backgroundMusic) {
        backgroundMusic.play().catch(error => console.log("Audio play error:", error));
        musicStarted = true;
    }

    // If someone already reached 5 points, freeze the game
    if (humanScore >= winningScore || computerScore >= winningScore) {
        return;
    }

    const computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();

    // Update Choice Displays in Battle Cards
    if (playerChoiceDisplay) playerChoiceDisplay.textContent = humanChoice;
    if (computerChoiceDisplay) computerChoiceDisplay.textContent = computerChoice;

    // Shinobi Jutsu logs
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
        message = `Too bad, you lost! Your Next Door Sparring Partner That Always Comes Back Asking For More's ${computerChoice} defeats your ${humanChoice}. Do not give up! That is the Road to Ninja! 🤌🥷`;
    }

    // Safely update DOM elements on the webpage
    if (humanScoreDisplay) humanScoreDisplay.textContent = humanScore;
    if (computerScoreDisplay) computerScoreDisplay.textContent = computerScore;
    if (roundResultDisplay) roundResultDisplay.textContent = message;

    // Check for 5 points win condition
    if (humanScore === winningScore) {
        if (roundResultDisplay) {
            roundResultDisplay.textContent = `🎉 Congrats. The Hokage wants to congratulate you, and invite you to ramen, dattebayo!`;
        }
    } else if (computerScore === winningScore) {
        if (roundResultDisplay) {
            roundResultDisplay.textContent = `🐸🦊 Your Next Door Sparring Partner That Always Comes Back Asking For More reached 5 points first! Defeat! Time to head to Mount Myoboku and the Falls of Truth to master Sage Mode—and grab a massive bowl of ramen at Ichiraku for Kurama to nap through!`;
        }
    }
}

// ==========================================
// Step 4: Event Listeners for UI Buttons
// ==========================================
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// ==========================================
// Step 5: Event Listeners for Background Music Toggle
// ==========================================

if (rockBtn) rockBtn.addEventListener("click", () => playRound("rock"));
if (paperBtn) paperBtn.addEventListener("click", () => playRound("paper"));
if (scissorsBtn) scissorsBtn.addEventListener("click", () => playRound("scissors"));
