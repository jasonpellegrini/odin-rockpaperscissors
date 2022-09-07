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

/*function getPlayerChoice() {
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
}*/

function playRound(playerSelection, computerSelection) { 

    if (playerSelection === computerSelection) {

        document.getElementById("results").innerHTML = "It's a draw!";
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
                document.getElementById("results").innerHTML = "Player wins!";
        return 1;
    } else {
        document.getElementById("results").innerHTML = "Sorry, you lose!";
        return 2;
    }
}

function game(x, y) {
    y = getComputerChoice();
    if (playerPoints < 5 && computerPoints < 5){
        let result = playRound(x, y);
        if (result == 0) {
            document.getElementById("playerScore").innerHTML = playerPoints;
            return;
        } else if (result == 1) {
            playerPoints++;
            document.getElementById("playerScore").innerHTML = playerPoints;
            win();
            return;
        } else {
            computerPoints++;
            document.getElementById("cpuScore").innerHTML = computerPoints;
        win();
        return;
            }
    } else {
        return;
    } 
}

function win(){
    if (playerPoints === 5 || computerPoints === 5){

        if (playerPoints > computerPoints) {
            document.getElementById("finalScore").innerHTML = "Player wins!";
            return;
        } else (playerPoints < computerPoints) 
            document.getElementById("finalScore").innerHTML = "Sorry, you lose!";
            return;
        }
}

function main() {

        compAnswer = getComputerChoice();

        const rock = document.querySelector('#rock');
        rock.addEventListener('click', function(){game("rock", compAnswer); });

        const paper = document.querySelector('#paper');
        paper.addEventListener('click', function(){game("paper", compAnswer); });

        const scissors = document.querySelector('#scissors');
        scissors.addEventListener('click', function(){game("scissors", compAnswer); });

    if (playerPoints === 5 || computerPoints === 5){

        if (playerPoints > computerPoints) {
            document.getElementById("finalScore").innerHTML = "Player wins!";
        } else if (playerPoints < computerPoints) {
            document.getElementById("finalScore").innerHTML = "Sorry, you lose!";
        } else {
            document.getElementById("finalScore").innerHTML = "It's a draw!";
        }
    
    }
    
}

main();