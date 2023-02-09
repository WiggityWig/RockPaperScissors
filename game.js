//Rock, Paper, Scissors Game

let playerScore = 0;
let compScore= 0;
let play;
let roundResult;
let gameResult;
const results = document.getElementById('results');
const game = document.getElementById('game-over');
const playerScr = document.getElementById('playerScr');
const computerScr = document.getElementById('computerScr');
const gameOver =  document.getElementById('game-over');
const restart = document.getElementById('restart');
const rock = document.querySelector('#rock');
const  paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

restart.addEventListener('click', () => {
    restartGame();
})
rock.addEventListener('click', () => {
    playRound("rock", randomNum());
});

paper.addEventListener('click', () => {
    playRound("paper", randomNum());
});

scissors.addEventListener('click', () => {
    playRound("scissors", randomNum());
});

function restartGame(){
    playerScr.textContent = "Player Score: 0";
    computerScr.textContent = "Computer Score 0"; 
    results.textContent = "Select a choice to start the next round!";
    gameOver.textContent = "";
    playerScore = 0;
    compScore = 0;
}
function updateGame() {
    if(playerScore ===5){
        gameOver.textContent = "Game Over! Player wins!"
    }
        else if (compScore === 5) {
            gameOver.textContent = "Game Over! Computer wins!"
        }
    playerScr.textContent = "Player Score: " + playerScore;
    computerScr.textContent = "Computer Score " + compScore;
    results.textContent =  roundResult;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }

function randomNum(){
    let x = Math.floor((Math.random() * 3)+1);
    let compChoice;
    switch (x) {
        case 1:
            compChoice = "rock";
            break;
        case 2:
            compChoice = "paper"
            break;
        case 3:
            compChoice = "scissors"
            break;
           }
           return compChoice;
}

function playerChoice (){
    let playerString = prompt("Rock, Paper, Scissors?");
    let choice = playerString.toLowerCase();
    return choice
}

function playRound(playerChoice,compChoice) { // Compares Parameters according to conditionals
    let x = playerChoice; //simply coding for conditionals later
    let y = compChoice; //simplify coding for conditionals later
    if (x == y) { // both computer and player select same value
        roundResult = (("It's a tie this round! You both chose " + x + "."));  
        }
        else if ( (x == "rock") && (y == "scissors") || (x == "paper") && (y == "rock") || (x == "scissors" ) && (y == "paper") )  { 
            playerScore ++;
            roundResult =  ("Player wins this round! " + capitalizeFirstLetter(x) + " beats " + y + ".");
             }
        else {
            compScore ++;
            roundResult = ("Computer wins this round! " + capitalizeFirstLetter(y) + " beats " + x + ".");
        }
        updateGame();
    }
