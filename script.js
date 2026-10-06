// ==========================================
// Step 1: Project Setup & Greeting
// ==========================================
console.log("hello, shinobi, dattebayo!");

// ==========================================
// Step 2: Get Computer Choice
// ==========================================
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// ==========================================
// Step 3: Get Human Choice
// ==========================================
function getHumanChoice(choiceOverride) {
    if (choiceOverride) {
        return choiceOverride;
    }
    let choice = prompt("Enter your desired jutsu (rock, paper, or scissors):");
    return choice ? choice : "rock";
}

// ==========================================
// Step 6: Play the Full 5-Round Game Tournament
// ==========================================
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock") {
            console.log("Ninpo: Rokku no Jutsu!");
        } else if (humanChoice === "paper") {
            console.log("Ninpo: Kami no Jutsu!");
        } else if (humanChoice === "scissors") {
            console.log("Ninpo: Hasami no Jutsu!");
        } else {
            console.log("Ninpo: Mysterious unknown hand sign...?");
        }

        // Tie condition with chakra narrative
        if (humanChoice === computerChoice) {
            console.log("An equilibrium of a battle, just like your current chakra flow! A bow for a worthy opponent. I will be looking forwards to a rematch. Next time, I will definitely win, dattebayo!");
        } 
        // Human winning conditions with your custom rivalry flair
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`Thumbs up for your win! I admit defeat...for now. Your ${humanChoice} triumphs over ${computerChoice}! I will definitely win next time, dattebayo. (Score - You: ${humanScore} | Bot: ${computerScore})`);
        } 
        // Computer winning conditions with your custom encouragement flair
        else {
            computerScore++;
            console.log(`Too bad, you lost! The computer's ${computerChoice} defeats your ${humanChoice}. Hopefully you will do better next time. Do not give up! That is the road to become a shinobi! (Score - You: ${humanScore} | Bot: ${computerScore})`);
        }
    }

    // Play 5 rounds using a loop
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round} of 5 ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Tournament Results
    console.log("\n==========================================");
    console.log("         FINAL TOURNAMENT RESULTS          ");
    console.log("==========================================");
    console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Victory! The Hokage is proud of you! You have been awarded your headband and are now a true shinobi!");
    } else if (computerScore > humanScore) {
        console.log("Defeat... Time to head to the secluded waterfall to train under harsh conditions, commune with your inner self, and unlock Sage Mode!");
    } else {
        console.log("An equilibrium of a battle, just like your current chakra flow! A bow for a worthy opponent. I will be looking forwards to a rematch. Next time, I will definitely win, dattebayo!");
    }
}

// ==========================================
// Execution: Start the Tournament
// ==========================================
playGame();