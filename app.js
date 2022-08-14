let compAnswer;
let userAnswer;
let playerPoints  = 0;
let computerPoints = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let answer;

    if (computerChoice === 0) {
        answer = "rock";
        return answer;
        
    } else if (computerChoice === 1) {
        answer = "paper";
        return answer;
        
    } else {
        answer = "scissors";
        return answer;
    }
}

function getPlayerChoice() {
    let playerChoice = "hi";
    let bool = false;
    do {
       playerChoice = prompt("Rock, paper, or scissors?");
        playerChoice = playerChoice.toLowerCase();


        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            bool = true;
        } else {
            alert("Invalid answer.");
            bool = false;
        } 
    } while (bool === false);
    console.log("Player picked: " + playerChoice);
    return playerChoice; 
}

function playRound(playerSelection, computerSelection) { 

    if (playerSelection === computerSelection) {
        console.log("Draw!");
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("Player wins this round!");
        return 1;
    } else {
        console.log("Computer wins this round! (" + computerSelection + ")");
        return 2;
    }
}

function game() {
     let result = playRound(userAnswer, compAnswer);
     if (result == 0) {
         console.log("Player: " + playerPoints + " Computer: " + computerPoints);
     } else if (result == 1) {
         playerPoints++;
         console.log("Player: " + playerPoints + " Computer: " + computerPoints);
     } else {
        computerPoints++;
        console.log("Player: " + playerPoints + " Computer: " + computerPoints);
        }
}

function main() {
    for (let i = 0; i < 5; i++) {
        compAnswer = getComputerChoice();
        userAnswer = getPlayerChoice();
        game();
    }
    if (playerPoints > computerPoints) {
        console.log("Congratulations! You win.");
    } else if (playerPoints < computerPoints) {
        console.log("Sorry, you lose!");
    } else {
        console.log("It's a draw!");
    }
}